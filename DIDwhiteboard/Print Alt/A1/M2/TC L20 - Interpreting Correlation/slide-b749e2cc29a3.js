const { ggb1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

autorun(() => {
  let rValue = ggb2.innerData["r"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  ggb1.instance.setValue("r", ggb2.instance.getValue("r"));
});

/*
{"compTotals":{"geogebra":2},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Print Alt: Interpreting Correlation","teacherView":true,"layout":"two col"}
*/
