const {
  ggb1,
  feedback1,
  cc_sharewithclass_2b17dede9216_textbox1,
  cc_sharewithclass_2b17dede9216_input1,
  cc_sharewithclass_2b17dede9216_button1,
  cc_sharewithclass_2b17dede9216_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.showToolBar(true);
    ggb1.instance.setMode(62);
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
