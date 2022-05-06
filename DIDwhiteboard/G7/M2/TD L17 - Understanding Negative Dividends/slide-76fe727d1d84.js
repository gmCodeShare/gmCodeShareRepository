const {
  Image1,
  feedback,
  Textbox1,
  select1,
  select2,
  select3,
  select4,
  button1,
} = components;

button1.updateData({ align: 'right' });

let answerSubmit;

autorun(() => {
  let Select1 = select1.data.checked;
  let Select2 = select2.data.checked;
  let Select3 = select3.data.checked;
  let Select4 = select4.data.checked;
  button1.updateData({ disabled: false });
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"uploaded-image":1,"textbox":2,"checkbox":4,"button":1},"stage":"Learn","lessonInfo":"7 M2 TD L17 - Understanding Negative Dividends","teacherView":false,"layout":"two col"}
*/
