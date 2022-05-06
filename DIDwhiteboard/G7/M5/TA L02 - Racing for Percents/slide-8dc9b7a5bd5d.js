const { ggb1, feedback1, text1, table1, button1, separator9, text2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
text2.updateData({ visible: false });

ggb1.instance.setValue('showCarShadow', true);
ggb1.instance.setValue('myPercent', 1.4);
ggb1.instance.setValue('maxLaps', 5);
ggb1.instance.setValue('speed', 0.5);

let origVal1 = 3;
let origVal2 = 3.8;
let origVal3 = 4.2;
let origVal4 = 4.9;

//sets values of left two columns
table1.updateCell(0, 0, { value: origVal1 });
table1.updateCell(1, 1, {
  value:
    Math.round(origVal2 * ggb1.instance.getValue('myPercent') * 1000) / 1000,
});
table1.updateCell(2, 0, { value: origVal3 });
table1.updateCell(3, 1, {
  value:
    Math.round(origVal4 * ggb1.instance.getValue('myPercent') * 1000) / 1000,
});

//sets values of percents
table1.updateCell(0, 2, { value: '140\\%' });
table1.updateCell(1, 2, { value: '140\\%' });
table1.updateCell(2, 2, { value: '140\\%' });
table1.updateCell(3, 2, { value: '140\\%' });

autorun(() => {
  let time = ggb1.innerData['time'];
  text2.updateData({
    text: `Original car laps: $${time}$\n\nAdjusted car laps: $${
      Math.round(ggb1.instance.getValue('car2Laps') * 1000) / 1000
    }$`,
  });
  //Checks cell 01
  if (
    origVal1 <= ggb1.instance.getValue('time') &&
    ggb1.instance.getValue('time') < origVal2
  ) {
    if (
      Math.round(origVal1 * ggb1.instance.getValue('myPercent') * 1000) /
        1000 !=
      utils.math.evaluateLatex(
        table1.getCell(0, 1).value.replace('\\%', '*0.01')
      ).value
    ) {
      table1.updateCell(0, 1, { className: 'bg-danger text-white' });
    } else {
      table1.updateCell(0, 1, { className: 'bg-success' });
    }
  }
  //Checks cell 10
  if (
    origVal2 <= ggb1.instance.getValue('time') &&
    ggb1.instance.getValue('time') < origVal3
  ) {
    if (
      origVal2 !=
      utils.math.evaluateLatex(
        table1.getCell(1, 0).value.replace('\\%', '*0.01')
      ).value
    ) {
      table1.updateCell(1, 0, { className: 'bg-danger text-white' });
    } else {
      table1.updateCell(1, 0, { className: 'bg-success' });
    }
  }
  //Checks cell 21
  if (
    origVal3 <= ggb1.instance.getValue('time') &&
    ggb1.instance.getValue('time') < origVal4
  ) {
    if (
      Math.round(origVal3 * ggb1.instance.getValue('myPercent') * 1000) /
        1000 !=
      utils.math.evaluateLatex(
        table1.getCell(2, 1).value.replace('\\%', '*0.01')
      ).value
    ) {
      table1.updateCell(2, 1, { className: 'bg-danger text-white' });
    } else {
      table1.updateCell(2, 1, { className: 'bg-success' });
    }
  }
  //Checks cell 30
  if (
    origVal4 <= ggb1.instance.getValue('time') &&
    ggb1.instance.getValue('time') != ggb1.instance.getValue('maxLaps')
  ) {
    if (
      origVal4 !=
      utils.math.evaluateLatex(
        table1.getCell(3, 0).value.replace('\\%', '*0.01')
      ).value
    ) {
      table1.updateCell(3, 0, { className: 'bg-danger text-white' });
    } else {
      table1.updateCell(3, 0, { className: 'bg-success' });
    }
  }
});

button1.on('click', () => {
  text2.updateData({
    visible: true,
    text: `Original car laps: $${ggb1.instance.getValue(
      'time'
    )}$\n\nAdjusted car laps: $${
      Math.round(ggb1.instance.getValue('car2Laps') * 1000) / 1000
    }$`,
  });
  table1.updateCell(0, 1, { className: '' });
  table1.updateCell(1, 0, { className: '' });
  table1.updateCell(2, 1, { className: '' });
  table1.updateCell(3, 0, { className: '' });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button1.updateData({ disabled: true });
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({ disabled: !entries.every((value) => !!value) }, 2);
    table1.updateData({ last: [...entries] });
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

/*
{"compTotals":{"geogebra":1,"textbox":3,"table":1,"button":1,"separator":1},"stage":"Learn","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
