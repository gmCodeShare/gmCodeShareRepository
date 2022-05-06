const { text2, table1, buttonGroup1, text3, ggb1, feedback } = components;

slide.on('firstload', () => {
  //count = 0;
  //ggb1.instance.setVisible("l2", false);
  //buttonGroup1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') - 1);
});

autorun(() => {
  let allCellsFilledWithNums = table1.data.rows.every((row) =>
    row.every((cell) => !utils.math.evaluateLatex(cell.value).error)
  );
  //buttonGroup1.updateSingleButton({ disabled: !allCellsFilledWithNums }, 1);
  buttonGroup1.updateSingleButton({ disabled: !allCellsFilledWithNums }, 2);
});
buttonGroup1.on('click:1', () => {
  if (table1.data.rows.length < 7) {
    table1.addRow();
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});

// let Number1;
// let Number2;
// let Number3;
// let Number4;
// let Number5;
// let Number6;
// let Number7;
// let Number8;
// let Number9;
// let Number10;
let cell00;
let cell10;
let cell20;
let cell30;
let cell40;
let cell50;
let cell60;
let cell70;
let cell80;
let cell90;
let cell01;
let cell11;
let cell21;
let cell31;
let cell41;
let cell51;
let cell61;
let cell71;
let cell81;
let cell91;
let cell02;
let cell12;
let cell22;
let cell32;
let cell42;
let cell52;
let cell62;
let cell72;
let cell82;
let cell92;
let cell03;
let cell13;
let cell23;
let cell33;
let cell43;
let cell53;
let cell63;
let cell73;
let cell83;
let cell93;
// let varArray = [
//   Number1,
//   Number2,
//   Number3,
//   Number4,
//   Number5,
//   Number6,
//   Number7,
//   Number8,
//   Number9,
//   Number10,
// ];
let coll0 = [
  cell00,
  cell10,
  cell20,
  cell30,
  cell40,
  cell50,
  cell60,
  cell70,
  cell80,
  cell90,
];
let coll1 = [
  cell01,
  cell11,
  cell20,
  cell31,
  cell41,
  cell51,
  cell61,
  cell71,
  cell81,
  cell91,
];
let coll2 = [
  cell02,
  cell12,
  cell22,
  cell32,
  cell42,
  cell52,
  cell62,
  cell72,
  cell82,
  cell92,
];
let coll3 = [
  cell03,
  cell13,
  cell23,
  cell33,
  cell43,
  cell53,
  cell63,
  cell73,
  cell83,
  cell93,
];

autorun(() => {
  const rowsContent = table1.data.rows;
  // for (let i = 0; i < rowsContent.length; i++) {
  //   varArray[i] = utils.math.evaluateLatex(table1.getCell(i, 4));

  //   console.log(varArray[i].value);
  //   if(varArray[i].value < 0 ||varArray[i].error){
  //   return;
  // }
  //   ggb1.instance.setValue("number" + (i + 1), varArray[i].value);
  //  // console.log(table1.getCell(i, 4, { value: rowsContent[i][4].value }));
  // }
  for (let i = 0; i < rowsContent.length; i++) {
    coll0[i] = table1.getCell(i, 0);
    ggb1.instance.setValue('cell' + i + '0', coll0[i].value);
  }
  for (let i = 0; i < rowsContent.length; i++) {
    coll1[i] = table1.getCell(i, 1);
    ggb1.instance.setValue('cell' + i + '1', coll1[i].value);
  }
  for (let i = 0; i < rowsContent.length; i++) {
    coll2[i] = table1.getCell(i, 2);
    ggb1.instance.setValue('cell' + i + '2', coll2[i].value);
  }
  for (let i = 0; i < rowsContent.length; i++) {
    coll3[i] = table1.getCell(i, 3);
    ggb1.instance.setValue('cell' + i + '3', coll3[i].value);
  }
  console.log(ggb1.instance.getValue('row0'));
  console.log(ggb1.instance.getValue('cell00'));
  console.log(ggb1.instance.getValue('cell01'));
  console.log(ggb1.instance.getValue('cell02'));
  console.log(ggb1.instance.getValue('cell03'));
  if (
    ggb1.innerData['row0'] == false ||
    ggb1.innerData['row1'] == false ||
    ggb1.innerData['row2'] == false ||
    ggb1.innerData['row3'] == false ||
    ggb1.innerData['row4'] == false ||
    ggb1.innerData['row5'] == false ||
    ggb1.innerData['row6'] == false ||
    ggb1.innerData['row7'] == false ||
    ggb1.innerData['row8'] == false ||
    ggb1.innerData['row9'] == false ||
    ggb1.innerData['row10'] == false
  ) {
    let num =
      '\\text\\color{DA291C}{Each teacher should receive the same number of pencils.}';
    text3.updateData({
      visible: true,
      text: `$${num}$`,
    });
  } else {
    text3.updateData({ visible: false });
  }
  if (
    ggb1.innerData['answer1'] <= 0 ||
    ggb1.innerData['answer2'] <= 0 ||
    ggb1.innerData['answer3'] <= 0 ||
    ggb1.innerData['answer4'] <= 0 ||
    ggb1.innerData['answer5'] <= 0 ||
    ggb1.innerData['answer6'] <= 0 ||
    ggb1.innerData['answer7'] <= 0 ||
    ggb1.innerData['answer8'] <= 0 ||
    ggb1.innerData['answer8'] <= 0 ||
    ggb1.innerData['answer9'] <= 0 ||
    ggb1.innerData['answer10'] <= 0
  ) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    let num =
      "\\text\\color{DA291C}{Oops, there aren't that many pencils left to distribute.}";
    text3.updateData({
      visible: true,
      text: `$${num}$`,
    });
  } //else {
  //   buttonGroup1.updateSingleButton({ disabled: false }, 1);
  // }

  if (
    ggb1.innerData['answer1'] == 0 ||
    ggb1.innerData['answer2'] == 0 ||
    ggb1.innerData['answer3'] == 0 ||
    ggb1.innerData['answer4'] == 0 ||
    ggb1.innerData['answer5'] == 0 ||
    ggb1.innerData['answer6'] == 0 ||
    ggb1.innerData['answer7'] == 0 ||
    ggb1.innerData['answer8'] == 0 ||
    ggb1.innerData['answer8'] == 0 ||
    ggb1.innerData['answer9'] == 0 ||
    ggb1.innerData['answer10'] == 0
  ) {
    let num = '\\text\\color{007FAF}{All the pencils are distributed.}';
    text3.updateData({
      visible: true,
      text: `$${num}$`,
    });
  }
});
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  if (
    ggb1.innerData['answer1'] > 0 ||
    ggb1.innerData['answer2'] > 0 ||
    ggb1.innerData['answer3'] > 0 ||
    ggb1.innerData['answer4'] > 0 ||
    ggb1.innerData['answer5'] > 0 ||
    ggb1.innerData['answer6'] > 0 ||
    ggb1.innerData['answer7'] > 0 ||
    ggb1.innerData['answer8'] > 0 ||
    ggb1.innerData['answer8'] > 0 ||
    ggb1.innerData['answer9'] > 0 ||
    ggb1.innerData['answer10'] > 0
  ) {
    ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  }
  //ggb1.instance.setVisible("l2", true);
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    ggb1.instance.setValue(`number${i + 1}`, table1.getCell(i, 4).value);
  }
  if (table1.data.rows.length >= 7) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
});
buttonGroup1.on('click:3', () => {
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    table1.deleteRow(L - i - 1);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('count', -1);
  ggb1.instance.setValue('number1', 0);
  ggb1.instance.setValue('number2', 0);
  ggb1.instance.setValue('number3', 0);
  ggb1.instance.setValue('number4', 0);
  ggb1.instance.setValue('number5', 0);
  ggb1.instance.setValue('number6', 0);
  ggb1.instance.setValue('number7', 0);
  ggb1.instance.setValue('number8', 0);
  ggb1.instance.setValue('number9', 0);
  ggb1.instance.setValue('number10', 0);
  ggb1.instance.setValue('answer1', 0);
  ggb1.instance.setValue('answer2', 0);
  ggb1.instance.setValue('answer3', 0);
  ggb1.instance.setValue('answer4', 0);
  ggb1.instance.setValue('answer5', 0);
  ggb1.instance.setValue('answer6', 0);
  ggb1.instance.setValue('answer7', 0);
  ggb1.instance.setValue('answer8', 0);
  ggb1.instance.setValue('answer9', 0);
  ggb1.instance.setValue('answer10', 0);
  table1.updateCell(0, 0, { value: '' });
  table1.updateCell(0, 1, { value: '' });
  table1.updateCell(0, 2, { value: '' });
  table1.updateCell(0, 3, { value: '' });
  table1.updateCell(0, 4, { value: '' });
});

/*
{"compTotals":{"textbox":3,"table":1,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - PA Partial Quotients","teacherView":false,"layout":"T layout"}
*/
