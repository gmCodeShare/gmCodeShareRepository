const {
  ggb1,
  feedback1,
  text3,
  cc_submit_6ff1fe7b670b_textbox1: text1,
  cc_submit_6ff1fe7b670b_input1: input1,
  cc_submit_6ff1fe7b670b_button1: button1,
  separator1,
  cc_sharewithclass_568244c7cd83_textbox1: text2,
  cc_sharewithclass_568244c7cd83_input1: input2,
  cc_sharewithclass_568244c7cd83_button1: button2,
  cc_sharewithclass_568244c7cd83_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}
ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
ggb1.instance.registerObjectUpdateListener('dragPoint', update);

function update() {
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-a54624cada0b', {
      xVal: ggb1.instance.getValue('xVal'),
      yVal: ggb1.instance.getValue('yVal'),
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M3 TD L17 - Similar Triangles on a Line","teacherView":false,"layout":"two col"}
*/
