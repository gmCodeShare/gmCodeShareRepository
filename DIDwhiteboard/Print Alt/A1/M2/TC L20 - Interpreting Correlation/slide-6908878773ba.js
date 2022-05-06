const {
  ggb1,
  separator2,
  select1,
  feedback,
  ggb2,
  separator1,
  table1,
  table2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  table2.updateData({ visible: false });
  table1.updateData({ visible: true });
});

//choiceNum = 0 for Flights and choiceNum = 1 for Monopoly
let choiceNum = "1";

if (choiceNum === "1") {
  ggb1.instance.setValue("craters", false);
  ggb1.instance.setValue("cars", false);
  ggb1.instance.setValue("crawling", false);
  ggb1.instance.setValue("baseball", false);
  ggb1.instance.setValue("flights", false);
  ggb1.instance.setValue("monopoly", true);
  ggb1.instance.setValue("nyHomes", false);
  ggb2.instance.setValue("craters", false);
  ggb2.instance.setValue("cars", false);
  ggb2.instance.setValue("crawling", false);
  ggb2.instance.setValue("baseball", false);
  ggb2.instance.setValue("nyHomes", false);
  ggb2.instance.setValue("flights", false);
  ggb2.instance.setValue("monopoly", true);
}

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
  if (select1.data.selected.includes("1") && choiceNum === "1") {
    table2.updateData({ visible: true });
    table1.updateData({ visible: false });
  }
  if (!select1.data.selected.includes("1") && choiceNum === "1") {
    table2.updateData({ visible: false });
    table1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":2,"separator":2,"select":1,"textbox":1,"table":2},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Print Alt: Interpreting Correlation","teacherView":true,"layout":"two col"}
*/
