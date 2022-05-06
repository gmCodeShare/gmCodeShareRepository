const {
  ggb1,
  text1,
  cc_submit_1dc1c8a4af01_button1: button1,
  cc_submit_1dc1c8a4af01_input1: input1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setSize(590, 590);
button1.updateData({ align: 'right' });
text1.updateData({ visible: false });
let correctAddend1 = '-5';
let correctAddend2 = '-3';
let correctAddendSum = '-8';

slide.on('firstload', () => {
  ggb1.instance.setValue('correctAddend1', correctAddend1);
  ggb1.instance.setValue('correctAddend2', correctAddend2);
  ggb1.instance.setValue('correctAddendSum', correctAddendSum);
});

autorun(() => {
  let addend1 = ggb1.innerData['addend1'];
  let addend2 = ggb1.innerData['addend2'];
  let addendSum = ggb1.innerData['addendSum'];
  let input = input1.data.text;
  text1.updateData({ visible: false });
  ggb1.instance.setValue('submitted', false);
  button1.updateData({ disabled: false, text: 'Submit' });
  ggb1.instance.evalCommand('UpdateConstruction()');
});

button1.on('click', () => {
  ggb1.instance.evalCommand('UpdateConstruction()');
  ggb1.instance.setValue('submitted', true);
  ggb1.instance.setValue('studentInput', input1.data.text);
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
  // console.log(ggb1.instance.getValue("case"));
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
