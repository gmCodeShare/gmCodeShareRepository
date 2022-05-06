const {
  ggb1,
  feedback1,
  cc_submit_8dd0e0ddcf25_textbox1,
  cc_submit_8dd0e0ddcf25_input1: input1,
  cc_submit_8dd0e0ddcf25_button1: button1,
  separator4,
  cc_submit_6f937afda708_textbox1: text2,
  cc_submit_6f937afda708_input1: input2,
  cc_submit_6f937afda708_button1: button2,
  separator5,
  cc_submit_c9856027bdbf_textbox1: text3,
  cc_submit_c9856027bdbf_input1: input3,
  cc_submit_c9856027bdbf_button1: button3,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
});

button1.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`g: ${input1.data.text}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.setVisible("shortenedStudentLine", true);
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
});

button2.on("click", () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":3,"separator":2},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":false,"layout":"two col"}
*/
