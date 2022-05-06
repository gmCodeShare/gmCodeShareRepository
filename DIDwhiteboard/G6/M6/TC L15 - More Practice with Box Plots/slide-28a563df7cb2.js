const {
  ggb1,
  feedback1,
  text1,
  table1,
  cc_sharewithclass_b5203fe1ba9c_textbox1: text2,
  cc_sharewithclass_b5203fe1ba9c_input1: input1,
  cc_sharewithclass_b5203fe1ba9c_button1: button1,
  cc_sharewithclass_b5203fe1ba9c_studentanswers1,
} = components;

ggb1.instance.setValue('state', 2);

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text2.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (
    table1.data.rows[0][1].value != '' &&
    table1.data.rows[1][1].value != ''
  ) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
