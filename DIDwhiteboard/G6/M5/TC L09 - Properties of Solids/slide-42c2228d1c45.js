const { ggb1, separator4, button2, feedback1, text1, ggb2, table1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

button1.updateData({ align: 'right' });
button2.updateData({ disabled: true });
ggb2.instance.registerObjectUpdateListener('number', updateRight);

function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
  button2.updateData({ disabled: false });
}

const defTable = {
  data: {
    rows: [
      [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }, { value: '' }, { value: '' }],
    ],
  },
};

//pulling row 1 from slide 3
const id1 = 'slide-7db41f926d55';
const oldTable = getFromSlide(id1, 'table1', defTable) || defTable;

const oldCell01 = oldTable.data.rows[0][1].value;
const oldCell02 = oldTable.data.rows[0][2].value;
const oldCell03 = oldTable.data.rows[0][3].value;

if (!oldCell01) {
  table1.updateCell(0, 1, {
    value: `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
} else {
  table1.updateCell(0, 1, { value: oldCell01 });
}
if (!oldCell02) {
  table1.updateCell(0, 2, {
    value: `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
} else {
  table1.updateCell(0, 2, { value: oldCell02 });
}
if (!oldCell03) {
  table1.updateCell(0, 3, {
    value: `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
} else {
  table1.updateCell(0, 3, { value: oldCell03 });
}
//Pulling row 2 from the table on slide 4
const id2 = 'slide-fa6c74df7802';
const oldTable2 = getFromSlide(id2, 'table1', defTable) || defTable;

const oldCell11 = oldTable2.data.rows[1][1].value;
const oldCell12 = oldTable2.data.rows[1][2].value;
const oldCell13 = oldTable2.data.rows[1][3].value;

if (!oldCell11) {
  table1.updateCell(1, 1, {
    value: `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id2
    )}\]}`,
  });
} else {
  table1.updateCell(1, 1, { value: oldCell11 });
}
if (!oldCell12) {
  table1.updateCell(1, 2, {
    value: `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id2
    )}\]}`,
  });
} else {
  table1.updateCell(1, 2, { value: oldCell12 });
}
if (!oldCell13) {
  table1.updateCell(1, 3, {
    value: `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id2
    )}\]}`,
  });
} else {
  table1.updateCell(1, 3, { value: oldCell13 });
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
    table1.getCell(2, 1).value,
    table1.getCell(2, 2).value,
    table1.getCell(2, 3).value,
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

button2.on('click', () => {
  ggb1.instance.reset();
  ggb2.instance.setValue('number', 0);
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":2,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
