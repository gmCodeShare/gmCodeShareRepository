const { ggb1, separator1, buttonGroup1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.stopAnimation();
});

buttonGroup1.on("click:3", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

autorun(() => {
  let time = ggb1.innerData["time"];
  //console.log("time", time, "is", typeof time);
  if (time == 0 || time == 1)
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Launch","lessonInfo":"9 M3 TB L07 - Print Alt: Exploring Key Features of a Function and Its Graph","teacherView":true,"layout":"one col"}
*/
