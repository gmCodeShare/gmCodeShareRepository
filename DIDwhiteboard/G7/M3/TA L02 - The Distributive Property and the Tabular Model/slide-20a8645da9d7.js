const {
  ggb1,
  feedback,
  text2,
  button2,
  separator9,
  cc_sharewithclass_22f1d2f41ea0_textbox1: text1,
  cc_sharewithclass_22f1d2f41ea0_input1: input1,
  cc_sharewithclass_22f1d2f41ea0_button1: button1,
  cc_sharewithclass_22f1d2f41ea0_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    button2.updateData({ disabled: true });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
    text1.updateData({ visible: false });
    ggb1.instance.setVisible('redPoint', false);
    ggb1.updateData({ init: true });
  }
}
ggb1.instance.registerObjectUpdateListener('emptyInt1', update);
ggb1.instance.registerObjectUpdateListener('emptyInt2', update);
ggb1.instance.registerObjectUpdateListener('emptyL1', update);
ggb1.instance.registerObjectUpdateListener('emptyT1', update);
ggb1.instance.registerObjectUpdateListener('emptyT2', update);

button2.on('click', () => {
  button2.updateData({ disabled: true, text: 'Submitted' });

  //if(ggb1.instance.getValueString("emptyInt1")!=="4.25w" || ggb1.instance.getValueString("emptyInt2")!=="17" || ggb1.instance.getValueString("emptyL1")!="4.25" ||
  // ggb1.instance.getValueString("emptyT1")!=="w" || ggb1.instance.getValueString("emptyT2")!=="4"){
  //ggb1.instance.setVisible("redPoint",true);
  //ggb1.instance.setVisible("redPoint",false);
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  // }
});

function update() {
  if (
    ggb1.instance.getValueString('emptyInt1') !== '' &&
    ggb1.instance.getValueString('emptyInt2') !== '' &&
    ggb1.instance.getValueString('emptyL1') != '' &&
    ggb1.instance.getValueString('emptyT1') !== '' &&
    ggb1.instance.getValueString('emptyT2') !== ''
  ) {
    button2.updateData({ disabled: false, text: 'Submit' });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
