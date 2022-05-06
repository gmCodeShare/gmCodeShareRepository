const { ggb1, feedback1, text1, table1, buttonGroup1 } = components;

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

const rowsContent =
  getFromSlide(`slide-1ecb8757d9c0`, 'table2.data.rows', []) || [];

ggb1.instance.setErrorDialogsActive(false);

const id1 = `slide-8807883ea646`;
let num1 =
  getFromSlide(id1, `cc_submit_592a91ad09f0_input1.data.text`, '') || '';

if (!num1) {
  num1 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table1.updateCell(2, 1, {
    value: `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
} else {
  table1.updateCell(2, 1, { value: num1 });
}

for (let i = 0; i < rowsContent.length; i++) {
  table1.updateCell(i, 1, {
    value: rowsContent[i][1].value,
    math: true,
    editable: false,
  });
}

text1.updateData({
  text: `You said there are $${num1}$ teams that scored at least $110$ points but less than $120$ points. \n\nA bar for this interval is already created. Now create the other bars.`,
});

let num =
  getFromSlide(
    `slide-8807883ea646`,
    'cc_submit_592a91ad09f0_input1.data.text',
    ''
  ) || '';

const result = utils.math.evaluateLatex(num);
if (!result.error) {
  ggb1.instance.evalCommand(`barHeight=(${result.value})`);
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('time4', false);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setAnimating('time5', false);
  ggb1.instance.setValue('time5', 0);
});

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.innerData['animationDone']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
