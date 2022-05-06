const {
  ggb1,
  feedback1,
  text1,
  input1,
  text3,
  button1,
  separator3,
  cc_sharewithclass_47a321f7a2ae_textbox1: text2,
  cc_sharewithclass_47a321f7a2ae_input1: input2,
  cc_sharewithclass_47a321f7a2ae_button1: button2,
  cc_sharewithclass_47a321f7a2ae_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    text3.updateData({ align: 'right' });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.value < 0 || result.error) {
    return;
  }
  ggb1.instance.setValue('height2', result.value);
  //ggb1.instance.evalLaTeX(`height2=${ input1.data.text}`);
  ggb1.instance.evalCommand('RunClickScript(button1)');
  button1.updateData({ disabled: true });
  button1.updateData({ text: 'Submitted' });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

ggb1.instance.registerObjectUpdateListener('time3', time);
ggb1.instance.registerObjectUpdateListener('height', time);

function time() {
  if (
    ggb1.instance.getValue('time3') ==
    (ggb1.instance.getValue('height2') * 875) / 420
  ) {
    input2.updateData({ visible: true });
    text2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
