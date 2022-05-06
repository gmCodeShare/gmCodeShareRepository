const {
  ggb1,
  separator1,
  buttonGroup1,
  cc_submit_2d4537e6a3c6_textbox1: submitText1,
  cc_submit_2d4537e6a3c6_input1: submitInput1,
  cc_submit_2d4537e6a3c6_button1: submitButton1,
  separator2,
  cc_sharewithclass_5e81d764078a_textbox1: shareText1,
  cc_sharewithclass_5e81d764078a_input1: shareInput1,
  cc_sharewithclass_5e81d764078a_button1: shareButton1,
  cc_sharewithclass_5e81d764078a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('Batch', 1);
    shareButton1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareButton1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  let Batch = ggb1.instance.getValue('Batch');
  ggb1.instance.setValue('Batch', Batch + 1);
  if (ggb1.instance.getValue('Batch') == 10) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (ggb1.instance.getValue('Batch') == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on('click:2', () => {
  let Batch = ggb1.instance.getValue('Batch');
  ggb1.instance.setValue('Batch', Batch - 1);
  if (ggb1.instance.getValue('Batch') == 10) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  if (ggb1.instance.getValue('Batch') == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
