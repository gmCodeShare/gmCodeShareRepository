const {
  ggb7,
  feedback1,
  text5,
  select1,
  cc_sharewithclass_e9e8c1953484_textbox1: shareText1,
  cc_sharewithclass_e9e8c1953484_input1: shareInput1,
  cc_sharewithclass_e9e8c1953484_button1: shareButton1,
  cc_sharewithclass_e9e8c1953484_studentanswers1,
} = components;

ggb7.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb7.data.init) {
    // set initial states
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb7.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected) {
    shareInput1.updateData({ visible: true });
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
