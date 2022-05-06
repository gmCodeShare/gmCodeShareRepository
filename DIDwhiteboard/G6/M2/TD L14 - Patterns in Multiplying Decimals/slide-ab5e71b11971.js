const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_931d8a1d19d6_textbox1: shareText1,
  cc_sharewithclass_931d8a1d19d6_input1: shareInput1,
  cc_sharewithclass_931d8a1d19d6_button1: shareButton1,
  cc_sharewithclass_931d8a1d19d6_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('lengthSliderPoint', update);
ggb1.instance.registerObjectUpdateListener('widthSliderPoint', update);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

function update() {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TD L14 - Patterns in Multiplying Decimals","teacherView":false,"layout":"two col"}
*/
