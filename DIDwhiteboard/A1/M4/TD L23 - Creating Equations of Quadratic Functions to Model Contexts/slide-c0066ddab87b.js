const {
  text2,
  ggb1,
  feedback1,
  cc_sharewithclass_125305f77b2f_textbox1,
  cc_sharewithclass_125305f77b2f_input1: input1,
  cc_sharewithclass_125305f77b2f_button1: button1,
  cc_sharewithclass_125305f77b2f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let equa =
  getFromSlide(
    `slide-4a2e9356d6a0`,
    `cc_sharewithclass_125305f77b2f_input1.data.text`,
    ""
  ) || "";

if (equa) {
  const inputPlain = undoLaTeX(equa);
  const expression = inputPlain.replace(/f\(x\)=/, "");
  ggb1.instance.setErrorDialogsActive(false);
  let newFunc = ggb1.instance.evalCommandGetLabels(expression);
  ggb1.instance.setVisible(newFunc, false);
  if (newFunc) {
    ggb1.instance.evalLaTeX(`g: ${expression}`);
    ggb1.instance.setFixed("g", false, false);
    ggb1.instance.setVisible("g", true);
    text2.updateData({ text: `$\\color{007FAF}${equa}$` });
  }
  ggb1.instance.deleteObject(newFunc);
}

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
{"compTotals":{"textbox":2,"geogebra":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Creating Equations of Quadratic Functions to Model Contexts","teacherView":false,"layout":"two col"}
*/
