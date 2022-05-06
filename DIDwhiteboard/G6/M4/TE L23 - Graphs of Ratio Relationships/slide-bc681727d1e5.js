const {
  text3,
  ggb1,
  table1,
  feedback1,
  text1,
  text2,
  buttonGroup1,
  cc_submit_b7fec06f5b20_textbox1: submitText1,
  cc_submit_b7fec06f5b20_input1: input1,
  cc_submit_b7fec06f5b20_button1: button1,
  separator6,
  cc_sharewithclass_4bf3a6f2c59f_textbox1: text4,
  cc_sharewithclass_4bf3a6f2c59f_input1: input4,
  cc_sharewithclass_4bf3a6f2c59f_button1: button4,
  cc_sharewithclass_4bf3a6f2c59f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('C3', false);
    ggb1.updateData({ visible: false });
    table1.updateData({ visible: false });
    text4.updateData({ visible: false });
    input4.updateData({ visible: false });
    button4.updateData({ visible: false });
    submitText1.updateData({ visible: false });
    input1.updateData({ visible: false, text: '$' });
    button1.updateData({ visible: false });
    ggb1.instance.setVisible('pic3', false);
    ggb1.instance.setVisible('Point1', false);
    ggb1.instance.setVisible('Point2', false);
    ggb1.instance.setVisible('Point3', false);
    ggb1.instance.setVisible('Point4', false);
    ggb1.instance.setVisible('Point5', false);
    ggb1.instance.setVisible('C1', false);
    ggb1.instance.setVisible('C2', false);
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);

    ggb1.updateData({ init: true });
  }
}

let num;
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  let num = 'table';
  ggb1.updateData({ visible: false });
  table1.updateData({ visible: true });
  /*ggb1.instance.setVisible("pic3", true);
ggb1.instance.setVisible("Point1", false);
ggb1.instance.setVisible("Point2", false);
ggb1.instance.setVisible("Point3", false);
ggb1.instance.setVisible("Point4", false);
ggb1.instance.setVisible("Point5", false);
ggb1.instance.setVisible("submitText1", false);
ggb1.instance.setVisible("text2", false);
ggb1.instance.setGridVisible(false);
ggb1.instance.setAxesVisible(false, false);
ggb1.instance.setVisible("text3", false);
ggb1.updateData({visible:true});
submitText1.updateData({visible:true});
input1.updateData({visible:true});
button1.updateData({visible:true});*/
  text4.updateData({
    text: ` Explain how the ${num} helps you find the answer.`,
  });
});
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  let num = 'graph';
  ggb1.instance.setVisible('pic3', false);
  ggb1.instance.setVisible('Point1', true);
  ggb1.instance.setVisible('Point2', true);
  ggb1.instance.setVisible('Point3', true);
  ggb1.instance.setVisible('Point4', true);
  ggb1.instance.setVisible('Point5', true);
  ggb1.instance.setVisible('C1', true);
  ggb1.instance.setVisible('C2', true);
  ggb1.instance.setGridVisible(true);
  ggb1.instance.setAxesVisible(true, true);
  ggb1.instance.setVisible('C3', false);
  ggb1.updateData({ visible: true });
  table1.updateData({ visible: false });
  submitText1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  text4.updateData({
    text: `Explain how the ${num} helps you find the answer.`,
  });
  ggb1.instance.setAxisLabels(1, '$\\mathit{h}$', '$\\mathit{t}$');
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  let num = 'equation';
  ggb1.updateData({ visible: true });
  table1.updateData({ visible: false });
  submitText1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  text4.updateData({
    text: `Explain how the ${num} helps you find the answer.`,
  });
  ggb1.instance.setVisible('C3', true);
  ggb1.instance.setVisible('pic3', false);
  ggb1.instance.setVisible('Point1', false);
  ggb1.instance.setVisible('Point2', false);
  ggb1.instance.setVisible('Point3', false);
  ggb1.instance.setVisible('Point4', false);
  ggb1.instance.setVisible('Point5', false);
  ggb1.instance.setVisible('C1', false);
  ggb1.instance.setVisible('C2', false);
  ggb1.instance.setGridVisible(false);
  ggb1.instance.setAxesVisible(false, false);
});

button1.on('click', () => {
  text4.updateData({ visible: true });
  input4.updateData({ visible: true });
  button4.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":4,"geogebra":1,"table":1,"buttongroup":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
