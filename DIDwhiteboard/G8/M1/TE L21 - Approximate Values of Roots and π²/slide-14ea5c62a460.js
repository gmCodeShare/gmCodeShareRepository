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

const id = 'slide-e39ad105261e';
const prevText =
  getFromSlide(
    id,
    'text1.data.text',
    `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`
  ) || `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`;

text1.updateData({ text: `Your result: \n\n $${prevText}$` });

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
