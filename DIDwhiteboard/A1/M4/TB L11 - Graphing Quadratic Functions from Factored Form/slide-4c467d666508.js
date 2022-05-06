const {
  ggb1,
  feedback1,
  cc_submit_c8d3d74d7ebf_textbox1: text1,
  cc_submit_c8d3d74d7ebf_input1,
  cc_submit_c8d3d74d7ebf_button1: button1,
  separator1,
  cc_sharewithclass_4c8a4f8419d8_textbox1: text2,
  cc_sharewithclass_4c8a4f8419d8_input1: input2,
  cc_sharewithclass_4c8a4f8419d8_button1: button2,
  cc_sharewithclass_4c8a4f8419d8_studentanswers1,
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

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

const id = `slide-5626df25e585`;
let equa =
  getFromSlide(id, `cc_sharewithclass_ec89b8d691e9_input1.data.text`, "") || "";

if (!equa || equa == "R(x)=") {
  equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`;
} else {
  const inputPlain = undoLaTeX(equa);
  const expression = inputPlain.replace(/R\(x\)=/, "");
  ggb1.instance.setErrorDialogsActive(false);
  let newFunc = ggb1.instance.evalCommandGetLabels(expression);
  ggb1.instance.setVisible(newFunc, false);
  if (newFunc) {
    ggb1.instance.evalLaTeX(`g: ${expression}`);
    ggb1.instance.setFixed("g", false, false);
    ggb1.instance.setVisible("g", true);
    ggb1.instance.setVisible("LeftXInt", true);
    ggb1.instance.setVisible("RightXInt", true);
    ggb1.instance.setVisible("Vertex", true);
    ggb1.instance.setValue("showIntercepts", true);
    ggb1.instance.setValue("showVertex", true);
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

text1.updateData({
  text: `$${equa}$\n\nWhat is the $x$-coordinate of the vertex?`,
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

function isFunc(thing) {
  const funcTypes = ["conic", "parabola", "function", "line", "cubic"];
  return funcTypes.includes(ggb1.instance.getObjectType(thing));
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TB L11 - Graphing Quadratic Functions from Factored Form","teacherView":false,"layout":"two col"}
*/
