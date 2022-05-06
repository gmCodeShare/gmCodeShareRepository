const {
  ggb1,
  cc_submit_e00cfb42de4f_textbox1,
  cc_submit_e00cfb42de4f_input1: submitInput1,
  cc_submit_e00cfb42de4f_button1: submitButton1,
  separator1,
  cc_submit_379a040684c1_textbox1,
  cc_submit_379a040684c1_input1: submitInput2,
  cc_submit_379a040684c1_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

submitButton1.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${submitInput1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`g: ${submitInput1.data.text}`);
    ggb1.instance.setFixed("g", false, false);
    ggb1.instance.setLayer("g", 0);
    ggb1.instance.setColor("g", 0, 127, 175);
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
});

submitButton2.on("click", () => {
  ggb1.instance.evalLaTeX(
    `dummyObjectForThisCodeTwo: ${submitInput2.data.text}`
  );
  ggb1.instance.setVisible("dummyObjectForThisCodeTwo", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCodeTwo") == "line") {
    ggb1.instance.evalLaTeX(`h: ${submitInput2.data.text}`);
    ggb1.instance.setFixed("h", false, false);
    ggb1.instance.setLayer("h", 0);
    ggb1.instance.setColor("h", 218, 41, 28);
  }
  ggb1.instance.deleteObject("dummyObjectForThisCodeTwo");
});

/*
{"compTotals":{"geogebra":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Print Alt: Introduction to Systems of Linear Equations","teacherView":true,"layout":"two col"}
*/
