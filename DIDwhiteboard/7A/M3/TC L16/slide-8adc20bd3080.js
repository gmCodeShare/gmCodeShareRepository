const {
  text1,
  ggb1,
  feedback1,
  cc_submit_d9ff9e8ef7af_textbox1: submitText1,
  cc_submit_d9ff9e8ef7af_input1: submitInput1,
  cc_submit_d9ff9e8ef7af_button1: submitButton1,
  separator2,
  cc_sharewithclass_86543d656bd1_textbox1: shareText1,
  cc_sharewithclass_86543d656bd1_input1: shareInput1,
  cc_sharewithclass_86543d656bd1_button1: shareButton1,
  cc_sharewithclass_86543d656bd1_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("aMoved", true);
  ggb1.instance.setValue("bMoved", true);
  ggb1.instance.setValue("showAngle", true);
  ggb1.instance.setValue("showEquation1", true);
  ggb1.instance.setValue("showEquation2", true);
  ggb1.instance.setValue("showHyp2", true);
  ggb1.instance.setValue("showHyp2Growing", true);
  ggb1.instance.setValue("showHyp2Text", true);
  ggb1.instance.setValue("showTriText", true);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareAnswers1.updateData({ visible: false });
  // components.feedback1.updateData({ visible: false });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
