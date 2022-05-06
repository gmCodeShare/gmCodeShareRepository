const {
  ggb1,
  feedback1,
  cc_submit_f7bb5587866d_textbox1,
  cc_submit_f7bb5587866d_input1: submitInput1,
  cc_submit_f7bb5587866d_button1: submitButton1,
  separator2,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ text: '' });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  let answer = submitInput1.data.text;
  // console.log(answer);
  if (answer == '-5+3=-2' || answer == '-5+\\left(3\\right)=-2') {
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
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1},"stage":"Learn","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"two col"}
*/
