const {
  ggb1,
  feedback1,
  text2,
  input1,
  text3,
  input2,
  buttonGroup1,
  text4,
  text5,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerClientListener(clientFunction);

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

let finalAnswer1;
let finalAnswer2;

let convertedEquation1;
let convertedEquation2;

let subtleFill = 0.1;
let normalFill = 0.25;

let subtleLineThickness = 3;
let normalLineThickness = 5;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("showFrog", true);
    ggb1.instance.setValue("showCheese1", true);
    ggb1.instance.setValue("showCheese2", true);
    ggb1.instance.setValue("showCheese3", true);

    ggb1.instance.setCoords("FrogPoint", -1, 2);
    ggb1.instance.setCoords("Cheese1Point", -6, -2);
    ggb1.instance.setCoords("Cheese2Point", 4, -4);
    ggb1.instance.setCoords("Cheese3Point", 6, 4);

    ggb1.instance.setFixed("frogSVG", true, false);
    ggb1.instance.setFixed("cheese1SVG", true, false);
    ggb1.instance.setFixed("cheese2SVG", true, false);
    ggb1.instance.setFixed("cheese3SVG", true, false);

    ggb1.instance.setCoords("P1A", 0, 0);
    ggb1.instance.setCoords("P1B", 8, -1);
    ggb1.instance.setCoords("P2A", 0, 6);
    ggb1.instance.setCoords("P2B", 4, 0);

    ggb1.instance.setValue("line1OrEqual", false);
    ggb1.instance.setValue("line2Greater", false);
    ggb1.instance.setValue("line2OrEqual", true);

    ggb1.instance.setValue("showLine1Points", false);
    ggb1.instance.setValue("showLine2Points", false);
    ggb1.instance.setValue("allowLineControls", false);

    ggb1.instance.setFilling("inequality1", normalFill);
    ggb1.instance.setFilling("inequality2", normalFill);
    ggb1.instance.setLineThickness("inequality1", normalLineThickness);
    ggb1.instance.setLineThickness("inequality2", normalLineThickness);
    ggb1.updateData({ init: true });
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

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );

  finalAnswer1 = formatInput(input1.data.text);
  finalAnswer2 = formatInput(input2.data.text);

  convertedEquation1 = convertToEquation(finalAnswer1);
  convertedEquation2 = convertToEquation(finalAnswer2);

  let includesInequality1 =
    finalAnswer1.includes(">") || finalAnswer1.includes("<");
  let includesInequality2 =
    finalAnswer2.includes(">") || finalAnswer2.includes("<");

  ggb1.instance.evalCommand(`equationTest1: ${convertedEquation1}`);
  ggb1.instance.evalCommand(`equationTest2: ${convertedEquation2}`);

  let isLinearEquation1 = ggb1.instance.getObjectType("equationTest1");
  let isLinearEquation2 = ggb1.instance.getObjectType("equationTest2");

  //delete equationTest1 and equationTest2 as they aren't acutally needed any longer
  ggb1.instance.deleteObject("equationTest1");
  ggb1.instance.deleteObject("equationTest2");

  //if students write two linear inequalities, graph them!
  if (
    includesInequality1 &&
    includesInequality2 &&
    isLinearEquation1 &&
    isLinearEquation2
  ) {
    ggb1.instance.setFilling("inequality1", subtleFill);
    ggb1.instance.setFilling("inequality2", subtleFill);
    ggb1.instance.setLineThickness("inequality1", subtleLineThickness);
    ggb1.instance.setLineThickness("inequality2", subtleLineThickness);

    ggb1.instance.evalCommand(`studentLine1: ${convertedEquation1}`);
    ggb1.instance.evalCommand(`studentLine2: ${convertedEquation2}`);

    ggb1.instance.evalCommand("studentInequality1: " + finalAnswer1);
    ggb1.instance.evalCommand("studentInequality2: " + finalAnswer2);

    ggb1.instance.setValue("showStudentInequality1", true);
    ggb1.instance.setValue("showStudentInequality2", true);
    if (
      ((ggb1.instance.getValue("inequality1AndStudent1Same") &&
        finalAnswer1.includes("=") == ggb1.instance.getValue("line1OrEqual")) ||
        (ggb1.instance.getValue("inequality1AndStudent2Same") &&
          finalAnswer2.includes("=") ==
            ggb1.instance.getValue("line1OrEqual"))) &&
      ((ggb1.instance.getValue("inequality2AndStudent1Same") &&
        finalAnswer1.includes("=") == ggb1.instance.getValue("line2OrEqual")) ||
        (ggb1.instance.getValue("inequality2AndStudent2Same") &&
          finalAnswer2.includes("=") == ggb1.instance.getValue("line2OrEqual")))
    ) {
      text5.updateData({ text: `#### Great! A perfect match!` });
    } else {
      text5.updateData({
        text: `#### The graph of the solution set doesn't match exactly. Keep trying!`,
      });
    }
  }
  //if students do NOT write two linear inequalities, tell them!
  else {
    text5.updateData({
      text: "#### Be sure to write two linear inequalities.",
    });
  }
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

function convertToEquation(a) {
  let removeGreaterThan = a.replace(/>/, "=");
  let removeLessThan = removeGreaterThan.replace(/</, "=");
  let convertedToEquation = removeLessThan.replace(/==/g, "=");
  return convertedToEquation;
}

//update system display as students enter their inequalities
autorun(() => {
  let inputInequality1 = input1.data.text;
  let inputInequality2 = input2.data.text;
  if (inputInequality1 != "" && inputInequality2 != "") {
    buttonGroup1.updateSingleButton(
      {
        disabled: false,
      },
      1
    );
  }
  if (inputInequality1 == "") {
    inputInequality1 = `\\color{A0A0A0}\\text{\[enter first inequality above\]}`;
  }
  if (inputInequality2 == "") {
    inputInequality2 = `\\color{A0A0A0}\\text{\[enter second inequality above\]}`;
  }
  ggb1.instance.setValue("showStudentInequality1", false);
  ggb1.instance.setValue("showStudentInequality2", false);
  ggb1.instance.setFilling("inequality1", normalFill);
  ggb1.instance.setFilling("inequality2", normalFill);
  ggb1.instance.setLineThickness("inequality1", normalLineThickness);
  ggb1.instance.setLineThickness("inequality2", normalLineThickness);
  text5.updateData({ text: "" });
  text4.updateData({
    text: `#### Your system:\n\n$\\huge\\begin{cases}
    ${inputInequality1}\\\\
    ${inputInequality2}
        \\end{cases}$`,
  });
});

/*
{"compTotals":{"geogebra":1,"textbox":5,"input":2,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Print Alt: Solution Sets of Systems of Linear Inequalities","teacherView":true,"layout":"two col"}
*/
