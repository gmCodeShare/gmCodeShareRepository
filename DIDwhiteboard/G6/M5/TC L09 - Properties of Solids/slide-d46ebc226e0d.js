const { ggb1, ggb2, feedback1, text1, buttonGroup1, table1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    ggb1.instance.setValue('n', false);
    ggb2.instance.setValue('n', false);
    ggb1.instance.setValue('o', true);
    ggb2.instance.setValue('o', true);
    ggb1.instance.setValue('p', false);
    ggb2.instance.setValue('p', false);
    //buttonGroup1.updateSingleButton({ disabled: true }, 4);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    ggb2.instance.registerObjectUpdateListener('number', updateRight);
    ggb1.updateData({ init: true });
  }
}

function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  //buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb1.instance.setValue('o', true);
  ggb2.instance.setValue('o', true);
  ggb1.instance.setValue('n', false);
  ggb2.instance.setValue('n', false);
  ggb1.instance.setValue('p', false);
  ggb2.instance.setValue('p', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  //buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb1.instance.setValue('n', true);
  ggb2.instance.setValue('n', true);
  ggb1.instance.setValue('p', false);
  ggb2.instance.setValue('p', false);
  ggb1.instance.setValue('o', false);
  ggb2.instance.setValue('o', false);
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  //buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb1.instance.setValue('p', true);
  ggb2.instance.setValue('p', true);
  ggb1.instance.setValue('o', false);
  ggb2.instance.setValue('o', false);
  ggb1.instance.setValue('n', false);
  ggb2.instance.setValue('n', false);
});

/*buttonGroup1.on("click:4", () => {
  ggb1.instance.reset();
  ggb1.instance.setValue("n", false);
  ggb2.instance.setValue("n", false);
  ggb1.instance.setValue("p", false);
  ggb2.instance.setValue("p", false);
  ggb1.instance.setValue("o", false);
  ggb2.instance.setValue("o", false);
  ggb1.instance.setValue("number", 0);
  ggb2.instance.setValue("number", 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
});*/

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
    table1.getCell(0, 4).value,
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(1, 4).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 4).value,
    table1.getCell(2, 2).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 4).value,
    table1.getCell(3, 2).value,
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

/*
{"compTotals":{"geogebra":2,"textbox":2,"buttongroup":1,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
