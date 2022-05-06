const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator1,
  text2,
  select1,
  button1,
  cc_sharewithclass_71ed018234ce_textbox1: shareText1,
  cc_sharewithclass_71ed018234ce_input1: shareInput1,
  cc_sharewithclass_71ed018234ce_button1: shareButton1,
  cc_sharewithclass_71ed018234ce_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 3);
    ggb1.instance.setValue('breakSpeed', 30);
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    select1.setVisible(false);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

select1.on('change', (selected) => {
  button1.updateData({ visible: true });
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  text2.updateData({ visible: true });
  select1.setVisible(true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('break', false);
  ggb1.instance.setValue('break', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"separator":1,"select":1,"button":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
