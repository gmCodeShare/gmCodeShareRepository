const {
  textDisplay1,
  table1,
  feedback1,
  cc_submit_3e88c8a9a8a2_textbox1: submitText1,
  cc_submit_3e88c8a9a8a2_input1: submitInput1,
  cc_submit_3e88c8a9a8a2_button1: submitButton1,
  separator1,
  cc_sharewithclass_45d0dad7d426_textbox1: shareText1,
  cc_sharewithclass_45d0dad7d426_input1: shareInput1,
  cc_sharewithclass_45d0dad7d426_button1: shareButton1,
  cc_sharewithclass_45d0dad7d426_studentanswers1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

const ids = [
  'slide-381e6f477e1d',
  'slide-2918341e8747',
  'slide-040f66a0bd37',
  'slide-33b660dbe0f2',
];

const tableFillers = ids.map((id) => {
  const inner = getFromSlide(id, 'ggb1.innerData', false) || false;
  let scale;
  if (inner) {
    scale = inner['scaleText'].replaceAll(' ', '');
  } else {
    scale = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
  }
  return scale;
});

table1.updateCell(0, 0, { value: `${tableFillers[0]}` });
table1.updateCell(0, 1, { value: `${tableFillers[1]}` });
table1.updateCell(1, 0, { value: `${tableFillers[2]}` });
table1.updateCell(1, 1, { value: `${tableFillers[3]}` });

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

/*
{"compTotals":{"textbox":2,"table":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":false,"layout":"two col"}
*/
