const { ggb1, feedback1, text1, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener("fakeSum", updateText);

function updateText() {
  let num = Math.round(ggb1.instance.getValue("fakeSum") * 1000) / 1000;
  text1.updateData({ text: `#### Sum of Residuals: $${num}$` });
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("showPoints", false);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("showPoints", true);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Print Alt: Modeling Relationships with a Line","teacherView":true,"layout":"two col"}
*/
