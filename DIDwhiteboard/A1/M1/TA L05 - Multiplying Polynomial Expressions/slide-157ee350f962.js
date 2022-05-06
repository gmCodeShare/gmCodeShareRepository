const { buttonGroup1, ggb1, separator3, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("showBase10", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("showBase10", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1,"separator":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":true,"layout":"one col"}
*/
