const {
  text1,
  ggb1,
  feedback1,
  cc_submit_2eee09da9eb0_textbox1: submitText1,
  cc_submit_2eee09da9eb0_input1: submitInput1,
  cc_submit_2eee09da9eb0_button1: submitButton1,
  separator4,
  cc_sharewithclass_6127daa76b41_textbox1: shareText1,
  cc_sharewithclass_6127daa76b41_input1: shareInput1,
  cc_sharewithclass_6127daa76b41_button1: shareButton2,
  cc_sharewithclass_6127daa76b41_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareButton2.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareButton2.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"T layout"}
*/
