const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  cc_submit_59af7d3adebf_textbox1: text1,
  cc_submit_59af7d3adebf_input1: input1,
  cc_submit_59af7d3adebf_button1: button1,
  Separator2,
  cc_sharewithclass_95072bdfb481_textbox1: text2,
  cc_sharewithclass_95072bdfb481_input1: input2,
  cc_sharewithclass_95072bdfb481_button1: button2,
  cc_sharewithclass_95072bdfb481_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    input2.updateData({ visible: false });
    text2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('cubeSize', 1);
  ggb1.instance.setValue('time2', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setValue('time3', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setValue('cubeSize', 1);
  ggb1.instance.setValue('time2', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setValue('time3', ggb1.instance.getValue('cubeSize'));
});

ggb1.instance.registerObjectUpdateListener('time3', time);

function time() {
  if (ggb1.instance.getValue('time3') == 12) {
    input2.updateData({ visible: true });
    text2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
}

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
