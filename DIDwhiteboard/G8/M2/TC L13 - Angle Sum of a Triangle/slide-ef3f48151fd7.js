const {
  ggb1,
  separator4,
  buttongroup1,
  feedback1,
  text1,
  cc_sharewithclass_5798439c25fe_textbox1: text2,
  cc_sharewithclass_5798439c25fe_input1: input2,
  cc_sharewithclass_5798439c25fe_button1: button2,
  cc_sharewithclass_5798439c25fe_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

buttongroup1.updateSingleButton({ disabled: true }, 1);

let data = getFromSlide(`slide-bdd08664bfab`, 'ggb1', false) || false;

if (data.innerData) {
  ggb1.instance.evalCommand(`A=(${data.innerData['A']})`);
  ggb1.instance.evalCommand(`B=(${data.innerData['B']})`);
  ggb1.instance.evalCommand(`C=(${data.innerData['C']})`);
}

ggb1.instance.setValue('timeExpand', 1);
ggb1.instance.setValue('timeSweep', 1);
ggb1.instance.setValue('timeSweep2', 1);
ggb1.instance.setValue('timeSweep3', 1);
ggb1.instance.setValue('count', 5);

buttongroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  buttongroup1.updateSingleButton({ disabled: true }, 1);
});
buttongroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  buttongroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
