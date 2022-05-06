/* -- autoCom slideId: slide-e21c74ee41b4 - autoCom slideId -- */

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

let ID1 = 'slide-480a0924d8ac';
let ID2 = 'slide-2ad343b55cfd';

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

let data = getFromSlide(ID2, 'ggb1', false) || false;

let coinsSorted =
  typeof data.innerData == 'undefined'
    ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(ID2)}\]}$`
    : data.innerData['coinCount'];

let coinsPredicted =
  getFromSlide(ID1, 'cc_submit_34dbca62b9da_input1.data.text', false) || false;
if (!coinsPredicted) {
  coinsPredicted = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    ID1
  )}\]}$`;
}

text1.updateData({
  text: `You predicted that you could sort $${coinsPredicted}$ coins in $30$ seconds.
You actually sorted $${coinsSorted}$.
Did you sort less, more, or the same number of coins as your prediction?`,
});

autorun(() => {
  if (radio1.data.selected == '2') {
    shareText1.updateData({
      visible: true,
      text: `Why do you think your prediction was accurate?`,
    });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  } else if (radio1.data.selected == '0' || radio1.data.selected == '1') {
    shareText1.updateData({
      visible: true,
      text: `Why do you think your prediction was inaccurate?`,
    });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"geogebra":1,"radiogroup":1,"share":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["You predicted that you could sort ${...}$ coins in $30$ seconds.\n\nYou actually sorted ${...}$.\n\nDid you sort less, more, or the same number of coins as your prediction?",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"ggbInfo":{"materialId":["kbsutabr"],"widgetSize":["default"],"fixed":[false],"disabled":[false],"visible":[true],"position":["[0,0]"]},"shareInfo":{"shareTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Why do you think your prediction was inaccurate?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]},"shareStudentAnswersInfo":{"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"imagesMissingAltText":0},"storedGGBMaterialIds":["kbsutabr - 2022-01-20T16:57:24.855Z"],"stage":"Launch","teacherView":false,"layout":"two col"} -- end slide search
*/
