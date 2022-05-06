const { ggb1, feedback1, table1, buttonGroup1, input1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!table1.data.init) {
    button1.updateData({ disabled: true });
    input1.updateData({ text: 'c=' });
    ggb1.instance.setVisible('PointC1', false);
    ggb1.instance.setVisible('PointC2', false);
    ggb1.instance.setVisible('PointC3', false);
    ggb1.instance.setVisible('PointC4', false);
    ggb1.instance.setVisible('PointC5', false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    table1.updateData({ init: true });
  }
}
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  table1.updateCell(0, 1, { value: '1\\cdot2.5' });
  table1.updateCell(1, 1, { value: '2\\cdot2.5' });
  table1.updateCell(2, 1, { value: '3\\cdot2.5' });
  table1.updateCell(3, 1, { value: '4\\cdot2.5' });
  table1.updateCell(4, 1, { value: '5\\cdot2.5' });
  table1.updateCell(0, 2, { value: '2.5' });
  table1.updateCell(1, 2, { value: '5' });
  table1.updateCell(2, 2, { value: '7.5' });
  table1.updateCell(3, 2, { value: '10' });
  table1.updateCell(4, 2, { value: '10.5' });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  table1.updateCell(0, 1, { value: '' });
  table1.updateCell(1, 1, { value: '' });
  table1.updateCell(2, 1, { value: '' });
  table1.updateCell(3, 1, { value: '' });
  table1.updateCell(4, 1, { value: '' });
  table1.updateCell(0, 2, { value: '' });
  table1.updateCell(1, 2, { value: '' });
  table1.updateCell(2, 2, { value: '' });
  table1.updateCell(3, 2, { value: '' });
  table1.updateCell(4, 2, { value: '' });
});
/*autorun(() => {
console.log(!/[abdefhijklmnopqrstuvwxyz]/.test(input1.data.text));
if((!/[abdefhijklmnopqrstuvwxyz]/.test(input1.data.text))==true){
button1.updateData({disabled: false});
}else{
button1.updateData({disabled: true});
}
});*/
const blankBox = '';
const textStem = `c=`;

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  if (!/[bdehijklmnopqstuvwxyz]/.test(input1.data.text) == true) {
    button1.updateData({ disabled: true });
    const rawinput = input1.data.text;
    const ggbready =
      'f:' + rawinput.replace(/\\/g, '\\').replace(/c/, 'y').replace(/g/g, 'x');
    ggb1.instance.evalLaTeX(ggbready, 0);

    ggb1.instance.setVisible('PointC1', true);
    ggb1.instance.setVisible('PointC2', true);
    ggb1.instance.setVisible('PointC3', true);
    ggb1.instance.setVisible('PointC4', true);
    ggb1.instance.setVisible('PointC5', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  } else {
    ggb1.instance.setAnimating('time', false);
  }
});

/*autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});*/

/*
{"compTotals":{"geogebra":1,"textbox":1,"table":1,"buttongroup":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Print Alt Slide Deck Graphs of Ratio Relationships","teacherView":true,"layout":"two col"}
*/
