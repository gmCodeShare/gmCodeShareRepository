const {
  text1,
  select1,
  button1,
  separator1,
  cc_sharewithclass_fcf317f61313_textbox1: shareText1,
  cc_sharewithclass_fcf317f61313_input1: shareInput1,
  cc_sharewithclass_fcf317f61313_button1: shareButton1,
  cc_sharewithclass_fcf317f61313_studentanswers1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    button1.updateData({ disabled: true, align: 'right' });
    text1.updateData({ init: true });
  }
}

let label1 = '$|−4.5|=−4.5$';
let label2 = '$|4.5|=4.5$';
let label3 = '$|−4.5|=4.5$';
let label4 = '$|4.5|=−4.5$';
let label5 = '$−|4.5|=−4.5$';

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

select1.on('change', ({ selected }) => {
  button1.updateData({
    text: 'Submit',
    disabled: !selected.length,
  });
});

autorun(() => {
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({ text: `Why didn't you choose any statements?` });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({ text: `Why did you choose every statement?` });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$ and $${label2}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$ and $${label3}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$ and $${label4}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$ and $${label5}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label2}$ and $${label3}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label2}$ and $${label4}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label2}$ and $${label5}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label3}$ and $${label4}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label3}$ and $${label5}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label4}$ and $${label5}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label2}$, $${label3}$ and $${label4}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label2}$, $${label3}$ and $${label5}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label2}$,\n\n$${label4}$ and $${label5}$?`,
    });
  }
  if (
    !select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label1}$, $${label3}$, $${label4}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$ and $${label3}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$ and $${label4}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$, $${label3}$ and $${label4}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$, $${label3}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$, $${label4}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    !select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label2}$, $${label3}$,\n\n$${label4}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label3}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label3}$ and $${label4}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label3}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    !select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label3}$, $${label4}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label4}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    !select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label4}$ and $${label5}$?`,
    });
  }
  if (
    select1.data.selected.includes('0') &&
    select1.data.selected.includes('1') &&
    select1.data.selected.includes('2') &&
    select1.data.selected.includes('3') &&
    !select1.data.selected.includes('4')
  ) {
    shareText1.updateData({
      text: `Why didn’t you choose $${label5}$?`,
    });
  }
});

/*
{"compTotals":{"textbox":2,"select":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"one col"}
*/
