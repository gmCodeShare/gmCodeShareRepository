const {
  ggb1,
  separator1,
  buttonGroup1,
  cc_sharewithclass_27e3239ce423_textbox1,
  cc_sharewithclass_27e3239ce423_input1,
  cc_sharewithclass_27e3239ce423_button1,
  cc_sharewithclass_27e3239ce423_studentanswers1,
  feedback,
} = components;

ggb1.instance.setErrorDialogsActive(false);

buttonGroup1.updateData({ justify: 'center' });

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M1 TB L06 - More Properties of Exponents","teacherView":false,"layout":"two col"}
*/
