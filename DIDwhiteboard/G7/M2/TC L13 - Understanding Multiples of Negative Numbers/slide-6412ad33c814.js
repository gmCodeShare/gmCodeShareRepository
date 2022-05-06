const {
  ggb1,
  Separator1,
  buttonGroup1,
  cc_submit_6003bec2b67f_textbox1: submitText1,
  cc_submit_6003bec2b67f_input1: submitInput1,
  cc_submit_6003bec2b67f_button1: submitButton1,
  feedback,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('showSliders', true);
    ggb1.instance.setValue('state5', true);
    ggb1.instance.showToolBar(false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    submitButton1.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(opposite)');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('numOfGroups', 0);
  ggb1.instance.setValue('sizeOfGroup', 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('sliderTime', 0);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"submit":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
