const { ggb1, feedback1, text1, table1, text2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('time1', update);

let id1 = 'slide-97f63c58abd1';
let id2 = 'slide-295482c1ba3e';

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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 2);
    ggb1.instance.setValue('drumX', 23);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

let num2 =
  getFromSlide(id1, `cc_sharewithclass_e2f97ee48127_input1.data.text`, false) ||
  false;

let old2Table = getFromSlide(id2, 'table2', false) || false;

let oldCell102 = old2Table.data?.rows[1][0]?.value;

if (!!num2 && !!oldCell102) {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setValue('song1Beats', oldCell102);
  ggb1.instance.setValue('song2Beats', num2);
}

if (!num2) {
  num2 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
}

if (!oldCell102) {
  oldCell102 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}$`;
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
}

table1.updateCell(1, 1, { value: num2 });
table1.updateCell(0, 1, { value: oldCell102 });

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('Play', true);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('Play', false);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
});

function update() {
  let numTime = Math.round(ggb1.instance.getValue('time1') * 1) / 1;
  text2.updateData({ text: `time: $${numTime}$ seconds` });
  if (
    ggb1.instance.getValue('time1') >= 0.5 &&
    ggb1.instance.getValue('time1') < 1.5
  ) {
    text2.updateData({ text: `time: $${numTime}$ second` });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
