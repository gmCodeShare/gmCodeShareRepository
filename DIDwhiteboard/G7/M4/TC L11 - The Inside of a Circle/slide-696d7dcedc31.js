const {
  ggb1,
  feedback1,
  cc_sharewithclass_ade36002bd74_textbox1,
  cc_sharewithclass_ade36002bd74_input1,
  cc_sharewithclass_ade36002bd74_button1: shareButton1,
  cc_sharewithclass_ade36002bd74_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

shareButton1.updateData({
  align: 'right',
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('radius', 1.7);
    ggb1.instance.setValue('showInnerQuads', true);
    ggb1.instance.setValue('showOuterQuads', false);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TC L11 - The Inside of a Circle","teacherView":false,"layout":"two col"}
*/
