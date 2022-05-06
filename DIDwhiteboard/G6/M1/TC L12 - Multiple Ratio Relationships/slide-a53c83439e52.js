const { ggb1, text1, radio1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setVisible('B', false);
  ggb1.instance.setVisible('eq1', false);
  button1.updateData({ align: 'right', visible: false });
});

autorun(() => {
  if (radio1.data.selected) {
    button1.updateData({ visible: true });
  }
  if (radio1.data.selected != radio1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !radio1.data.selected });
    radio1.updateData({ last: radio1.data.selected });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"radiogroup":1,"button":1},"stage":"Launch","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
