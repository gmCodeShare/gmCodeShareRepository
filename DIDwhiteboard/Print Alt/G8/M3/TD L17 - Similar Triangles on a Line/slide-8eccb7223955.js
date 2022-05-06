const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.evalCommand("RunClickScript(button1)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.evalCommand("RunClickScript(button2)");
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Print Alt: Similar Triangles on a Line","teacherView":true,"layout":"one col"}
*/
