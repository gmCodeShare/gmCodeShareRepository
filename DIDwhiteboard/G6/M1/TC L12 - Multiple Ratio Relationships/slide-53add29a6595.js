const {
  ggb1,
  table1,
  cc_sharewithclass_1a711709a027_textbox1: shareText1,
  cc_sharewithclass_1a711709a027_input1: shareInput1,
  cc_sharewithclass_1a711709a027_button1: shareButton1,
  cc_sharewithclass_1a711709a027_studentanswers1,
} = components;

let id1 = 'slide-042033649309';

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setVisible('d', true);
  ggb1.instance.setVisible('e', true);
  ggb1.instance.setVisible('H', false);
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

let blueNum = getFromSlide(id1, `input1.data.text`, false) || false;

if (!blueNum) {
  table1.updateCell(0, 1, {
    math: true,
    value: `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
  ggb1.instance.setVisible('d', false);
  ggb1.instance.setVisible('e', false);
} else {
  table1.updateCell(0, 1, { value: `${blueNum}` });
}

let redNum = getFromSlide(id1, `input2.data.text`, false) || false;
if (!redNum) {
  table1.updateCell(1, 1, {
    math: true,
    value: `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
  ggb1.instance.setVisible('d', false);
  ggb1.instance.setVisible('e', false);
} else {
  table1.updateCell(1, 1, { value: `${redNum}` });
}

let blueNum2 = getFromSlide(id1, `input3.data.text`, false) || false;
if (!blueNum2) {
  table1.updateCell(0, 2, {
    math: true,
    value: `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
  ggb1.instance.setVisible('d', false);
  ggb1.instance.setVisible('e', false);
} else {
  table1.updateCell(0, 2, { value: `${blueNum2}` });
}

let redNum2 = getFromSlide(id1, `input4.data.text`, false) || false;
if (!redNum2) {
  table1.updateCell(1, 2, {
    math: true,
    value: `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
  ggb1.instance.setVisible('d', false);
  ggb1.instance.setVisible('e', false);
} else {
  table1.updateCell(1, 2, { value: `${redNum2}` });
}

ggb1.instance.setValue('bluePart', blueNum);
ggb1.instance.setValue('redPart', redNum);
ggb1.instance.setValue('bluePart2', blueNum2);
ggb1.instance.setValue('redPart2', redNum2);

/*
{"compTotals":{"geogebra":1,"table":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
