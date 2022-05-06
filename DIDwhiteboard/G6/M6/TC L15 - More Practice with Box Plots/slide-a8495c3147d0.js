const {
  ggb1,
  feedback1,
  cc_sharewithclass_3ab60a0e4d8f_textbox1,
  cc_sharewithclass_3ab60a0e4d8f_input1,
  cc_sharewithclass_3ab60a0e4d8f_button1,
  cc_sharewithclass_3ab60a0e4d8f_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 2);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setErrorDialogsActive(false);

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
