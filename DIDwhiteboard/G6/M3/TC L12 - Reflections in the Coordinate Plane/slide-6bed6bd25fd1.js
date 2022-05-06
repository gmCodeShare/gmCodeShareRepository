const {
  ggb1,
  separator1,
  button2,
  feedback1,
  text1,
  table1,
  button1,
  separator5,
  text2,
  select1,
  button3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ visible: false });
    button2.updateData({ disabled: true });
    button3.updateData({ visible: false });
    button3.updateData({ align: 'right' });
    text2.updateData({ visible: false });
    select1.setVisible(false);
    ggb1.instance.setVisible('textC', false);
    ggb1.instance.setVisible('textD', false);
    ggb1.instance.setVisible('textE', false);
    ggb1.instance.setVisible('textF', false);
    ggb1.instance.setVisible('textG', false);
    ggb1.instance.setVisible('textH', false);
    ggb1.instance.setVisible('textA', false);
    ggb1.instance.setVisible('textB', false);
    ggb1.instance.setFixed('drawer', true, false);
    ggb1.updateData({ init: true });
  }
}

button2.on('click', () => {
  button2.updateData({ disabled: true });
  text2.updateData({ visible: true });
  select1.setVisible(true);
  ggb1.instance.setLabelVisible('A', false);
  ggb1.instance.setLabelVisible('B', false);
  ggb1.instance.setVisible('textA', true);
  ggb1.instance.setVisible('textB', true);
  ggb1.instance.setValue('checkAns', true);
  ggb1.instance.setLabelVisible('C', false);
  ggb1.instance.setLabelVisible('D', false);
  ggb1.instance.setVisible('textC', true);
  ggb1.instance.setVisible('textD', true);
  ggb1.instance.setValue('checkAns', true);
  ggb1.instance.setLabelVisible('E', false);
  ggb1.instance.setLabelVisible('F', false);
  ggb1.instance.setVisible('textE', true);
  ggb1.instance.setVisible('textF', true);
  ggb1.instance.setValue('checkAns', true);
  ggb1.instance.setLabelVisible('G', false);
  ggb1.instance.setLabelVisible('H', false);
  ggb1.instance.setVisible('textG', true);
  ggb1.instance.setVisible('textH', true);
  ggb1.instance.setValue('checkAns', true);
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  ggb1.instance.setValue('checkAns', false);
  if (ggb1.instance.getValue('count') == 1) {
    table1.updateCell(1, 1, { editable: true });
  }
  if (ggb1.instance.getValue('count') == 2) {
    table1.updateCell(2, 1, { editable: true });
  }
  if (ggb1.instance.getValue('count') == 3) {
    button1.updateData({ disabled: true });
    table1.updateCell(3, 1, { editable: true });
  }
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
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Show More Points',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

autorun(() => {
  if (table1.getCell(0, 1).value != 'B()') {
    button1.updateData({ visible: true });
  }
  if (table1.getCell(3, 1).value != 'H()') {
    button2.updateData({ visible: true, disabled: false });
  }
});

select1.on('change', ({ selected }) => {
  button3.updateData({
    text: 'Submit',
    disabled: !selected.length,
    visible: true,
  });
});

button3.on('click', () => {
  button3.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":3,"textbox":3,"table":1,"select":1},"stage":"Learn","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
