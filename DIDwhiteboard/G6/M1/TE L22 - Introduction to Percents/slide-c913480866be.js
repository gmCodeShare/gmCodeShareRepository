const {
  separator1,
  Textbox1,
  feedback1,
  Textbox17,
  table1,
  button1,
} = components;

slide.on('firstload', () => {
  // set initial states
  button1.updateData({ align: 'right', disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  // this example checked these 5 cells; you'll have to make adjustments
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !(
        table1.getCell(0, 1).value &&
        table1.getCell(1, 1).value &&
        table1.getCell(2, 1).value &&
        table1.getCell(3, 1).value
      ),
    });
    table1.updateData({
      last: [
        table1.getCell(0, 1).value,
        table1.getCell(1, 1).value,
        table1.getCell(2, 1).value,
        table1.getCell(3, 1).value,
      ],
    });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  button1.updateData({ text: 'Submitted' });
});

/*
{"compTotals":{"separator":1,"textbox":3,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - Introduction to Percents","teacherView":false,"layout":"two col"}
*/
