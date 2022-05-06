const {
  ggb1,
  feedback1,
  text1,
  input1,
  text2,
  button1,
  separator1,
  cc_sharewithclass_6c6461eb87a1_textbox1: shareText1,
  cc_sharewithclass_6c6461eb87a1_input1: shareInput1,
  cc_sharewithclass_6c6461eb87a1_button1: shareButton1,
  cc_sharewithclass_6c6461eb87a1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('gridLength', 30);
    ggb1.instance.setValue('gridWidth', 24);
    ggb1.instance.setValue('sideLength', 1);
    button1.updateData({ align: 'right' });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
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
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TA L01 - Factors and Multiples","teacherView":false,"layout":"two col"}
*/
