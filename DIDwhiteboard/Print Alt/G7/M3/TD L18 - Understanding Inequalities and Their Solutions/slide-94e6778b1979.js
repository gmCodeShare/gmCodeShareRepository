const { buttonGroup1, text1, ggb8 } = components;

buttonGroup1.updateSingleButton({ disabled: true }, 2);
text1.updateData({ visible: false, visibilityBehavior: 'hide' });
ggb8.instance.setErrorDialogsActive(false);
buttonGroup1.on('click:1', () => {
  ggb8.instance.setValue('time', 0);
  ggb8.instance.setValue('time2', 0);
  ggb8.instance.setAnimating('time', true);
  ggb8.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});
buttonGroup1.on('click:2', () => {
  text1.updateData({ visible: true, visibilityBehavior: 'hide' });
});

/*
{"compTotals":{"buttongroup":1,"textbox":1,"geogebra":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - PA Understanding Inequalities and Their Solutions","teacherView":true,"layout":"one col"}
*/
