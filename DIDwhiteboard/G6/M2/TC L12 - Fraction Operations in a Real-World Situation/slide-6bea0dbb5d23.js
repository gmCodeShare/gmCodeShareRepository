const { select1, feedback1, text1, button1 } = components;

slide.on('firstload', () => {
  // set initial states
  button1.updateData({ disabled: true, align: 'right' });
});

select1.on('change', ({ selected }) => {
  button1.updateData({ disabled: false, text: 'Submit' });
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
});

/*
{"compTotals":{"select":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M2 TC L12 - Fraction Operations in a Real-World Situation","teacherView":false,"layout":"two col"}
*/
