const { text1, ggb1, separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);

  ggb1.updateData({ init: true });
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible('B1', false);
  ggb1.instance.setVisible('eq1', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible('B1', true);
  ggb1.instance.setVisible('eq1', true);
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M4 TC L11 - Print Alternate Slide Deck for The Inside of a Circle","teacherView":true,"layout":"one col"}
*/
