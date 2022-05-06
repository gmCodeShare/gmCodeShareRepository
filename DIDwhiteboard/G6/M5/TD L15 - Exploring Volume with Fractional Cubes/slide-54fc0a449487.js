const { ggb1, Separator1, buttonGroup1, feedback1, text1, table1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: 'right' });
button1.updateData({ disabled: true });

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setValue('cubeSize', 0.25);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setValue('cubeSize', 0.2);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});
buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setValue('cubeSize', 1 / 6);
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

ggb1.instance.registerObjectUpdateListener('time3', update);
ggb1.instance.registerObjectUpdateListener('count', update);

function update() {
  if (
    ggb1.instance.getValue('time3') < 1 &&
    ggb1.instance.getValue('time3') >= ggb1.instance.getValue('cubeSize')
  ) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
  } else if (ggb1.instance.getValue('time3') == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
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
  // this example checked these 5 cells; you'll have to make adjustments
  let entries = [
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(5, 1).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
    table1.getCell(5, 2).value,
    table1.getCell(3, 3).value,
    table1.getCell(4, 3).value,
    table1.getCell(5, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !(
        table1.getCell(3, 1).value &&
        table1.getCell(4, 1).value &&
        table1.getCell(5, 1).value &&
        table1.getCell(3, 2).value &&
        table1.getCell(4, 2).value &&
        table1.getCell(5, 2).value &&
        table1.getCell(3, 3).value &&
        table1.getCell(4, 3).value &&
        table1.getCell(5, 3).value
      ),
    });
    table1.updateData({
      last: [
        table1.getCell(3, 1).value,
        table1.getCell(4, 1).value,
        table1.getCell(5, 1).value,
        table1.getCell(3, 2).value,
        table1.getCell(4, 2).value,
        table1.getCell(5, 2).value,
        table1.getCell(3, 3).value,
        table1.getCell(4, 3).value,
        table1.getCell(5, 3).value,
      ],
    });
  }
});
button1.on('click', () => {
  button1.updateData({ disabled: true });
  button1.updateData({ text: 'Submitted' });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
