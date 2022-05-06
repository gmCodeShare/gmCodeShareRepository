const { ggb1, separator4, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation("time", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.stopAnimation("time", true);
  ggb1.instance.setValue("time", 0);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":true,"layout":"one col"}
*/
