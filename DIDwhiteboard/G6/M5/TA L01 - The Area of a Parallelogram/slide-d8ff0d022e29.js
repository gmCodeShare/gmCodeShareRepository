const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback,
  text1,
  input1,
  text2,
  button1,
  separator7,
  cc_sharewithclass_7a58323f67ff_textbox1: text3,
  cc_sharewithclass_7a58323f67ff_input1: input3,
  cc_sharewithclass_7a58323f67ff_button1: button3,
  cc_sharewithclass_7a58323f67ff_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button1.updateData({ disabled: true });
    text2.updateData({ align: 'right' });
    ggb1.instance.setVisible("q3'", false);
    ggb1.instance.setVisible('q4', false);
    ggb1.instance.setVisible('Slide', false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setLayer('n', 5);
    button3.updateData({ visible: false });
    text3.updateData({ visible: false });
    input3.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  button3.updateData({ visible: true });
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.setVisible("q3'", true);
  ggb1.instance.setVisible('q4', true);
  ggb1.instance.setVisible('Slide', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible('q1', false);
  ggb1.instance.setVisible('F', false);
  ggb1.instance.setVisible('D', false);
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setVisible('eq2', false);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('Slide', 0);
  ggb1.instance.setVisible('F', true);
  ggb1.instance.setVisible('D', true);
  ggb1.instance.setVisible('eq1', true);
  ggb1.instance.setVisible('eq2', true);
  ggb1.instance.setVisible("q3'", false);
  ggb1.instance.setVisible('q4', false);
  ggb1.instance.setVisible('Slide', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setVisible('q1', true);
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":3,"input":1,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
