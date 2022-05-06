const { text1, Separator1, text2, input1, button1, feedback1 } = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    input1.updateData({ text: '$', last: '$' });
    button1.updateData({ disabled: true, align: 'right' });
    text1.updateData({ init: true });
  }
}

const blankBox = '';
const textStem = '$';

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({
      text: 'Submit',
      disabled: !input1.data.text,
    });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"textbox":3,"separator":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"one col"}
*/
