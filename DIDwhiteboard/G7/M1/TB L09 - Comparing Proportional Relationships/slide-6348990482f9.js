const {
  ggb1,
  feedback1,
  cc_submit_7a8157be9a31_textbox1: text1,
  cc_submit_7a8157be9a31_input1: input1,
  cc_submit_7a8157be9a31_button1: button1,
  cc_sharewithclass_86de54d84ef2_textbox1: text2,
  cc_sharewithclass_86de54d84ef2_input1: input2,
  cc_sharewithclass_86de54d84ef2_button1: button2,
  cc_sharewithclass_86de54d84ef2_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    ggb1.instance.setVisible('B', false);
    ggb1.instance.setVisible('g_1', false);
    ggb1.instance.setVisible('text23', false);
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  let num = utils.math.evaluateLatex(input1.data.text.replace('\\%', '*0.01'))
    .value;
  if (num < 155) {
    ggb1.instance.setValue('yValues', `${num}`);
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
    ggb1.instance.setVisible('B', true);
    ggb1.instance.setVisible('g_1', true);
    ggb1.instance.setVisible('text23', true);
  } else {
    ggb1.instance.setValue('yValues', 155);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"two col"}
*/
