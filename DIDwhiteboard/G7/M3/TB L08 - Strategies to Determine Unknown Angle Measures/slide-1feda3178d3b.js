const {
  ggb1,
  feedback,
  text1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_fd0f54196f8d_textbox1: text2,
  cc_sharewithclass_fd0f54196f8d_input1: input2,
  cc_sharewithclass_fd0f54196f8d_button1: button2,
  cc_sharewithclass_fd0f54196f8d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  ggb1.instance.setValue('locked', true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('locked', false);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
