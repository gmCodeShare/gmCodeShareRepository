const { ggb1, separator4, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Print Alt: Motion and Speed","teacherView":true,"layout":"one col"}
*/
