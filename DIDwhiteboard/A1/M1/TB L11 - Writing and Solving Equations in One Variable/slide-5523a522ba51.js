const {
  ggb1,
  feedback1,
  text2,
  cc_submit_edb04424cad4_textbox1: submitText1,
  cc_submit_edb04424cad4_input1: submitInput1,
  cc_submit_edb04424cad4_button1: submitButton1,
  cc_submit_7ad059321160_textbox1: submitText2,
  cc_submit_7ad059321160_input1: submitInput2,
  cc_submit_7ad059321160_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("show7by7", false);
ggb1.instance.setValue("show8by8", false);
ggb1.instance.setValue("showBlank44", false);
ggb1.instance.setValue("showTopRight", true);

submitButton1.on("click", () => {
  ggb1.instance.setTextValue("textTop", `${submitInput1.data.text}`);
  ggb1.instance.setValue("showTextTop", true);
});

submitButton2.on("click", () => {
  ggb1.instance.setTextValue("textRight", `${submitInput2.data.text}`);
  ggb1.instance.setValue("showTextRight", true);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":2},"stage":"Learn","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"two col"}
*/
