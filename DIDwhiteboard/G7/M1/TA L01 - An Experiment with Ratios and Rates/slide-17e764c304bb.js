/* -- autoCom slideId: slide-17e764c304bb - autoCom slideId -- */

const {
  table1,
  buttonGroup1,
  feedback1,
  text1,
  cc_sharewithclass_3ab86c880ae8_textbox1,
  cc_sharewithclass_3ab86c880ae8_input1,
  cc_sharewithclass_3ab86c880ae8_button1,
  cc_sharewithclass_3ab86c880ae8_studentanswers1,
} = components;

let a4;
let a5;
let b2;
let b6;
let c1;
let c3;

onInit();
function onInit() {
  if (!text1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text1.updateData({ a4: '', a5: '', b2: '', b6: '', c1: '', c3: '' });

    text1.updateData({ init: true });
  }
}

autorun(() => {
  //define these number using the table so the autrun runs
  a4 = table1.data.rows[3][1].value;
  a5 = table1.data.rows[4][1].value;
  b2 = table1.data.rows[1][2].value;
  b6 = table1.data.rows[5][2].value;
  c1 = table1.data.rows[0][3].value;
  c3 = table1.data.rows[2][3].value;

  if (
    (text1.data.a4 != a4 ||
      text1.data.a5 != a5 ||
      text1.data.b2 != b2 ||
      text1.data.b6 != b6 ||
      text1.data.c1 != c1 ||
      text1.data.c3 != c3) &&
    a4 != '' &&
    a5 != '' &&
    b2 != '' &&
    b6 != '' &&
    c1 != '' &&
    c3 != ''
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);

    table1.updateCell(3, 1, { className: '' });
    table1.updateCell(4, 1, { className: '' });
    table1.updateCell(1, 2, { className: '' });
    table1.updateCell(5, 2, { className: '' });
    table1.updateCell(0, 3, { className: '' });
    table1.updateCell(2, 3, { className: '' });
  }
});

buttonGroup1.on('click:1', () => {
  a4 = table1.data.rows[3][1].value;
  a5 = table1.data.rows[4][1].value;
  b2 = table1.data.rows[1][2].value;
  b6 = table1.data.rows[5][2].value;
  c1 = table1.data.rows[0][3].value;
  c3 = table1.data.rows[2][3].value;

  text1.updateData({ a4: a4, a5: a5, b2: b2, b6: b6, c1: c1, c3: c3 });

  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);

  if (utils.math.evaluateLatex(a4).value != 35) {
    table1.updateCell(3, 1, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(3, 1, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a5).value != 320) {
    table1.updateCell(4, 1, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(4, 1, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(b2).value != 6) {
    table1.updateCell(1, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 2, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(b6).value != 8) {
    table1.updateCell(5, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(5, 2, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(c1).value != 7) {
    table1.updateCell(0, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(0, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(c3).value != 6) {
    table1.updateCell(2, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 3, { className: 'bg-success text-white' });
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  table1.updateCell(3, 1, { className: '' });
  table1.updateCell(4, 1, { className: '' });
  table1.updateCell(1, 2, { className: '' });
  table1.updateCell(5, 2, { className: '' });
  table1.updateCell(0, 3, { className: '' });
  table1.updateCell(2, 3, { className: '' });
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"buttongroup":1,"table":1,"share":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["You have some information regarding coin-sorting machines, but some of it is missing.\n\nFind the missing values and enter them into the table.",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"buttongroupInfo":{"disabled":[false],"text":["Try Again","Check"],"position":["[0,0]"],"sizeConfig_value":["container"]},"tableOrigInfo":{"columns":[4],"rows":[7],"columnWidth":[null],"columnsEqualWidth":["Array is Undefined"],"canAddColumns":[false],"canAddRows":[false],"columns_cell_alignment":["center"],"columns_cell_editable":[false],"columns_cell_numberOfLines":["1"],"columns_cell_type":["singleline"],"columns_cell_value":["Unit Rate","Time $\\\\$(seconds)","Number of Coins Sorted","Sorting Machine"],"rows_cell_alignment":["center"],"rows_cell_editable":[true,false],"rows_cell_inputType":["text"],"rows_cell_math":[true,false],"rows_cell_numberOfLines":["1"],"rows_cell_type":["singleline"],"rows_cell_value":["6.5","52","Z","8","40","Y","10","3.5","X","4.5","27","W","36","V","","6","42","U"],"disabled":[false],"position":["[0,0]"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":["possible misalignment with labelForRelation in cc_sharewithclass_3ab86c880ae8_textbox1 on slide-17e764c304bb"],"style_theme":["default"],"text":["Describe how you found each type of value (number of coins, time, and unit rate)?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
