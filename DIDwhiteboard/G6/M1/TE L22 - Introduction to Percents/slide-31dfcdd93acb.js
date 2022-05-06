const {
  ggb1,
  Separator4,
  button1,
  feedback1,
  text1,
  Separator5,
  text2,
  table1,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('quarterCount', updateQuarter);
ggb1.instance.registerObjectUpdateListener('dimeCount', updateDime);
ggb1.instance.registerObjectUpdateListener('nickelCount', updateNickel);
ggb1.instance.registerObjectUpdateListener('pennyCount', updatePenny);

slide.on('firstload', () => {
  button1.updateData({ disabled: true });
  button2.updateData({ disabled: true, align: 'right' });
});

button1.on('click', () => {
  resetIt();
});

button2.on('click', () => {
  button2.updateData({ disabled: true });
  button2.updateData({ text: 'Submitted' });
});

function resetIt() {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('goHome', true);
}

function updateQuarter() {
  let num = ggb1.instance.getValue('quarterCount');
  table1.updateCell(0, 1, { math: true, value: num.toString() });
  if (
    ggb1.instance.getValue('quarterCount') == 0 &&
    ggb1.instance.getValue('dimeCount') == 0 &&
    ggb1.instance.getValue('nickelCount') == 0 &&
    ggb1.instance.getValue('pennyCount') == 0
  ) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
}

function updateDime() {
  let num = ggb1.instance.getValue('dimeCount');
  table1.updateCell(1, 1, { value: num.toString() });
  if (
    ggb1.instance.getValue('quarterCount') == 0 &&
    ggb1.instance.getValue('dimeCount') == 0 &&
    ggb1.instance.getValue('nickelCount') == 0 &&
    ggb1.instance.getValue('pennyCount') == 0
  ) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
}

function updateNickel() {
  let num = ggb1.instance.getValue('nickelCount');
  table1.updateCell(2, 1, { value: num.toString() });
  if (
    ggb1.instance.getValue('quarterCount') == 0 &&
    ggb1.instance.getValue('dimeCount') == 0 &&
    ggb1.instance.getValue('nickelCount') == 0 &&
    ggb1.instance.getValue('pennyCount') == 0
  ) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
}

function updatePenny() {
  let num = ggb1.instance.getValue('pennyCount');
  table1.updateCell(3, 1, { value: num.toString() });
  if (
    ggb1.instance.getValue('quarterCount') == 0 &&
    ggb1.instance.getValue('dimeCount') == 0 &&
    ggb1.instance.getValue('nickelCount') == 0 &&
    ggb1.instance.getValue('pennyCount') == 0
  ) {
    button1.updateData({ disabled: true });
  } else {
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
  // this example checked these 5 cells; you'll have to make adjustments
  let entries = [
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 2).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 2).value,
    table1.getCell(3, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button2.updateData({
      text: 'Submit',
      disabled: !(
        table1.getCell(0, 2).value &&
        table1.getCell(0, 3).value &&
        table1.getCell(1, 2).value &&
        table1.getCell(1, 3).value &&
        table1.getCell(2, 2).value &&
        table1.getCell(2, 3).value &&
        table1.getCell(3, 2).value &&
        table1.getCell(3, 3).value
      ),
    });
    table1.updateData({
      last: [
        table1.getCell(0, 2).value,
        table1.getCell(0, 3).value,
        table1.getCell(1, 2).value,
        table1.getCell(1, 3).value,
        table1.getCell(2, 2).value,
        table1.getCell(2, 3).value,
        table1.getCell(3, 2).value,
        table1.getCell(3, 3).value,
      ],
    });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":2,"textbox":3,"table":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - Introduction to Percents","teacherView":false,"layout":"two col"}
*/
