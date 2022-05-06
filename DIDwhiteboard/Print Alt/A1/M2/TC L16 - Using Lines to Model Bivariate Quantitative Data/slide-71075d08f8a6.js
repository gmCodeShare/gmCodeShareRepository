const { ggb1, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("count", buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue("count") == 3) {
    button1.updateData({ disabled: true });
  }
}

button1.on("click", () => {
  ggb1.instance.setValue("count", ggb1.instance.getValue("count") + 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Print Alt: Using Lines to Model Bivariate Quantitative Data","teacherView":true,"layout":"one col"}
*/
