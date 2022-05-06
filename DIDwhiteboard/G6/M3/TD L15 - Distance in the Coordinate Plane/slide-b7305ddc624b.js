const { ggb1, separator1, buttonGroup1, feedback1, text1, table1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  // I bet there's a better way to do this than hard-coding each cell!
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 3).value,
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

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('c', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('c', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
