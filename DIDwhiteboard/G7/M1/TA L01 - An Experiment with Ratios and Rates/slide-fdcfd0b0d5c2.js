/* -- autoCom slideId: slide-fdcfd0b0d5c2 - autoCom slideId -- */

const {
  ggb1,
  feedback1,
  text1,
  radio1,
  cc_sharewithclass_a382aa78a04a_textbox1: shareText1,
  cc_sharewithclass_a382aa78a04a_input1: shareInput1,
  cc_sharewithclass_a382aa78a04a_button1: shareButton1,
  cc_sharewithclass_a382aa78a04a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });

    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let explain =
    radio1.data.selected == '0' ||
    radio1.data.selected == '1' ||
    radio1.data.selected == '2';
  // explain
  shareText1.updateData({ visible: explain });
  shareInput1.updateData({ visible: explain });
  shareButton1.updateData({ visible: explain });
}); // end autorun

autorun(() => {
  var optionArray = [
    'Why do you think you will sort at a slower rate?',
    'Why do you think you will sort at a faster rate?',
    'Why do you think you will sort at the same rate?',
  ];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      shareText1.updateData({ text: optionArray[radio1.data.selected] });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"geogebra":1,"radiogroup":1,"share":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Imagine you were asked to sort coins for $10$ minutes.\n\nDo you think you would sort slower, faster, or at the same rate as you did for $30$ seconds?",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"ggbInfo":{"materialId":["kbsutabr"],"widgetSize":["default"],"fixed":[false],"disabled":[false],"visible":[true],"position":["[0,0]"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":["possible misalignment with labelForRelation in cc_sharewithclass_a382aa78a04a_textbox1 on slide-fdcfd0b0d5c2"],"style_theme":["default"],"text":["How did you determine your prediction?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"storedGGBMaterialIds":["kbsutabr - 2022-01-20T16:57:24.855Z"],"stage":"Launch","teacherView":false,"layout":"two col"} -- end slide search
*/
