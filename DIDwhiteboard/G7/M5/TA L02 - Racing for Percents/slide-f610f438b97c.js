const {
  ggb1,
  feedback1,
  text1,
  table1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_a08bdfbbc8c2_textbox1: shareText1,
  cc_sharewithclass_a08bdfbbc8c2_input1: shareInput1,
  cc_sharewithclass_a08bdfbbc8c2_button1: shareButton1,
  cc_sharewithclass_a08bdfbbc8c2_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareAnswers1.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

let clickCount;

if (!ggb1.data.storedClickCount) {
  clickCount = 0;
} else {
  clickCount = ggb1.data.storedClickCount;
}

shareButton1.updateData({ align: 'right' });

ggb1.instance.setValue('showCarShadow', true);
ggb1.instance.setValue('myPercent', 0.8);
ggb1.instance.setValue('maxLaps', 2.5);
ggb1.instance.setValue('speed', 0.5);

let origVal1 = 0.5;
let origVal2 = 1;
let origVal3 = 2;
let origVal4 = 2.5;

autorun(() => {
  let time = ggb1.innerData['time'];
  let origVal1 = 0.5;
  let origVal2 = 1;
  let origVal3 = 2;
  let origVal4 = 2.5;
  if (time >= origVal1) {
    table1.updateCell(0, 0, { value: origVal1, math: true });
    table1.updateCell(0, 1, {
      value: origVal1 * ggb1.instance.getValue('myPercent'),
      math: true,
    });
  }
  if (time >= origVal2) {
    table1.updateCell(1, 0, { value: origVal2, math: true });
    table1.updateCell(1, 1, {
      value: origVal2 * ggb1.instance.getValue('myPercent'),
      math: true,
    });
  }
  if (time >= origVal3) {
    table1.updateCell(2, 0, { value: origVal3, math: true });
    table1.updateCell(2, 1, {
      value: origVal3 * ggb1.instance.getValue('myPercent'),
      math: true,
    });
  }
  if (time >= origVal4) {
    table1.updateCell(3, 0, { value: origVal4, math: true });
    table1.updateCell(3, 1, {
      value: origVal4 * ggb1.instance.getValue('myPercent'),
      math: true,
    });
  }
  if (time >= ggb1.instance.getValue('maxLaps') && clickCount == 1) {
    shareText1.updateData({
      text: `Original car laps: $${time}$\n\nAdjusted car laps: $${
        Math.round(ggb1.instance.getValue('car2Laps') * 1000) / 1000
      }$ \n\nDetermine the unit rate that represents the relationship between the number of laps made by the original car and the number of laps made by the adjusted car.`,
    });
  } else if (clickCount == 1) {
    shareText1.updateData({
      text: `Original car laps: $${time}$\n\nAdjusted car laps: $${
        Math.round(ggb1.instance.getValue('car2Laps') * 1000) / 1000
      }$`,
    });
  }
});

buttonGroup1.on('click:1', () => {
  shareText1.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  //table fill
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  clickCount++;
  ggb1.updateData({ storedClickCount: clickCount });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  // check unit rates
  if (
    Math.round(
      utils.math.evaluateLatex(
        table1.getCell(0, 2).value.replace('\\%', '*0.01')
      ).value * 1000000
    ) /
      1000000 !=
    ggb1.instance.getValue('myPercent')
  ) {
    table1.updateCell(0, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(0, 2, { className: '' });
  }
  if (
    Math.round(
      utils.math.evaluateLatex(
        table1.getCell(1, 2).value.replace('\\%', '*0.01')
      ).value * 1000000
    ) /
      1000000 !=
    ggb1.instance.getValue('myPercent')
  ) {
    table1.updateCell(1, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 2, { className: '' });
  }
  if (
    Math.round(
      utils.math.evaluateLatex(
        table1.getCell(2, 2).value.replace('\\%', '*0.01')
      ).value * 1000000
    ) /
      1000000 !=
    ggb1.instance.getValue('myPercent')
  ) {
    table1.updateCell(2, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 2, { className: '' });
  }
  if (
    Math.round(
      utils.math.evaluateLatex(
        table1.getCell(1, 2).value.replace('\\%', '*0.01')
      ).value * 1000000
    ) /
      1000000 !=
    ggb1.instance.getValue('myPercent')
  ) {
    table1.updateCell(3, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(3, 2, { className: '' });
  }
  shareText1.updateData({
    text: `Original car laps: $${ggb1.instance.getValue(
      'time'
    )}$\n\nAdjusted car laps: $${
      Math.round(ggb1.instance.getValue('car2Laps') * 1000) / 1000
    }$\n\nDetermine the unit rate that represents the relationship between the number of laps made by the original car and the number of laps made by the adjusted car.\n\nDescribe the relationship between the number of laps made by the adjusted car and the number of laps made by the original car. Explain.`,
  });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      2
    );
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
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
