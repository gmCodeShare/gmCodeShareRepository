const { ggb1, feedback1, text1, table1, buttonGroup1, separator1, text2 } =
  components;

slide.on('firstload', () => {
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

ggb1.instance.setValue('state', 2);

ggb1.instance.setErrorDialogsActive(false);

const defTable = {
  data: {
    rows: [
      [{ value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }],
    ],
  },
};

const id1 = 'slide-d6ed20e78222';
let num = getFromSlide(id1, 'table1', defTable) || defTable;
let val1 = num.data.rows[0][1].value;
let val2 = num.data.rows[1][1].value;
let val3 = num.data.rows[2][1].value;
let val4 = num.data.rows[3][1].value;
let val5 = num.data.rows[4][1].value;

ggb1.instance.setValue('inpMin', val1);
ggb1.instance.setValue('inpQ1', val2);
ggb1.instance.setValue('inpMedian', val3);
ggb1.instance.setValue('inpQ3', val4);
ggb1.instance.setValue('inpMax', val5);

if (!val1) {
  val1 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(0, 1, { value: val1 });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
} else {
  table1.updateCell(0, 1, { value: val1 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

if (!val2) {
  val2 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(1, 1, { value: val2 });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
} else {
  table1.updateCell(1, 1, { value: val2 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

if (!val3) {
  val3 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(2, 1, { value: val3 });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
} else {
  table1.updateCell(2, 1, { value: val3 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

if (!val4) {
  val4 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(3, 1, { value: val4 });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
} else {
  table1.updateCell(3, 1, { value: val4 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

if (!val5) {
  val5 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(4, 1, { value: val5 });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
} else {
  table1.updateCell(4, 1, { value: val5 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('show', true);
  if (ggb1.instance.getValue('correct')) {
    text2.updateData({ text: '' });
  }
  if (ggb1.instance.getValue('option1')) {
    text2.updateData({
      text: 'Your box plot and five-number summary match, but they do not match the data distribution.',
    });
  }
  if (ggb1.instance.getValue('option2')) {
    text2.updateData({
      text: 'Your five-number summary is correct, but your box plot does not match it.',
    });
  }
  if (ggb1.instance.getValue('option3')) {
    text2.updateData({
      text: 'Your five-number summary is not correct, and your box plot does not match your five-number summary.',
    });
  }
  if (ggb1.instance.getValue('option4')) {
    text2.updateData({
      text: 'Your box plot is correct, but your five-number summary is not correct.',
    });
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('show', false);
  text2.updateData({ text: '' });
});

utils.RTS.on('datachange', 'slide-2f5efef9be15', (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('data={}');
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    if (data.total) {
      ggb1.instance.evalCommand(`SetValue(data,Append(data,${data.total}))`);
    }
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"table":1,"buttongroup":1,"separator":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
