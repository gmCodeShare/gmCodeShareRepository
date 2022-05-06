const {
  ggb1,
  feedback,
  cc_sharewithclass_0a344b56f01f_textbox1,
  cc_sharewithclass_0a344b56f01f_input1,
  cc_sharewithclass_0a344b56f01f_button1,
  cc_sharewithclass_0a344b56f01f_studentanswers1,
} = components;

components.cc_sharewithclass_0a344b56f01f_button1.updateData({
  align: 'right',
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
