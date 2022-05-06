const {
  ggb1,
  separator1,
  buttonGroup1,
  cc_submit_9ca98ce171fb_textbox1: submitText1,
  cc_submit_9ca98ce171fb_input1: submitInput1,
  cc_submit_9ca98ce171fb_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('Batch', 1);
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
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"submit":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
