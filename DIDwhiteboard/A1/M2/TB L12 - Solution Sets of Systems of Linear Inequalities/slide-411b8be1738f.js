const {
  ggb1,
  feedback1,
  text1,
  select1,
  cc_submit_1530c28110e0_textbox1: submitText1,
  cc_submit_1530c28110e0_input1: submitInput1,
  cc_submit_1530c28110e0_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });

  ggb1.instance.setCoords("P1A", -5, 0);
  ggb1.instance.setCoords("P1B", 0, -5);
  ggb1.instance.setCoords("P2A", 0, -3);
  ggb1.instance.setCoords("P2B", 3, 0);

  ggb1.instance.setValue("line1Greater", false);
  ggb1.instance.setValue("line1OrEqual", false);
  ggb1.instance.setValue("line2OrEqual", true);

  ggb1.instance.setValue("showLine1Points", false);
  ggb1.instance.setValue("showLine2Points", false);
  ggb1.instance.setValue("allowLineControls", false);

  ggb1.instance.setVisible("solutionSetText", true);
  ggb1.instance.setFixed("solutionSetText", true, false);
  ggb1.instance.setCoords("solutionSetText", -9, -4.5);
});

select1.on("change", ({ selected }) => {
  submitText1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  if (selected[0] == "0") {
    submitInput1.updateData({ visible: true, text: "I agree because " });
  } else if (selected[0] == "1") {
    submitInput1.updateData({ visible: true, text: "I disagree because " });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"select":1,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
