const {
  ggb1,
  feedback,
  cc_submit_1dc1c8a4af01_textbox1,
  cc_submit_1dc1c8a4af01_input1: submitInput1,
  cc_submit_1dc1c8a4af01_button1: submitButton1,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let correctAddend1 = '4';
let correctAddend2 = '-4';
let correctAddendSum = '0';

slide.on('firstload', () => {
  ggb1.instance.setVisible('B', false);
  ggb1.instance.setVisible('haloB', false);
  ggb1.instance.setVisible('E', true);
  ggb1.instance.setSize(590, 590);
  submitButton1.updateData({ align: 'right' });
  text1.updateData({ visible: false });
  ggb1.instance.setValue('correctAddend1', correctAddend1);
  ggb1.instance.setValue('correctAddend2', correctAddend2);
  ggb1.instance.setValue('correctAddendSum', correctAddendSum);
});

autorun(() => {
  let addend1 = ggb1.innerData['addend1'];
  let addend2 = ggb1.innerData['addend2'];
  let addendSum = ggb1.innerData['addendSum'];
  let input = submitInput1.data.text;
  text1.updateData({ visible: false });
  ggb1.instance.setValue('submitted', false);
  submitButton1.updateData({ disabled: false, text: 'Submit' });
  ggb1.instance.evalCommand('UpdateConstruction()');
});

submitButton1.on('click', () => {
  ggb1.instance.evalCommand('UpdateConstruction()');
  ggb1.instance.setValue('submitted', true);
  ggb1.instance.setValue('studentInput', submitInput1.data.text);
  let addend1 = ggb1.innerData['addend1'];
  let addend2 = ggb1.innerData['addend2'];
  let addendSum = ggb1.innerData['addendSum'];
  let feedback1;
  if (addend2 < 0) {
    feedback1 = `Your model shows $${addend1}+(${addend2})$, not $${correctAddend1}+(${correctAddend2})$.`;
  } else {
    feedback1 = `Your model shows $${addend1}+${addend2}$, not $${correctAddend1}+(${correctAddend2})$.`;
  }
  let feedback2 = `Your answer and your model don’t match.`;
  if (
    ggb1.instance.getValue('case') == 3 ||
    ggb1.instance.getValue('case') == 4 ||
    ggb1.instance.getValue('case') == 5
  ) {
    text1.updateData({ visible: true, text: feedback2 });
  } else if (ggb1.instance.getValue('case') == 2) {
    text1.updateData({ visible: true, text: feedback1 });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1},"stage":"Launch","lessonInfo":"7 M2 TA L02 - Adding Integers","teacherView":false,"layout":"two col"}
*/
