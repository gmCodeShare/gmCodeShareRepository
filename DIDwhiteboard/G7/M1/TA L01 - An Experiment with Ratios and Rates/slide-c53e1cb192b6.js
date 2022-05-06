/* -- autoCom slideId: slide-c53e1cb192b6 - autoCom slideId -- */

const {
  text1,
  table1,
  text2,
  table2,
  feedback1,
  text3,
  select1,
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

select1.on('change', (selected) => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":4,"select":1,"table":2,"share":1},"textboxInfo":{"align":["left","center"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["You suspect that one of your coin sorting machines isn't working properly. Using the tables below, determine whether each machine is sorting the coins at a constant rate.","","# Machine F","# Machine E"],"visible":[false,true],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"selectInfo":{"columns":[""],"disabled":[false],"expandButton":["hidden"],"inline":[false],"options_length":[4],"options_label":[],"type":["single"],"position":["[0,1]"],"sizeConfig_value":["container"]},"tableOrigInfo":{"columns":[2],"rows":[4],"columnWidth":[null],"columnsEqualWidth":["Array is Undefined"],"canAddColumns":[false],"canAddRows":[false],"columns_cell_alignment":["center"],"columns_cell_editable":[false],"columns_cell_numberOfLines":["1"],"columns_cell_type":["singleline"],"columns_cell_value":["Number of Coins Sorted","Number of Seconds"],"rows_cell_alignment":["center"],"rows_cell_editable":[false],"rows_cell_inputType":["text"],"rows_cell_math":[true],"rows_cell_numberOfLines":["1"],"rows_cell_type":["singleline"],"rows_cell_value":["42","28","14","78","6","60","4","26","2"],"disabled":[false],"position":["[0,0]"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":["possible misalignment with labelForRelation in cc_sharewithclass_e9cf6bdb7413_textbox1 on slide-c53e1cb192b6"],"style_theme":["default"],"text":["How do you know?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"inSelectComp":{"imageSrcUpload":[],"imageAltTextUpload":[],"imageSrcBynder":[],"imageAltTextBynder":[]},"imagesMissingAltText":0},"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
