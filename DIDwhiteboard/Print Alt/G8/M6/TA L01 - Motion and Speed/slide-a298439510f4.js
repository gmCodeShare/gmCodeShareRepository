const { ggb1, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

ggb1.instance.registerObjectUpdateListener("startB", nextCar);

function nextCar() {
  if (ggb1.instance.getValue("startB")) {
    ggb1.instance.setAnimating("time2", false);
    ggb1.instance.setValue("time2", 0);
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
  }
}

ggb1.instance.registerObjectUpdateListener("startA", firstCar);

function firstCar() {
  if (ggb1.instance.getValue("startA")) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("time2", false);
    ggb1.instance.setValue("time2", 0);
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
  }
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  ggb1.instance.setAnimating("time", true);
  if (ggb1.instance.getValue("startB")) {
    ggb1.instance.setAnimating("time2", true);
  }
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"8 M6 TA L01 - Print Alt: Motion and Speed","teacherView":true,"layout":"one col"}
*/
