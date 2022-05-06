const {
  ggb1,
  separator1,
  buttonGroup1,
  cc_sharewithclass_47fc1ae1fcdd_textbox1: shareText1,
  cc_sharewithclass_47fc1ae1fcdd_input1: shareInput1,
  cc_sharewithclass_47fc1ae1fcdd_button1: shareButton1,
  cc_sharewithclass_47fc1ae1fcdd_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('Batch', 1);
    shareButton1.updateData({ align: 'right' });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

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
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
