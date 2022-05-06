const { text1, table1, button1, feedback1 } = components;

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  // I bet there's a better way to do this than hard-coding each cell!
  let entries = [
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 0).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 1).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 0).value,
    table1.getCell(4, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"one col"}
*/
