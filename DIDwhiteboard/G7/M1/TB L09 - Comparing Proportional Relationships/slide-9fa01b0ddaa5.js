const {
  ggb1,
  feedback1,
  text1,
  button1,
  cc_submit_31146ddabd87_textbox1: text2,
  cc_submit_31146ddabd87_input1: input2,
  cc_submit_31146ddabd87_button1: button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ align: 'right' });
    ggb1.instance.setAxisLabels(1, `$\\mathit{x}$`, `$\\mathit{y}$`);
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

ggb1.instance.registerObjectUpdateListener('B', update);

function update() {
  button1.updateData({ disabled: false });
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-9fa01b0ddaa5', {
      pandaPoint: [...ggb1.innerData['B']],
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"submit":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"two col"}
*/
