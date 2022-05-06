const {
  ggb1,
  feedback1,
  text1,
  ggb2,
  text2,
  text3,
  cc_sharewithclass_405f6f5379aa_textbox1: shareText1,
  cc_sharewithclass_405f6f5379aa_input1: shareInput1,
  cc_sharewithclass_405f6f5379aa_button1: shareButton1,
  cc_sharewithclass_405f6f5379aa_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('percent', update);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

function update() {
  ggb1.instance.setValue('percent', ggb2.instance.getValue('percent'));
  let num = ggb2.instance.getValue('percent');
  console.log(num);
  text3.updateData({ text: `Percent: $${num}$%` });
  text2.updateData({ text: `Fraction: $\\frac{${num}}{100}$` });

  if (ggb2.instance.getValue('percent') > 0) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":4,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - Introduction to Percents","teacherView":false,"layout":"two col"}
*/
