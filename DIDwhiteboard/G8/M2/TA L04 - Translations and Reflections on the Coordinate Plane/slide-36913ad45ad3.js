const { ggb1, feedback1, text1, text2, buttonGroup1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  table1.updateData({ visible: false });
});

ggb1.instance.registerObjectUpdateListener("time2", tableWork);

function tableWork() {
  let APrimeX = Math.round(ggb1.instance.getXcoord("ATwo") * 1) / 1;
  let APrimeY = Math.round(ggb1.instance.getYcoord("ATwo") * 1) / 1;
  let BPrimeX = Math.round(ggb1.instance.getXcoord("BTwo") * 1) / 1;
  let BPrimeY = Math.round(ggb1.instance.getYcoord("BTwo") * 1) / 1;
  let CPrimeX = Math.round(ggb1.instance.getXcoord("CTwo") * 1) / 1;
  let CPrimeY = Math.round(ggb1.instance.getYcoord("CTwo") * 1) / 1;
  let DPrimeX = Math.round(ggb1.instance.getXcoord("DTwo") * 1) / 1;
  let DPrimeY = Math.round(ggb1.instance.getYcoord("DTwo") * 1) / 1;
  if (ggb1.instance.getValue("time2") == 1) {
    table1.updateCell(0, 1, {
      value: `$A'(${APrimeX},${APrimeY})$`,
      editable: false,
      math: true,
    });
    table1.updateCell(1, 1, {
      value: `$B'(${BPrimeX},${BPrimeY})$`,
      editable: false,
      math: true,
    });
    table1.updateCell(2, 1, {
      value: `$C'(${CPrimeX},${CPrimeY})$`,
      editable: false,
      math: true,
    });
    table1.updateCell(3, 1, {
      value: `$D'(${DPrimeX},${DPrimeY})$`,
      editable: false,
      math: true,
    });
    table1.updateData({ visible: true });
  }
}

ggb1.instance.registerObjectUpdateListener("animatedVerticalDistance", update);
ggb1.instance.registerObjectUpdateListener(
  "animatedHorizontalDistance",
  update
);

function update() {
  let num =
    Math.round(ggb1.instance.getValue("animatedHorizontalDistance") * 1) / 1;
  let num2 =
    Math.round(ggb1.instance.getValue("animatedVerticalDistance") * 1) / 1;
  if (num < 0 && num2 >= 0) {
    text2.updateData({ text: `$(x,y)\\to(x${num},y+${num2})$` });
  }
  if (num < 0 && num2 < 0) {
    text2.updateData({ text: `$(x,y)\\to(x${num},y${num2})$` });
  }
  if (num >= 0 && num2 < 0) {
    text2.updateData({ text: `$(x,y)\\to(x+${num},y${num2})$` });
  }
  if (num >= 0 && num2 >= 0) {
    text2.updateData({ text: `$(x,y)\\to(x+${num},y+${num2})$` });
  }
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  text2.updateData({ visible: true });
  // ggb1.instance.evalCommand('SelectObjects()');
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("APrimeMovable", false);
  ggb1.instance.evalCommand("ReadText(animationButtonText)");
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  text2.updateData({ visible: false });
  table1.updateData({ visible: false });
  ggb1.instance.setValue("APrimeMovable", true);
  ggb1.instance.evalCommand("ReadText(resetButtonText)");
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
