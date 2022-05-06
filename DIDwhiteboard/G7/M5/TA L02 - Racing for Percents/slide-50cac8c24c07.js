const { ggb1, feedback1, text1, table1, button1, separator6, text2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

let unitRateAsPercent = '80%';
let unitRateAsDecimal = 0.8;
let clickCount;

if (!ggb1.data.storedClickCount) {
  clickCount = 0;
} else {
  clickCount = ggb1.data.storedClickCount;
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    table1.updateCell(0, 3, { value: '%' });
    table1.updateCell(1, 3, { value: '%' });
    table1.updateCell(2, 3, { value: '%' });
    table1.updateCell(3, 3, { value: '%' });
    text2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  if (table1.getCell(0, 3).value.replace('\\%', '%') === unitRateAsPercent) {
    table1.updateCell(0, 3, { className: '' });
  } else {
    table1.updateCell(0, 3, { className: 'bg-danger text-white' });
  }
  if (table1.getCell(1, 3).value.replace('\\%', '%') != unitRateAsPercent) {
    table1.updateCell(1, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 3, { className: '' });
  }
  if (table1.getCell(2, 3).value.replace('\\%', '%') != unitRateAsPercent) {
    table1.updateCell(2, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 3, { className: '' });
  }
  if (table1.getCell(3, 3).value.replace('\\%', '%') != unitRateAsPercent) {
    table1.updateCell(3, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(3, 3, { className: '' });
  }
  if (clickCount == 0) {
    table1.updateCell(4, 1, { editable: true, value: '' });
    table1.updateCell(4, 3, { editable: true, value: '\\%' });
    text2.updateData({ visible: true });
  }
  if (clickCount > 0) {
    if (
      table1.getCell(4, 1).value.replace('\\%', '%') !=
      Math.round(unitRateAsDecimal * table1.getCell(4, 0).value * 1000) / 1000
    ) {
      table1.updateCell(4, 1, { className: 'bg-danger text-white' });
    } else {
      table1.updateCell(4, 1, { className: '' });
    }
    if (table1.getCell(4, 3).value.replace('\\%', '%') != unitRateAsPercent) {
      table1.updateCell(4, 3, { className: 'bg-danger text-white' });
    } else {
      table1.updateCell(4, 3, { className: '' });
    }
  }
  clickCount++;
  ggb1.updateData({ storedClickCount: clickCount });
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
