const {
  ggb1,
  feedback1,
  text1,
  input1,
  text2,
  button1,
  text4,
  separator1,
  text3,
  table1,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    text3.updateData({ visible: false });
    table1.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ disabled: true });
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
  ggb1.instance.evalCommand('RunClickScript(button2)');
  if (
    ggb1.instance.getValue('cubeSize') < 4 / 3 &&
    ggb1.instance.getValue('cubeSize') > 1 / 7
  ) {
    ggb1.instance.evalCommand('RunClickScript(button1)');
    button1.updateData({ disabled: true });
    button1.updateData({ text: 'Submitted' });
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
  if (ggb1.instance.getValue('time3') >= 3) {
    text3.updateData({ visible: true });
    table1.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  // this example checked these 5 cells; you'll have to make adjustments
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button2.updateData({
      text: 'Submit',
      disabled: !(
        table1.getCell(0, 0).value &&
        table1.getCell(0, 1).value &&
        table1.getCell(0, 2).value &&
        table1.getCell(0, 3).value
      ),
    });
    table1.updateData({
      last: [
        table1.getCell(0, 0).value,
        table1.getCell(0, 1).value,
        table1.getCell(0, 2).value,
        table1.getCell(0, 3).value,
      ],
    });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted' });
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":5,"input":1,"button":2,"separator":1,"table":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
