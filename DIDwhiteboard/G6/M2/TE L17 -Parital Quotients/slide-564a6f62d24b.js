const { text1, text2, table1, buttonGroup1, text3, feedback1, ggb1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setValue('count', ggb1.instance.getValue('count') - 1);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let allCellsFilledWithNums = table1.data.rows.every((row) =>
    row.every((cell) => !utils.math.evaluateLatex(cell.value).error)
  );
  buttonGroup1.updateSingleButton({ disabled: !allCellsFilledWithNums }, 2);
});

buttonGroup1.on('click:1', () => {
  table1.addRow();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

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
let cell04;
let cell14;
let cell24;
let cell34;
let cell44;
let cell54;
let cell64;
let cell74;
let cell84;
let cell94;

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

let coll4 = [
  cell04,
  cell14,
  cell24,
  cell34,
  cell44,
  cell54,
  cell64,
  cell74,
  cell84,
  cell94,
];

autorun(() => {
  const rowsContent = table1.data.rows;
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
  for (let i = 0; i < rowsContent.length; i++) {
    coll4[i] = table1.getCell(i, 4);
    ggb1.instance.setValue('cell' + i + '4', coll4[i].value);
  }
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
  }
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
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    ggb1.instance.setValue(`number${i + 1}`, table1.getCell(i, 5).value);
  }
  if (ggb1.instance.getValue('count') >= 10) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
});

/*
{"compTotals":{"textbox":4,"table":1,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"T layout"}
*/
