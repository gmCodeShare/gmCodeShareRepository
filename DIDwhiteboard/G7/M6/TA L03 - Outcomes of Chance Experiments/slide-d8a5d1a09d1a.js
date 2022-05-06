const {
  ggb1,
  feedback1,
  cc_submit_98737cbae450_textbox1: submitText1,
  cc_submit_98737cbae450_input1: submitInput1,
  cc_submit_98737cbae450_button1: submitButton1,
  separator1,
  cc_sharewithclass_f3faeb6c8fc5_textbox1: shareText1,
  cc_sharewithclass_f3faeb6c8fc5_input1: shareInput1,
  cc_sharewithclass_f3faeb6c8fc5_button1: shareButton1,
  cc_sharewithclass_f3faeb6c8fc5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  ggb1.updateData({ init: true });
}

ggb1.instance.registerObjectUpdateListener('time', change);
ggb1.instance.registerObjectUpdateListener('angleTime', finish);

function change() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('angleTime', false);
    ggb1.instance.setValue('angleTime', 0);
    ggb1.instance.setAnimating('angleTime', true);
    ggb1.instance.startAnimation();
  }
}

function finish() {
  if (ggb1.instance.getValue('angleFinished')) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

submitButton1.on('click', show);

function show() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
