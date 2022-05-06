const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_ad4b9f5354e3_textbox1,
  cc_sharewithclass_ad4b9f5354e3_input1,
  cc_sharewithclass_ad4b9f5354e3_button1,
  cc_sharewithclass_ad4b9f5354e3_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    cc_sharewithclass_ad4b9f5354e3_textbox1.updateData({ visible: false });
    cc_sharewithclass_ad4b9f5354e3_input1.updateData({ visible: false });
    cc_sharewithclass_ad4b9f5354e3_button1.updateData({ visible: false });
    cc_sharewithclass_ad4b9f5354e3_button1.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  cc_sharewithclass_ad4b9f5354e3_textbox1.updateData({ visible: true });
  cc_sharewithclass_ad4b9f5354e3_input1.updateData({ visible: true });
  cc_sharewithclass_ad4b9f5354e3_button1.updateData({ visible: true });
  if (ggb1.instance.getValue('correct')) {
    ggb1.instance.evalCommand(`SetValue(showCheckMark, true)`);
    ggb1.instance.evalCommand(`ReadText("The beam is balanced.")`);
  } else if (ggb1.instance.getValue('wrongLeft')) {
    ggb1.instance.setAnimating('CCangle', false);
    ggb1.instance.setValue('CCangle', 0);
    ggb1.instance.setAnimating('CCangle', true);
    ggb1.instance.startAnimation();
    ggb1.instance.evalCommand(`ReadText("The beam tilts to the left.")`);
  } else {
    ggb1.instance.setAnimating('CWangle', false);
    ggb1.instance.setValue('CWangle', 0);
    ggb1.instance.setAnimating('CWangle', true);
    ggb1.instance.startAnimation();
    ggb1.instance.evalCommand(`ReadText("The beam tilts to the right.")`);
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('CCangle', false);
  ggb1.instance.setAnimating('CWangle', false);
  ggb1.instance.setValue('CCangle', 0);
  ggb1.instance.setValue('CWangle', 0);
  ggb1.instance.evalCommand(`SetValue(showCheckMark, false)`);
  ggb1.instance.evalCommand(`ReadText(AAppletStatus)`);
});

autorun(() => {
  let CWangle = ggb1.innerData['CWangle'];
  let CCangle = ggb1.innerData['CCangle'];
  if (ggb1.innerData['showReset']) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TB L08 - The Mean as a Balance Point","teacherView":false,"layout":"two col"}
*/
