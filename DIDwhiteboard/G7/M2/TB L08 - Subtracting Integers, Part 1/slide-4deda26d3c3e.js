const {
  ggb1,
  feedback1,
  cc_submit_f7bb5587866d_textbox1,
  cc_submit_f7bb5587866d_input1,
  cc_submit_f7bb5587866d_button1: submitButton1,
  separator2,
  cc_submit_a414fcdbe3ff_textbox1: shareText1,
  cc_submit_a414fcdbe3ff_input1: shareInput1,
  cc_submit_a414fcdbe3ff_button1: shareButton1,
  separator1,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    text1.updateData({ text: '' });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

shareButton1.on('click', () => {
  let answer = shareInput1.data.text;
  // console.log(answer);
  if (answer == '-5+-3=-8' || answer == '-5+\\left(-3\\right)=-8') {
    text1.updateData({ text: '' });
  } else if (!answer.includes('=')) {
    text1.updateData({ text: 'Please write the complete number sentence.' });
  } else {
    text1.updateData({
      text:
        'That’s not quite right. Use the number sentence that has been started for you and determine what the unknown addend must be. Then write the complete number sentence.',
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":2,"separator":2},"stage":"Launch","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"two col"}
*/
