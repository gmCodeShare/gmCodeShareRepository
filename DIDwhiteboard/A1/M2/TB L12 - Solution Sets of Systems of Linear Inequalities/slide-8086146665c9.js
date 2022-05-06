const {
  text1,
  select1,
  text2,
  separator1,
  buttonGroup1,
  ggb1,
  feedback1,
  text11,
  buttonGroup11,
  text12,
  buttonGroup12,
  text13,
  text14,
  input11,
  text15,
  input12,
  buttonGroup13,
  text16,
  text17,
  text21,
  buttonGroup21,
  text22,
  buttonGroup22,
  text23,
  text24,
  text25,
  buttonGroup23,
  text26,
  text27,
} = components;

//Hi Kim

ggb1.instance.setErrorDialogsActive(false);
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

//set inital state
slide.on("firstload", () => {
  setInitialState();
});

function setInitialState() {
  //change this here if desired behavior is hide/none
  let buttonGroupVisibilityBehavior = "none";

  //all the rest of the initial settings
  ggb1.updateData({ visible: false });
  select1.unselectAll();
  select1.setVisible(true);
  text11.updateData({ visible: true });
  separator1.updateData({ size: "0px" });

  //set specific ggb values and line behaviors
  ggb1.instance.setErrorDialogsActive(false);
  ggb1.instance.setValue("showLine1", false);
  ggb1.instance.setValue("showLine2", false);
  ggb1.instance.setValue("line1Greater", true);
  ggb1.instance.setValue("line2Greater", true);
  ggb1.instance.setValue("line1OrEqual", true);
  ggb1.instance.setValue("line2OrEqual", false);
  ggb1.instance.setCoords("FrogPoint", 3, 0);
  ggb1.instance.setCoords("Cheese1Point", -2, -6);
  ggb1.instance.setCoords("Cheese2Point", 7, -4);
  ggb1.instance.setCoords("Cheese3Point", -6, 3);
  ggb1.instance.setValue("showCheese1", true);
  ggb1.instance.setValue("showCheese2", true);
  ggb1.instance.setValue("showCheese3", true);
  ggb1.instance.setValue("showFrog", true);
  ggb1.instance.setValue("allowLineControls", true);
  ggb1.instance.setValue("showLine1Points", true);
  ggb1.instance.setValue("showLine2Points", true);
  ggb1.instance.setFixed("P1A", false, true);
  ggb1.instance.setFixed("P1B", false, true);
  ggb1.instance.setFixed("P2A", false, true);
  ggb1.instance.setFixed("P2B", false, true);
  ggb1.instance.setCoords("P1A", -9, 7);
  ggb1.instance.setCoords("P1B", -7, 9);
  ggb1.instance.setCoords("P2A", 7, 9);
  ggb1.instance.setCoords("P2B", 9, 7);
  ggb1.instance.setValue("showStudentInequality1", false);
  ggb1.instance.setValue("showStudentInequality2", false);
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

  ggb1.instance.setFixed("frogSVG", false, true);
  ggb1.instance.setFixed("cheese1SVG", false, true);
  ggb1.instance.setFixed("cheese2SVG", false, true);
  ggb1.instance.setFixed("cheese3SVG", false, true);

  //set basic components to be visible: false
  text2.updateData({ visible: false, text: "" });
  text11.updateData({ visible: false });
  text12.updateData({ visible: false });
  text13.updateData({ visible: false, text: "" });
  text14.updateData({ visible: false });
  text15.updateData({ visible: false });
  text16.updateData({ visible: false, text: "" });
  text17.updateData({ visible: false, text: "" });
  text21.updateData({ visible: false });
  text22.updateData({ visible: false });
  text23.updateData({ visible: false, text: "" });
  text24.updateData({ visible: false });
  text25.updateData({ visible: false });
  text26.updateData({ visible: false, text: "" });
  text27.updateData({ visible: false, text: "" });

  input11.updateData({ visible: false, text: "" });
  input12.updateData({ visible: false, text: "" });

  //set all buttonGroup visibility and visibility behavior
  buttonGroup11.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup12.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup13.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup21.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup22.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup23.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });

  //set buttons which will have outlines
  buttonGroup11.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup12.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup13.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup21.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup22.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup23.updateSingleButton(
    {
      outline: true,
    },
    2
  );

  //disable initial buttons until student chooses to write or graph a system
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );

  //reenable disabled buttons
  buttonGroup13.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup23.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
}

ggb1.instance.registerClientListener(clientFunction);

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

//let user click "Onward!" after making choice on which adventure to pursue
select1.on("change", ({ selected }) => {
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
});

//hides select component and shows initial steps for their chosen adventure
buttonGroup1.on("click:1", () => {
  separator1.updateData({ size: "8px" });
  select1.setVisible(false);
  ggb1.updateData({ visible: true });

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );

  //actions dependent on whether student chooses to write or graph the system
  if (select1.data.selected[0] == 0) {
    //for "Write the System"
    text2.updateData({
      visible: true,
      text: "You chose to write a system of inequalities.",
    });
    text11.updateData({ visible: true });
    buttonGroup11.updateData({ visible: true });
  } else if (select1.data.selected[0] == 1) {
    //for "Graph the System"
    text2.updateData({
      visible: true,
      text: "You chose to graph a system of inequalities.",
    });
    text21.updateData({ visible: true });
    buttonGroup21.updateData({ visible: true });
  }
});

//resets screen, allows student to choose different adventure
buttonGroup1.on("click:2", () => {
  setInitialState();
});

//clicking "Lock it in!" for placement of frog and cheese
buttonGroup11.on("click:1", () => {
  text11.updateData({ visible: false });
  buttonGroup11.updateData({ visible: false });

  text12.updateData({ visible: true });
  buttonGroup12.updateData({ visible: true });
  text13.updateData({ visible: true });
  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);
  ggb1.instance.setValue("showLine1", true);
  ggb1.instance.setValue("showLine2", true);
});

//clicking "Go back" for placement of frog and cheese
buttonGroup11.on("click:2", () => {
  setInitialState();
});

//clicking "lock it in" when graphing lines before writing the inequalities
buttonGroup12.on("click:1", () => {
  //for when frog is successfully captured
  if (
    ggb1.instance.getValue("frogCompletelyInInequality1") &&
    ggb1.instance.getValue("frogCompletelyInInequality2") &&
    !(
      ggb1.instance.getValue("cheese1InInequality1") &&
      ggb1.instance.getValue("cheese1InInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese2InInequality1") &&
      ggb1.instance.getValue("cheese2InInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese3InInequality1") &&
      ggb1.instance.getValue("cheese3InInequality2")
    )
  ) {
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
    text12.updateData({ visible: false });
    buttonGroup12.updateData({ visible: false });
    text13.updateData({ visible: false, text: "" });
    text14.updateData({ visible: true });
    input11.updateData({ visible: true, text: "" });
    text15.updateData({ visible: true });
    input12.updateData({ visible: true, text: "" });
    buttonGroup13.updateData({ visible: true });
    let initialSystemDisplay1 = `\\color{A0A0A0}\\text{\[enter first inequality above\]}`;
    let initialSystemDisplay2 = `\\color{A0A0A0}\\text{\[enter second inequality above\]}`;

    text16.updateData({
      visible: true,
      text: `Your system:\n\n$\\begin{cases}
      ${initialSystemDisplay1} \\\\
      ${initialSystemDisplay2}
    \\end{cases}$`,
    });
    text17.updateData({ visible: true });
  }
  //if frog not successfully captured
  else {
    text13.updateData({
      text: "Keep trying! Be sure that the frog is captured in both inequalities and that it is the only object captured in both inequalities.",
    });
  }
});

//clicking "Go back" when graphing lines before writing the inequalities
buttonGroup12.on("click:2", () => {
  text12.updateData({ visible: false });
  buttonGroup12.updateData({ visible: false });
  text13.updateData({ visible: false, text: "" });
  ggb1.instance.setFixed("frogSVG", false, true);
  ggb1.instance.setFixed("cheese1SVG", false, true);
  ggb1.instance.setFixed("cheese2SVG", false, true);
  ggb1.instance.setFixed("cheese3SVG", false, true);
  ggb1.instance.setValue("showLine1", false);
  ggb1.instance.setValue("showLine2", false);

  text11.updateData({ visible: true });
  buttonGroup11.updateData({ visible: true });
});

//clicking "Check it" when writing inequalities
buttonGroup13.on("click:1", () => {
  buttonGroup13.updateSingleButton(
    {
      disabled: true,
    },
    1
  );

  let finalAnswer1 = formatInput(input11.data.text);
  ggb1.instance.evalCommand("studentInequality1: " + finalAnswer1);
  let studentIneq1OrEqual = finalAnswer1.includes("=");
  console.log(`studentIneq1OrEqual: ${studentIneq1OrEqual}`);
  let finalAnswer2 = formatInput(input12.data.text);
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
  if (
    (inequality1AndStudent1Same || inequality1AndStudent2Same) &&
    (inequality2AndStudent1Same || inequality2AndStudent2Same) &&
    initIneqsSame == (inequality1AndStudent1Same && inequality1AndStudent2Same)
  ) {
    text17.updateData({
      text: "Great! You wrote a system of inequalities that matches the one you graphed!",
    });
    console.log(finalAnswer1);
    console.log(finalAnswer2);
    utils.RTS.sendData("slide-8086146665c9", {
      //package schema: [0: 0 for writeSystem or 1 for graphSystem, 1: [frogX, frogY], 2: [cheese1X, cheese1Y], 3: [cheese2X, cheese2Y], 4: [cheese3X, cheese3Y], 5: finalAnswer1, 6: finalAnswer2, 7: [P1AX, P1AY], 8: [P1BX, P1BY], 9: line1Greater, 10: line1OrEqual, 11: [P2AX, P2AY], 12: [P2BX, P2BY], 13: line2Greater, 14: line2OrEqual]
      thePackage: [
        [
          select1.data.selected[0],
          [
            ggb1.instance.getXcoord("FrogPoint"),
            ggb1.instance.getYcoord("FrogPoint"),
          ],
          [
            ggb1.instance.getXcoord("Cheese1Point"),
            ggb1.instance.getYcoord("Cheese1Point"),
          ],
          [
            ggb1.instance.getXcoord("Cheese2Point"),
            ggb1.instance.getYcoord("Cheese2Point"),
          ],
          [
            ggb1.instance.getXcoord("Cheese3Point"),
            ggb1.instance.getYcoord("Cheese3Point"),
          ],
          finalAnswer1,
          finalAnswer2,
          [ggb1.instance.getXcoord("P1A"), ggb1.instance.getYcoord("P1A")],
          [ggb1.instance.getXcoord("P1B"), ggb1.instance.getYcoord("P1B")],
          ggb1.instance.getValue("line1Greater"),
          ggb1.instance.getValue("line1OrEqual"),
          [ggb1.instance.getXcoord("P2A"), ggb1.instance.getYcoord("P2A")],
          [ggb1.instance.getXcoord("P2B"), ggb1.instance.getYcoord("P2B")],
          ggb1.instance.getValue("line2Greater"),
          ggb1.instance.getValue("line2OrEqual"),
        ],
      ],
    });
  }
  //for when student does not successfully capture frog with written inequalities
  else {
    text17.updateData({
      text: "Not yet... Keep trying to write the system of inequalities that you graphed.",
    });
  }
});

buttonGroup13.on("click:2", () => {
  text14.updateData({ visible: false });
  input11.updateData({ visible: false });
  text15.updateData({ visible: false });
  input12.updateData({ visible: false });
  buttonGroup13.updateData({ visible: false });
  text16.updateData({ visible: false, text: "" });
  text17.updateData({ visible: false, text: "" });

  text12.updateData({ visible: true });
  buttonGroup12.updateData({ visible: true });
  text13.updateData({ visible: true });
  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);
  ggb1.instance.setValue("showLine1", true);
  ggb1.instance.setValue("showLine2", true);

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
  ggb1.instance.setValue("showStudentInequality1", false);
  ggb1.instance.setValue("showStudentInequality2", false);
});

//clicking "Lock it in!" for placement of frog and cheese
buttonGroup21.on("click:1", () => {
  text21.updateData({ visible: false });
  buttonGroup21.updateData({ visible: false });

  text22.updateData({ visible: true });
  buttonGroup22.updateData({ visible: true });
  text23.updateData({ visible: true });
  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);
  ggb1.instance.setValue("showLine1", true);
  ggb1.instance.setValue("showLine2", true);
});

//clicking "Go back" for placement of frog and cheese
buttonGroup21.on("click:2", () => {
  setInitialState();
});

//clicking "lock it in" when graphing lines before writing the inequalities
buttonGroup22.on("click:1", () => {
  //for when frog is successfully captured
  if (
    ggb1.instance.getValue("frogCompletelyInInequality1") &&
    ggb1.instance.getValue("frogCompletelyInInequality2") &&
    !(
      ggb1.instance.getValue("cheese1InInequality1") &&
      ggb1.instance.getValue("cheese1InInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese2InInequality1") &&
      ggb1.instance.getValue("cheese2InInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese3InInequality1") &&
      ggb1.instance.getValue("cheese3InInequality2")
    )
  ) {
    let ineq1GreaterOrLess = ggb1.instance.getValue("line1Greater") ? ">" : "<";
    let ineq2GreaterOrLess = ggb1.instance.getValue("line2Greater") ? ">" : "<";
    let ineq1OrEqual = ggb1.instance.getValue("line1OrEqual") ? "=" : "";
    let ineq2OrEqual = ggb1.instance.getValue("line2OrEqual") ? "=" : "";
    let ineq1SlopeDenom =
      ggb1.instance.getValue("line1SlopeDenom") != 1
        ? `/${ggb1.instance.getValue("line1SlopeDenom")}`
        : "";
    let ineq2SlopeDenom =
      ggb1.instance.getValue("line2SlopeDenom") != 1
        ? `/${ggb1.instance.getValue("line2SlopeDenom")}`
        : "";
    let ineq1YIntDenom =
      ggb1.instance.getValue("line1YIntDenom") != 1
        ? `/${ggb1.instance.getValue("line1YIntDenom")}`
        : "";
    let ineq2YIntDenom =
      ggb1.instance.getValue("line2YIntDenom") != 1
        ? `/${ggb1.instance.getValue("line2YIntDenom")}`
        : "";
    if (ggb1.instance.getValue("line1HasSlope")) {
      ggb1.instance.evalCommand(
        `studentInequality1:y${ineq1GreaterOrLess}${ineq1OrEqual}(${ggb1.instance.getValue(
          "line1SlopeNumer"
        )}${ineq1SlopeDenom})x+(${ggb1.instance.getValue(
          "line1YIntNumer"
        )}${ineq1YIntDenom})`
      );
      ggb1.instance.evalCommand(
        `studentInequality2:y${ineq2GreaterOrLess}${ineq2OrEqual}(${ggb1.instance.getValue(
          "line2SlopeNumer"
        )}${ineq2SlopeDenom})x+(${ggb1.instance.getValue(
          "line2YIntNumer"
        )}${ineq2YIntDenom})`
      );
    } else {
      ggb1.instance.evalCommand(
        `studentInequality1:x${ineq1GreaterOrLess}${ineq1OrEqual}x(P1A)`
      );
      ggb1.instance.evalCommand(
        `studentInequality2:x${ineq2GreaterOrLess}${ineq2OrEqual}x(P2A)`
      );
    }
    let slope1 =
      ggb1.instance.getValue("line1SlopeNumer") == 0
        ? ``
        : ggb1.instance.getValue("line1SlopeDenom") == 1
        ? `${ggb1.instance.getValue("line1SlopeNumer")}x`
        : `${ggb1.instance.getValue(
            "line1SlopeNumer"
          )}/${ggb1.instance.getValue("line1SlopeDenom")}x`;
    let slope2 =
      ggb1.instance.getValue("line2SlopeNumer") == 0
        ? ``
        : ggb1.instance.getValue("line2SlopeDenom") == 1
        ? `${ggb1.instance.getValue("line2SlopeNumer")}x`
        : `${ggb1.instance.getValue(
            "line2SlopeNumer"
          )}/${ggb1.instance.getValue("line2SlopeDenom")}x`;
    let intercept1 =
      ggb1.instance.getValue("line1YIntNumer") == 0
        ? ``
        : `+${ggb1.instance.getValue("line1YIntNumer")}${ineq1YIntDenom}`;
    let intercept2 =
      ggb1.instance.getValue("line2YIntNumer") == 0
        ? ``
        : `+${ggb1.instance.getValue("line2YIntNumer")}${ineq2YIntDenom}`;
    let ineq1Init = ggb1.instance.getValue("line1HasSlope")
      ? `y${ineq1GreaterOrLess}${ineq1OrEqual}${slope1}${intercept1}`
      : `x${ineq1GreaterOrLess}${ineq1OrEqual}${ggb1.instance.getXcoord(
          "P1A"
        )}`;
    let ineq2Init = ggb1.instance.getValue("line2HasSlope")
      ? `y${ineq2GreaterOrLess}${ineq2OrEqual}${slope2}${intercept2}`
      : `x${ineq2GreaterOrLess}${ineq2OrEqual}${ggb1.instance.getXcoord(
          "P2A"
        )}`;
    saveData({ ineq1Init: ineq1Init, ineq2Init: ineq2Init }, "ggb1");
    let ineq1 = utils.math.expressionToLatex(ineq1Init).value;
    let ineq2 = utils.math.expressionToLatex(ineq2Init).value;
    ggb1.instance.setValue("line1Greater", true);
    ggb1.instance.setValue("line2Greater", true);
    ggb1.instance.setValue("line1OrEqual", true);
    ggb1.instance.setValue("line2OrEqual", false);
    ggb1.instance.setCoords("P1A", -9, 7);
    ggb1.instance.setCoords("P1B", -7, 9);
    ggb1.instance.setCoords("P2A", 7, 9);
    ggb1.instance.setCoords("P2B", 9, 7);
    text22.updateData({ visible: false });
    buttonGroup22.updateData({ visible: false });
    text23.updateData({ visible: false, text: "" });
    text24.updateData({ visible: true });
    text25.updateData({
      visible: true,
      text: `Your system:\n\n$\\begin{cases}
      ${ineq1} \\\\
      ${ineq2}
    \\end{cases}$`,
    });
    buttonGroup23.updateData({ visible: true });

    text26.updateData({ visible: true, text: "" });
    text27.updateData({ visible: true, text: "" });
  }
  //if frog not successfully captured
  else {
    text23.updateData({
      text: "Keep trying! Be sure that the frog is captured in both inequalities and that it is the only object captured in both inequalities.",
    });
  }
});

//clicking "Go back" when graphing lines before writing the inequalities
buttonGroup22.on("click:2", () => {
  text22.updateData({ visible: false });
  buttonGroup22.updateData({ visible: false });
  text23.updateData({ visible: false, text: "" });
  ggb1.instance.setFixed("frogSVG", false, true);
  ggb1.instance.setFixed("cheese1SVG", false, true);
  ggb1.instance.setFixed("cheese2SVG", false, true);
  ggb1.instance.setFixed("cheese3SVG", false, true);
  ggb1.instance.setValue("showLine1", false);
  ggb1.instance.setValue("showLine2", false);

  text21.updateData({ visible: true });
  buttonGroup21.updateData({ visible: true });
});

//clicking "Check it" when writing inequalities
buttonGroup23.on("click:1", () => {
  if (
    ggb1.instance.getValue("frogCompletelyInStudentInequality1") &&
    ggb1.instance.getValue("frogCompletelyInStudentInequality2") &&
    !(
      ggb1.instance.getValue("cheese1InStudentInequality1") &&
      ggb1.instance.getValue("cheese1InStudentInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese2InStudentInequality1") &&
      ggb1.instance.getValue("cheese2InStudentInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese3InStudentInequality1") &&
      ggb1.instance.getValue("cheese3InStudentInequality2")
    )
  ) {
    ggb1.instance.setValue("showStudentInequality1", true);
    ggb1.instance.setValue("showStudentInequality2", true);
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
        : `${ggb1.instance.getValue(
            "line1SlopeNumer"
          )}/${ggb1.instance.getValue("line1SlopeDenom")}x`;
    let slope2 =
      ggb1.instance.getValue("line2SlopeNumer") == 0
        ? ``
        : ggb1.instance.getValue("line2SlopeDenom") == 1
        ? `${ggb1.instance.getValue("line2SlopeNumer")}x`
        : `${ggb1.instance.getValue(
            "line2SlopeNumer"
          )}/${ggb1.instance.getValue("line2SlopeDenom")}x`;
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
      : `x${ineq1GreaterOrLess}${ineq1OrEqual}${ggb1.instance.getXcoord(
          "P1A"
        )}`;
    let ineq2Confirm = ggb1.instance.getValue("line2HasSlope")
      ? `y${ineq2GreaterOrLess}${ineq2OrEqual}${slope2}${intercept2}`
      : `x${ineq2GreaterOrLess}${ineq2OrEqual}${ggb1.instance.getXcoord(
          "P2A"
        )}`;
    let ineq1Init = getData("ineq1Init", "ggb1");
    let ineq2Init = getData("ineq2Init", "ggb1");
    let ineq1InitMatched =
      ineq1Init === ineq1Confirm || ineq1Init === ineq2Confirm;
    let ineq2InitMatched =
      ineq2Init === ineq1Confirm || ineq2Init === ineq2Confirm;
    if (
      ineq1InitMatched &&
      ineq2InitMatched &&
      (ineq1Init === ineq2Init) == (ineq1Confirm === ineq2Confirm)
    ) {
      //student has successfully graphed the previous system
      text27.updateData({
        text: "Great! You graphed your system of inequalities that captures the frog!",
      });
      ggb1.instance.setValue("allowLineControls", false);
      ggb1.instance.setValue("showLine1Points", false);
      ggb1.instance.setValue("showLine2Points", false);
      let finalAnswer1 = ineq1Init;
      let finalAnswer2 = ineq2Init;
      utils.RTS.sendData("slide-8086146665c9", {
        //package schema: [0: 0 for writeSystem or 1 for graphSystem, 1: [frogX, frogY], 2: [cheese1X, cheese1Y], 3: [cheese2X, cheese2Y], 4: [cheese3X, cheese3Y], 5: finalAnswer1, 6: finalAnswer2]
        thePackage: [
          [
            select1.data.selected[0],
            [
              ggb1.instance.getXcoord("FrogPoint"),
              ggb1.instance.getYcoord("FrogPoint"),
            ],
            [
              ggb1.instance.getXcoord("Cheese1Point"),
              ggb1.instance.getYcoord("Cheese1Point"),
            ],
            [
              ggb1.instance.getXcoord("Cheese2Point"),
              ggb1.instance.getYcoord("Cheese2Point"),
            ],
            [
              ggb1.instance.getXcoord("Cheese3Point"),
              ggb1.instance.getYcoord("Cheese3Point"),
            ],
            finalAnswer1,
            finalAnswer2,
          ],
        ],
      });
    } else {
      //student's new system does not match the previous system
      text26.updateData({
        text: "Try again!",
      });
    }
  }

  //for when student does not successfully capture frog with written inequalities
  else {
    text27.updateData({
      text: "Not yet... Keep trying to graph the system of inequalities that you initially graphed.",
    });
  }
  buttonGroup23.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
});

buttonGroup23.on("click:2", () => {
  text24.updateData({ visible: false });
  text25.updateData({ visible: false, text: "" });
  buttonGroup23.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup23.updateData({ visible: false });
  text26.updateData({ visible: false, text: "" });
  text27.updateData({ visible: false, text: "" });
  text22.updateData({ visible: true });
  buttonGroup22.updateData({ visible: true });
  text23.updateData({ visible: true, text: "" });
  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);
  ggb1.instance.setValue("allowLineControls", true);
  ggb1.instance.setValue("showLine1Points", true);
  ggb1.instance.setValue("showLine2Points", true);
  ggb1.instance.setFixed("P1A", false, true);
  ggb1.instance.setFixed("P1B", false, true);
  ggb1.instance.setFixed("P2A", false, true);
  ggb1.instance.setFixed("P2B", false, true);
  ggb1.instance.setCoords("P1A", -9, 7);
  ggb1.instance.setCoords("P1B", -7, 9);
  ggb1.instance.setCoords("P2A", 7, 9);
  ggb1.instance.setCoords("P2B", 9, 7);
});

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

function movedPoints() {
  text26.updateData({
    text: "",
  });
  ggb1.instance.setValue("showStudentInequality1", false);
  ggb1.instance.setValue("showStudentInequality2", false);
  buttonGroup23.updateSingleButton(
    {
      disabled: false,
    },
    1
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

//update system display as students enter their inequalities
autorun(() => {
  let inputInequality1 = input11.data.text;
  let inputInequality2 = input12.data.text;
  buttonGroup13.updateSingleButton(
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
  text16.updateData({
    text: `Your system:\n\n$\\begin{cases}
      ${inputInequality1} \\\\
      ${inputInequality2}
      \\end{cases}$`,
  });
});

/*
{"compTotals":{"textbox":17,"select":1,"separator":1,"buttongroup":7,"geogebra":1,"input":2},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"T layout"}
*/
