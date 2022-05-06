const {
  ggb1,
  feedback1,
  text1,
  radio1,
  radio2,
  radio3,
  cc_sharewithclass_d83f046d0cfb_textbox1: text2,
  cc_sharewithclass_d83f046d0cfb_input1: input1,
  cc_sharewithclass_d83f046d0cfb_button1: button1,
  cc_sharewithclass_d83f046d0cfb_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
  if (radio2.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
  if (radio3.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Relationships Between Quantitative Variables","teacherView":false,"layout":"two col"}
*/
