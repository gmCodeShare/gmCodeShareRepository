const {
  ggb1,
  feedback1,
  cc_sharewithclass_4ff3aac2f8ec_textbox1: shareText1,
  cc_sharewithclass_4ff3aac2f8ec_input1: shareInput1,
  cc_sharewithclass_4ff3aac2f8ec_button1: shareButton1,
  cc_sharewithclass_4ff3aac2f8ec_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('gridLength', 150);
    ggb1.instance.setValue('gridWidth', 150);
    ggb1.instance.setValue('rectLength', 7);
    ggb1.instance.setValue('rectWidth', 10);
    ggb1.instance.setValue('gridSize', 5);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TA L01 - Factors and Multiples","teacherView":false,"layout":"two col"}
*/
