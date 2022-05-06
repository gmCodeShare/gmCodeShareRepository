const {
  ggb1,
  feedback,
  text1,
  ggb2,
  separator2,
  button1,
  separator3,
  text2,
  input2,
  text3,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    input2.updateData({ visible: false });
    //ggb2.instance.setVisible("TextNumber", false);
    button2.updateData({ align: 'right' });
    text3.updateData({ align: 'right' });
    ggb2.instance.setVisible('TextNum', false);
    ggb2.instance.evalCommand('RunClickScript(button1)');
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

button1.on('click', () => {
  ggb2.instance.setValue('showBracket', true);
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  //text3.updateData({visible:true});
  input2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
  let num = input2.data.text;
  // console.log(num);
  ggb2.instance.setTextValue('TextNumber', num);
  ggb2.instance.setVisible('text13', true);
});
ggb2.instance.registerObjectUpdateListener('C1', update);
ggb2.instance.registerObjectUpdateListener('C2', update);
ggb2.instance.registerObjectUpdateListener('C3', update);
ggb2.instance.registerObjectUpdateListener('C4', update);
ggb2.instance.registerObjectUpdateListener('C5', update);
ggb2.instance.registerObjectUpdateListener('W1', update);
ggb2.instance.registerObjectUpdateListener('W2', update);
ggb2.instance.registerObjectUpdateListener('W3', update);
ggb2.instance.registerObjectUpdateListener('W4', update);
ggb2.instance.registerObjectUpdateListener('W5', update);

function update() {
  button1.updateData({ disabled: false });
}

/*
{"compTotals":{"geogebra":2,"textbox":4,"separator":2,"button":2,"input":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"T layout"}
*/
