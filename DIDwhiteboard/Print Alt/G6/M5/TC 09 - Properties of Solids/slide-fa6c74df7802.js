const { ggb1, separator3, button2, feedback1, ggb2, table1, buttonGroup1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button2.updateData({ disabled: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

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

ggb2.instance.registerObjectUpdateListener('number', updateRight);

function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
  button2.updateData({ disabled: false });
}

const defTable = {
  data: {
    rows: [[{ value: '' }, { value: '' }, { value: '' }, { value: '' }]],
  },
};

/*const id1 = 'slide-7db41f926d55';
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
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {

    table1.updateData({ last: entries });
  }
});*/

buttonGroup1.on('click:1', () => {
  table1.updateCell(1, 1, {
    value: '8',
  });
  table1.updateCell(1, 2, {
    value: '12',
  });
  table1.updateCell(1, 3, {
    value: '6',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  table1.updateCell(1, 1, {
    value: '',
  });
  table1.updateCell(1, 2, {
    value: '',
  });
  table1.updateCell(1, 3, {
    value: '',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

button2.on('click', () => {
  ggb1.instance.reset();
  ggb2.instance.setValue('number', 0);
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":1,"textbox":1,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"two col"}
*/
