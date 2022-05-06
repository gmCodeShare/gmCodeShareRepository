const { select1, text1, text2, text3, button1 } = components;

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
  button1.updateData({ disabled: true });
});

select1.on('change', (selected) => {
  button1.updateData({ disabled: false, text: 'Submit' });
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
});

/*
{"compTotals":{"select":1,"textbox":3,"button":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
