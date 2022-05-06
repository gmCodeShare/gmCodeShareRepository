const {
  ggb1,
  feedback1,
  text2,
  cc_submit_edb04424cad4_textbox1: submitText1,
  cc_submit_edb04424cad4_input1: submitInput1,
  cc_submit_edb04424cad4_button1: submitButton1,
  separator3,
  cc_sharewithclass_16ecb474a61c_textbox1: shareText1,
  cc_sharewithclass_16ecb474a61c_input1: shareInput1,
  cc_sharewithclass_16ecb474a61c_button1: shareButton1,
  cc_sharewithclass_16ecb474a61c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("show7by7", true);
ggb1.instance.setValue("show8by8", false);
ggb1.instance.setValue("showBlank44", false);
ggb1.instance.setValue("showTopRight", false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"two col"}
*/
