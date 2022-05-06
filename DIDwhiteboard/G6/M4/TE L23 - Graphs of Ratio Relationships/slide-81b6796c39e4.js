const {
  ggb1,
  feedback1,
  table1,
  text1,
  input1,
  button1,
  separator1,
  cc_sharewithclass_98d29ccc5636_textbox1: text2,
  cc_sharewithclass_98d29ccc5636_input1: input2,
  cc_sharewithclass_98d29ccc5636_button1: button2,
  cc_sharewithclass_98d29ccc5636_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!table1.data.init) {
    text2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button1.updateData({ disabled: true });
    input2.updateData({ visible: false });
    input1.updateData({ text: 'c=' });
    ggb1.instance.setVisible('PointC1', false);
    ggb1.instance.setVisible('PointC2', false);
    ggb1.instance.setVisible('PointC3', false);
    ggb1.instance.setVisible('PointC4', false);
    ggb1.instance.setVisible('PointC5', false);
    table1.updateData({ init: true });
  }
}

const rowsContent =
  getFromSlide(`slide-3928e267547b`, `table1.data.rows`, []) || [];

for (let i = 0; i < rowsContent.length; i++) {
  table1.updateCell(i, 2, {
    value: rowsContent[i][2].value,
    math: true,
    editable: false,
  });
  table1.updateCell(i, 1, {
    value: rowsContent[i][1].value,
    math: true,
    editable: false,
  });
}
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

    text2.updateData({ visible: true });
    button2.updateData({ visible: true });
    input2.updateData({ visible: true });
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
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"input":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
