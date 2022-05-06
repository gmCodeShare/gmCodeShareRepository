const {
  ggb1,
  separator1,
  buttonGroup2,
  feedback1,
  text2,
  buttonGroup1,
  table1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let toolsArray = [
  "LeftPoint",
  "RightPoint",
  "line",
  "T",
  "U",
  "V",
  "W",
  "eq1",
  "eq2",
  "eq3",
  "eq4",
  "eq5",
  "eq6",
  "oval",
  "text1",
  "text2",
];

let splatArray = [
  "blueSplat'",
  "redSplat'",
  "greenSplat'",
  "purpleSplat'",
  "yellowSplat'",
];

let ballArray = [
  "blueBal1",
  "redBal1",
  "greenBal1",
  "purpleBal1",
  "yellowBal1",
];

let ballLaunchArray = [
  "blueBalLaunch",
  "redBalLaunch",
  "greenBalLaunch",
  "purpleBalLaunch",
  "yellowBalLaunch",
];

slide.on("firstload", () => {
  for (var i = 0, J = splatArray.length; i < J; i++) {
    ggb1.instance.setVisible(splatArray[i], false);
  }
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setVisible("cataplutBase'", false);
  ggb1.instance.setVisible("arm'", false);
  ggb1.instance.setVisible("blueBalCat'", false);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setValue("balloonDilation2", 0.77);
  ggb1.instance.setVisible("redBalCat'", false);
  ggb1.instance.setVisible("greenBalCat'", false);
  ggb1.instance.setVisible("purpleBalCat'", false);
  ggb1.instance.setVisible("yellowBalCat'", false);
  ggb1.instance.setVisible("balloonDilation", false);
  for (var i = 0, J = ballLaunchArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballLaunchArray[i], false);
  }
  for (var i = 0, J = toolsArray.length; i < J; i++) {
    ggb1.instance.setVisible(toolsArray[i], false);
  }
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 3);
  button1.updateData({ align: "right" });
});

utils.RTS.on("datachange", "slide-62797c462e04", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    table1.updateHeader(1, { editable: false, value: data.text1x });
    table1.updateHeader(2, { editable: false, value: data.text2y });
  });
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

buttonGroup1.on("click:1", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setVisible("blueBal1", true);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setValue("blue", true);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  for (var i = 0, J = splatArray.length; i < J; i++) {
    ggb1.instance.setVisible(splatArray[i], false);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  for (var i = 0, J = ballLaunchArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballLaunchArray[i], false);
  }
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setVisible("redBal1", true);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", true);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("balloonDilation", true);
  for (var i = 0, J = splatArray.length; i < J; i++) {
    ggb1.instance.setVisible(splatArray[i], false);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  for (var i = 0, J = ballLaunchArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballLaunchArray[i], false);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});
buttonGroup1.on("click:3", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setVisible("greenBal1", true);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", true);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setVisible("balloonDilation", true);
  for (var i = 0, J = splatArray.length; i < J; i++) {
    ggb1.instance.setVisible(splatArray[i], false);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  for (var i = 0, J = ballLaunchArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballLaunchArray[i], false);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});
buttonGroup1.on("click:4", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setVisible("purpleBal1", true);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", true);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("faucet'", true);
  for (var i = 0, J = splatArray.length; i < J; i++) {
    ggb1.instance.setVisible(splatArray[i], false);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  for (var i = 0, J = ballLaunchArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballLaunchArray[i], false);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});
buttonGroup1.on("click:5", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setVisible("yellowBal1", true);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("faucet'", true);
  for (var i = 0, J = splatArray.length; i < J; i++) {
    ggb1.instance.setVisible(splatArray[i], false);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  for (var i = 0, J = ballLaunchArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballLaunchArray[i], false);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});

ggb1.instance.registerObjectUpdateListener("balloonDilation", updateRight);

function updateRight() {
  if (ggb1.instance.getValue("balloonDilation") > 0.1) {
    buttonGroup2.updateSingleButton({ disabled: false }, 1);
  }
}

count = 0;

buttonGroup2.on("click:1", () => {
  count += 1;
  ggb1.instance.setVisible("balloonDilation", false);
  ggb1.instance.setVisible("faucet'", false);
  for (var i = 0, J = ballArray.length; i < J; i++) {
    ggb1.instance.setVisible(ballArray[i], false);
  }
  ggb1.instance.setValue(
    "balloonDilation2",
    ggb1.instance.getValue("balloonDilation")
  );
  if (ggb1.instance.getValue("blue") == true) {
    ggb1.instance.setVisible("blueBalLaunch", true);
  }
  if (ggb1.instance.getValue("red") == true) {
    ggb1.instance.setVisible("redBalLaunch", true);
  }
  if (ggb1.instance.getValue("green") == true) {
    ggb1.instance.setVisible("greenBalLaunch", true);
  }
  if (ggb1.instance.getValue("purple") == true) {
    ggb1.instance.setVisible("purpleBalLaunch", true);
  }
  if (ggb1.instance.getValue("yellow") == true) {
    ggb1.instance.setVisible("yellowBalLaunch", true);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setAnimating("balloonDilation2", true);
  ggb1.instance.startAnimation();
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
});

ggb1.instance.registerObjectUpdateListener("time2", update2);

function update2() {
  if (ggb1.instance.getValue("time2") >= 0.86) {
    if (ggb1.instance.getValue("blue") == true) {
      ggb1.instance.setVisible("blueBalLaunch", false);
      ggb1.instance.setValue(
        "blueSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("blueSplat'", true);
    }
    if (ggb1.instance.getValue("red") == true) {
      ggb1.instance.setVisible("redBalLaunch", false);
      ggb1.instance.setValue(
        "redSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("redSplat'", true);
    }
    if (ggb1.instance.getValue("green") == true) {
      ggb1.instance.setVisible("greenBalLaunch", false);
      ggb1.instance.setValue(
        "greenSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("greenSplat'", true);
    }
    if (ggb1.instance.getValue("purple") == true) {
      ggb1.instance.setVisible("purpleBalLaunch", false);
      ggb1.instance.setValue(
        "purpleSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("purpleSplat'", true);
    }
    if (ggb1.instance.getValue("yellow") == true) {
      ggb1.instance.setVisible("yellowBalLaunch", false);
      ggb1.instance.setValue(
        "yellowSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("yellowSplat'", true);
    }
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
    buttonGroup1.updateSingleButton({ disabled: false }, 5);
  }
}

buttonGroup2.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 3);
  for (var i = 0, J = toolsArray.length; i < J; i++) {
    ggb1.instance.setVisible(toolsArray[i], true);
  }
});

buttonGroup2.on("click:3", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 3);
  for (var i = 0, J = toolsArray.length; i < J; i++) {
    ggb1.instance.setVisible(toolsArray[i], false);
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true, text: "Submitted" });

  let num = table1.getCell(0, 1).value;
  let num2 = table1.getCell(0, 2).value;
  let num3 = table1.getCell(1, 1).value;
  let num4 = table1.getCell(1, 2).value;
  let num5 = table1.getCell(2, 1).value;
  let num6 = table1.getCell(2, 2).value;
  let num7 = table1.getCell(3, 1).value;
  let num8 = table1.getCell(3, 2).value;
  let num9 = table1.getCell(4, 1).value;
  let num10 = table1.getCell(4, 2).value;

  const min = 0;
  const max = 50;

  num = boundIt(num, 0, 1, min, max);
  num2 = boundIt(num2, 0, 2, min, max);
  num3 = boundIt(num3, 1, 1, min, max);
  num4 = boundIt(num4, 1, 2, min, max);
  num5 = boundIt(num5, 2, 1, min, max);
  num6 = boundIt(num6, 2, 2, min, max);
  num7 = boundIt(num7, 3, 1, min, max);
  num8 = boundIt(num8, 3, 2, min, max);
  num9 = boundIt(num9, 4, 1, min, max);
  num10 = boundIt(num10, 4, 2, min, max);

  utils.RTS.sendData("slide-fa863e2a26e0", {
    num,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
    num10,
  });
});

function boundIt(inp, row, column, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.value < 0 || result.value > 70 || result.error) {
    table1.updateCell(row, column, { value: `` });
    return ``;
  }
  return result.value;
}

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":2,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Analyzing Paint Splatters","teacherView":false,"layout":"two col"}
*/
