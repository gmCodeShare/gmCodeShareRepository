const {
  ggb1,
  button1,
  button2,
  button3,
  buttonGroup1,
  text1,
  text2,
  text3,
  text4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("baseTime", advance1);
ggb1.instance.registerObjectUpdateListener("faceTime", advance4);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
  button2.updateData({ visible: false });
  button3.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

function holdUp() {
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setAnimating("time2", false);
}

button1.on("click", () => {
  button1.updateData({ disabled: true });
  holdUp();
  ggb1.instance.setAnimating("baseTime", false);
  ggb1.instance.setValue("baseTime", 0);
  ggb1.instance.setAnimating("baseTime", true);
  ggb1.instance.startAnimation();
});

function advance1() {
  if (ggb1.instance.getValue("baseTime") == 1) {
    button2.updateData({ visible: true });
    text2.updateData({ visible: true });
  }
}

button2.on("click", () => {
  button2.updateData({ disabled: true });
  ggb1.instance.setVisible("Apex", true);
  text3.updateData({ visible: true });
  button3.updateData({ visible: true });
});

button3.on("click", () => {
  button3.updateData({ disabled: true });
  holdUp();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.setAnimating("time2", true);
  text4.updateData({ visible: true });
  buttonGroup1.updateData({ visible: true });
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setVisible("apexLabel", true);
  ggb1.instance.setAnimating("faceTime", false);
  ggb1.instance.setValue("faceTime", 0);
  ggb1.instance.setAnimating("faceTime", true);
  ggb1.instance.startAnimation();
});

function advance4() {
  if (ggb1.instance.getValue("faceTime") == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating("heightTime", false);
  ggb1.instance.setValue("heightTime", 0);
  ggb1.instance.setAnimating("heightTime", true);
  ggb1.instance.startAnimation();
});
