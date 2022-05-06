const {
  ggb1,
  separator2,
  select1,
  feedback,
  ggb2,
  separator1,
  table1,
  table2,
  table3,
  table4,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  table2.updateData({ visible: false });
  table1.updateData({ visible: true });
  table3.updateData({ visible: false });
  table4.updateData({ visible: false });
  ggb2.updateData({ visible: false });
});

//choiceNum = 0 for Flights and choiceNum = 1 for Monopoly
let choiceNum = "0";

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
    ggb1.instance.setValue("lineOfBestFit", true);
    ggb1.instance.setValue("residuals", true);
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
  if (select1.data.selected.includes("1") && choiceNum === "0") {
    if (ggb1.instance.getValue("fake")) {
      table2.updateData({ visible: true });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: false });
    } else {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: true });
    }
  }
  if (!select1.data.selected.includes("1") && choiceNum === "0") {
    if (ggb1.instance.getValue("fake")) {
      table2.updateData({ visible: false });
      table1.updateData({ visible: true });
      table3.updateData({ visible: false });
      table4.updateData({ visible: false });
    } else {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: true });
      table4.updateData({ visible: false });
    }
  }
});

/*
{"compTotals":{"geogebra":2,"separator":2,"select":1,"textbox":1,"table":4},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Print Alt: Interpreting Correlation","teacherView":true,"layout":"two col"}
*/
