const {
  ggb1,
  feedback1,
  cc_submit_ed25043ca5fc_textbox1,
  cc_submit_ed25043ca5fc_input1,
  cc_submit_ed25043ca5fc_button1: submitButton1,
  separator2,
  text1,
  table1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ visible: false });
    table1.updateData({ visible: false });
    button1.updateData({ visible: false });
    button1.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  text1.updateData({ visible: true });
  table1.updateData({ visible: true });
  ggb1.instance.setValue('showProtractor', true);
  button1.updateData({ visible: true });
});

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 0).value,
    table1.getCell(2, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
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
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
