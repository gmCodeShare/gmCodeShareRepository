const {
  ggb1,
  feedback,
  cc_submit_53eb69638f55_textbox1: submitText1,
  cc_submit_53eb69638f55_input1: submitInput1,
  cc_submit_53eb69638f55_button1: submitButton1,
  cc_sharewithclass_d5e655717eab_textbox1: shareText1,
  cc_sharewithclass_d5e655717eab_input1: shareInput1,
  cc_sharewithclass_d5e655717eab_button1: shareButton1,
  cc_sharewithclass_d5e655717eab_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: "right" });
  submitButton1.updateData({ align: "right" });
  ggb1.instance.deleteObject("C");
  ggb1.instance.deleteObject("D");
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"T layout"}
*/
