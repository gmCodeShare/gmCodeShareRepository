const {
  ggb1,
  feedback1,
  text1,
  ggb2,
  cc_sharewithclass_6c356e410f7b_textbox1,
  cc_sharewithclass_6c356e410f7b_input1,
  cc_sharewithclass_6c356e410f7b_button1,
  cc_sharewithclass_6c356e410f7b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let time = ggb2.instance.getValue('time');

ggb2.instance.registerObjectUpdateListener('time', update);

function update() {
  ggb1.instance.setValue('time', ggb2.instance.getValue('time'));
  let num = ggb1.instance.getValue('time');
}

/*
{"compTotals":{"geogebra":2,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
