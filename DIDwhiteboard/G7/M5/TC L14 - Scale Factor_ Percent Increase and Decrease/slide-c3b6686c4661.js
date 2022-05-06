const {
  ggb1,
  feedback1,
  cc_sharewithclass_a151e1e2e535_textbox1: shareText1,
  cc_sharewithclass_a151e1e2e535_input1: shareInput1,
  cc_sharewithclass_a151e1e2e535_button1: shareButton1,
  cc_sharewithclass_a151e1e2e535_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('platformPrintABool', false);
ggb1.instance.setValue('platformPrintCBool', false);
ggb1.instance.setValue('origDimensionsBool', true);

shareButton1.updateData({ align: 'right' });

autorun(() => {
  let time = ggb1.innerData['time'];
  let width = ggb1.innerData['scaleWidth'];
  let height = ggb1.innerData['scaleHeight'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M5 TC L14 - Scale Factor—Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
