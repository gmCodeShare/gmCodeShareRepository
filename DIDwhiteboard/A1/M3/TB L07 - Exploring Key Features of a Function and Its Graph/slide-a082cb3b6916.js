const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback,
  textDisplay1,
  cc_submit_9aa900bf5023_textbox1: submitText1,
  cc_submit_9aa900bf5023_input1: submitInput1,
  cc_submit_9aa900bf5023_button1: submitButton1,
  cc_sharewithclass_99b010890847_textbox1: shareText1,
  cc_sharewithclass_99b010890847_input1: shareInput1,
  cc_sharewithclass_99b010890847_button1: shareButton1,
  cc_sharewithclass_99b010890847_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  //submitButton1.updateData({ align: "right" });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.stopAnimation();
});

buttonGroup1.on("click:3", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

autorun(() => {
  let time = ggb1.innerData["time"];
  //console.log("time", time, "is", typeof time);
  if (time == 0 || time == 1)
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  if (time > 0.95) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"submit":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"two col"}
*/
