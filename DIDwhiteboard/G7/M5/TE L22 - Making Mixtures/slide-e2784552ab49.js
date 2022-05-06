const { ggb1, feedback, Textbox21, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const prevData =
  getFromSlide('slide-45f3b2b79a62', 'ggb1.innerData', false) || false;
let prevPaint;
if (prevData) {
  prevPaint = prevData['totalPaint'] || 0;
}

if (prevPaint) {
  ggb1.updateInnerData({
    totalCyan: prevData['totalCyan'],
    totalMagenta: prevData['totalMagenta'],
    totalYellow: prevData['totalYellow'],
    totalBlack: prevData['totalBlack'],
    totalWhite: prevData['totalWhite'],
  });
}

let paintArray = [
  'totalCyan',
  'totalMagenta',
  'totalYellow',
  'totalBlack',
  'totalWhite',
  'totalPaint',
];

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateInnerData({ painting: 0 });
    for (let i = 0, L = paintArray.length; i < L; i++) {
      //ggb1.instance.setFixed(paintArray[i], true, false);
      table1.updateCell(i, 4, { value: '%' });
    }
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

for (let i = 0, L = paintArray.length; i < L; i++) {
  //ggb1.instance.setFixed(paintArray[i], true, false);
  table1.updateCell(i, 1, {
    value: `${ggb1.instance.getValue(paintArray[i])}`,
  });
}
ggb1.instance.evalCommand('UpdateConstruction()');

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  // run fake submit button, being careful of returning to screen
  let entries = [
    table1.getCell(0, 2).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
    table1.getCell(5, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 3).value,
    table1.getCell(4, 3).value,
    table1.getCell(5, 3).value,
    table1.getCell(0, 4).value,
    table1.getCell(1, 4).value,
    table1.getCell(2, 4).value,
    table1.getCell(3, 4).value,
    table1.getCell(4, 4).value,
    table1.getCell(5, 4).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !(
        table1.getCell(0, 2).value &&
        table1.getCell(1, 2).value &&
        table1.getCell(2, 2).value &&
        table1.getCell(3, 2).value &&
        table1.getCell(4, 2).value &&
        table1.getCell(5, 2).value &&
        table1.getCell(0, 3).value &&
        table1.getCell(1, 3).value &&
        table1.getCell(2, 3).value &&
        table1.getCell(3, 3).value &&
        table1.getCell(4, 3).value &&
        table1.getCell(5, 3).value &&
        table1.getCell(0, 4).value != '\\%' &&
        table1.getCell(1, 4).value != '\\%' &&
        table1.getCell(2, 4).value != '\\%' &&
        table1.getCell(3, 4).value != '\\%' &&
        table1.getCell(4, 4).value != '\\%' &&
        table1.getCell(5, 4).value != '\\%'
      ),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
