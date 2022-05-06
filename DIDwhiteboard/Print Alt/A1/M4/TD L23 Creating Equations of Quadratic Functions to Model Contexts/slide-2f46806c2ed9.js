const { buttonGroup1, text2, ggb1, feedback1, ggb2 } = components;

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb2.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

let equa =
  getFromSlide(
    `slide-4a2e9356d6a0`,
    `cc_submit_9ebb80dbbcf2_input1.data.text`,
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

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data };
    } else {
      newButtonGroupData[i] = bgButtons[i];
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData });
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb2.updateData({ visible: true });
  ggb2.instance.setAnimating("time", false);
  ggb2.instance.setValue("time", 0.03);
  ggb2.instance.setAnimating("time", true);
  ggb2.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb2.instance.stopAnimation();
  ggb2.instance.setAnimating("time", false);
  ggb2.instance.setValue("time", 0.03);
});

/*
{"compTotals":{"buttongroup":1,"textbox":2,"geogebra":2},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Print Alternate Slide Deck for  Creating Equations of Quadratic Functions to Model Contexts","teacherView":true,"layout":"T layout"}
*/
