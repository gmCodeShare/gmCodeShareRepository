const {
  text1,
  feedback1,
  cc_submit_e72856df636b_textbox1: submitText1,
  cc_submit_e72856df636b_input1: submitInput1,
  cc_submit_e72856df636b_button1: submitButton1,
  separator1,
  text2,
  input2,
  units,
  button2,
} = components;

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
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false, align: 'right' });
  units.updateData({ visible: false, align: 'right' });
});

const id = 'slide-ef9b21accd73';
let exp1 =
  getFromSlide(id, 'cc_submit_d432261553a7_input1.data.text', '') || '';
let exp2 =
  getFromSlide(id, 'cc_submit_057b2dc1b016_input1.data.text', '') || '';

if (!exp1) {
  exp1 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
} else {
  exp1 = `$${exp1}$`;
}
if (!exp2) {
  exp2 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
} else {
  exp2 = `$${exp2}$`;
}

submitText1.updateData({
  text: `Your expression for how long it takes to drive is ${exp1}. \n\n Your expression for how long it takes to fly is ${exp2}. \n\n Write an equation showing that the driving time is the same as the flying time.`,
});

submitButton1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  units.updateData({ visible: true });
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"textbox":4,"submit":1,"separator":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
