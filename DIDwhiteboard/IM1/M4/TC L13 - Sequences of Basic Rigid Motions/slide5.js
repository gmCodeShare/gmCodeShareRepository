const { ggb1, buttonGroup1, button1, button2, fib1, fib2, text1 } = components;

slide.on("firstload", () => {
  fib1.setVisible(false);
  button2.updateData({ visible: false });
  text1.updateData({ visible: false });
  fib2.setVisible(false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("showText1", revealText);

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("time", 1);
  fib1.setVisible(true);
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  button2.updateData({ disabled: true });
  ggb1.instance.setValue("time2", 1);
  fib2.setVisible(true);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue("hideWhiteBoxes", true);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.registerObjectUpdateListener("time", startTime2);
  ggb1.instance.registerObjectUpdateListener("time2", enableReplay);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
});

function startTime2() {
  if (ggb1.instance.getValue("time") == 1) {
    ggb1.instance.setAnimating("time2", false);
    ggb1.instance.setValue("time2", 0);
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
  }
}

function enableReplay() {
  if (ggb1.instance.getValue("time2") == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

function revealText() {
  if (ggb1.instance.getValue("showText1")) {
    text1.updateData({ visible: true });
  }
}
