const {
  ggb1,
  feedback1,
  text3,
  input1,
  text1,
  button1,
  text4,
  separator2,
  cc_sharewithclass_47a321f7a2ae_textbox1: text2,
  cc_sharewithclass_47a321f7a2ae_input1: input2,
  cc_sharewithclass_47a321f7a2ae_button1: button2,
  cc_sharewithclass_47a321f7a2ae_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    //ggb1.instance.evalCommand("RunClickScript(button2)");
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    text1.updateData({ align: 'right' });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.value < 0 || result.error) {
    return;
  }
  ggb1.instance.setValue('cubeSize', result.value);
  //ggb1.instance.evalLaTeX(`cubeSize=${input1.data.text}`);
  //  if(ggb1.instance.getValue(`cubeSize`)>1/21 && ggb1.instance.getValue(`cubeSize`)<0.6){
  if (result.value > 1 / 21 && result.value < 0.6) {
    ggb1.instance.evalCommand('RunClickScript(button1)');
    button1.updateData({ disabled: true });
    button1.updateData({ text: 'Submitted' });
    text2.updateData({
      text: `How many cubes with an edge length of $${input1.data.text}$ unit pack the right rectangular prism? How do you know?`,
    });
    text4.updateData({ visible: false });
  } else {
    text4.updateData({ visible: true });
    text4.updateData({ text: `Try a different cube size.` });
  }
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

ggb1.instance.registerObjectUpdateListener('time3', time);

function time() {
  // console.log(ggb1.instance.getValue("time3"));
  if (ggb1.instance.getValue('time3').toFixed(1) == 1.4) {
    input2.updateData({ visible: true });
    text2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":4,"input":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
