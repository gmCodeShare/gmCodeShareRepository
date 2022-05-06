const { text1, text2, table1, button1, feedback } = components;

// keep a fake submit button updated after a table

slide.on('firstload', () => {
  button1.updateData({ align: 'right' });
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

const id = 'slide-22f290967089';
const prevFIB = getFromSlide(id, 'fib2.data.values', false) || false;
//`\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`;
let results;
if (prevFIB) {
  results = prevFIB.map(({ text }) => text);
  // if (!results.every((res) => !!res)) {
  if (!results[2] || !results[3]) {
    text1.updateData({
      text: `Your result: \n\n $\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
        id
      )}\]}$`,
    });
  } else {
    text1.updateData({
      // text: `Your result: \n\n $${results[0]} < \\pi < ${results[1]}$ \n\n $${results[2]} < \\pi^2 < ${results[3]}$`,
      text: `Your result: \n\n $${results[2]} < \\pi^2 < ${results[3]}$`,
    });
  }
} else {
  text1.updateData({
    text: `Your result: \n\n $\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$`,
  });
}

autorun(() => {
  // put all table entries into a single, one-dimensional array
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"textbox":3,"table":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"one col"}
*/
