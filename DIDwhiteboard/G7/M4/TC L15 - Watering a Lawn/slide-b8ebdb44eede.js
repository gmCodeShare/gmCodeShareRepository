const {
  goBack,
  ggb1,
  feedback,
  cc_submit_bce0894cd221_textbox1: submitText1,
  cc_submit_bce0894cd221_input1: submitInput1,
  cc_submit_bce0894cd221_button1: submitButton1,
  Separator5,
  cc_sharewithclass_ccf8c7666ac1_textbox1: shareText1,
  cc_sharewithclass_ccf8c7666ac1_input1: shareInput1,
  cc_sharewithclass_ccf8c7666ac1_button1: shareButton1,
  cc_sharewithclass_ccf8c7666ac1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const prev64 =
  getFromSlide('slide-a16832d7fa23', 'ggb1.data.string64', '') || '';

submitButton1.updateData({ align: 'right' });
shareButton1.updateData({ align: 'right' });

if (prev64) {
  goBack.updateData({ text: '' });
  ggb1.updateData({ visible: true });
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  ggb1.instance.setBase64(prev64, configApp);
} else {
  //goBack.updateData({text: "Go back to slide 8 and finalize your sprinklers.", align: "center"});
  //ggb1.updateData({visible: false});
  //submitText1.updateData({visible: false});
  //submitInput1.updateData({visible: false});
  //submitButton1.updateData({visible: false});
  configApp();
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareInput1.updateData({ type: 'multiline', visible: false });
    shareText1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    submitInput1.updateData({ math: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

function configApp() {
  ggb1.instance.stopAnimation();
  ggb1.updateInnerData({ time1: 1, time2: 1 });
  ggb1.instance.setGridVisible(true);
  let allPoints = ggb1.instance.getAllObjectNames('point');
  for (let i = 1; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
}

submitButton1.on('click', () => {
  shareInput1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TC L15 - Watering a Lawn","teacherView":false,"layout":"T layout"}
*/
