const {
  text3,
  table1,
  separator3,
  button3,
  feedback1,
  cc_submit_faad15b16848_textbox1: text1,
  cc_submit_faad15b16848_input1: input1,
  cc_submit_faad15b16848_button1: button1,
  cc_submit_e77af81fd418_textbox1: text2,
  cc_submit_e77af81fd418_input1: input2,
  cc_submit_e77af81fd418_button1: button2,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button3.updateData({ disabled: true });
    button3.updateData({ align: 'right' });
    table1.updateData({ init: true });
  }
}

//fake submit button after a table
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button3.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button3.on('click', () => {
  button3.updateData({ text: 'Submitted', disabled: true });
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  let num02 = table1.getCell(0, 2).value;
  if (num02 != 2.5) {
    table1.updateCell(0, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(0, 2, { className: 'text-black' });
  }
  let num12 = table1.getCell(1, 2).value;
  if (num12 != 5.0) {
    table1.updateCell(1, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(1, 2, { className: 'text-black' });
  }
  let num22 = table1.getCell(2, 2).value;
  if (num22 != 7.5) {
    table1.updateCell(2, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(2, 2, { className: 'text-black' });
  }
  let num32 = table1.getCell(3, 2).value;
  if (num32 != 10.0) {
    table1.updateCell(3, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(3, 2, { className: 'text-black' });
  }
  let num42 = table1.getCell(4, 2).value;
  if (num42 != 12.5) {
    table1.updateCell(4, 2, { className: 'text-danger' });
  } else {
    table1.updateCell(4, 2, { className: 'text-black' });
  }
});

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"table":1,"separator":1,"button":1,"submit":2},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
