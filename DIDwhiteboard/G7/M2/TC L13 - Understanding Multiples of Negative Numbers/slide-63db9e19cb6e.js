const {
  Textbox11,
  Separator10,
  Textbox12,
  Separator11,
  text2,
  select1,
  cc_sharewithclass_1867861f244c_textbox1: shareText1,
  cc_sharewithclass_1867861f244c_input1: shareInput1,
  cc_sharewithclass_1867861f244c_button1: shareButton1,
  cc_sharewithclass_1867861f244c_studentanswers1,
  feedback,
} = components;

onInit();
function onInit() {
  if (!text2.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false, align: 'right' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    text2.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == '0') {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ text: 'Henry, because ', visible: true });
    shareButton1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == '1') {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ text: 'Ethan, because ', visible: true });
    shareButton1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == '2') {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ text: 'Both, because ', visible: true });
    shareButton1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == '3') {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ text: 'Neither, because ', visible: true });
    shareButton1.updateData({ disabled: true, visible: true });
  }
});

const blankBox = '';
const selectHenry = 'Henry, because ';
const selectEthan = 'Ethan, because ';
const selectBoth = 'Both, because ';
const selectNeither = 'Neither, because ';

autorun(() => {
  let studentInput = shareInput1.data.text;
  if (
    shareInput1.data.text == blankBox ||
    shareInput1.data.text == selectHenry ||
    shareInput1.data.text == selectEthan ||
    shareInput1.data.text == selectBoth ||
    shareInput1.data.text == selectNeither
  ) {
    shareButton1.updateData({ disabled: true });
  } else {
    shareButton1.updateData({ disabled: false });
  }
});

/*
{"compTotals":{"textbox":4,"separator":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"one col"}
*/
