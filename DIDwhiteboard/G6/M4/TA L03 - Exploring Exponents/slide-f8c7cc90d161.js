const {
  ggb1,
  Separator1,
  buttonGroup1,
  feedback1,
  text1,
  table1,
  cc_sharewithclass_6476df7da7f4_textbox1: shareText1,
  cc_sharewithclass_6476df7da7f4_input1: shareInput1,
  cc_sharewithclass_6476df7da7f4_button1: shareButton1,
  cc_sharewithclass_6476df7da7f4_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setValue('count', 2);
    shareButton1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  if (ggb1.instance.getValue('count') == 4) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('count', 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

autorun(() => {
  if (
    table1.data.rows[0][3].value != '' &&
    table1.data.rows[0][1].value != '' &&
    table1.data.rows[0][2].value != '' &&
    table1.data.rows[1][3].value != '' &&
    table1.data.rows[1][1].value != '' &&
    table1.data.rows[1][2].value != '' &&
    table1.data.rows[2][3].value != '' &&
    table1.data.rows[2][1].value != '' &&
    table1.data.rows[2][2].value != ''
  ) {
    shareButton1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareText1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"two col"}
*/
