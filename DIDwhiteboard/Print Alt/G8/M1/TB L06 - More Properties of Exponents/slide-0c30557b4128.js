const { text1, ggb1, separator1, buttonGroup1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.updateData({ justify: 'center' });

buttonGroup1.on('click:1', () => {
  //buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.evalCommand('RunClickScript(button2)');
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M1 TB L06 - Print Alt: More Properties of Exponents","teacherView":true,"layout":"one col"}
*/
