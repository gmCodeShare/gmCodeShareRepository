const {
  ggb1,
  feedback1,
  cc_submit_a4b21c2673c9_textbox1: submitText1,
  cc_submit_a4b21c2673c9_input1: submitInput1,
  cc_submit_a4b21c2673c9_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showOrigGraph", false);
  ggb1.instance.setValue("showFakeGrids", true);
  ggb1.instance.setAxesVisible(false, false);
  ggb1.instance.setGridVisible(false);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
