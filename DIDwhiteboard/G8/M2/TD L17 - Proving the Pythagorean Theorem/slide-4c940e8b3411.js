const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback1,
  cc_sharewithclass_397454718cbe_textbox1: text2,
  cc_sharewithclass_397454718cbe_input1: input1,
  cc_sharewithclass_397454718cbe_button1: button2,
  cc_sharewithclass_397454718cbe_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button2.updateData({ visible: false });
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
});

ggb1.instance.setValue('timeRot', 1);
let data = getFromSlide('slide-77f8d1fdbe6c', 'ggb2', false) || false;
if (data.innerData) {
  ggb1.instance.setValue('a', data.innerData['a']);
  ggb1.instance.setValue('b', data.innerData['b']);
}
/*
ggb1.instance.setValue("a",2);
ggb1.instance.setValue("b",5);
*/
autorun(() => {
  let highlightTimer = ggb1.innerData['timeHighlight'];
  let growthTimer = ggb1.innerData['timeGrowthA'];
  if (growthTimer == 1 && highlightTimer > 3.1) {
    ggb1.instance.setValue('timeHighlight', 0);
    ggb1.instance.setAnimating('timeHighlight', true);
    ggb1.instance.startAnimation();
  }
});

//show angle measures
button1.on('click', () => {
  ggb1.instance.setValue('step', 2);
  ggb1.instance.setValue('timeGrowthA', 0);
  ggb1.instance.evalCommand('RunClickScript(button2)');
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  ggb1.instance.setValue('timeHighlight', 0);
  ggb1.instance.setAnimating('timeHighlight', true);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"button":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
