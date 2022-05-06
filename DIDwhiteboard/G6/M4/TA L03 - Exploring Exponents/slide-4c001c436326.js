const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  text1,
  table1,
  cc_sharewithclass_192eaf8611c1_textbox1: shareText1,
  cc_sharewithclass_192eaf8611c1_input1: shareInput1,
  cc_sharewithclass_192eaf8611c1_button1: shareButton1,
  cc_sharewithclass_192eaf8611c1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('count', 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (
    table1.data.rows[0][1].value != '' &&
    table1.data.rows[1][1].value != '' &&
    table1.data.rows[2][1].value != '' &&
    table1.data.rows[3][1].value != '' &&
    table1.data.rows[4][1].value != '' &&
    table1.data.rows[5][1].value != ''
  ) {
    shareButton1.updateData({ visible: true });
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
  }
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  if (ggb1.instance.getValue('count') == 7) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('count', 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"table":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"two col"}
*/
