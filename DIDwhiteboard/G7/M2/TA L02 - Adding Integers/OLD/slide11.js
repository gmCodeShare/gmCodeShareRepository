const {
  ggb1,
  text1,
  text2,
  button1,
  cc_sharewithclass_e467616fc80d_button1: button2,
  cc_sharewithclass_e467616fc80d_input1: input1,
  cc_sharewithclass_e467616fc80d_textbox1: text3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let correctAddend1 = '7';
let correctAddend2 = '-2';
let correctAddendSum = '5';

onInit();
function onInit() {
  if (!ggb1.data.init) {
    input1.updateData({ visible: false });
    text3.updateData({ visible: false });
    button2.updateData({ visible: false });
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
button2.updateData({ align: 'right' });

/*ggb1.instance.setValue("addend1", "7");
ggb1.instance.setValue("addend2", "2");
ggb1.instance.setValue("addendSum", "9");
ggb1.instance.setValue("correctAddend1", correctAddend1);
ggb1.instance.setValue("correctAddend2", correctAddend2);
ggb1.instance.setValue("correctAddendSum", correctAddendSum);*/

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
  input1.updateData({ visible: true });
  text3.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ text: 'Submitted' });
  button1.updateData({ disabled: true });
});
