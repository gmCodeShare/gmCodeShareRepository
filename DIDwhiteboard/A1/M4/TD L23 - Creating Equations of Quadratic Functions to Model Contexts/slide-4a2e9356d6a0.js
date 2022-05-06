const {
  ggb1,
  feedback1,
  table1,
  cc_sharewithclass_125305f77b2f_textbox1,
  cc_sharewithclass_125305f77b2f_input1: input1,
  cc_sharewithclass_125305f77b2f_button1: button1,
  cc_sharewithclass_125305f77b2f_studentanswers1,
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

const defGGB = {
  innerData: false,
};

const id = "slide-cbc7ba2ab067";
let data1 = getFromSlide(id, "ggb1", defGGB) || defGGB;

if (data1.innerData) {
  ggb1.instance.setValue("mph1", data1.innerData["mph1"]);
  ggb1.instance.setValue("mph2", data1.innerData["mph2"]);
  ggb1.instance.setValue("mph3", data1.innerData["mph3"]);
  ggb1.instance.setValue("mph4", data1.innerData["mph4"]);
  ggb1.instance.setValue("mph5", data1.innerData["mph5"]);
  ggb1.instance.setValue("mpg1", data1.innerData["mpg1"]);
  ggb1.instance.setValue("mpg2", data1.innerData["mpg2"]);
  ggb1.instance.setValue("mpg3", data1.innerData["mpg3"]);
  ggb1.instance.setValue("mpg4", data1.innerData["mpg4"]);
  ggb1.instance.setValue("mpg5", data1.innerData["mpg5"]);
  let num = Math.round(data1.innerData["mpg1"] * 100) / 100;
  let num2 = Math.round(data1.innerData["mpg2"] * 100) / 100;
  let num3 = Math.round(data1.innerData["mpg3"] * 100) / 100;
  let num4 = Math.round(data1.innerData["mpg4"] * 100) / 100;
  let num5 = Math.round(data1.innerData["mpg5"] * 100) / 100;
  if (data1.innerData["mph1"] != 0) {
    ggb1.instance.setVisible("A", true);
    table1.updateCell(0, 0, { value: `$${data1.innerData["mph1"]}$` });
    table1.updateCell(0, 1, { value: `$${num}$` });
  }
  if (data1.innerData["mph1"] == 0) {
    let equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
    table1.updateCell(0, 0, { value: `$${equa}$` });
    table1.updateCell(0, 1, { value: `$${equa}$` });
  }
  if (data1.innerData["mph2"] != 0) {
    ggb1.instance.setVisible("B", true);
    table1.updateCell(1, 0, { value: `$${data1.innerData["mph2"]}$` });
    table1.updateCell(1, 1, { value: `$${num2}$` });
  }
  if (data1.innerData["mph2"] == 0) {
    let equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
    table1.updateCell(1, 0, { value: `$${equa}$` });
    table1.updateCell(1, 1, { value: `$${equa}$` });
  }
  if (data1.innerData["mph3"] != 0) {
    ggb1.instance.setVisible("C", true);
    table1.updateCell(2, 0, { value: `$${data1.innerData["mph3"]}$` });
    table1.updateCell(2, 1, { value: `$${num3}$` });
  }
  if (data1.innerData["mph3"] == 0) {
    let equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
    table1.updateCell(2, 0, { value: `$${equa}$` });
    table1.updateCell(2, 1, { value: `$${equa}$` });
  }
  if (data1.innerData["mph4"] != 0) {
    ggb1.instance.setVisible("D", true);
    table1.updateCell(3, 0, { value: `$${data1.innerData["mph4"]}$` });
    table1.updateCell(3, 1, { value: `$${num4}$` });
  }
  if (data1.innerData["mph4"] == 0) {
    let equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
    table1.updateCell(3, 0, { value: `$${equa}$` });
    table1.updateCell(3, 1, { value: `$${equa}$` });
  }
  if (data1.innerData["mph5"] != 0) {
    ggb1.instance.setVisible("E", true);
    table1.updateCell(4, 0, { value: `$${data1.innerData["mph5"]}$` });
    table1.updateCell(4, 1, { value: `$${num5}$` });
  }
  if (data1.innerData["mph5"] == 0) {
    let equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
    table1.updateCell(4, 0, { value: `$${equa}$` });
    table1.updateCell(4, 1, { value: `$${equa}$` });
  }
} else {
  let equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
  table1.updateCell(0, 0, { value: `$${equa}$` });
  table1.updateCell(0, 1, { value: `$${equa}$` });
  table1.updateCell(1, 0, { value: `$${equa}$` });
  table1.updateCell(1, 1, { value: `$${equa}$` });
  table1.updateCell(2, 0, { value: `$${equa}$` });
  table1.updateCell(2, 1, { value: `$${equa}$` });
  table1.updateCell(3, 0, { value: `$${equa}$` });
  table1.updateCell(3, 1, { value: `$${equa}$` });
  table1.updateCell(4, 0, { value: `$${equa}$` });
  table1.updateCell(4, 1, { value: `$${equa}$` });
}

button1.on("click", () => {
  const inputPlain = undoLaTeX(input1.data.text);
  const expression = inputPlain.replace(/f\(x\)=/, "");
  ggb1.instance.setErrorDialogsActive(false);
  let newFunc = ggb1.instance.evalCommandGetLabels(expression);
  ggb1.instance.setVisible(newFunc, false);
  if (newFunc) {
    ggb1.instance.evalLaTeX(`g: ${expression}`);
    ggb1.instance.setFixed("g", false, false);
    ggb1.instance.setVisible("g", true);
    //ggb1.instance.evalCommand(`shortenedG=If(0<=x<=x(Intersect(xAxis,${expression},2)), ${expression})`);
    //ggb1.instance.setFixed("shortenedG", false, false);
    //ggb1.instance.setVisible("shortenedG", true);
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
{"compTotals":{"geogebra":1,"textbox":1,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Creating Equations of Quadratic Functions to Model Contexts","teacherView":false,"layout":"two col"}
*/
