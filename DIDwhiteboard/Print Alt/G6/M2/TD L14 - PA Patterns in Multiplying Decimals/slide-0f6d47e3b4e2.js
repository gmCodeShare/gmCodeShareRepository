const { buttonGroup1, ggb1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setAnimating('time', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Launch","lessonInfo":"6 M2 TD L14 - PA Patterns in Multiplying Decimals","teacherView":false,"layout":"one col"}
*/
