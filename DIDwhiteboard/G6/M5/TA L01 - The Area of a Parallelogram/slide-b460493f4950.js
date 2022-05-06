const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback,
  cc_submit_af3f40335d5b_textbox1: text2,
  cc_submit_af3f40335d5b_input1: input2,
  cc_submit_af3f40335d5b_button1: button2,
  separator5,
  text1,
  cc_submit_e468e781f594_textbox1: text3,
  cc_submit_e468e781f594_input1: input3,
  cc_submit_e468e781f594_button1: button3,
  separator6,
  cc_sharewithclass_7a58323f67ff_textbox1: text4,
  cc_sharewithclass_7a58323f67ff_input1: input4,
  cc_sharewithclass_7a58323f67ff_button1: button4,
  cc_sharewithclass_7a58323f67ff_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("q3'", false);
    ggb1.instance.setVisible('q4', false);
    ggb1.instance.setVisible('Slide', false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setLayer('n', 5);
    text3.updateData({ visible: false });
    text1.updateData({ visible: false });
    input3.updateData({ visible: false });
    button3.updateData({ visible: false });
    text4.updateData({ visible: false });
    input4.updateData({ visible: false });
    button4.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

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

button2.on('click', () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
  text1.updateData({ visible: true });
});

button3.on('click', () => {
  text4.updateData({ visible: true });
  input4.updateData({ visible: true });
  button4.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":3,"buttongroup":1,"textbox":2,"submit":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
