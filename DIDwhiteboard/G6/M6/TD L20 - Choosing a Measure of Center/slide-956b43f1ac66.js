const {
  ggb1,
  feedback1,
  text1,
  select1,
  separator4,
  cc_sharewithclass_1de33a62e9dd_textbox1: shareText1,
  cc_sharewithclass_1de33a62e9dd_input1: shareInput1,
  cc_sharewithclass_1de33a62e9dd_button1: shareButton1,
  cc_sharewithclass_1de33a62e9dd_studentanswers1: shareAnswers1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  shareAnswers1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  if (select1.data.selected != '') {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
    ggb1.instance.setValue('show', true);
    ggb1.instance.evalCommand('ReadText(BBMeanMedianStatus)');
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Choosing a Measure of Center","teacherView":false,"layout":"two col"}
*/
