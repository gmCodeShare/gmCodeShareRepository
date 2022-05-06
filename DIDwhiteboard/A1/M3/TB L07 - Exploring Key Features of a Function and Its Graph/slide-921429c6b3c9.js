const {
  ggb1,
  feedback,
  cc_submit_7ab2677e30ff_textbox1: submitText1,
  cc_submit_7ab2677e30ff_input1: submitInput1,
  cc_submit_7ab2677e30ff_button1: submitButton1,
  separator1,
  cc_submit_bfb95269147b_textbox1: submitText2,
  cc_submit_bfb95269147b_input1: submitInput2,
  cc_submit_bfb95269147b_button1: submitButton2,
} = components;

slide.on("firstload", () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false, align: "right" });
  submitButton1.updateData({ align: "right" });
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"two col"}
*/
