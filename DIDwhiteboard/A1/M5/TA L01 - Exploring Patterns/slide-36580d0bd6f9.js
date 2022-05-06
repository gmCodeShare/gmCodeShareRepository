const {
  ggb1,
  feedback1,
  ggb2,
  cc_submit_b805fb23bc96_textbox1,
  cc_submit_b805fb23bc96_input1,
  cc_submit_b805fb23bc96_button1: button1,
  cc_sharewithclass_6fa98b82d591_textbox1: text2,
  cc_sharewithclass_6fa98b82d591_input1: input2,
  cc_sharewithclass_6fa98b82d591_button1: button2,
  cc_sharewithclass_6fa98b82d591_studentanswers1,
} = components;

ggb1.instance.setValue("showTable", true);
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

const defTable = {
  data: {
    rows: [
      [{ value: "" }, { value: "" }],
      [{ value: "" }, { value: "" }],
      [{ value: "" }, { value: "" }],
      [{ value: "" }, { value: "" }],
      [{ value: "" }, { value: "" }],
    ],
  },
};

let num = getFromSlide("slide-4b5052d79a45", "table1", defTable) || defTable;
let inp1 = num.data.rows[0][1].value;
let inp2 = num.data.rows[1][1].value;
let inp3 = num.data.rows[2][1].value;
let inp4 = num.data.rows[3][1].value;
let inp5 = num.data.rows[4][1].value;

if (inp1) {
  ggb1.instance.setValue("input1", inp1);
  ggb1.instance.evalCommand("A=(1," + inp1 + ")");
  ggb1.instance.setVisible("A", true);
}
if (inp2) {
  ggb1.instance.setValue("input2", inp2);
  ggb1.instance.evalCommand("B=(2, " + inp2 + ")");
  ggb1.instance.setVisible("B", true);
}
if (inp3) {
  ggb1.instance.setValue("input3", inp3);
  ggb1.instance.evalCommand("C=(3, " + inp3 + ")");
  ggb1.instance.setVisible("C", true);
}
if (inp4) {
  ggb1.instance.setValue("input4", inp4);
  ggb1.instance.evalCommand("D=(4, " + inp4 + ")");
  ggb1.instance.setVisible("D", true);
}
if (inp5) {
  ggb1.instance.setValue("input5", inp5);
  ggb1.instance.evalCommand("E=(5, " + inp5 + ")");
  ggb1.instance.setVisible("E", true);
}

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":2,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TA L01 - Exploring Patterns","teacherView":false,"layout":"two col"}
*/
