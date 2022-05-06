const { ggb1, separator6, buttonGroup1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

ggb1.instance.registerObjectUpdateListener("dropTime", tableWork);

function tableWork() {
  if (ggb1.instance.getValue("dropTime") < 1) {
    table1.updateCell(0, 1, { value: `` });
    table1.updateCell(1, 1, { value: `` });
    table1.updateCell(2, 1, { value: `` });
    table1.updateCell(3, 1, { value: `` });
  }
  if (ggb1.instance.getValue("dropTime") >= 1) {
    table1.updateCell(0, 1, { value: `$16$` });
  }
  if (ggb1.instance.getValue("dropTime") >= 2) {
    table1.updateCell(1, 1, { value: `$64$` });
  }
  if (ggb1.instance.getValue("dropTime") >= 3) {
    table1.updateCell(2, 1, { value: `$144$` });
  }
  if (ggb1.instance.getValue("dropTime") >= 4) {
    table1.updateCell(3, 1, { value: `$256$` });
  }
}

buttonGroup1.on("click:1", () => {
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:2", () => {
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on("click:3", () => {
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("clickCount", 0);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

autorun(() => {
  let time = ggb1.innerData["time"];
  if (time >= 1.4) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Print Alt: Motion and Speed","teacherView":true,"layout":"two col"}
*/
