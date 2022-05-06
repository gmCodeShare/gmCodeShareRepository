const { ggb1, feedback1, text1, table1, text2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('time1', update);

let id1 = 'slide-b1568c6452f4';
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
    // set initial states
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setValue('state', 2);
    ggb1.instance.setValue('drumX', 23);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

let oldTable1 =
  getFromSlide(id1, `cc_sharewithclass_e2f97ee48127_input1.data.text`, false) ||
  false;

let oldTable2 = getFromSlide(id2, 'table1', false) || false;

let oldCell1 = !oldTable1
  ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1;

let oldCell2 = !oldTable2.data?.rows[1][0]?.value
  ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id2)}\]}$`
  : oldTable2.data.rows[1][0].value;

if (typeof oldCell1 == 'number') {
  ggb1.instance.setValue('song1Beats', oldCell1);
} else {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
}

if (typeof oldCell2 == 'number') {
  ggb1.instance.setValue('song2Beats', oldCell2);
} else {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
}

if (!!oldTable1 && !!oldTable2.data?.rows[1][0]?.value) {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

table1.updateCell(0, 1, { value: oldCell2 });
table1.updateCell(1, 1, { value: oldCell1 });

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('song1Beats', oldCell2);
  ggb1.instance.setValue('song2Beats', oldCell1);
  ggb1.instance.setValue('Play', true);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
  console.log(ggb1.instance.getValue('song1Beats'));
  console.log(ggb1.instance.getValue('song2Beats'));
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
