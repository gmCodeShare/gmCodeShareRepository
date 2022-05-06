const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let sideArray = ["a", "a'", "b", "b'", "c", "c'"];

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("t1'", false);
    ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setVisible("t1'", true);
  ggb1.instance.evalCommand("RunClickScript(button1)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  for (let i = 0, L = sideArray.length; i < L; i++) {
    ggb1.instance.setLabelVisible(sideArray[i], true);
  }
});

buttonGroup1.on("click:3", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  for (let i = 0, L = sideArray.length; i < L; i++) {
    ggb1.instance.setLabelVisible(sideArray[i], false);
  }
  ggb1.instance.setVisible("t1'", false);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Print Alt: Similar Triangles on a Line","teacherView":true,"layout":"one col"}
*/
