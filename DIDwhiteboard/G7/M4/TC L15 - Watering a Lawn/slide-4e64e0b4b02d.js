const {
  goBack,
  ggb1,
  feedback,
  cc_sharewithclass_ccf8c7666ac1_textbox1: shareText1,
  cc_sharewithclass_ccf8c7666ac1_input1: shareInput1,
  cc_sharewithclass_ccf8c7666ac1_button1: shareButton1,
  cc_sharewithclass_ccf8c7666ac1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const prev64 =
  getFromSlide('slide-6a81ce63043d', 'ggb1.data.string64', '') || '';

shareButton1.updateData({ align: 'right' });

if (prev64) {
  goBack.updateData({ text: '' });
  ggb1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  ggb1.instance.setBase64(prev64, configApp);
} /*else {
    goBack.updateData({text: "Go back to slide 3 and adjust your sprinklers.", align: "center"});
    ggb1.updateData({visible: false});
    shareText1.updateData({visible: false});
    shareInput1.updateData({visible: false});
    shareButton1.updateData({visible: false});
  }; */

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareInput1.updateData({ type: 'multiline' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

function configApp() {
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({ time1: 1, time2: 1 });
  let allPoints = ggb1.instance.getAllObjectNames('point');
  for (let i = 1; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TC L15 - Watering a Lawn","teacherView":false,"layout":"T layout"}
*/
