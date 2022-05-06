const { table1, ggb1, text1, image1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ diabled: true });
  table1.updateRow(0, { math: true, editable: false });
  image1.updateData({ align: 'center' });
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
  let num12 = table1.getCell(1, 1).value;
  ggb1.instance.setValue('num12', num12);
  let num13 = table1.getCell(2, 1).value;
  ggb1.instance.setValue('num13', num13);
  const num14 = table1.getCell(3, 1).value;
  ggb1.instance.setValue('num14', num14);
  const num15 = table1.getCell(4, 1).value;
  ggb1.instance.setValue('num15', num15);
  const num16 = table1.getCell(5, 1).value;
  ggb1.instance.setValue('num16', num16);
  const num22 = table1.getCell(1, 0).value;
  ggb1.instance.setValue('num22', num22);
  const num23 = table1.getCell(2, 0).value;
  ggb1.instance.setValue('num23', num23);
  const num24 = table1.getCell(3, 0).value;
  ggb1.instance.setValue('num24', num24);
  const num25 = table1.getCell(4, 0).value;
  ggb1.instance.setValue('num25', num25);
  const num26 = table1.getCell(5, 0).value;
  ggb1.instance.setValue('num26', num26);
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
  let entries = [
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(5, 1).value,
    table1.getCell(1, 0).value,
    table1.getCell(2, 0).value,
    table1.getCell(3, 0).value,
    table1.getCell(4, 0).value,
    table1.getCell(5, 0).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

/*
{"compTotals":{"table":1,"geogebra":1,"textbox":2,"uploaded-image":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
