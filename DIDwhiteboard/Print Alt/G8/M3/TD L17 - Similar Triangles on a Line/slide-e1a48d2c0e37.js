const { ggb1, separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
//ggb1.instance.setValue('showText', false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button2)");
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:3", () => {
  ggb1.instance.evalCommand("RunClickScript(button3)");
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Print Alt: Similar Triangles on a Line","teacherView":true,"layout":"one col"}
*/
