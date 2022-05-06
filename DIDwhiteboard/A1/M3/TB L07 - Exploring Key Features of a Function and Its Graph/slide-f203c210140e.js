const {
  ggb1,
  feedback,
  cc_submit_53eb69638f55_textbox1: submitText1,
  cc_submit_53eb69638f55_input1: submitInput1,
  cc_submit_53eb69638f55_button1: submitButton1,
  separator1,
  cc_sharewithclass_d5e655717eab_textbox1: shareText1,
  cc_sharewithclass_d5e655717eab_input1: shareInput1,
  cc_sharewithclass_d5e655717eab_button1: shareButton1,
  cc_sharewithclass_d5e655717eab_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: "right" });
  submitButton1.updateData({ align: "right" });
  ggb1.instance.setValue("show1", false);
  ggb1.instance.setValue("show2", false);
  ggb1.instance.setValue("show3", false);
  ggb1.instance.setValue("show4", false);
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

const deleteLists = ggb1.instance.getAllObjectNames("list");
//const deleteLists = allLists.filter((list) => !list.includes("points"));
deleteLists.forEach((list) => {
  ggb1.instance.deleteObject(list);
});

const incData =
  getFromSlide("slide-e932b98e88b1", "ggb1.innerData", false) || false;
if (incData) {
  const params = [
    [incData.lowParam3, incData.highParam3],
    [incData.lowParam4, incData.highParam4],
  ];
  params.forEach((paramPair) => {
    const newPoints = ggb1.instance.evalCommandGetLabels(
      `Sequence(Point(jumps, i), i, ${paramPair[0]}, ${paramPair[1]}, 0.002)`
    );
    ggb1.instance.setVisible(newPoints, false);
    const newPLine = ggb1.instance.evalCommandGetLabels(
      `Polyline(${newPoints})`
    );
    if (paramPair[0] == paramPair[1]) {
      ggb1.instance.setVisible(newPLine, false);
    } else {
      ggb1.instance.setFixed(newPLine, false, false);
    }
  });
}

const decData =
  getFromSlide("slide-e932b98e88b1", "ggb2.innerData", false) || false;
if (decData) {
  const params = [
    [decData.lowParam2, decData.highParam2],
    [decData.lowParam3, decData.highParam3],
    [decData.lowParam4, decData.highParam4],
  ];
  params.forEach((paramPair) => {
    const newPoints = ggb1.instance.evalCommandGetLabels(
      `Sequence(Point(jumps, i), i, ${paramPair[0]}, ${paramPair[1]}, 0.002)`
    );
    ggb1.instance.setVisible(newPoints, false);
    const newPLine = ggb1.instance.evalCommandGetLabels(
      `Polyline(${newPoints})`
    );
    if (paramPair[0] == paramPair[1]) {
      ggb1.instance.setVisible(newPLine, false);
    } else {
      ggb1.instance.setFixed(newPLine, false, false);
      ggb1.instance.setColor(newPLine, 218, 41, 28);
    }
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"T layout"}
*/
