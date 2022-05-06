const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback1,
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
});

ggb1.instance.setValue("timeRot", 1);
ggb1.instance.setValue("timeGrowthA", 0);
ggb1.instance.setValue("timeGrowthB", 0);
ggb1.instance.setValue("timeGrowthC", 0);
let data = getFromSlide("slide-77f8d1fdbe6c", "ggb2", false) || false;
if (data.innerData) {
  ggb1.instance.setValue("a", data.innerData["a"]);
  ggb1.instance.setValue("b", data.innerData["b"]);
}
/*
ggb1.instance.setValue("a",2);
ggb1.instance.setValue("b",5);
*/
autorun(() => {
  let timer1 = ggb1.innerData["timeTran1"];
  let timer2 = ggb1.innerData["timeTran2"];
  let timer3 = ggb1.innerData["timeTran3"];
  let finalCountdown = ggb1.innerData["timeFinalA"];
  if (timer1 == 1 && timer2 == 0) {
    ggb1.instance.evalCommand("RunClickScript(button2)");
  }
  if (timer2 == 1 && timer3 == 0 && finalCountdown == 0) {
    ggb1.instance.evalCommand("RunClickScript(button2)");
  }
  if (timer2 == 1 && timer3 == 1 && finalCountdown == 0) {
    button1.updateData({ disabled: false });
    button2.updateData({ visible: true });
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
  }
});

//show angle measures

button1.on("click", () => {
  ggb1.instance.setValue("step", 6);
  ggb1.instance.setValue("timeTran1", 0);
  ggb1.instance.setValue("timeTran2", 0);
  ggb1.instance.setValue("timeTran3", 0);
  ggb1.instance.setValue("showBigSquare", true);
  ggb1.instance.evalCommand("RunClickScript(button2)");
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"button":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
