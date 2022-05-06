const {
  ggb1,
  feedback1,
  cc_sharewithclass_ec89b8d691e9_textbox1: text1,
  cc_sharewithclass_ec89b8d691e9_input1: input1,
  cc_sharewithclass_ec89b8d691e9_button1: button1,
  cc_sharewithclass_ec89b8d691e9_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

const id1 = "slide-bbd08465e52e";
let num1 =
  getFromSlide(id1, "cc_sharewithclass_1d21611696e7_input1.data.text", "") ||
  "";

const id2 = "slide-4958b7d7f783";
let num2 =
  getFromSlide(id2, "cc_sharewithclass_ec89b8d691e9_input1.data.text", "") ||
  "";

if (!num1) {
  num1 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

if (!num2) {
  num2 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}$`;
}

text1.updateData({
  text: `You said the price per ticket is $${num1}$ and the number of tickets sold is $${num2}$.\n\nLet $R$ represent the total revenue from ticket sales as a function of the change in price from $\\$12$.\n\nWrite an equation for $R$.`,
});

button1.on("click", () => {
  const inputPlain = undoLaTeX(input1.data.text);
  const expression = inputPlain.replace(/R\(x\)=/, "");
  ggb1.instance.setErrorDialogsActive(false);
  let newFunc = ggb1.instance.evalCommandGetLabels(expression);
  ggb1.instance.setVisible(newFunc, false);
  if (newFunc) {
    ggb1.instance.evalLaTeX(`g: ${expression}`);
    ggb1.instance.setFixed("g", false, false);
    ggb1.instance.setVisible("g", true);
  }
  ggb1.instance.deleteObject(newFunc);
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
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TB L11 - Graphing Quadratic Functions from Factored Form","teacherView":false,"layout":"two col"}
*/
