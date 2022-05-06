const { ggb1, separator1, button2, feedback1, text1, table1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ disabled: true });
button1.updateData({ align: 'right' });

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

button2.on('click', () => {
  ggb1.instance.reset();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":2,"textbox":2,"table":1},"stage":"Launch","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
