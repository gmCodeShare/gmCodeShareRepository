const {
  ggb1,
  feedback1,
  text1,
  select1,
  text2,
  separator2,
  buttonGroup1,
  separator3,
  cc_sharewithclass_eb76450f9924_textbox1: shareText1,
  cc_sharewithclass_eb76450f9924_input1: shareInput1,
  cc_sharewithclass_eb76450f9924_button1: shareButton1,
  cc_sharewithclass_eb76450f9924_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const indexStartingInOne = 1;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  shareAnswers1.updateData({ visible: false });
  text2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false, justify: 'center' });
  updateSingleButtonGroup(1, { align: 'left' }, buttonGroup1);
  updateSingleButtonGroup(2, { align: 'center' }, buttonGroup1);
  updateSingleButtonGroup(3, { align: 'right' }, buttonGroup1);
});

autorun(() => {
  if (select1.data.selected != '') {
    text2.updateData({ visible: true });
    buttonGroup1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
  }
});

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on('click:1', () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  ggb1.instance.setValue('showMM', true);
  ggb1.instance.setValue('showMI', false);
  ggb1.instance.setVisible('BMeanText', true);
  ggb1.instance.setVisible('BMedianText', false);
  ggb1.instance.setVisible('BBothText', false);
  ggb1.instance.evalCommand('ReadText(BMeanText)');
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: false }, buttonGroup1);
  ggb1.instance.setValue('showMM', false);
  ggb1.instance.setValue('showMI', true);
  ggb1.instance.setVisible('BMeanText', false);
  ggb1.instance.setVisible('BMedianText', true);
  ggb1.instance.setVisible('BBothText', false);
  ggb1.instance.evalCommand('ReadText(BMedianText)');
});

buttonGroup1.on('click:3', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(3, { disabled: true }, buttonGroup1);
  ggb1.instance.setValue('showMM', true);
  ggb1.instance.setValue('showMI', true);
  ggb1.instance.setVisible('BMeanText', false);
  ggb1.instance.setVisible('BMedianText', false);
  ggb1.instance.setVisible('BBothText', true);
  ggb1.instance.evalCommand('ReadText(BBothText)');
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":1,"separator":2,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M6 TD L20 - Choosing a Measure of Center","teacherView":false,"layout":"two col"}
*/
