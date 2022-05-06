const {
  ggb1,
  feedback1,
  text1,
  button1,
  separator1,
  cc_sharewithclass_e7b22af40323_textbox1: shareText1,
  cc_sharewithclass_e7b22af40323_input1: shareInput1,
  cc_sharewithclass_e7b22af40323_button1: shareButton1,
  cc_sharewithclass_e7b22af40323_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('inRegC', update);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("A'", false);
    ggb1.instance.setVisible("B'", false);
    ggb1.instance.setFixed("A'", true, false);
    ggb1.instance.setFixed("B'", true, false);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    button1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

function update() {
  button1.updateData({ visible: true });
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setVisible("A'", true);
  ggb1.instance.setVisible("B'", true);
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
