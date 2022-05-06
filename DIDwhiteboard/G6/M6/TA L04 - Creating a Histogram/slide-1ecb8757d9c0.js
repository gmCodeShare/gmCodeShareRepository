const { table1, feedback1, text1, table2, button1 } = components;

button1.updateData({ align: 'right' });

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

const id1 = `slide-8807883ea646`;
let num1 =
  getFromSlide(id1, `cc_submit_592a91ad09f0_input1.data.text`, '') || '';

if (!num1) {
  num1 = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  table2.updateCell(2, 1, {
    value: `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`,
  });
} else {
  table2.updateCell(2, 1, { value: num1 });
}

text1.updateData({
  text: `You said there are $${num1}$ teams that scored at least $110$ points but less than $120$ points. \n\nComplete the rest of the table.`,
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
autorun(() => {
  let entries = [
    table2.getCell(0, 1).value,
    table2.getCell(1, 1).value,
    table2.getCell(3, 1).value,
    table2.getCell(4, 1).value,
  ];
  if (!arrayEquals(entries, table2.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table2.updateData({ last: entries });
  }
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"table":2,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
