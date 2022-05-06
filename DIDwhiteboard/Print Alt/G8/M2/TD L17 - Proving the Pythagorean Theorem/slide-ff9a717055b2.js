const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("step", 1);
  ggb1.instance.setValue("timeRot", 0);
  ggb1.instance.evalCommand("RunClickScript(button2)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.evalCommand("RunClickScript(button1)");
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"8 M2 TD L17 - Print Alt: Proving the Pythagorean Theorem","teacherView":false,"layout":"one col"}
*/
