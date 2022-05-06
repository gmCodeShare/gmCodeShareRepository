const {
  ggb1,
  feedback,
  cc_sharewithclass_0a344b56f01f_textbox1,
  cc_sharewithclass_0a344b56f01f_input1,
  cc_sharewithclass_0a344b56f01f_button1,
  cc_sharewithclass_0a344b56f01f_studentanswers1,
} = components;

components.cc_sharewithclass_0a344b56f01f_button1.updateData({
  align: 'right',
});

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    let prev64 =
      getFromSlide('slide-a24ce00727a4', 'ggb1.data.save64', '') || '';
    if (prev64) {
      ggb1.instance.setBase64(prev64);
    }
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
