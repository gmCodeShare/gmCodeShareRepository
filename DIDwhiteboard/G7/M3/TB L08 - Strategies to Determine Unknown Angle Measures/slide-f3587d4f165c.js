const { select1, text1, button1 } = components;

slide.on('firstload', () => {
  button1.updateData({
    align: 'right',
    disabled: 'true',
  });
});

select1.on('change', (selected) => {
  button1.updateData({ text: 'Submit', disabled: false });
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"select":1,"textbox":1,"button":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
