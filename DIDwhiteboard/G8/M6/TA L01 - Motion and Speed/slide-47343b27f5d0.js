const {
  ggb1,
  feedback1,
  text1,
  button1,
  separator1,
  cc_sharewithclass_b108e6cd37ea_textbox1: shareText1,
  cc_sharewithclass_b108e6cd37ea_input1: shareInput1,
  cc_sharewithclass_b108e6cd37ea_button1: shareButton1,
  cc_sharewithclass_b108e6cd37ea_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.instance.setValue('time', 0);
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Motion and Speed","teacherView":false,"layout":"two col"}
*/
