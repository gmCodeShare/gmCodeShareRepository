const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_3ab60a0e4d8f_textbox1: shareText1,
  cc_sharewithclass_3ab60a0e4d8f_input1: input1,
  cc_sharewithclass_3ab60a0e4d8f_button1: button1,
  cc_sharewithclass_3ab60a0e4d8f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 2);
    shareText1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.innerData['showComponent']) {
    shareText1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
