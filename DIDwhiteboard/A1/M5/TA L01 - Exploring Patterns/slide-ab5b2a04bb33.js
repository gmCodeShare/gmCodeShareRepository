const {
  table1,
  feedback1,
  text1,
  cc_submit_de59cb181358_textbox1: text2,
  cc_submit_de59cb181358_input1: input1,
  cc_submit_de59cb181358_button1: button1,
  separator2,
  cc_sharewithclass_41411edd3a52_textbox1: text3,
  cc_sharewithclass_41411edd3a52_input1: input2,
  cc_sharewithclass_41411edd3a52_button1: button2,
  cc_sharewithclass_41411edd3a52_studentanswers1,
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

const id = `slide-fa1af63a160f`;
let expression =
  getFromSlide(id, `cc_sharewithclass_4cabc3386c1d_input1.data.text`, '') || '';
if (!expression) {
  expression = `\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
}
text1.updateData({
  text: `You wrote the expression $${expression}$. Use it to complete the table for the number of ducks in the given figure numbers.`,
});

slide.on('firstload', () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

autorun(() => {
  let entries = [
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(5, 1).value,
    table1.getCell(6, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    text2.updateData({ visible: entries.some((value) => !!value) });
    input1.updateData({ visible: entries.some((value) => !!value) });
    button1.updateData({ visible: entries.some((value) => !!value) });
    table1.updateData({ last: [...entries] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

button1.on('click', () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"table":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TA L01 - Exploring Patterns","teacherView":false,"layout":"two col"}
*/
