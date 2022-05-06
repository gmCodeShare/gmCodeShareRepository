/* -- autoCom slideId: slide-b4e645af2c46 - autoCom slideId -- */

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

let a1;
let a2;
let a3;
let a4;

onInit();
function onInit() {
  if (!text1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text1.updateData({ a1: '', a2: '', a3: '', a4: '' });

    text1.updateData({ init: true });
  }
}

autorun(() => {
  //define these number using the table so the autrun runs
  a1 = table1.data.rows[0][3].value;
  a2 = table1.data.rows[1][3].value;
  a3 = table1.data.rows[2][3].value;
  a4 = table1.data.rows[3][3].value;

  if (
    (text1.data.a1 != a1 ||
      text1.data.a2 != a2 ||
      text1.data.a3 != a3 ||
      text1.data.a4 != a4) &&
    a1 != '' &&
    a2 != '' &&
    a3 != '' &&
    a4 != ''
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);

    table1.updateCell(0, 3, { className: '' });
    table1.updateCell(1, 3, { className: '' });
    table1.updateCell(2, 3, { className: '' });
    table1.updateCell(3, 3, { className: '' });
  }
});

buttonGroup1.on('click:1', () => {
  a1 = table1.data.rows[0][3].value;
  a2 = table1.data.rows[1][3].value;
  a3 = table1.data.rows[2][3].value;
  a4 = table1.data.rows[3][3].value;

  text1.updateData({ a1: a1, a2: a2, a3: a3, a4: a4 });

  //check all input types
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  if (utils.math.evaluateLatex(a1).value != 5) {
    table1.updateCell(0, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(0, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a2).value != 5.5) {
    table1.updateCell(1, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a3).value != 4.5) {
    table1.updateCell(2, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a4).value != 6) {
    table1.updateCell(3, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(3, 3, { className: 'bg-success text-white' });
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  table1.updateCell(0, 3, { className: '' });
  table1.updateCell(1, 3, { className: '' });
  table1.updateCell(2, 3, { className: '' });
  table1.updateCell(3, 3, { className: '' });
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"buttongroup":1,"table":1,"share":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Use the table to determine the unit rate for each machine.",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"buttongroupInfo":{"disabled":[false],"text":["Try Again","Check"],"position":["[0,0]"],"sizeConfig_value":["container"]},"tableOrigInfo":{"columns":[4],"rows":[5],"columnWidth":[null],"columnsEqualWidth":["Array is Undefined"],"canAddColumns":[false],"canAddRows":[false],"columns_cell_alignment":["center"],"columns_cell_editable":[false],"columns_cell_numberOfLines":["1"],"columns_cell_type":["singleline"],"columns_cell_value":["Unit Rate","Time $\\\\$(seconds)","Number of Coins Sorted","Sorting Machine"],"rows_cell_alignment":["center"],"rows_cell_editable":[true,false],"rows_cell_inputType":["text"],"rows_cell_math":[true,false],"rows_cell_numberOfLines":["1"],"rows_cell_type":["singleline"],"rows_cell_value":["1.5","9","D","8","36","C","6","33","B","","4","20","A"],"disabled":[false],"position":["[0,0]"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["What strategy did you use? Will it always work?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
