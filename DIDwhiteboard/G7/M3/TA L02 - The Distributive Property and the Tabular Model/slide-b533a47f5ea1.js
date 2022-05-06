const {
  ggb1,
  feedback,
  text1,
  buttonGroup1,
  Separator1,
  cc_sharewithclass_ae170414ffa5_textbox1,
  cc_sharewithclass_ae170414ffa5_input1,
  cc_sharewithclass_ae170414ffa5_button1,
  cc_sharewithclass_ae170414ffa5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    cc_sharewithclass_ae170414ffa5_button1.updateData({ align: 'right' });
    cc_sharewithclass_ae170414ffa5_button1.updateData({ visible: false });
    cc_sharewithclass_ae170414ffa5_input1.updateData({ visible: false });
    cc_sharewithclass_ae170414ffa5_textbox1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('time', update);

function update() {
  if (ggb1.instance.getValue('time') == 1) {
    cc_sharewithclass_ae170414ffa5_button1.updateData({ visible: true });
    cc_sharewithclass_ae170414ffa5_input1.updateData({ visible: true });
    cc_sharewithclass_ae170414ffa5_textbox1.updateData({ visible: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', false);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
