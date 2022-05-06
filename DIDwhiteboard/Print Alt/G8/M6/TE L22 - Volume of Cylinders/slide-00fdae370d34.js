const { ggb1, separator2, button1, text1, buttonGroup1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    button1.updateData({ disabled: true });
    text2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener("time1", enableButton);
ggb1.instance.registerObjectUpdateListener("time2", enableButton3);

function enableButton() {
  if (ggb1.instance.getValue("time1") > 0) {
    button1.updateData({ disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
  if (ggb1.instance.getValue("time1") == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

function enableButton3() {
  if (ggb1.instance.getValue("time2") == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
  }
}

button1.on("click", () => {
  ggb1.updateInnerData({ time1: 0, time2: 0, clickCount: 0 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  text2.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:3", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  text2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M6 TE L22 - Print Alt: Volume of Cylinders","teacherView":true,"layout":"two col"}
*/
