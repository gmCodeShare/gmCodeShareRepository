const {
  ggb13,
  separator1,
  button1,
  feedback1,
  cc_sharewithclass_01dbc22e931a_textbox1: shareText1,
  cc_sharewithclass_01dbc22e931a_input1: shareInput1,
  cc_sharewithclass_01dbc22e931a_button1: shareButton1,
  cc_sharewithclass_01dbc22e931a_studentanswers1,
} = components;

ggb13.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb13.data.init) {
    // set initial states
    ggb13.updateData({ def64: ggb13.instance.getBase64() });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb13.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb13.instance.setBase64(ggb13.data.def64);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
