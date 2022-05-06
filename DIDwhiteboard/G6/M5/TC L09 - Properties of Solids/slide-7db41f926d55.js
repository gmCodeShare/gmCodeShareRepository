const { ggb1, separator2, button2, feedback1, text1, ggb2, table1, button1 } =
  components;

button1.updateData({ align: 'right' });
button2.updateData({ disabled: true });
ggb2.instance.registerObjectUpdateListener('number', updateRight);

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
  button2.updateData({ disabled: false });
}

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
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
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
button2.on('click', () => {
  ggb1.instance.reset();
  ggb2.instance.setValue('number', 0);
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":2,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
