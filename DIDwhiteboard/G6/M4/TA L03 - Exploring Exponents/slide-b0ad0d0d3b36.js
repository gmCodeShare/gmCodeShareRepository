const { text1, table1, button1, feedback1 } = components;

slide.on('firstload', () => {
  // set initial states
  button1.updateData({ align: 'right' });
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
  // this example checked these 5 cells; you’ll have to make adjustments
  let entries = [
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(5, 1).value,
    table1.getCell(6, 1).value,
    table1.getCell(7, 1).value,
    table1.getCell(8, 1).value,
    table1.getCell(9, 1).value,
    table1.getCell(10, 1).value,
    table1.getCell(11, 1).value,
    table1.getCell(12, 1).value,
    table1.getCell(13, 1).value,
    table1.getCell(14, 1).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
    table1.getCell(5, 2).value,
    table1.getCell(6, 2).value,
    table1.getCell(7, 2).value,
    table1.getCell(8, 2).value,
    table1.getCell(9, 2).value,
    table1.getCell(10, 2).value,
    table1.getCell(11, 2).value,
    table1.getCell(12, 2).value,
    table1.getCell(13, 2).value,
    table1.getCell(14, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"one col"}
*/
