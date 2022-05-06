const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

autorun(() => {
  let time = ggb1.innerData["time"];
  if (time === 1) {
    ggb1.instance.setAnimating("time", false);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue("time", 30);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("time", 30);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Launch","lessonInfo":"9 M2 TC L20 - Print Alt: Interpreting Correlation","teacherView":true,"layout":"one col"}
*/
