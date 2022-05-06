const {
  ggb1,
  feedback1,
  textDisplay1,
  cc_sharewithclass_555e69970080_textbox1: shareText1,
  cc_sharewithclass_555e69970080_input1: shareInput1,
  cc_sharewithclass_555e69970080_button1: shareButton1,
  cc_sharewithclass_555e69970080_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

let pointList = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(indicator);
ggb1.instance.registerObjectUpdateListener('show', revealShare);

function indicator(a) {
  if (a[0] == 'select') {
    if (ggb1.instance.getObjectType(a[1]) == 'point') {
      ggb1.instance.setLabelVisible(a[1], true);
    }
  }
  if (a[0] == 'deselect') {
    for (let i = 0, L = pointList.length; i < L; i++) {
      ggb1.instance.setLabelVisible(pointList[i], false);
    }
  }
}

function revealShare() {
  if (ggb1.instance.getValue('show')) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
