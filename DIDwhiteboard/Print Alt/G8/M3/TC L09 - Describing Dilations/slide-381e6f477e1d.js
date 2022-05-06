const { ggb1, separator1, text1, buttonGroup1, feedback1 } = components;

slide.on("firstload", () => {
  // ggb1.instance.setValue("showTri", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setCaption("O", "$O$");
});

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  const GGBstring = ggb1.innerData["scaleText2"].replaceAll(" ", "");
  text1.updateData({
    text: `$\\color{823F98} \\text{Scale factor: } ${GGBstring}$`,
  });
});
var count = 0;
buttonGroup1.on("click:1", () => {
  count += 1;
  console.log(count);
  if (count == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
  }
  if (count == 2) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue("time2", 0);
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  console.log(ggb1.instance.getValue("time"));
  console.log(ggb1.instance.getValue("time2"));
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  count = 0;
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setValue("time", 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
/*function refresh() {
  button1.updateData({ disabled: false });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
}

ggb1.instance.registerObjectUpdateListener("O", refresh);

ggb1.instance.registerObjectUpdateListener("chosen", refresh);*/

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Print Alternate Slide Deck for Describing Dilations","teacherView":true,"layout":"one col"}
*/
