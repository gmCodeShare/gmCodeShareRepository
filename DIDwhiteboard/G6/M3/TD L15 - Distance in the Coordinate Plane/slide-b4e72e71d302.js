const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  text1,
  ggb2,
  cc_sharewithclass_3a0d57308484_textbox1,
  cc_sharewithclass_3a0d57308484_input1,
  cc_sharewithclass_3a0d57308484_button1,
  cc_sharewithclass_3a0d57308484_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('length', updateRight);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb1.updateData({ init: true });
  }
}

function updateRight() {
  ggb1.instance.setValue('length', ggb2.instance.getValue('length'));
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('c', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('c', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":2,"separator":1,"buttongroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
