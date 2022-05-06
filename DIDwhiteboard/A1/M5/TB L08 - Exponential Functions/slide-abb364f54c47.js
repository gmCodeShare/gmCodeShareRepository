const {
  textDisplay8,
  ggb1,
  separator5,
  buttonGroup1,
  feedback,
  cc_sharewithclass_b61388fe5893_textbox1: shareText1,
  cc_sharewithclass_b61388fe5893_input1: shareInput1,
  cc_sharewithclass_b61388fe5893_button1: shareButton1,
  cc_sharewithclass_b61388fe5893_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("speed", 25);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("end", 1);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("end", 1);
  ggb1.instance.setAnimating("time", true);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

autorun(() => {
  if (ggb1.innerData["time"] == 1 && ggb1.innerData["keepErGoin"]) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setValue("end", ggb1.instance.getValue("upperEnd"));
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
  }
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"T layout"}
*/
