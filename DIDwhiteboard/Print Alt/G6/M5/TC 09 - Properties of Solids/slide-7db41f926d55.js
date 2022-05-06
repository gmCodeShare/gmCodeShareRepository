const { ggb1, separator2, button2, feedback1, ggb2, table1, buttonGroup1 } =
  components;

slide.on('firstload', () => {
  button2.updateData({ disabled: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('number', updateRight);
function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
  button2.updateData({ disabled: false });
}

/*function arrayEquals(a, b) {
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

    table1.updateData({ last: entries });
  }
});*/

buttonGroup1.on('click:1', () => {
  table1.updateCell(0, 1, {
    value: '6',
  });
  table1.updateCell(0, 2, {
    value: '9',
  });
  table1.updateCell(0, 3, {
    value: '5',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  table1.updateCell(0, 1, {
    value: '',
  });
  table1.updateCell(0, 2, {
    value: '',
  });
  table1.updateCell(0, 3, {
    value: '',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

button2.on('click', () => {
  ggb1.instance.reset();
  ggb2.instance.setValue('number', 0);
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":1,"textbox":1,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"two col"}
*/
