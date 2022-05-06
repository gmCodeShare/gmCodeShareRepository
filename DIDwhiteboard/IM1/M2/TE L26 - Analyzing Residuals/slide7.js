const { ggb1, ggb2, text1, select1, table1, table2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

autorun(() => {
  const { selected } = select1.data;
  const showLine = selected.includes("0");
  const showResiduals = selected.includes("1");
  const showLineEQ = selected.includes("2");
  const showResidualPlot = selected.includes("3");

  ggb1.instance.setVisible("lineOfBestFit", showLine);
  ggb1.instance.setValue("residuals", showResiduals);
  ggb1.instance.setVisible("equationText", showLineEQ);
  ggb2.updateData({ visible: showResidualPlot });
  table1.updateData({ visible: !showResiduals });
  table2.updateData({ visible: showResiduals });
});
