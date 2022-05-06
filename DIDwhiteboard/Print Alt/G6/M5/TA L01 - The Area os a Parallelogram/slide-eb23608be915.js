const { textDisplay4, ggb1, feedback, textDisplay5, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.updateData({ init: true });

    ggb1.instance.setVisible('hide', false);
    ggb2.instance.setVisible('hide', false);
  }
}

ggb1.instance.registerStoreUndoListener(() => {
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});
ggb2.instance.registerStoreUndoListener(() => {
  ggb2.updateData({ save64: ggb2.instance.getBase64() });
});
/*ggb1.instance.registerObjectUpdateListener("Follow", updateRight);
  
function updateRight() {
button1.updateData({text: "Submit", disabled: false});  
}*/

/*
{"compTotals":{"textbox":3,"geogebra":2},"stage":"Learn","lessonInfo":"6 M5 TA L01 - Print Alternate Slide Deck for The Area of a Parallelogram","teacherView":true,"layout":"two col"}
*/
