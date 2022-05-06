const { ggb1, text1, button1, fib1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  ggb1.instance.setValue("showSquares", true);
  ggb1.instance.setValue("showBestLine", true);
  ggb1.instance.setColor("fakeBestFit", 0, 127, 175);
  ggb1.instance.setColor("shortenedLine", 0, 127, 175);
  ggb1.instance.setValue("showRes", false);
  ggb1.instance.setValue("showPoints", false);
  ggb1.instance.setValue("showSegments", false);
  // save status
  saveData({ initialized: true });
}

function updateText() {
  let num = Math.round(ggb1.instance.getValue("slope") * 100) / 100;
  let num2 = Math.round(ggb1.instance.getValue("yInt") * 100) / 100;

  text1.updateData({
    text: `You can use technology to find an equation of the line of best fit.\n\nAn equation of the line of best fit for the class data is\n\n$y = ${num}x + ${num2}$\n\nUse the equation to predict the ticket price of a flight that has a distance of $1600$ miles.`,
  });
}

updateText();

utils.RTS.on("datachange", "slide-eb89dc46e780", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
  updateText();
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(fib1.getInput(0).text);
  if (!result.error) {
    button1.updateData({ text: "Submitted", disabled: true });
    ggb1.instance.evalLaTeX(`slide10Val= ${result.value}`);
    ggb1.instance.setVisible("Slide10Point", true);
  }
});

utils.RTS.on("datachange", "slide-290b837ee12a", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("data={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );
    // move this to helper function if convenient
    text1.updateData({
      text: `You can use technology to find the equation of the line of best fit.\n\nAn equation of the line of best fit for the class data is\n\n$y = ${num}x + ${num2}$\n\nUse the equation to predict the ticket price of a flight that is $1600$ miles.`,
    });

    if (ggb1.instance.getValue("maxX") > 2700) {
      ggb1.instance.setValue("xMax", ggb1.instance.getValue("maxX") + 500);
    } else {
      ggb1.instance.setValue("xMax", 2700);
    }
    if (ggb1.instance.getValue("maxY") > 430) {
      ggb1.instance.setValue("yMax", ggb1.instance.getValue("maxY") + 500);
    } else {
      ggb1.instance.setValue("yMax", 430);
    }
  });
  updateText();
});

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

// library

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
