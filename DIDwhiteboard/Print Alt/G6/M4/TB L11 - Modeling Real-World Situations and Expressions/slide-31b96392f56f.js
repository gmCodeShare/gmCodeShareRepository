const { ggb1, Separator1, button1, feedback1, table1 } = components;

let costArray = [
  '3.00',
  '5.50',
  '8.00',
  '10.50',
  '13.00',
  '15.50',
  '18.00',
  '20.50',
  '23.00',
  '25.50',
  '28.00',
];

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('time', update);

function update() {
  let time = ggb1.instance.getValue('time');
  if (time >= 0.0) {
    showRow(0);
  }
  if (time >= 0.1) {
    showRow(1);
  }
  if (time >= 0.2) {
    showRow(2);
  }
  if (time >= 0.3) {
    showRow(3);
  }
  if (time >= 0.4) {
    showRow(4);
  }
  if (time >= 0.5) {
    showRow(5);
  }
  if (time >= 0.6) {
    showRow(6);
  }
  if (time >= 0.7) {
    showRow(7);
  }
  if (time >= 0.8) {
    showRow(8);
  }
  if (time >= 0.9) {
    showRow(9);
  }
  if (time >= 1) {
    showRow(10);
    table1.updateCell(11, 0, { value: 11 });
    table1.updateCell(11, 1, { value: '?' });
  }
}

function showRow(e) {
  table1.updateCell(e, 0, { value: e });
  table1.updateCell(e, 1, { value: costArray[e] });
}

button1.on('click', () => {
  ggb1.instance.setValue('time', 0.02);
  ggb1.instance.setValue('timeStop', 1);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"table":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Print Alternate Slide Deck for Modeling Real-Life Situations and Expressions","teacherView":true,"layout":"two col"}
*/
