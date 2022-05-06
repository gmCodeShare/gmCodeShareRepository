const { ggb1, Separator2, button1, feedback1, table1, button2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('show', buttonWork);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ disabled: true });
    button2.updateData({ align: 'center' });
    button2.updateData({ align: 'right' });
    button2.updateData({ disable: true });
    table1.updateCol(0, { math: true, editable: false });
    ggb1.updateData({ init: true });
  }
}

function buttonWork() {
  if (ggb1.instance.getValue('show')) {
    button1.updateData({ disabled: false });
  }
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
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button2.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  ggb1.instance.setValue('returnChairs', true);
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('show', false);
});

button2.on('click', () => {
  button2.updateData({ disabled: true, text: 'Submitted' });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":2,"textbox":1,"table":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Print Alternate Slide Deck for Modeling Real-Life Situations and Expressions","teacherView":true,"layout":"two col"}
*/
