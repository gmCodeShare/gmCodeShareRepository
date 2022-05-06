const { ggb1, feedback1, text1, table1, table2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
  button1.updateData({ visible: false });
  table2.updateData({ visible: false });
});

autorun(() => {
  if (
    table1.data.rows[0][1].value != '' &&
    table1.data.rows[1][1].value != '' &&
    table1.data.rows[2][1].value != ''
  ) {
    table2.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});

autorun(() => {
  let entries = [table2.getCell(0, 0).value, table2.getCell(0, 1).value];
  if (!arrayEquals(entries, table2.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table2.updateData({ last: [...entries] });
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
{"compTotals":{"geogebra":1,"textbox":2,"table":2,"button":1},"stage":"Learn","lessonInfo":"6 M6 TB L08 - The Mean as a Balance Point","teacherView":false,"layout":"two col"}
*/
