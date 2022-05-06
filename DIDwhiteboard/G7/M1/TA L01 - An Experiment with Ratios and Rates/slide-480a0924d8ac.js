/* -- autoCom slideId: slide-480a0924d8ac - autoCom slideId -- */

const {
  ggb1,
  feedback1,
  cc_submit_34dbca62b9da_textbox1: text1,
  cc_submit_34dbca62b9da_input1,
  cc_submit_34dbca62b9da_button1: button1,
  separator1,
  cc_sharewithclass_f4a62547cd19_textbox1: shareText1,
  cc_sharewithclass_f4a62547cd19_input1: shareInput1,
  cc_sharewithclass_f4a62547cd19_button1: shareButton1,
  cc_sharewithclass_f4a62547cd19_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let ID1 = 'slide-352909c8c370';

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });

    ggb1.updateData({ init: true });
  }
}

let data = getFromSlide(ID1, 'ggb1', false) || false;

let coins =
  typeof data.innerData == 'undefined'
    ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(ID1)}\]}$`
    : data.innerData['coinCount'];

text1.updateData({
  text: `You sorted $${coins}$ coins in $10$ seconds.
How many do you think you could sort in $30$ seconds?`,
});

button1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":1,"geogebra":1,"separator":1,"submit":1,"share":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":[""],"visible":[false],"position":["[0,0]"],"sizeConfig_value":["container"]},"ggbInfo":{"materialId":["kbsutabr"],"widgetSize":["default"],"fixed":[false],"disabled":[false],"visible":[true],"position":["[0,0]"]},"separatorInfo":{"flex":[false],"size":["16px"],"position":["[0,1]"]},"submitInfo":{"submitTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["You sorted ${...}$ coins in $10$ seconds.\n\nHow many do you think you could sort in $30$ seconds?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"submitInputInfo":{"disabled":[false],"inputType":["text"],"math":[true],"text":[""],"type":["singleline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"submitButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]}},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Why do you think you could sort that many coins in $30$ seconds?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"storedGGBMaterialIds":["kbsutabr - 2022-01-20T16:57:24.855Z"],"stage":"Launch","teacherView":false,"layout":"two col"} -- end slide search
*/
