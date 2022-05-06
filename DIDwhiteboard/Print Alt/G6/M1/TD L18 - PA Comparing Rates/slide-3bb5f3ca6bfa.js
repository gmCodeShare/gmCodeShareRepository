const { ggb1, feedback1, table1, text2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('time1', update);

let id1 = 'slide-295482c1ba3e';

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
  ggb1.instance.setValue('state', 1);
});

let oldTable1 = getFromSlide(id1, 'table1', false) || false;
let oldTable2 = getFromSlide(id1, 'table2', false) || false;

let oldCell1 = !oldTable1.data?.rows[1][0]?.value
  ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1.data.rows[1][0].value;

let oldCell2 = !oldTable2.data?.rows[1][0]?.value
  ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable2.data.rows[1][0].value;

if (!!oldTable1.data?.rows[1][0]?.value) {
  ggb1.instance.setValue('song1Beats', oldCell1);
} else {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
}

if (!!oldTable2.data?.rows[1][0]?.value) {
  ggb1.instance.setValue('song2Beats', oldCell2);
} else {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
}

if (
  !!oldTable1.data?.rows[1][0]?.value &&
  !!oldTable2.data?.rows[1][0]?.value
) {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
}

table1.updateCell(0, 1, { value: oldCell1 });
table1.updateCell(1, 1, { value: oldCell2 });

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
  let num = Math.round(ggb1.instance.getValue('time1') * 1) / 1;
  text2.updateData({ text: `#### Time: $${num}$ seconds` });
  if (
    ggb1.instance.getValue('time1') >= 0.5 &&
    ggb1.instance.getValue('time1') < 1.5
  ) {
    text2.updateData({ text: `#### Time: $${num}$ second` });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - PA Comparing Rates","teacherView":true,"layout":"two col"}
*/
