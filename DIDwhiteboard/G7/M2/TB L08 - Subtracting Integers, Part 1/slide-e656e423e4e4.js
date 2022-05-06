const {
  ggb1,
  feedback1,
  cc_sharewithclass_4bd8959226d1_textbox1,
  cc_sharewithclass_4bd8959226d1_input1: shareInput1,
  cc_sharewithclass_4bd8959226d1_button1,
  cc_sharewithclass_4bd8959226d1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareInput1.updateData({
      text: `Context 1 goes with 
  
Context 2 goes with `,
    });
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M2 TB L08 - Subtracting Integers, Part 1","teacherView":false,"layout":"two col"}
*/
