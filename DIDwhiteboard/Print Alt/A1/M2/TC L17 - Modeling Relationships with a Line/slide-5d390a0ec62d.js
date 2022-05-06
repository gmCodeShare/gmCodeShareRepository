const { ggb1, text1, separator1, buttonGroup1 } = components;

ggb1.instance.setValue("showRes", false);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener("fakeSumOfSquares", updateText);

function updateText() {
  let num =
    Math.round(ggb1.instance.getValue("fakeSumOfSquares") * 1000) / 1000;
  text1.updateData({ text: `#### Sum of Squares: $${num}$` });
}

ggb1.instance.registerObjectUpdateListener("enableButton", update);

function update() {
  if (ggb1.instance.getValue("enableButton")) {
    button1.updateData({ disabled: false });
  }
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("show", false);
  ggb1.instance.setValue("showPoints", false);
  ggb1.instance.setValue("showBestLine", true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("show", true);
  ggb1.instance.setValue("showPoints", true);
  ggb1.instance.setValue("showBestLine", false);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Print Alt: Modeling Relationships with a Line","teacherView":true,"layout":"two col"}
*/
