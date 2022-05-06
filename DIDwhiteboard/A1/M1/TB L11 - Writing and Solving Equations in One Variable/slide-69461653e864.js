const {
  text1,
  ggb1,
  separator1,
  select1,
  feedback1,
  text2,
  cc_submit_be86b4a8a1ef_textbox1: submitText1,
  cc_submit_be86b4a8a1ef_input1: submitInput1,
  cc_submit_be86b4a8a1ef_button1: submitButton1,
  cc_submit_00bea6a47b24_textbox1: submitText2,
  cc_submit_00bea6a47b24_input1: submitInput2,
  cc_submit_00bea6a47b24_button1: submitButton2,
  cc_submit_d71e77a9560e_textbox1: submitText3,
  cc_submit_d71e77a9560e_input1: submitInput3,
  cc_submit_d71e77a9560e_button1: submitButton3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  select1.setVisible(false);
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  submitText3.updateData({ visible: false });
  submitInput3.updateData({ visible: false });
  submitButton3.updateData({ visible: false });
});

ggb1.instance.registerObjectUpdateListener('show3by3', threeByThree);
ggb1.instance.registerObjectUpdateListener('show4by4', fourByFour);
ggb1.instance.registerObjectUpdateListener('show5by5', fiveByFive);

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
  if (
    submitInput1.data.text &&
    submitInput2.data.text & submitInput3.data.text
  ) {
    select1.setVisible(true);
  } else {
    ggb1.instance.setValue('show3by3', false);
    ggb1.instance.setValue('show4by4', true);
    ggb1.instance.setValue('show5by5', false);
  }
});

submitButton2.on('click', () => {
  submitText3.updateData({ visible: true });
  submitInput3.updateData({ visible: true });
  submitButton3.updateData({ visible: true });
  if (
    submitInput1.data.text &&
    submitInput2.data.text & submitInput3.data.text
  ) {
    select1.setVisible(true);
  } else {
    ggb1.instance.setValue('show4by4', false);
    ggb1.instance.setValue('show3by3', false);
    ggb1.instance.setValue('show5by5', true);
  }
});

submitButton3.on('click', () => {
  select1.setVisible(true);
  select1.selectOption('2');
});

select1.on('change', ({ selected }) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('show3by3', true);
  } else {
    ggb1.instance.setValue('show3by3', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('show4by4', true);
  } else {
    ggb1.instance.setValue('show4by4', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('show5by5', true);
  } else {
    ggb1.instance.setValue('show5by5', false);
  }
});

function threeByThree() {
  if (ggb1.instance.getValue('show3by3')) {
    ggb1.instance.evalCommand('status=status3x3');
    ggb1.instance.evalCommand('ReadText(status3x3)');
  }
}

function fourByFour() {
  if (ggb1.instance.getValue('show4by4')) {
    ggb1.instance.evalCommand('status=status4x4');
    ggb1.instance.evalCommand('ReadText(status4x4)');
  }
}

function fiveByFive() {
  if (ggb1.instance.getValue('show5by5')) {
    ggb1.instance.evalCommand('status=status5x5');
    ggb1.instance.evalCommand('ReadText(status5x5)');
  }
}

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"select":1,"submit":3},"stage":"Launch","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"T layout"}
*/
