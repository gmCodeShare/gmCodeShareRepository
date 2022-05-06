const {
  table1,
  ggb1,
  cc_sharewithclass_cdfa55774547_textbox1: text2,
  cc_sharewithclass_cdfa55774547_input1: input1,
  cc_sharewithclass_cdfa55774547_button1: button1,
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

const defTable = {
  data: {
    rows: [
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
    ],
  },
};

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

const id1 = "slide-1a0fd993032e";
let content = getFromSlide(id1, "table1", defTable) || defTable;
let num = content.data.rows[0][0].value;
let num2 = content.data.rows[0][2].value;

let content2 = getFromSlide(id1, "table2", defTable) || defTable;
let num3 = content2.data.rows[0][0].value;
let num4 = content2.data.rows[0][2].value;
let num5 = content2.data.rows[1][0].value;
let num6 = content2.data.rows[1][2].value;

const id2 = "slide-8e74cc3defa1";
let content3 = getFromSlide(id2, "table1", defTable) || defTable;
let num7 = content3.data.rows[3][0].value;
let num8 = content3.data.rows[3][1].value;
let num9 = content3.data.rows[4][0].value;
let num10 = content3.data.rows[4][1].value;
let num11 = content3.data.rows[5][0].value;
let num12 = content3.data.rows[5][1].value;

let total = 0;
const result = utils.math.evaluateLatex(content.data.rows[0][0].value);
const result2 = utils.math.evaluateLatex(content.data.rows[0][2].value);
total = result.value - result2.value;

let total2 = 0;
const result3 = utils.math.evaluateLatex(content2.data.rows[0][0].value);
const result4 = utils.math.evaluateLatex(content2.data.rows[0][2].value);
total2 = result3.value - result4.value;

let total3 = 0;
const result5 = utils.math.evaluateLatex(content2.data.rows[1][0].value);
const result6 = utils.math.evaluateLatex(content2.data.rows[1][2].value);
total3 = result5.value - result6.value;

let total4 = 0;
const result7 = utils.math.evaluateLatex(content3.data.rows[3][0].value);
const result8 = utils.math.evaluateLatex(content3.data.rows[3][1].value);
total4 = result7.value - result8.value;

let total5 = 0;
const result9 = utils.math.evaluateLatex(content3.data.rows[4][0].value);
const result10 = utils.math.evaluateLatex(content3.data.rows[4][1].value);
total5 = result9.value - result10.value;

let total6 = 0;
const result11 = utils.math.evaluateLatex(content3.data.rows[5][0].value);
const result12 = utils.math.evaluateLatex(content3.data.rows[5][1].value);
total6 = result11.value - result12.value;

if (!num || content.data.rows[0][0].value == "") {
  num = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  num2 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(0, 0, { value: `${num}` });
  table1.updateCell(0, 1, { value: `${num2}` });
  table1.updateCell(0, 2, { value: `` });
  ggb1.instance.setVisible("D", false);
}

if (total == 6) {
  num = content.data.rows[0][0].value;
  num2 = content.data.rows[0][2].value;
  ggb1.instance.evalCommand("D=(" + num + "," + num2 + ")");
  ggb1.instance.setVisible("D", true);
  table1.updateCell(0, 0, { value: `${num}` });
  table1.updateCell(0, 1, { value: `${num2}` });
  table1.updateCell(0, 2, { value: `(${num}, ${num2})` });
}

if (total != 6 && content.data.rows[0][0].value != "") {
  table1.updateCell(0, 0, { value: `` });
  table1.updateCell(0, 1, { value: `` });
  table1.updateCell(0, 2, { value: `` });

  ggb1.instance.setVisible("D", false);
}

if (!num3 || content2.data.rows[0][0].value == "") {
  num3 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  num4 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  ggb1.instance.setVisible("E", false);
  table1.updateCell(1, 0, { value: `${num3}` });
  table1.updateCell(1, 1, { value: `${num4}` });
  table1.updateCell(1, 2, { value: `` });
}

if (total2 == 6) {
  num3 = content2.data.rows[0][0].value;
  num4 = content2.data.rows[0][2].value;
  ggb1.instance.evalCommand("E=(" + num3 + "," + num4 + ")");
  ggb1.instance.setVisible("E", true);
  table1.updateCell(1, 0, { value: `${num3}` });
  table1.updateCell(1, 1, { value: `${num4}` });
  table1.updateCell(1, 2, { value: `(${num3}, ${num4})` });
}

if (total2 != 6 && content2.data.rows[0][0].value != "") {
  ggb1.instance.setVisible("E", false);
  table1.updateCell(1, 0, { value: `` });
  table1.updateCell(1, 1, { value: `` });
  table1.updateCell(1, 2, { value: `` });
}

if (!num5 || content2.data.rows[1][0].value == "") {
  num5 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  num6 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  ggb1.instance.setVisible("F", false);
  table1.updateCell(2, 0, { value: `${num5}` });
  table1.updateCell(2, 1, { value: `${num6}` });
  table1.updateCell(2, 2, { value: `` });
}

if (total3 == 6) {
  num5 = content2.data.rows[1][0].value;
  num6 = content2.data.rows[1][2].value;
  ggb1.instance.evalCommand("F=(" + num5 + "," + num6 + ")");
  ggb1.instance.setVisible("F", true);
  table1.updateCell(2, 0, { value: `${num5}` });
  table1.updateCell(2, 1, { value: `${num6}` });
  table1.updateCell(2, 2, { value: `(${num5}, ${num6})` });
}

if (total3 != 6 && content2.data.rows[1][0].value != "") {
  ggb1.instance.setVisible("F", false);
  table1.updateCell(2, 0, { value: `` });
  table1.updateCell(2, 1, { value: `` });
  table1.updateCell(2, 2, { value: `` });
}

if (!num7 || content3.data.rows[3][0].value == "") {
  num7 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}`;
  num8 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}`;
  ggb1.instance.setVisible("G", false);
  table1.updateCell(3, 0, { value: `${num7}` });
  table1.updateCell(3, 1, { value: `${num8}` });
  table1.updateCell(3, 2, { value: `` });
}

if (total4 == 6) {
  num7 = content3.data.rows[3][0].value;
  num8 = content3.data.rows[3][1].value;
  ggb1.instance.evalCommand("G=(" + num7 + "," + num8 + ")");
  ggb1.instance.setVisible("G", true);
  table1.updateCell(3, 0, { value: `${num7}` });
  table1.updateCell(3, 1, { value: `${num8}` });
  table1.updateCell(3, 2, { value: `(${num7}, ${num8})` });
}

if (total4 != 6 && content3.data.rows[3][0].value != "") {
  ggb1.instance.setVisible("G", false);
  table1.updateCell(3, 0, { value: `` });
  table1.updateCell(3, 1, { value: `` });
  table1.updateCell(3, 2, { value: `` });
}

if (!num9 || content3.data.rows[4][0].value == "") {
  num9 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}`;
  num10 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}`;
  ggb1.instance.setVisible("H", false);
  table1.updateCell(4, 0, { value: `${num9}` });
  table1.updateCell(4, 1, { value: `${num10}` });
  table1.updateCell(4, 2, { value: `` });
}

if (total5 == 6) {
  num9 = content3.data.rows[4][0].value;
  num10 = content3.data.rows[4][1].value;
  ggb1.instance.evalCommand("H=(" + num9 + "," + num10 + ")");
  ggb1.instance.setVisible("H", true);
  table1.updateCell(4, 0, { value: `${num9}` });
  table1.updateCell(4, 1, { value: `${num10}` });
  table1.updateCell(4, 2, { value: `(${num9}, ${num10})` });
}

if (total5 != 6 && content3.data.rows[4][0].value != "") {
  ggb1.instance.setVisible("H", false);
  table1.updateCell(4, 0, { value: `` });
  table1.updateCell(4, 1, { value: `` });
  table1.updateCell(4, 2, { value: `` });
}

if (!num11 || content3.data.rows[5][0].value == "") {
  num11 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}`;
  num12 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}`;
  ggb1.instance.setVisible("I", false);
  table1.updateCell(5, 0, { value: `${num11}` });
  table1.updateCell(5, 1, { value: `${num12}` });
  table1.updateCell(5, 2, { value: `` });
}

if (total6 == 6) {
  num11 = content3.data.rows[5][0].value;
  num12 = content3.data.rows[5][1].value;
  ggb1.instance.evalCommand("I=(" + num11 + "," + num12 + ")");
  ggb1.instance.setVisible("I", true);
  table1.updateCell(5, 0, { value: `${num11}` });
  table1.updateCell(5, 1, { value: `${num12}` });
  table1.updateCell(5, 2, { value: `(${num11}, ${num12})` });
}

if (total6 != 6 && content3.data.rows[5][0].value != "") {
  ggb1.instance.setVisible("I", false);
  table1.updateCell(5, 0, { value: `` });
  table1.updateCell(5, 1, { value: `` });
  table1.updateCell(5, 2, { value: `` });
}

ggb1.instance.registerObjectUpdateListener("enablePrompt", update);

function update() {
  if (ggb1.instance.getValue("enablePrompt")) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
}
