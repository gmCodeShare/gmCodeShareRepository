const {
  ggb1,
  feedback1,
  cc_sharewithclass_44ffd1f7514f_textbox1: shareText1,
  cc_sharewithclass_44ffd1f7514f_input1: shareInput1,
  cc_sharewithclass_44ffd1f7514f_button1: shareButton1,
  cc_sharewithclass_44ffd1f7514f_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('origDimensionsBool', true);

shareButton1.updateData({ align: 'right' });

autorun(() => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Scale Factor—Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
