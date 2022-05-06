const {
  ggb1,
  feedback1,
  text2,
  separator4,
  cc_submit_edb04424cad4_textbox1: submitText1,
  cc_submit_edb04424cad4_input1: submitInput1,
  cc_submit_edb04424cad4_button1: submitButton1,
  separator5,
  cc_submit_7ad059321160_textbox1: submitText2,
  cc_submit_7ad059321160_input1: submitInput2,
  cc_submit_7ad059321160_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  ggb1.instance.setValue("show7by7", false);
  ggb1.instance.setValue("show8by8", false);
  ggb1.instance.setValue("showBlank44", true);
  ggb1.instance.setValue("showTopRight", false);
  ggb1.instance.setValue("showTextTop", true);
  ggb1.instance.setValue("showTextRight", true);
});

let top =
  getFromSlide(
    "slide-5523a522ba51",
    "cc_submit_edb04424cad4_input1.data.text",
    ""
  ) || "";

const gridVis = ggb1.instance.getValue("show8by8");

if (!top) {
  top = "";
  // using 8x8 grid visiblity to ensure that both don't show at once
  ggb1.instance.setVisible("noInputTop", !gridVis);
} else {
  ggb1.instance.setVisible("noInputTop", false);
}

ggb1.instance.setTextValue("textTop", `${top}`);

let right =
  getFromSlide(
    "slide-5523a522ba51",
    "cc_submit_7ad059321160_input1.data.text",
    ""
  ) || "";

if (!right) {
  right = "";
  ggb1.instance.setVisible("noInputRight", !gridVis);
} else {
  ggb1.instance.setVisible("noInputRight", false);
}

ggb1.instance.setTextValue("textRight", `${right}`);

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on("click", () => {
  ggb1.instance.setValue("show8by8", true);
  ggb1.instance.setValue("showBlank44", false);
  ggb1.instance.setValue("showTopRight", false);
  ggb1.instance.setValue("showTextTop", false);
  ggb1.instance.setValue("showTextRight", false);
  ggb1.instance.setVisible("noInputTop", false);
  ggb1.instance.setVisible("noInputRight", false);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":2,"submit":2},"stage":"Learn","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"two col"}
*/
