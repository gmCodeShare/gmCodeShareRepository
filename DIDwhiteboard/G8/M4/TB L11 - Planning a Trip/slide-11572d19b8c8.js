const { text1, feedback1, text2, input2, units, button2 } = components;

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

units.updateData({ align: 'right' });
button2.updateData({ align: 'right' });

const id = 'slide-e2c5650a1171';
let prevText = getFromSlide(id, 'text1.data', false) || false;

if (prevText.text) {
  text1.updateData({ ...prevText });
} else {
  text1.updateData({
    text: `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$`,
  });
}

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
{"compTotals":{"textbox":4,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
