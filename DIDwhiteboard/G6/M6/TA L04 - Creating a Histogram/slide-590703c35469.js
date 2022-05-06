const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  Separator1,
  cc_sharewithclass_294746fb92f0_textbox1: shareText1,
  cc_sharewithclass_294746fb92f0_input1: shareInput1,
  cc_sharewithclass_294746fb92f0_button1: shareButton1,
  cc_sharewithclass_294746fb92f0_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('animationDone', buttonWork);

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('time4', false);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setAnimating('time5', false);
  ggb1.instance.setValue('time5', 0);
});

function buttonWork() {
  if (ggb1.instance.getValue('animationDone')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
