const {
  ggb1,
  feedback1,
  text2,
  cc_submit_f7bb5587866d_textbox1,
  cc_submit_f7bb5587866d_input1: submitInput1,
  cc_submit_f7bb5587866d_button1: submitButton1,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

submitButton1.updateData({ align: 'right' });
text1.updateData({ visible: false });
let correctAddend1 = '-5';
let correctAddend2 = '3';
let correctAddendSum = '-2';
ggb1.instance.setValue('correctAddend1', correctAddend1);
ggb1.instance.setValue('correctAddend2', correctAddend2);
ggb1.instance.setValue('correctAddendSum', correctAddendSum);

autorun(() => {
  text1.updateData({ visible: false });
  let repSum = ggb1.innerData['repSum'];
  if (ggb1.instance.getValue('repSum') == -8) {
    text2.updateData({ visible: true });
  } else {
    text2.updateData({ visible: false });
  }
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
  let repEx4 = ggb1.innerData['repEx4'];
  let feedback1 = `Your model shows $${repEx4}$, not $-5-(-3)$.`;
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

/*
{"compTotals":{"geogebra":1,"textbox":3,"submit":1},"stage":"Learn","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"two col"}
*/
