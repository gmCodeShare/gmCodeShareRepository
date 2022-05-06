const {
  ggb1,
  feedback1,
  text1,
  text2,
  buttonGroup1,
  text3,
  fib1,
  button1,
  separator1,
  cc_sharewithclass_2e66caa7fdcc_textbox1: shareText2,
  cc_sharewithclass_2e66caa7fdcc_input1: input2,
  cc_sharewithclass_2e66caa7fdcc_button1: button2,
  cc_sharewithclass_2e66caa7fdcc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: true,
    visible: false,
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text3.updateData({ visible: false });
  shareText2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  fib1.setVisible(false);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("time", 0.001);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setValue("time", 0.999);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

autorun(() => {
  if (ggb1.innerData["time"] == 0) {
    ggb1.instance.setAnimating("time", false);
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (ggb1.innerData["time"] == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb1.instance.setAnimating("time", false);
    text3.updateData({ visible: true });
    button1.updateData({ visible: true });
    fib1.setVisible(true);
  }
  if (ggb1.innerData["time"] < 1 && ggb1.innerData["time"] > 0) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});
button1.on("click", () => {
  shareText2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"buttongroup":1,"fillblank":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
