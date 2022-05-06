const { buttonGroup1, ggb1, Separator1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

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
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('Number', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('Number', 0);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1,"separator":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M1 TA L04 - PA Slide Deck for Exploring Ratios by Making Batches","teacherView":true,"layout":"one col"}
*/
