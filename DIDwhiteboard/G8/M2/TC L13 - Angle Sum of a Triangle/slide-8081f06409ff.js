const {
  ggb1,
  feedback1,
  text2,
  buttongroup1,
  table1,
  cc_sharewithclass_0ebf486e21a2_textbox1: text3,
  cc_sharewithclass_0ebf486e21a2_input1: input3,
  cc_sharewithclass_0ebf486e21a2_button1: button3,
  cc_sharewithclass_0ebf486e21a2_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text3.updateData({ visible: false });
    input3.updateData({ visible: false });
    button3.updateData({ visible: false });
    table1.updateData({ visible: false });
    buttongroup1.updateSingleButton({ disabled: true }, 1);
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

buttongroup1.on('click:1', () => {
  buttongroup1.updateSingleButton({ disabled: false }, 2);
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  table1.updateData({ visible: true });
  ggb1.instance.setValue('step', ggb1.instance.getValue('step') + 1);
  ggb1.instance.setValue('count', ggb1.instance.getValue('count') + 1);
  // console.log(ggb1.instance.getValue('step'));
  let angleA1 = (ggb1.instance.getValue('angleA') * 180) / Math.PI;
  let angleA = angleA1.toFixed(0);
  let angleB1 = (ggb1.instance.getValue('angleB') * 180) / Math.PI;
  let angleB = angleB1.toFixed(0);
  let angleC = 180 - angleA - angleB;
  let sum1 = (ggb1.instance.getValue('sum') * 180) / Math.PI;
  let sum = sum1.toFixed(0);
  if (ggb1.instance.getValue('step') == 3) {
    table1.updateCell(0, 1, { value: angleA + '\\degree' });
    table1.updateCell(0, 2, { value: angleB + '\\degree' });
    table1.updateCell(0, 3, { value: angleC + '\\degree' });
    table1.updateCell(0, 4, { value: sum + '\\degree' });
  }
  if (ggb1.instance.getValue('step') == 4) {
    table1.updateCell(1, 1, { value: angleA + '\\degree' });
    table1.updateCell(1, 2, { value: angleB + '\\degree' });
    table1.updateCell(1, 3, { value: angleC + '\\degree' });
    table1.updateCell(1, 4, { value: sum + '\\degree' });
  }
  if (ggb1.instance.getValue('step') == 5) {
    table1.updateCell(2, 1, { value: angleA + '\\degree' });
    table1.updateCell(2, 2, { value: angleB + '\\degree' });
    table1.updateCell(2, 3, { value: angleC + '\\degree' });
    table1.updateCell(2, 4, { value: sum + '\\degree' });
    text3.updateData({ visible: true });
    input3.updateData({ visible: true });
    button3.updateData({ visible: true });
  }
});
ggb1.instance.registerObjectUpdateListener('A', updateRight);
ggb1.instance.registerObjectUpdateListener('C', updateRight);
ggb1.instance.registerObjectUpdateListener('B', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('count') < 3) {
    buttongroup1.updateSingleButton({ disabled: false }, 1);
  }
}
buttongroup1.on('click:2', () => {
  alert('button2 clicked!');
  ggb1.instance.setValue('step', 2);
  table1.updateCell(0, 1, { value: '' });
  table1.updateCell(0, 2, { value: '' });
  table1.updateCell(0, 3, { value: '' });
  table1.updateCell(0, 4, { value: '' });
  table1.updateCell(1, 1, { value: '' });
  table1.updateCell(1, 2, { value: '' });
  table1.updateCell(1, 3, { value: '' });
  table1.updateCell(1, 4, { value: '' });
  table1.updateCell(2, 1, { value: '' });
  table1.updateCell(2, 2, { value: '' });
  table1.updateCell(2, 3, { value: '' });
  table1.updateCell(2, 4, { value: '' });
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('count', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"table":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
