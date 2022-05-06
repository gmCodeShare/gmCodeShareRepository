const {
  ggb1,
  feedback,
  cc_submit_0536db8bd072_textbox1,
  cc_submit_0536db8bd072_input1,
  cc_submit_0536db8bd072_button1: button1,
  separator3,
  text1,
  select1,
  select2,
  select3,
} = components;

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

ggb1.instance.setErrorDialogsActive(false);

const id1 = `slide-2d29b9ef84f9`;
/*
slide.on("firstload", () => {
  cc_submit_0536db8bd072_textbox1.updateData({
    text: `What is the product $\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}$?`,
  });
});
*/
let sel1 = getFromSlide(id1, "select1.data.selected", []) || [];
let sel2 = getFromSlide(id1, "select2.data.selected", []) || [];
let sel3 = getFromSlide(id1, "select3.data.selected", []) || [];
let sel4 = getFromSlide(id1, "select4.data.selected", []) || [];
let sel5 = getFromSlide(id1, "select5.data.selected", []) || [];
let sel6 = getFromSlide(id1, "select6.data.selected", []) || [];
let sel7 = getFromSlide(id1, "select7.data.selected", []) || [];
let sel8 = getFromSlide(id1, "select8.data.selected", []) || [];
// console.log(sel1[0]);
var first1 = [
  "-2x^2",
  "4",
  "-\\frac{7}{2}x",
  "0.4x",
  "-3",
  "x^2",
  "5x",
  "-0.1x^2",
];
var first2 = [
  "+16",
  "+\\frac{2}{3}x",
  "-1.9",
  "-x^2",
  "+7.5",
  "+2x",
  "+\\frac{1}{2}x^2",
  "-5",
];
var first3 = [
  "+3x^2",
  "-8",
  "-3.5x",
  "+\\frac{5}{4}x^2",
  "+3",
  "+x",
  "-6x^2",
  "+\\frac{3}{2}",
];
var second1 = [
  "-2x^2",
  "4",
  "-\\frac{7}{2}x",
  "0.4x",
  "-3",
  "x^2",
  "5x",
  "-0.1x^2",
];
var second2 = [
  "+16",
  "+\\frac{2}{3}x",
  "-1.9",
  "-x^2",
  "+7.5",
  "+2x",
  "+\\frac{1}{2}x^2",
  "-5",
];
var second3 = [
  "+3x^2",
  "-8",
  "-3.5x",
  "+\\frac{5}{4}x^2",
  "+3",
  "+x",
  "-6x^2",
  "+\\frac{3}{2}",
];
let num11 = first1[parseInt(sel3)];
let num12 = first2[parseInt(sel4)];
let num13 = first3[parseInt(sel5)];
let num21 = second1[parseInt(sel6)];
let num22 = second2[parseInt(sel7)];
let num23 = second3[parseInt(sel8)];
if (!num11) {
  num11 = "\\Box";
}
if (!num12) {
  num12 = "+\\Box";
}
if (!num13) {
  num13 = "+\\Box";
}
if (!num21) {
  num21 = "\\Box";
}
if (!num22) {
  num22 = "+\\Box";
}
if (!num23) {
  num23 = "+\\Box";
}
if (sel1[0] == 0) {
  cc_submit_0536db8bd072_textbox1.updateData({
    text: `What is the product\n\n$(${num11}${num12})(\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}$)?`,
  });
}
if (sel1[0] == 1) {
  cc_submit_0536db8bd072_textbox1.updateData({
    text: `What is the product\n\n$(${num11}${num12}${num13})(\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}$)?`,
  });
}

let exp1 = "";
let exp2 = cc_submit_0536db8bd072_input1.data.text;

if (sel1[0] == 0 && sel2[0] == 0) {
  exp1 = "(" + num11 + num12 + ")(" + num21 + num22 + ")";
  // console.log(exp1);
}

if (sel1[0] == 0 && sel2[0] == 1) {
  exp1 = "(" + num11 + num12 + ")(" + num21 + num22 + num23 + ")";
  // console.log(exp1);
}

if (sel1[0] == 1 && sel2[0] == 0) {
  exp1 = "(" + num11 + num12 + num13 + ")(" + num21 + num22 + ")";
  // console.log(exp1);
}

if (sel1[0] == 1 && sel2[0] == 1) {
  exp1 = "(" + num11 + num12 + num13 + ")(" + num21 + num22 + num23 + ")";
  // console.log(exp1);
}

if (sel2.length) {
  cc_submit_0536db8bd072_textbox1.updateData({
    text: `What is the product\n\n$${exp1}$?`,
  });
}

function undoLaTeX(inp) {
  let frac = inp.replace(/\\frac{/g, "(");
  let fracMid = frac.replace(/\}\{/g, ")/(");
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
  let finalAnswer = cDot.replace(/\\Box/g, "0");
  return finalAnswer;
}

button1.on("click", () => {
  exp2 = cc_submit_0536db8bd072_input1.data.text;
  let smoothExp1 = '"' + undoLaTeX(exp1).toString() + '"';
  let smoothExp2 = '"' + undoLaTeX(exp2).toString() + '"';
  ggb1.instance.evalCommand("ParseToFunction(exp1," + smoothExp1 + ")");
  ggb1.instance.evalCommand("ParseToFunction(exp2," + smoothExp2 + ")");
  // console.log(smoothExp2);
  let letterCheck = /[a-w|y-z]/;
  if (
    letterCheck.test(smoothExp2) == false &&
    ggb1.instance.getValue("isCorrect") == 1
  ) {
    text1.updateData({ text: "Great work!" });

    utils.RTS.sendData("slide-74e5ac695299", {
      //package schema: [0: exp1]
      thePackage: exp1,
    });
  } else {
    text1.updateData({
      text: "The expression and your product are not equivalent.",
    });
  }
});

slide.on("firstload", () => {
  ggb1.updateData({ visible: false });
  ggb1.instance.setValue("first", 2);
  ggb1.instance.setValue("second", 2);
  select2.setVisible(false);
  select3.setVisible(false);
  select2.selectOption("0");
  select3.selectOption("0");
});

autorun(() => {
  // console.log(select1.data.selected);
  if (select1.data.selected.includes("0")) {
    ggb1.updateData({ visible: true });
    select2.setVisible(true);
    select3.setVisible(true);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.updateData({ visible: false });
    select2.setVisible(false);
    select3.setVisible(false);
  }
});

select2.on("change", (selected) => {
  if (select2.data.selected[0] == 0) {
    ggb1.instance.setValue("Rows", 2);
  }
  if (select2.data.selected[0] == 1) {
    ggb1.instance.setValue("Rows", 3);
  }
});

select3.on("change", (selected) => {
  if (select3.data.selected[0] == 0) {
    ggb1.instance.setValue("Columns", 2);
  }
  if (select3.data.selected[0] == 1) {
    ggb1.instance.setValue("Columns", 3);
  }
  // console.log(select3.data.selected[0]);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"select":3},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
