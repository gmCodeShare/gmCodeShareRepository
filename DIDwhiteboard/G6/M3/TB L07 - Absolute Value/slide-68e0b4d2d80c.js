const {
  ggb1,
  feedback1,
  cc_sharewithclass_acb9d6cf37ff_textbox1,
  cc_sharewithclass_acb9d6cf37ff_input1,
  cc_sharewithclass_acb9d6cf37ff_button1,
  cc_sharewithclass_acb9d6cf37ff_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 4);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
