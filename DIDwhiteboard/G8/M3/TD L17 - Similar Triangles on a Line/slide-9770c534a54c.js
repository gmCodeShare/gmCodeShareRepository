const {
  ggb1,
  feedback1,
  cc_submit_045eea09fdd7_textbox1: text1,
  cc_submit_045eea09fdd7_input1: input1,
  cc_submit_045eea09fdd7_button1: button1,
  separator4,
  cc_sharewithclass_0bbe716efead_textbox1: text2,
  cc_sharewithclass_0bbe716efead_input1: input2,
  cc_sharewithclass_0bbe716efead_button1: button2,
  cc_sharewithclass_0bbe716efead_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    button2.updateData({ visible: false });
    input2.updateData({ visible: false });
    ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
    ggb1.updateData({ init: true });
  }
}

// components.feedback1.updateData({ visible: false });

button1.on('click', () => {
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
  input2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Similar Triangles on a Line","teacherView":false,"layout":"two col"}
*/
