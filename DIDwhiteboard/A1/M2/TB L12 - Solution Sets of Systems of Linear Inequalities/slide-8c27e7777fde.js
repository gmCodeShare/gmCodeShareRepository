const {
  text1,
  text2,
  ggb1,
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19,
  button20,
  button21,
  button22,
  button23,
  button24,
  button25,
  button26,
  button27,
  button28,
  button29,
  button30,
  button31,
  button32,
  button33,
  button34,
  button35,
  button36,
  button37,
  button38,
  button39,
  button40,
  button41,
  button42,
  button43,
  button44,
  button45,
  button46,
  button47,
  button48,
  button49,
  text3,
  text4,
  input1,
  input2,
  text5,
  buttonGroup1,
  text6,
  button50,
  button51,
  button52,
  button53,
  button54,
  button55,
  button56,
  button57,
  button58,
  button59,
  button60,
  button61,
  button62,
  button63,
  button64,
  button65,
  button66,
  button67,
  button68,
  button69,
  button70,
  button71,
  button72,
  button73,
  button74,
  button75,
  button76,
  button77,
  button78,
  button79,
  button80,
  button81,
  button82,
  button83,
  button84,
  button85,
  button86,
  button87,
  button88,
  button89,
  button90,
  button91,
  button92,
  button93,
  button94,
  button95,
  button96,
  button97,
  button98,
  button99,
} = components;

const leftSideButtons = [
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19,
  button20,
  button21,
  button22,
  button23,
  button24,
  button25,
  button26,
  button27,
  button28,
  button29,
  button30,
  button31,
  button32,
  button33,
  button34,
  button35,
  button36,
  button37,
  button38,
  button39,
  button40,
  button41,
  button42,
  button43,
  button44,
  button45,
  button46,
  button47,
  button48,
  button49,
];

const rightSideButtons = [
  button50,
  button51,
  button52,
  button53,
  button54,
  button55,
  button56,
  button57,
  button58,
  button59,
  button60,
  button61,
  button62,
  button63,
  button64,
  button65,
  button66,
  button67,
  button68,
  button69,
  button70,
  button71,
  button72,
  button73,
  button74,
  button75,
  button76,
  button77,
  button78,
  button79,
  button80,
  button81,
  button82,
  button83,
  button84,
  button85,
  button86,
  button87,
  button88,
  button89,
  button90,
  button91,
  button92,
  button93,
  button94,
  button95,
  button96,
  button97,
  button98,
  button99,
];

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerClientListener(clientFunction);
ggb1.instance.registerObjectUpdateListener("P1A", movedPoints);
ggb1.instance.registerObjectUpdateListener("P1B", movedPoints);
ggb1.instance.registerObjectUpdateListener("P2A", movedPoints);
ggb1.instance.registerObjectUpdateListener("P2B", movedPoints);

let inequalityGroup1 = [
  "P1A",
  "P1B",
  "inequality1LessGreaterToggle",
  "inequality1EqualNotEqualToggle",
];
let inequalityGroup2 = [
  "P2A",
  "P2B",
  "inequality2LessGreaterToggle",
  "inequality2EqualNotEqualToggle",
];

let noFill = 0;
let subtleFill = 0.1;
let normalFill = 0.25;

let subtleLineThickness = 3;
let normalLineThickness = 5;

let subtlePointSize = 4;
let normalPointSize = 5;

onInit();

function onInit() {
  if (!text1.data.init) {
    // set initial states
    for (let i = 0, L = leftSideButtons.length; i < L; i++) {
      leftSideButtons[i].updateData({ visible: false });
    }
    for (let i = 0, L = rightSideButtons.length; i < L; i++) {
      rightSideButtons[i].updateData({ visible: false });
    }

    input1.updateData({ visible: false });
    input2.updateData({ visible: false });

    text1.updateData({
      leftSideData: [],
      rightSideData: [],
      lastTimestamp: 0,
      inChallenge: false,
      currentSide: "",
    });

    ggb1.updateData({ visible: false });
    ggb1.instance.setValue("showFrog", true);
    ggb1.instance.setValue("showCheese1", true);
    ggb1.instance.setValue("showCheese2", true);
    ggb1.instance.setValue("showCheese3", true);
    ggb1.instance.setFixed("frogSVG", true, false);
    ggb1.instance.setFixed("cheese1SVG", true, false);
    ggb1.instance.setFixed("cheese2SVG", true, false);
    ggb1.instance.setFixed("cheese3SVG", true, false);
    ggb1.instance.setLineThickness("inequality1", normalLineThickness);
    ggb1.instance.setLineThickness("inequality2", normalLineThickness);
    ggb1.instance.setFilling("haloP1A", normalFill);
    ggb1.instance.setFilling("haloP1B", normalFill);
    ggb1.instance.setFilling("haloP2A", normalFill);
    ggb1.instance.setFilling("haloP2B", normalFill);
    ggb1.instance.setPointSize("P1A", normalPointSize);
    ggb1.instance.setPointSize("P1B", normalPointSize);
    ggb1.instance.setPointSize("P2A", normalPointSize);
    ggb1.instance.setPointSize("P2B", normalPointSize);
    ggb1.instance.setFixed("P1A", false, true);
    ggb1.instance.setFixed("P1B", false, true);
    ggb1.instance.setFixed("P2A", false, true);
    ggb1.instance.setFixed("P2B", false, true);
    ggb1.instance.setPointCapture(1, 2);

    buttonGroup1.updateData({ visible: false });
    buttonGroup1.updateSingleButton(
      {
        outline: true,
      },
      2
    );

    text1.updateData({ init: true });
  }
}

function clientFunction(a) {
  switch (a.type) {
    case "deselect":
      ggb1.instance.setValue("inequalityGroup1Selected", false);
      ggb1.instance.setValue("inequalityGroup2Selected", false);
      break;
    case "select":
      if (inequalityGroup1.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup1Selected", true);
      } else if (inequalityGroup2.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup2Selected", true);
      }
  }
}

//the magic... update buttons as data comes in to the RTS
utils.RTS.on("datachange", "slide-8086146665c9", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const filteredRegister = filterOldResponses(register);

  // think of this forEach as "for each student's input, do the following"
  filteredRegister.forEach(({ data, info }, index) => {
    let leftSideArray = [...text1.data.leftSideData];
    let rightSideArray = [...text1.data.rightSideData];
    const { thePackage } = data;
    const studentID = info.device;
    let tempArray = [];
    for (let i = 0, L = thePackage[0].length; i < L; i++) {
      tempArray.push(thePackage[0][i]);
    }
    //entry is a "write the system" and is users first response
    if (tempArray[0] == 0 && !leftSideArray.includes(studentID)) {
      leftSideArray.push(studentID);
      leftSideArray.push(tempArray);
      text1.updateData({ leftSideData: leftSideArray });
      leftSideButtons[leftSideArray.length / 2 - 1].updateData({
        visible: !text1.data.inChallenge,
        text: "Write a system by " + studentID,
      });
      console.log(`from left updated: ${leftSideArray.indexOf(studentID)}`);
    }
    //entry is a "graph the system" and is users first response
    else if (tempArray[0] == 1 && !rightSideArray.includes(studentID)) {
      rightSideArray.push(studentID);
      rightSideArray.push(tempArray);
      text1.updateData({ rightSideData: rightSideArray });
      rightSideButtons[rightSideArray.length / 2 - 1].updateData({
        visible: !text1.data.inChallenge,
        text: "Graph a system by " + studentID,
      });
      console.log(
        `from right first time: ${rightSideArray.indexOf(studentID)}`
      );
    }
    //entry is a "write the system" and user has updated their response
    else if (tempArray[0] == 0 && leftSideArray.includes(studentID)) {
      console.log(
        `from left updated before splice: ${leftSideArray.indexOf(studentID)}`
      );
      leftSideArray.splice(leftSideArray.indexOf(studentID) + 1, 1, tempArray);
      text1.updateData({ leftSideData: leftSideArray });
      console.log(
        `from left updated after splice: ${leftSideArray.indexOf(studentID)}`
      );
      leftSideButtons[leftSideArray.indexOf(studentID) / 2].updateData({
        outline: false,
        color: "primary",
      });
    }
    //entry is a "graph the system" and user has updated their response
    else if (tempArray[0] == 1 && rightSideArray.includes(studentID)) {
      console.log(
        `from right updated before splice: ${rightSideArray.indexOf(studentID)}`
      );
      rightSideArray.splice(
        rightSideArray.indexOf(studentID) + 1,
        1,
        tempArray
      );
      text1.updateData({ rightSideData: rightSideArray });
      console.log(
        `from right updated after splice: ${rightSideArray.indexOf(studentID)}`
      );
      rightSideButtons[rightSideArray.indexOf(studentID) / 2].updateData({
        outline: false,
        color: "primary",
      });
    }
    text1.updateData({ lastTimestamp: info.timestamp });
  });
});

function filterOldResponses(register) {
  let lastTimestamp = text1.data.lastTimestamp;
  return register.filter(({ info: { timestamp } }) => {
    return timestamp > lastTimestamp;
  });
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  //if working on left side problem
  if (text1.data.currentSide == "left") {
    if (checkLeftSide()) {
      text6.updateData({
        text: `Great work! Now try another classmate's posed problem.`,
      });
      leftSideButtons[text1.data.currentProb].updateData({ color: "success" });
    } else {
      text6.updateData({ text: `Not yet. Keep working at it!` });
    }
  }
  //if working on right side problem
  else {
    if (checkRightSide()) {
      text6.updateData({
        text: `Great work! Now try another classmate's posed problem.`,
      });
      rightSideButtons[text1.data.currentProb].updateData({ color: "success" });
    } else {
      text6.updateData({ text: `Not yet. Keep working at it!` });
    }
  }
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateData({ visible: false });
  input1.updateData({ visible: false });
  input2.updateData({ visible: false });
  ggb1.instance.setFilling("inequality1", normalFill);
  ggb1.instance.setFilling("inequality2", normalFill);
  ggb1.instance.setLineThickness("inequality1", normalLineThickness);
  ggb1.instance.setLineThickness("inequality2", normalLineThickness);
  ggb1.instance.setFilling("haloP1A", normalFill);
  ggb1.instance.setFilling("haloP1B", normalFill);
  ggb1.instance.setFilling("haloP2A", normalFill);
  ggb1.instance.setFilling("haloP2B", normalFill);
  ggb1.instance.setPointSize("P1A", normalPointSize);
  ggb1.instance.setPointSize("P1B", normalPointSize);
  ggb1.instance.setPointSize("P2A", normalPointSize);
  ggb1.instance.setPointSize("P2B", normalPointSize);

  ggb1.instance.setFixed("P1A", false, true);
  ggb1.instance.setFixed("P1B", false, true);
  ggb1.instance.setFixed("P2A", false, true);
  ggb1.instance.setFixed("P2B", false, true);
  ggb1.instance.setValue("allowLineControls", true);
  ggb1.updateData({ visible: false });
  for (let i = 0, L = text1.data.leftSideData.length / 2; i < L; i++) {
    leftSideButtons[i].updateData({ visible: true });
  }
  for (let i = 0, L = text1.data.rightSideData.length / 2; i < L; i++) {
    rightSideButtons[i].updateData({ visible: true });
  }
  text1.updateData({ inChallenge: false, currentSide: "" });
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  text4.updateData({ text: `` });
  text5.updateData({ text: `` });
  text6.updateData({ text: `` });
});

function leftSideButtonFunction(a) {
  console.log(`left side fired`);
  let studentID = text1.data.leftSideData[a * 2];
  let thePackage = text1.data.leftSideData[a * 2 + 1];
  let posedIneq1 = text1.data.leftSideData[a * 2 + 1][5];
  let posedIneq2 = text1.data.leftSideData[a * 2 + 1][6];
  saveData({ posedIneq1: posedIneq1, posedIneq2: posedIneq2 }, "ggb1");
  console.log;
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateData({ visible: true });
  input1.updateData({ visible: true });
  input2.updateData({ visible: true });
  text1.updateData({ inChallenge: true, currentSide: "left", currentProb: a });
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  text4.updateData({
    visible: true,
    text: `Write the system shown, posed by ${studentID}.`,
  });
  let initialSystemDisplay1 = `\\color{A0A0A0}\\text{\[enter first inequality above\]}`;
  let initialSystemDisplay2 = `\\color{A0A0A0}\\text{\[enter second inequality above\]}`;
  text5.updateData({
    text: `Your system:\n\n$\\begin{cases}
    ${initialSystemDisplay1} \\\\
    ${initialSystemDisplay2}
  \\end{cases}$`,
  });
  leftSideButtons[a].updateData({ outline: true });
  for (let i = 0, L = leftSideButtons.length; i < L; i++) {
    leftSideButtons[i].updateData({ visible: false });
  }
  for (let i = 0, L = rightSideButtons.length; i < L; i++) {
    rightSideButtons[i].updateData({ visible: false });
  }
  ggb1.updateData({ visible: true });
  ggb1.instance.setCoords(
    "FrogPoint",
    parseInt(thePackage[1][0]),
    parseInt(thePackage[1][1])
  );
  ggb1.instance.setCoords(
    "Cheese1Point",
    parseInt(thePackage[2][0]),
    parseInt(thePackage[2][1])
  );
  ggb1.instance.setCoords(
    "Cheese2Point",
    parseInt(thePackage[3][0]),
    parseInt(thePackage[3][1])
  );
  ggb1.instance.setCoords(
    "Cheese3Point",
    parseInt(thePackage[4][0]),
    parseInt(thePackage[4][1])
  );
  ggb1.instance.setCoords(
    "P1A",
    parseInt(thePackage[7][0]),
    parseInt(thePackage[7][1])
  );
  ggb1.instance.setCoords(
    "P1B",
    parseInt(thePackage[8][0]),
    parseInt(thePackage[8][1])
  );
  ggb1.instance.setValue("line1Greater", thePackage[9]);
  ggb1.instance.setValue("line1OrEqual", thePackage[10]);
  ggb1.instance.setCoords(
    "P2A",
    parseInt(thePackage[11][0]),
    parseInt(thePackage[11][1])
  );
  ggb1.instance.setCoords(
    "P2B",
    parseInt(thePackage[12][0]),
    parseInt(thePackage[12][1])
  );
  ggb1.instance.setValue("line2Greater", thePackage[13]);
  ggb1.instance.setValue("line2OrEqual", thePackage[14]);
  ggb1.instance.evalCommand("inequalityAsEquation1=line1");
  ggb1.instance.evalCommand("inequalityAsEquation2=line2");
  ggb1.instance.setFixed("P1A", true, false);
  ggb1.instance.setFixed("P1B", true, false);
  ggb1.instance.setFixed("P2A", true, false);
  ggb1.instance.setFixed("P2B", true, false);
  ggb1.instance.setPointSize("P1A", subtlePointSize);
  ggb1.instance.setPointSize("P1B", subtlePointSize);
  ggb1.instance.setPointSize("P2A", subtlePointSize);
  ggb1.instance.setPointSize("P2B", subtlePointSize);
  ggb1.instance.setValue("allowLineControls", false);
  ggb1.instance.setFilling("inequality1", subtleFill);
  ggb1.instance.setFilling("inequality2", subtleFill);
  ggb1.instance.setLineThickness("inequality1", subtleLineThickness);
  ggb1.instance.setLineThickness("inequality2", subtleLineThickness);
  ggb1.instance.setFilling("haloP1A", noFill);
  ggb1.instance.setFilling("haloP1B", noFill);
  ggb1.instance.setFilling("haloP2A", noFill);
  ggb1.instance.setFilling("haloP2B", noFill);
  ggb1.updateData({ visible: true });
}

function rightSideButtonFunction(a) {
  let studentID = text1.data.rightSideData[a * 2];
  let thePackage = text1.data.rightSideData[a * 2 + 1];
  let posedIneq1 = text1.data.rightSideData[a * 2 + 1][5];
  let posedIneq2 = text1.data.rightSideData[a * 2 + 1][6];
  saveData({ posedIneq1: posedIneq1, posedIneq2: posedIneq2 }, "ggb1");
  let posedIneq1AsLatex = utils.math.expressionToLatex(posedIneq1).value;
  let posedIneq2AsLatex = utils.math.expressionToLatex(posedIneq2).value;
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateData({ visible: true });
  text1.updateData({ inChallenge: true, currentSide: "right", currentProb: a });
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  text4.updateData({
    text: `Graph the system posed by ${studentID}:\n\n$\\begin{cases}
    ${posedIneq1AsLatex} \\\\
    ${posedIneq2AsLatex}
  \\end{cases}$`,
  });
  rightSideButtons[a].updateData({ outline: true });
  for (let i = 0, L = leftSideButtons.length; i < L; i++) {
    leftSideButtons[i].updateData({ visible: false });
  }
  for (let i = 0, L = rightSideButtons.length; i < L; i++) {
    rightSideButtons[i].updateData({ visible: false });
  }
  ggb1.instance.setCoords("P1A", -9, 7);
  ggb1.instance.setCoords("P1B", -7, 9);
  ggb1.instance.setCoords("P2A", 7, 9);
  ggb1.instance.setCoords("P2B", 9, 7);
  ggb1.instance.setCoords(
    "FrogPoint",
    parseInt(thePackage[1][0]),
    parseInt(thePackage[1][1])
  );
  ggb1.instance.setCoords(
    "Cheese1Point",
    parseInt(thePackage[2][0]),
    parseInt(thePackage[2][1])
  );
  ggb1.instance.setCoords(
    "Cheese2Point",
    parseInt(thePackage[3][0]),
    parseInt(thePackage[3][1])
  );
  ggb1.instance.setCoords(
    "Cheese3Point",
    parseInt(thePackage[4][0]),
    parseInt(thePackage[4][1])
  );
  ggb1.updateData({ visible: true });
}

button0.on("click", () => {
  leftSideButtonFunction(0);
});

button1.on("click", () => {
  leftSideButtonFunction(1);
});

button2.on("click", () => {
  leftSideButtonFunction(2);
});

button3.on("click", () => {
  leftSideButtonFunction(3);
});

button4.on("click", () => {
  leftSideButtonFunction(4);
});

button5.on("click", () => {
  leftSideButtonFunction(5);
});

button6.on("click", () => {
  leftSideButtonFunction(6);
});

button7.on("click", () => {
  leftSideButtonFunction(7);
});

button8.on("click", () => {
  leftSideButtonFunction(8);
});

button9.on("click", () => {
  leftSideButtonFunction(9);
});

button10.on("click", () => {
  leftSideButtonFunction(10);
});

button11.on("click", () => {
  leftSideButtonFunction(11);
});

button12.on("click", () => {
  leftSideButtonFunction(12);
});

button13.on("click", () => {
  leftSideButtonFunction(13);
});

button14.on("click", () => {
  leftSideButtonFunction(14);
});

button15.on("click", () => {
  leftSideButtonFunction(15);
});

button16.on("click", () => {
  leftSideButtonFunction(16);
});

button17.on("click", () => {
  leftSideButtonFunction(17);
});

button18.on("click", () => {
  leftSideButtonFunction(18);
});

button19.on("click", () => {
  leftSideButtonFunction(19);
});

button20.on("click", () => {
  leftSideButtonFunction(20);
});

button21.on("click", () => {
  leftSideButtonFunction(21);
});

button22.on("click", () => {
  leftSideButtonFunction(22);
});

button23.on("click", () => {
  leftSideButtonFunction(23);
});

button24.on("click", () => {
  leftSideButtonFunction(24);
});

button25.on("click", () => {
  leftSideButtonFunction(25);
});

button26.on("click", () => {
  leftSideButtonFunction(26);
});

button27.on("click", () => {
  leftSideButtonFunction(27);
});

button28.on("click", () => {
  leftSideButtonFunction(28);
});

button29.on("click", () => {
  leftSideButtonFunction(29);
});

button30.on("click", () => {
  leftSideButtonFunction(30);
});

button31.on("click", () => {
  leftSideButtonFunction(31);
});

button32.on("click", () => {
  leftSideButtonFunction(32);
});

button33.on("click", () => {
  leftSideButtonFunction(33);
});

button34.on("click", () => {
  leftSideButtonFunction(34);
});

button35.on("click", () => {
  leftSideButtonFunction(35);
});

button36.on("click", () => {
  leftSideButtonFunction(36);
});

button37.on("click", () => {
  leftSideButtonFunction(37);
});

button38.on("click", () => {
  leftSideButtonFunction(38);
});

button39.on("click", () => {
  leftSideButtonFunction(39);
});

button40.on("click", () => {
  leftSideButtonFunction(40);
});

button41.on("click", () => {
  leftSideButtonFunction(41);
});

button42.on("click", () => {
  leftSideButtonFunction(42);
});

button43.on("click", () => {
  leftSideButtonFunction(43);
});

button44.on("click", () => {
  leftSideButtonFunction(44);
});

button45.on("click", () => {
  leftSideButtonFunction(45);
});

button46.on("click", () => {
  leftSideButtonFunction(46);
});

button47.on("click", () => {
  leftSideButtonFunction(47);
});

button48.on("click", () => {
  leftSideButtonFunction(48);
});

button49.on("click", () => {
  leftSideButtonFunction(49);
});

button50.on("click", () => {
  rightSideButtonFunction(0);
});

button51.on("click", () => {
  rightSideButtonFunction(1);
});

button52.on("click", () => {
  rightSideButtonFunction(2);
});

button53.on("click", () => {
  rightSideButtonFunction(3);
});

button54.on("click", () => {
  rightSideButtonFunction(4);
});

button55.on("click", () => {
  rightSideButtonFunction(5);
});

button56.on("click", () => {
  rightSideButtonFunction(6);
});

button57.on("click", () => {
  rightSideButtonFunction(7);
});

button58.on("click", () => {
  rightSideButtonFunction(8);
});

button59.on("click", () => {
  rightSideButtonFunction(9);
});

button60.on("click", () => {
  rightSideButtonFunction(10);
});

button61.on("click", () => {
  rightSideButtonFunction(11);
});

button62.on("click", () => {
  rightSideButtonFunction(12);
});

button63.on("click", () => {
  rightSideButtonFunction(13);
});

button64.on("click", () => {
  rightSideButtonFunction(14);
});

button65.on("click", () => {
  rightSideButtonFunction(15);
});

button66.on("click", () => {
  rightSideButtonFunction(16);
});

button67.on("click", () => {
  rightSideButtonFunction(17);
});

button68.on("click", () => {
  rightSideButtonFunction(18);
});

button69.on("click", () => {
  rightSideButtonFunction(19);
});

button70.on("click", () => {
  rightSideButtonFunction(20);
});

button71.on("click", () => {
  rightSideButtonFunction(21);
});

button72.on("click", () => {
  rightSideButtonFunction(22);
});

button73.on("click", () => {
  rightSideButtonFunction(23);
});

button74.on("click", () => {
  rightSideButtonFunction(24);
});

button75.on("click", () => {
  rightSideButtonFunction(25);
});

button76.on("click", () => {
  rightSideButtonFunction(26);
});

button77.on("click", () => {
  rightSideButtonFunction(27);
});

button78.on("click", () => {
  rightSideButtonFunction(28);
});

button79.on("click", () => {
  rightSideButtonFunction(29);
});

button80.on("click", () => {
  rightSideButtonFunction(30);
});

button81.on("click", () => {
  rightSideButtonFunction(31);
});

button82.on("click", () => {
  rightSideButtonFunction(32);
});

button83.on("click", () => {
  rightSideButtonFunction(33);
});

button84.on("click", () => {
  rightSideButtonFunction(34);
});

button85.on("click", () => {
  rightSideButtonFunction(35);
});

button86.on("click", () => {
  rightSideButtonFunction(36);
});

button87.on("click", () => {
  rightSideButtonFunction(37);
});

button88.on("click", () => {
  rightSideButtonFunction(38);
});

button89.on("click", () => {
  rightSideButtonFunction(39);
});

button90.on("click", () => {
  rightSideButtonFunction(40);
});

button91.on("click", () => {
  rightSideButtonFunction(41);
});

button92.on("click", () => {
  rightSideButtonFunction(42);
});

button93.on("click", () => {
  rightSideButtonFunction(43);
});

button94.on("click", () => {
  rightSideButtonFunction(44);
});

button95.on("click", () => {
  rightSideButtonFunction(45);
});

button96.on("click", () => {
  rightSideButtonFunction(46);
});

button97.on("click", () => {
  rightSideButtonFunction(47);
});

button98.on("click", () => {
  rightSideButtonFunction(48);
});

button99.on("click", () => {
  rightSideButtonFunction(49);
});

function checkLeftSide() {
  console.log(`checkedLeftSide`);
}

function checkLeftSide() {
  let finalAnswer1 = formatInput(input1.data.text);
  ggb1.instance.evalCommand("studentInequality1: " + finalAnswer1);
  let studentIneq1OrEqual = finalAnswer1.includes("=");
  console.log(`studentIneq1OrEqual: ${studentIneq1OrEqual}`);
  let finalAnswer2 = formatInput(input2.data.text);
  ggb1.instance.evalCommand("studentInequality2: " + finalAnswer2);
  let studentIneq2OrEqual = finalAnswer2.includes("=");
  console.log(`studentIneq2OrEqual: ${studentIneq2OrEqual}`);

  ggb1.instance.setValue("showStudentInequality1", true);
  ggb1.instance.setValue("showStudentInequality2", true);

  let studentIneqAsEquation1 = formatForEquation(finalAnswer1);
  ggb1.instance.evalCommand(
    "studentInputAsEquation1: " + studentIneqAsEquation1
  );
  ggb1.instance.evalCommand("studentLine1: " + studentIneqAsEquation1);

  let studentIneqAsEquation2 = formatForEquation(finalAnswer2);
  ggb1.instance.evalCommand(
    "studentInputAsEquation2: " + studentIneqAsEquation2
  );
  ggb1.instance.evalCommand("studentLine2: " + studentIneqAsEquation2);

  console.log(
    `inequality1AndStudent1Same: ${ggb1.instance.getValue(
      "inequality1AndStudent1Same"
    )}`
  );
  console.log(
    `inequality1AndStudent2Same: ${ggb1.instance.getValue(
      "inequality1AndStudent2Same"
    )}`
  );
  console.log(
    `inequality2AndStudent1Same: ${ggb1.instance.getValue(
      "inequality2AndStudent1Same"
    )}`
  );
  console.log(
    `inequality2AndStudent2Same: ${ggb1.instance.getValue(
      "inequality2AndStudent2Same"
    )}`
  );
  console.log(
    `inequalityEquation1AndInequalityEquation2Same: ${ggb1.instance.getValue(
      "inequalityEquation1AndInequalityEquation2Same"
    )}`
  );
  console.log(
    `inequalityEquation1AndInputEquation1Same: ${ggb1.instance.getValue(
      "inequalityEquation1AndInputEquation1Same"
    )}`
  );
  console.log(
    `inequalityEquation1AndInputEquation2Same: ${ggb1.instance.getValue(
      "inequalityEquation1AndInputEquation2Same"
    )}`
  );
  console.log(
    `inequalityEquation2AndInputEquation1Same: ${ggb1.instance.getValue(
      "inequalityEquation2AndInputEquation1Same"
    )}`
  );
  console.log(
    `inequalityEquation2AndInputEquation2Same: ${ggb1.instance.getValue(
      "inequalityEquation2AndInputEquation2Same"
    )}`
  );
  console.log(
    `inputEquation1AndInputEquation2Same: ${ggb1.instance.getValue(
      "inputEquation1AndInputEquation2Same"
    )}`
  );

  let line1OrEqual = ggb1.instance.getValue("line1OrEqual");
  let line2OrEqual = ggb1.instance.getValue("line2OrEqual");
  let inequality1AndStudent1Same =
    ggb1.instance.getValue("inequality1AndStudent1Same") &&
    line1OrEqual == studentIneq1OrEqual;
  let inequality1AndStudent2Same =
    ggb1.instance.getValue("inequality1AndStudent2Same") &&
    line1OrEqual == studentIneq2OrEqual;
  let inequality2AndStudent1Same =
    ggb1.instance.getValue("inequality2AndStudent1Same") &&
    line2OrEqual == studentIneq1OrEqual;
  let inequality2AndStudent2Same =
    ggb1.instance.getValue("inequality2AndStudent2Same") &&
    line2OrEqual == studentIneq2OrEqual;
  let initIneqsSame = ggb1.instance.getValue(
    "inequalityEquation1AndInequalityEquation2Same"
  );
  if (
    initIneqsSame &&
    ggb1.instance.getValue("line1Greater") ==
      ggb1.instance.getValue("line2Greater") &&
    line1OrEqual == line2OrEqual
  ) {
    initIneqsSame = true;
  }
  //for when student does successfully capture frog with written inequalities
  return (
    (inequality1AndStudent1Same || inequality1AndStudent2Same) &&
    (inequality2AndStudent1Same || inequality2AndStudent2Same) &&
    initIneqsSame == (inequality1AndStudent1Same && inequality1AndStudent2Same)
  );
}

function checkRightSide() {
  let ineq1GreaterOrLess = ggb1.instance.getValue("line1Greater") ? ">" : "<";
  let ineq2GreaterOrLess = ggb1.instance.getValue("line2Greater") ? ">" : "<";
  let ineq1OrEqual = ggb1.instance.getValue("line1OrEqual") ? "=" : "";
  let ineq2OrEqual = ggb1.instance.getValue("line2OrEqual") ? "=" : "";
  let ineq1YIntDenom =
    ggb1.instance.getValue("line1YIntDenom") != 1
      ? `/${ggb1.instance.getValue("line1YIntDenom")}`
      : "";
  let ineq2YIntDenom =
    ggb1.instance.getValue("line2YIntDenom") != 1
      ? `/${ggb1.instance.getValue("line2YIntDenom")}`
      : "";
  let slope1 =
    ggb1.instance.getValue("line1SlopeNumer") == 0
      ? ``
      : ggb1.instance.getValue("line1SlopeDenom") == 1
      ? `${ggb1.instance.getValue("line1SlopeNumer")}x`
      : `${ggb1.instance.getValue("line1SlopeNumer")}/${ggb1.instance.getValue(
          "line1SlopeDenom"
        )}x`;
  let slope2 =
    ggb1.instance.getValue("line2SlopeNumer") == 0
      ? ``
      : ggb1.instance.getValue("line2SlopeDenom") == 1
      ? `${ggb1.instance.getValue("line2SlopeNumer")}x`
      : `${ggb1.instance.getValue("line2SlopeNumer")}/${ggb1.instance.getValue(
          "line2SlopeDenom"
        )}x`;
  let intercept1 =
    ggb1.instance.getValue("line1YIntNumer") == 0
      ? ``
      : `+${ggb1.instance.getValue("line1YIntNumer")}${ineq1YIntDenom}`;
  let intercept2 =
    ggb1.instance.getValue("line2YIntNumer") == 0
      ? ``
      : `+${ggb1.instance.getValue("line2YIntNumer")}${ineq2YIntDenom}`;
  let ineq1Confirm = ggb1.instance.getValue("line1HasSlope")
    ? `y${ineq1GreaterOrLess}${ineq1OrEqual}${slope1}${intercept1}`
    : `x${ineq1GreaterOrLess}${ineq1OrEqual}${ggb1.instance.getXcoord("P1A")}`;
  let ineq2Confirm = ggb1.instance.getValue("line2HasSlope")
    ? `y${ineq2GreaterOrLess}${ineq2OrEqual}${slope2}${intercept2}`
    : `x${ineq2GreaterOrLess}${ineq2OrEqual}${ggb1.instance.getXcoord("P2A")}`;
  let posedIneq1 = getData("posedIneq1", "ggb1");
  let posedIneq2 = getData("posedIneq2", "ggb1");
  let posedIneq1Matched =
    posedIneq1 === ineq1Confirm || posedIneq1 === ineq2Confirm;
  let posedIneq2Matched =
    posedIneq2 === ineq1Confirm || posedIneq2 === ineq2Confirm;
  return (
    posedIneq1Matched &&
    posedIneq2Matched &&
    (posedIneq1 === posedIneq2) == (ineq1Confirm === ineq2Confirm)
  );
}

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

function movedPoints() {
  text6.updateData({ text: "" });
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
}

function formatInput(a) {
  let frac = a.replace(/\\frac{/, "("); //replaces \frac{
  let fracMid = frac.replace(/\}\{/, ")/("); //replaces }{ from \frac{}{}
  let leftParen = fracMid.replace(/\\left/g, ""); //replaces \left part of parens
  let rightParen = leftParen.replace(/\\right/g, ""); //replaces \right part of parens
  let absLeft = rightParen.replace(/\|/, "abs("); //replaces left bar for absolute value
  let absRight = absLeft.replace(/\|/, ")"); //replaces right bar for absolute value
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt("); //replaces \sqrt for square root function
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt("); //replaces \sqrt[3]{} for cube root function
  let brackRight = cbrtLeft.replace(/\}/g, ")"); //replaces the right side brackets
  let brackLeft = brackRight.replace(/\{/g, "("); //replaces any remaining left side brackets
  let lessThan = brackLeft.replace(/\\le/g, "<="); //replaces less than
  let greaterThan = lessThan.replace(/\\ge/g, ">="); //replaces greater than
  let finalAnswer = greaterThan; /*.replace(//,"");*/ //empty in case of additions
  return finalAnswer;
}

function formatForEquation(a) {
  let lessThan = a.replace(/</g, "=");
  let greaterThan = lessThan.replace(/>/g, "=");
  let singleEqual = greaterThan.replace(/==/g, "=");
  return singleEqual;
}

autorun(() => {
  let inputInequality1 = input1.data.text;
  let inputInequality2 = input2.data.text;
  if (text1.data.inChallenge && text1.data.currentSide == "left") {
    buttonGroup1.updateSingleButton(
      {
        disabled: false,
      },
      1
    );
    if (inputInequality1 == "") {
      inputInequality1 = `\\color{A0A0A0}\\text{\[enter first inequality above\]}`;
    }
    if (inputInequality2 == "") {
      inputInequality2 = `\\color{A0A0A0}\\text{\[enter second inequality above\]}`;
    }
    ggb1.instance.setValue("showStudentInequality1", false);
    ggb1.instance.setValue("showStudentInequality2", false);
    text5.updateData({
      text: `Your system:\n\n$\\begin{cases}
        ${inputInequality1} \\\\
        ${inputInequality2}
        \\end{cases}$`,
    });
  }
});

/*
{"compTotals":{"textbox":6,"geogebra":1,"button":100,"input":2,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"T layout"}
*/
