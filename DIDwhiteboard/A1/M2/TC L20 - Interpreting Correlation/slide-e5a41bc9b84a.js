const { ggb1, separator7, select1, ggb2, separator3, table1, table2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  table2.updateData({ visible: false });
  table1.updateData({ visible: true });
});

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
ggb2.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{}$");

autorun(() => {
  if (!select1.data.selected.length) {
    ggb1.instance.setValue("lineOfBestFit", false);
    ggb1.instance.setValue("residuals", false);
    ggb1.instance.setValue("equation", false);
    ggb1.instance.setValue("r", false);
    ggb2.instance.setValue("residualPlot", false);
  }
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("lineOfBestFit", true);
  } else {
    ggb1.instance.setValue("lineOfBestFit", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("residuals", true);
    ggb1.instance.setValue("lineOfBestFit", true);
  } else {
    ggb1.instance.setValue("residuals", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setValue("equation", true);
  } else {
    ggb1.instance.setValue("equation", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setValue("r", true);
  } else {
    ggb1.instance.setValue("r", false);
  }
  if (select1.data.selected.includes("4")) {
    ggb2.instance.setValue("residualPlot", true);
    ggb2.updateData({ visible: true });
  } else {
    ggb2.instance.setValue("residualPlot", false);
    ggb2.updateData({ visible: false });
  }
});

autorun(() => {
  if (select1.data.selected.includes("1")) {
    table2.updateData({ visible: true });
    table1.updateData({ visible: false });
  }
  if (!select1.data.selected.includes("1")) {
    table2.updateData({ visible: false });
    table1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":2,"separator":2,"select":1,"table":2},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"two col"}
*/
