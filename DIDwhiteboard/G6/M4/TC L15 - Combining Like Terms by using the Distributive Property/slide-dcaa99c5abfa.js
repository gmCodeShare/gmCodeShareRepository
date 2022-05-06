const {
  ggb1,
  feedback1,
  cc_sharewithclass_60c74fbae3b1_textbox1: shareText1,
  cc_sharewithclass_60c74fbae3b1_input1,
  cc_sharewithclass_60c74fbae3b1_button1,
  cc_sharewithclass_60c74fbae3b1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-ec5301423337';
let id2 = 'slide-913c3d856df9';
let id3 = 'slide-c731dadbba8f';

let id1SubmitInput = 'cc_submit_bf72d60eac79_input1';
let id2SubmitInput = 'cc_submit_dbf462f0e6ea_input1';
let id3SubmitInput = 'cc_submit_73130a34d027_input1';

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

let defPrevGGB1 = {
  innerData: { y1Box1: 2 },
};

let prevGGB1 = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasGGBData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes('innerData')
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasGGBData) {
  prevGGB1 = defPrevGGB1;
}

let defPrevInput1 = {
  data: { text: '' },
};

let prevInput1 =
  getFromSlide(id1, id1SubmitInput, defPrevInput1) || defPrevInput1; // don't forget to change slide id

let id1PulledText = `$\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
  id1
)}\]}$`;

if (prevInput1.data.text) {
  id1PulledText = prevInput1.data.text;
}

let defPrevGGB2 = {
  innerData: { y1Box2: 1.5, y2Box2: 2.5 },
};

let prevGGB2 = getFromSlide(id2, 'ggb1', false) || false; // don't forget to change slide id

let id2HasGGBData = !prevGGB2
  ? false
  : !Object.keys(prevGGB2).includes('innerData')
  ? false
  : !Object.keys(prevGGB2.innerData).length
  ? false
  : true;

if (!id2HasGGBData) {
  prevGGB2 = defPrevGGB2;
}

let defPrevInput2 = {
  data: { text: '' },
};

let prevInput2 =
  getFromSlide(id2, id2SubmitInput, defPrevInput2) || defPrevInput2; // don't forget to change slide id

let id2PulledText = `$\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
  id2
)}\]}$`;

if (prevInput2.data.text) {
  id2PulledText = prevInput2.data.text;
}

let defPrevGGB3 = {
  innerData: { y1Box3: 2, y2Box3: 1, y3Box3: 1.5 },
};

let prevGGB3 = getFromSlide(id3, 'ggb1', false) || false; // don't forget to change slide id

let id3HasGGBData = !prevGGB3
  ? false
  : !Object.keys(prevGGB3).includes('innerData')
  ? false
  : !Object.keys(prevGGB3.innerData).length
  ? false
  : true;

if (!id3HasGGBData) {
  prevGGB3 = defPrevGGB3;
}

let defPrevInput3 = {
  data: { text: '' },
};

let prevInput3 =
  getFromSlide(id3, id3SubmitInput, defPrevInput3) || defPrevInput3; // don't forget to change slide id

let id3PulledText = `$\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
  id3
)}\]}$`;

if (prevInput3.data.text) {
  id3PulledText = prevInput3.data.text;
}

if (id1HasGGBData) {
  ggb1.instance.setValue('y1Box1', prevGGB1.innerData['y1Box1']);
}

if (id2HasGGBData) {
  ggb1.instance.setValue('y1Box2', prevGGB2.innerData['y1Box2']);
  ggb1.instance.setValue('y2Box2', prevGGB2.innerData['y2Box2']);
}

if (id3HasGGBData) {
  ggb1.instance.setValue('y1Box3', prevGGB3.innerData['y1Box3']);
  ggb1.instance.setValue('y2Box3', prevGGB3.innerData['y2Box3']);
  ggb1.instance.setValue('y3Box3', prevGGB3.innerData['y3Box3']);
}

shareText1.updateData({
  text: `The expression that represents the total area of the given rectangle is $8x$.\n\nYou wrote the expressions:\n\n>$${id1PulledText}$\n\n>$${id2PulledText}$\n\n>$${id3PulledText}$ \n\nWhat do you notice and wonder about the expression that represents the total area of the given rectangle and about the three expressions you wrote?`,
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
