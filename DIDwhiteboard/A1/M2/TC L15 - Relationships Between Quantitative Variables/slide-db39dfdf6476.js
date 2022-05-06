const {
  table1,
  text1,
  cc_sharewithclass_f7f00bb42b8b_textbox1: text2,
  cc_sharewithclass_f7f00bb42b8b_input1: input1,
  cc_sharewithclass_f7f00bb42b8b_button1: button1,
  cc_sharewithclass_f7f00bb42b8b_studentanswers1,
  feedback1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  let entries = [
    table1.getCell(1, 2).value,
    table1.getCell(2, 4).value,
    table1.getCell(6, 1).value,
    table1.getCell(6, 5).value,
    table1.getCell(9, 2).value,
    table1.getCell(9, 4).value,
    table1.getCell(12, 5).value,
    table1.getCell(13, 2).value,
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

/*
{"compTotals":{"table":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Relationships Between Quantitative Variables","teacherView":false,"layout":"two col"}
*/
