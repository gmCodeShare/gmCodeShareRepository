const {
  ggb1,
  feedback,
  text1,
  text2,
  button1,
  cc_sharewithclass_e467616fc80d_textbox1: shareText1,
  cc_sharewithclass_e467616fc80d_input1: shareInput1,
  cc_sharewithclass_e467616fc80d_button1: shareButton1,
  cc_sharewithclass_e467616fc80d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let correctAddend1 = '7';
let correctAddend2 = '-2';
let correctAddendSum = '5';

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
    ggb1.instance.setValue('addend1', '7');
    ggb1.instance.setValue('addend2', '2');
    ggb1.instance.setValue('addendSum', '9');
    ggb1.instance.setValue('correctAddend1', correctAddend1);
    ggb1.instance.setValue('correctAddend2', correctAddend2);
    ggb1.instance.setValue('correctAddendSum', correctAddendSum);
  }
}

ggb1.instance.setSize(590, 590);
button1.updateData({ align: 'right' });
shareButton1.updateData({ align: 'right' });

autorun(() => {
  text1.updateData({ visible: false });
  let addend1 = ggb1.innerData['addend1'];
  let addend2 = ggb1.innerData['addend2'];
  let addendSum = ggb1.innerData['addendSum'];
  if (
    ggb1.instance.getValue('addend1') == 7 &&
    ggb1.instance.getValue('addend2') == 2 &&
    ggb1.instance.getValue('addendSum') == 9
  ) {
    text1.updateData({ visible: true });
    button1.updateData({ disabled: true });
  } else {
    text1.updateData({ visible: false });
    button1.updateData({ disabled: false, text: 'Submit' });
  }
});

button1.on('click', () => {
  shareInput1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  button1.updateData({ text: 'Submitted' });
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M2 TA L02 - Adding Integers","teacherView":false,"layout":"two col"}
*/
