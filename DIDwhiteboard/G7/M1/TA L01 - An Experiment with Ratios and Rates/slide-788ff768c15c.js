/* -- autoCom slideId: slide-788ff768c15c - autoCom slideId -- */

const {
  text1,
  radio1,
  cc_sharewithclass_b6b81972d02f_textbox1: shareText1,
  cc_sharewithclass_b6b81972d02f_input1: shareInput1,
  cc_sharewithclass_b6b81972d02f_button1: shareButton1,
  cc_sharewithclass_b6b81972d02f_studentanswers1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    text1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ['Noor because ', 'Eve because '];
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
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"radiogroup":1,"share":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["","Noor and Eve are looking for a new coin-sorting machine. They see a machine that, in $4$ seconds, sorts $10$ coins.\n\nNoor says the rate is $2.5$ coins per second, and the unit rate is $2.5$.\n\nEve thinks the rate is $0.4$ coins per second, and the unit rate is $0.4$.\n\nWho is correct?"],"visible":[false,true],"position":["[0,0]"],"sizeConfig_value":["container"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Why did you choose that? What strategy did you use?"],"visible":[true],"position":["[0,0]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,0]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,0]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,0]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"stage":"Learn","teacherView":false,"layout":"one col"} -- end slide search
*/
