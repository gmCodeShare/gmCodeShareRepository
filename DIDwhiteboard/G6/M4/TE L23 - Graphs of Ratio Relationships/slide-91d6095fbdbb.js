const {
  ggb1,
  feedback1,
  text1,
  textDisplay1,
  separator1,
  text3,
  input1,
  text4,
  input2,
  text2,
  button1,
  separator4,
  cc_sharewithclass_a9b66b1690cc_textbox1: text5,
  cc_sharewithclass_a9b66b1690cc_input1: input5,
  cc_sharewithclass_a9b66b1690cc_button1: button5,
  cc_sharewithclass_a9b66b1690cc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text5.updateData({ visible: false });
    input5.updateData({ visible: false });
    button5.updateData({ visible: false });
    button1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let xaxis = input1.data.text;
  let yaxis = input2.data.text;
  ggb1.instance.setVisible('C5', true);
  ggb1.instance.setVisible('C6', true);
  ggb1.instance.evalCommand(`text1=RotateText("${yaxis}", 90°)`);
  ggb1.instance.evalCommand(`text2=RotateText("${xaxis}", 0°)`);
  //ggb1.instance.setTextValue('text2', xaxis);
  //ggb1.instance.setTextValue('text1', yaxis);
  //console.log(xaxis);
  //console.log(yaxis);
});

ggb1.instance.registerObjectUpdateListener('Point5', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('x(Point5)') > 0) {
    button1.updateData({ visible: true });
  }
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setAxisLabels(1, '$\\mathit{n}$', '$\\mathit{m}$');
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  text5.updateData({ visible: true });
  input5.updateData({ visible: true });
  button5.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":6,"separator":2,"input":2,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
