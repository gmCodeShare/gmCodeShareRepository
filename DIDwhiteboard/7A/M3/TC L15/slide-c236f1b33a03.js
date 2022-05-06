const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback1,
  cc_submit_8be7c8d81d24_textbox1: text3,
  cc_submit_8be7c8d81d24_input1: input2,
  cc_submit_8be7c8d81d24_button1: button3,
  separator8,
  cc_sharewithclass_67182260e199_textbox1: text2,
  cc_sharewithclass_67182260e199_input1: input1,
  cc_sharewithclass_67182260e199_button1: button2,
  cc_sharewithclass_67182260e199_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button2.updateData({ visible: false });
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button3.updateData({ visible: false });
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  ggb1.instance.setValue("step", 12);
});

ggb1.instance.setValue("timeRot", 1);
ggb1.instance.setValue("timeGrowthA", 0);
ggb1.instance.setValue("timeGrowthB", 0);
ggb1.instance.setValue("timeGrowthC", 0);
ggb1.instance.setValue("timeTran1", 1);
ggb1.instance.setValue("timeTran2", 1);
ggb1.instance.setValue("timeTran3", 1);
ggb1.instance.setValue("timeFinalA", 1);
ggb1.instance.setValue("timeFinalB", 1);
ggb1.instance.setValue("showBigSquare", true);
ggb1.instance.setValue("showAsquare", true);

let data = getFromSlide("slide-77f8d1fdbe6c", "ggb2", false) || false;
if (data.innerData) {
  ggb1.instance.setValue("a", data.innerData["a"]);
  ggb1.instance.setValue("b", data.innerData["b"]);
}

//ggb1.instance.setValue("a",2);
//ggb1.instance.setValue("b",5);

autorun(() => {});

button1.on("click", () => {
  button3.updateData({ visible: true });
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  ggb1.instance.setValue("step", 12);
  ggb1.instance.setValue("timeTran1", 1);
  ggb1.instance.setValue("timeTran2", 1);
  ggb1.instance.setValue("timeTran3", 1);
  ggb1.instance.setValue("timeFinalA", 1);
  ggb1.instance.setValue("timeFinalB", 1);
  ggb1.instance.evalCommand("RunClickScript(button2)");
  button1.updateData({ disabled: true });
});

button3.on("click", () => {
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":2,"button":1,"submit":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
