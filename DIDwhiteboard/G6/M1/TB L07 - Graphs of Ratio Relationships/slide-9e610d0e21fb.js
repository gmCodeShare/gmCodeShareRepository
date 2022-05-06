const { ggb1, text1, text2, text3, text4 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setVisible('textBlue1', false);
  ggb1.instance.setVisible('textPurple1', false);
  ggb1.instance.setVisible('textGreen1', false);
  ggb1.instance.setVisible('textRed1', false);
  ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
});

/*
{"compTotals":{"geogebra":1,"textbox":4},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
