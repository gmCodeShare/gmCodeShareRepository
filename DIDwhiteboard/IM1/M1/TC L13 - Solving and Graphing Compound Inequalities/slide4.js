const { ggb1, text1, input1, button1, text2, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ align: "right" });
  select1.setVisible(false);
  text1.updateData({ remaining: 4 });
  ggb1.updateData({ plotted: [] });
  let allPoints = ggb1.instance.getAllObjectNames("point");
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.setVisible(allPoints[i], false);
  }
  ggb1.instance.setVisible("bin", false);
  ggb1.instance.setVisible("visText", true);
  ggb1.instance.setTextValue("baseText", "-5<2x+1<4");
});

autorun(() => {
  if (input1.data.text != input1.data.last && text1.data.remaining) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    text2.updateData({ text: "" });
    select1.setVisible(false);
    input1.updateData({ last: input1.data.text });
  }
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.error || text1.data.remaining === 0) {
    return;
  }
  button1.updateData({ text: "Submitted", disabled: true });
  text2.updateData({ text: "Checking your number..." });
  utils.RTS.sendData("slide-4d0ec089bf0b-unique", {
    xVal: result.value,
  });
});

utils.RTS.on("datachange", "slide-4d0ec089bf0b-unique", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length || text1.data.remaining === 0) {
    return;
  }

  // const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  let myEntry = register.filter(({ info }) => info.isSelf);
  if (!myEntry || !myEntry.length) {
    return;
  }
  let myVal = myEntry[myEntry.length - 1].data.xVal;
  let matchingEntries = register
    .filter(({ data }) => data.xVal == myVal)
    .map(({ data, info }) => ({ xVal: data.xVal, isSelf: info.isSelf }));
  if (matchingEntries.length > 1 && !matchingEntries[0].isSelf) {
    text2.updateData({
      text: "Someone already chose that number! Try a different number.",
    });
    return;
  }
  let myMatchingEntries = matchingEntries.filter(({ isSelf }) => isSelf);
  if (myMatchingEntries.length > 1) {
    text2.updateData({
      text: "You already tried that number! Try a different number.",
    });
    return;
  }
  let rightSide = 2 * myVal + 1;
  if (
    rightSide.toString().length > input1.data.text.length &&
    input1.data.text.length
  ) {
    rightSide = rightSide.toFixed(input1.data.text.length - 1);
  }
  text2.updateData({
    text: `You chose a unique number! \n\n For $x=${myVal}$, $2(${myVal})+1 = ${rightSide}$ \n\n Is $-5<${rightSide}$ and is $${rightSide}<4$?`,
  });
  select1.unselectAll();
  select1.setVisible(true);
  let newPoint = ggb1.instance.evalCommandGetLabels(`(${myVal}, 0)`);
  ggb1.instance.setFixed(newPoint, false, false);
  ggb1.instance.setVisible(newPoint, false);
});

select1.on("change", ({ selected }) => {
  if (!selected.length) {
    return;
  }
  const allPoints = ggb1.instance.getAllObjectNames("point");
  let latestPoint = allPoints[allPoints.length - 1];
  let x = ggb1.instance.getXcoord(latestPoint);
  let encourageText = "";
  let numLeft = text1.data.remaining;
  // true chosen:
  if (selected.includes("0")) {
    if (x > -3 && x < 1.5) {
      ggb1.instance.setPointSize(latestPoint, 5);
      ggb1.instance.setVisible(latestPoint, true);
      encourageText = "Great! ";
      numLeft--;
      let plottedSoFar = [...ggb1.data.plotted];
      plottedSoFar.push(x);
      ggb1.updateData({ plotted: [...plottedSoFar] });
      utils.RTS.sendData("slide-4d0ec089bf0b", {
        xVals: [...ggb1.data.plotted],
      });
    } else {
      let newEx = ggb1.instance.evalCommandGetLabels(
        `Translate(ex, Vector(ExCenter, ${latestPoint}))`
      );
      ggb1.instance.setFixed(newEx, false, false);
    }
  }
  let moreText = " more ";
  let valuesText = "values ";
  switch (numLeft) {
    case 4:
      moreText = " ";
      break;
    case 1:
      valuesText = "value ";
      break;
    case 0:
      text1.updateData({ remaining: numLeft, text: "Great!" });
  }
  if (numLeft > 0) {
    text1.updateData({
      remaining: numLeft,
      text:
        encourageText +
        `Now find $${numLeft}$${moreText}$x$-${valuesText} that make the inequality true.`,
    });
  }
  text2.updateData({ text: "" });
  select1.unselectAll();
  select1.setVisible(false);
});

// use this function as is
function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}
