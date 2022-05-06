const {
  ggb1,
  feedback,
  cc_submit_4dedbd094577_textbox1: submitText1,
  cc_submit_4dedbd094577_input1: submitInput1,
  cc_submit_4dedbd094577_button1: submitButton1,
  separator2,
  text1,
  select1,
  fib1,
  fib2,
  fib3,
  fib4,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
  ggb1.instance.setValue("highlight1", true);
  ggb1.instance.showToolBar(false);
  // shareText1.updateData({ visible: false });
  // shareInput1.updateData({ visible: false });
  // shareButton1.updateData({ visible: false });
  text1.updateData({ visible: false });
  ggb1.instance.setColor("visPLine", 160, 160, 160);
  ggb1.instance.setLineStyle("visPLine", 2);
  select1.selectOption("0");
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  select1.setVisible(false);
  button1.updateData({ visible: false });
});

function toGGB() {
  let inputFuncs = ggb1.instance
    .getAllObjectNames()
    .filter((obj) => ggb1.instance.getCaption(obj) === "newFunc");
  for (let i = 0, L = inputFuncs.length; i < L; i++) {
    ggb1.instance.deleteObject(inputFuncs[i]);
  }
  const plainText = undoLaTeX(submitInput1.data.text);
  let pattern = /(f\(t\)|y)=(.*)/;
  if (!pattern.test(plainText)) {
    return false;
  }
  const GGBready = plainText.replaceAll("t", "x");
  ggb1.instance.setErrorDialogsActive(false);
  let madeDummy = ggb1.instance.evalCommand(`dummy: ${GGBready}`);
  let madeLine = ggb1.instance.getObjectType("dummy") == "line";
  ggb1.instance.deleteObject("dummy");
  if (!madeDummy || !madeLine) {
    return false;
  }
  let vals = getFibs();
  let newFunc;
  if (!vals.length) {
    newFunc = ggb1.instance.evalCommandGetLabels(GGBready);
  } else {
    let GGBexp = GGBready.match(pattern);
    let ineqOptions = [
      ["<", "<"],
      ["<=", "<"],
      ["<", "<="],
      ["<=", "<="],
    ];
    let ineqChosen = ineqOptions[select1.data.selected[0]];
    let domainString = `If(${vals[0]} ${ineqChosen[0]} x ${ineqChosen[1]} ${vals[1]}, ${GGBexp[2]})`;
    newFunc = ggb1.instance.evalCommandGetLabels(domainString);
    text1.updateData({ domainString });
  }
  ggb1.instance.setCaption(newFunc, "newFunc");
  ggb1.instance.setFixed(newFunc, false, false);
  ggb1.instance.setColor(newFunc, 0, 0, 0);
  return true;
}

submitButton1.on("click", () => {
  text1.updateData({ visible: true, showFIBs: true });
  select1.setVisible(true);
  button1.updateData({ visible: true });
  showFibs(select1.data.selected);
  toGGB();
  // if (submitInput1.data.text.includes("x")) {
  //   return;
  // }
  // if (!toGGB()) {
  //   return;
  // }
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib2.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib3.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib4.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

function fillFibs(values, fibComp) {
  const textVals = values.map(({ text }) => text);
  const fibs = [fib1, fib2, fib3, fib4];
  fibs.splice(fibs.indexOf(fibComp), 1);
  for (let j = 0, K = fibs.length; j < K; j++) {
    for (let i = 0, L = textVals.length; i < L; i++) {
      fibs[j].updateInput(i, { text: textVals[i] });
    }
  }
}

function showFibs(selected) {
  const fibs = [fib1, fib2, fib3, fib4];
  for (let i = 0, L = fibs.length; i < L; i++) {
    fibs[i].setVisible(selected.includes(`${i}`) && text1.data.showFIBs);
  }
}

select1.on("change", ({ selected }) => {
  const fibs = [fib1, fib2, fib3, fib4];
  const oldFibs = fibs.filter((fib) => fib.data.visible);
  if (!oldFibs.length) {
    return;
  }
  const oldVals = oldFibs[0].data.values;
  fillFibs(oldVals, oldFibs[0]);
  showFibs(selected);
});

function getFibs() {
  const fibs = [fib1, fib2, fib3, fib4];
  const visFibs = fibs.filter((fib) => fib.data.visible);
  if (!visFibs.length) {
    return [];
  }
  const fibVals = visFibs[0].data.values.map(({ text }) => text);
  const allowedParams = ["t"];
  if (fibVals.length != 3 || !allowedParams.includes(fibVals[1])) {
    return [];
  }
  const result0 = utils.math.evaluateLatex(fibVals[0]);
  const result2 = utils.math.evaluateLatex(fibVals[2]);
  if (result0.error || result2.error || !(result0.value < result2.value)) {
    return [];
  }
  return [result0.value, result2.value];
}

button1.on("click", () => {
  let vals = getFibs();
  if (!vals.length) {
    return;
  }
  if (!toGGB()) {
    return;
  }
  button1.updateData({ text: "Submitted", disabled: true });
});

function undoLaTeX(inp) {
  let frac = inp.replace(/\\frac{/, "(");
  let fracMid = frac.replace(/\}\{/, ")/(");
  let leftParen = fracMid.replace(/\\left/g, "");
  let rightParen = leftParen.replace(/\\right/g, "");
  let absLeft = rightParen.replace(/\|/, "abs(");
  let absRight = absLeft.replace(/\|/, ")");
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");
  let brackRight = cbrtLeft.replace(/\}/g, ")");
  let brackLeft = brackRight.replace(/\{/g, "(");
  let lessThan = brackLeft.replace(/\\le/g, "<=");
  let greaterThan = lessThan.replace(/\\ge/g, ">=");
  let cDot = greaterThan.replace(/\\cdot/g, "*");
  let finalAnswer = cDot;
  return finalAnswer;
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"select":1,"fillblank":4,"button":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"two col"}
*/
