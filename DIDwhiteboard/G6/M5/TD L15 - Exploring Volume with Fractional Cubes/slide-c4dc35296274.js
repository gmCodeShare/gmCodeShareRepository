const {
  ggb1,
  Separator2,
  button3,
  feedback1,
  text1,
  input1,
  text3,
  button1,
  Separator1,
  text2,
  input2,
  text4,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ disabled: true });
button2.updateData({ disabled: true });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text4.updateData({ align: 'right' });
    text3.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    input2.updateData({ visible: false });
    text2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ disabled: true });
    text4.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  /*const result = utils.math.evaluateLatex(input1.data.text);
if(result.value < 0 || result.error){
    return;
  }*/
  input2.updateData({ visible: true });
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
  text4.updateData({ visible: true });
  button1.updateData({ text: 'Submitted' });
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});
/*
autorun(() => {
  button2.updateData({disabled : input2.data.text == ""});
   if(input2.data.text !== "") {
  button2.updateData({text: "Submit"});
  }
}); */

button2.on('click', () => {
  const result2 = utils.math.evaluateLatex(input1.data.text);
  if (result2.value < 0 || result2.error) {
    return;
  }
  button2.updateData({ text: 'Submitted', disabled: true });
});

button3.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":3,"textbox":5,"input":2},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
