const { ggb1, feedback1, text1, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-6c36b6748efd';

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

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let numPrev = getFromSlide(id1, `input1.data.text`, false) || false;

if (!!numPrev) {
  table1.updateCell(0, 3, { value: numPrev });
}

autorun(() => {
  if (
    table1.data.rows[0][3].value != '' &&
    table1.data.rows[1][3].value != '' &&
    table1.data.rows[2][3].value != '' &&
    table1.data.rows[3][3].value != ''
  ) {
    buttonGroup1.updateSingleButton({ visible: true }, 1);
    buttonGroup1.updateSingleButton({ visible: true }, 2);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let num1 = table1.getCell(0, 3).value;
  let num2 = table1.getCell(1, 3).value;
  let num3 = table1.getCell(2, 3).value;
  let num4 = table1.getCell(3, 3).value;
  const min = 0;
  const max = 10000;

  num1 = boundIt(num1, 0, 3, min, max);
  num2 = boundIt(num2, 1, 3, min, max);
  num3 = boundIt(num3, 2, 3, min, max);
  num4 = boundIt(num4, 3, 3, min, max);

  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setValue('state', 1);
});

autorun(() => {
  let num1 = table1.getCell(0, 3).value;
  let num2 = table1.getCell(1, 3).value;
  let num3 = table1.getCell(2, 3).value;
  let num4 = table1.getCell(3, 3).value;
  ggb1.instance.setValue('TLYABeats', num1);
  ggb1.instance.setValue('TRYABeats', num2);
  ggb1.instance.setValue('BLYABeats', num3);
  ggb1.instance.setValue('BRYABeats', num4);
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
    table1.getCell(0, 3).value,
    table1.getCell(1, 3).value,
    table1.getCell(2, 3).value,
    table1.getCell(3, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      1
    );
    table1.updateData({ last: entries });
  }
});

function boundIt(inp, row, column, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    table1.updateCell(row, column, { value: `0` });
    return 0;
  } else if (result.value < min) {
    table1.updateCell(row, column, { value: `${min}` });
    return min;
  } else if (result.value > max) {
    table1.updateCell(row, column, { value: `${max}` });
    return max;
  }
  return result.value;
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
