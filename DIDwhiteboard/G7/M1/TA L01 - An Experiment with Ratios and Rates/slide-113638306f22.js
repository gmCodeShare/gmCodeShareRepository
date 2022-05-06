/* -- autoCom slideId: slide-113638306f22 - autoCom slideId -- */

const {
  text1,
  table1,
  text2,
  table2,
  feedback1,
  text3,
  radio1,
  cc_sharewithclass_e9cf6bdb7413_textbox1: shareText1,
  cc_sharewithclass_e9cf6bdb7413_input1: shareInput1,
  cc_sharewithclass_e9cf6bdb7413_button1: shareButton1,
  cc_sharewithclass_e9cf6bdb7413_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    table1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = [
    'I chose Machine C because ',
    'I chose Machine D because ',
  ];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      shareInput1.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":4,"radiogroup":1,"table":2,"share":1},"textboxInfo":{"align":["left","center"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Here are your completed tables for the two machines.\n\nWhich one sorted more coins in $10$ seconds?","","# Machine D","# Machine C"],"visible":[false,true],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"tableOrigInfo":{"columns":[2],"rows":[6],"columnWidth":[null],"columnsEqualWidth":["Array is Undefined"],"canAddColumns":[false],"canAddRows":[false],"columns_cell_alignment":["center"],"columns_cell_editable":[false],"columns_cell_numberOfLines":["1"],"columns_cell_type":["singleline"],"columns_cell_value":["Number of Coins Sorted","Number of Seconds"],"rows_cell_alignment":["center"],"rows_cell_editable":[false],"rows_cell_inputType":["text"],"rows_cell_math":[true],"rows_cell_numberOfLines":["1"],"rows_cell_type":["singleline"],"rows_cell_value":["60","10","99","16.5","18","3","12","1.5","63","14","27","6","72","16","9","2","36","8"],"disabled":[false],"position":["[0,0]"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":["possible misalignment with labelForRelation in cc_sharewithclass_e9cf6bdb7413_textbox1 on slide-113638306f22"],"style_theme":["default"],"text":["Why did you choose that? What strategy did you use?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
