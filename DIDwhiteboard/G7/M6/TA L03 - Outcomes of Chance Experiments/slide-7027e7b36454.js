const { ggb1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: 'right' });

if (!ggb1.data.init) {
  for (let i = 1; i < 11; i++) {
    ggb1.instance.evalCommand(`SetValue(q${i}Val, RandomBetween(1,5))`);
  }
  for (let i = 1; i < 11; i++) {
    ggb1.instance.setVisible(`C${i}`, true);
    if (ggb1.instance.getValue(`q${i}Val`) == 0) {
      ggb1.instance.setColor(`q${i}`, 255, 255, 255);
      ggb1.instance.setTextValue(`q${i}Text`, 'white');
    } else if (ggb1.instance.getValue(`q${i}Val`) == 1) {
      ggb1.instance.setColor(`q${i}`, 0, 127, 175);
      ggb1.instance.setTextValue(`q${i}Text`, 'blue');
    } else if (ggb1.instance.getValue(`q${i}Val`) == 2) {
      ggb1.instance.setColor(`q${i}`, 218, 41, 28);
      ggb1.instance.setTextValue(`q${i}Text`, 'red');
    } else if (ggb1.instance.getValue(`q${i}Val`) == 3) {
      ggb1.instance.setColor(`q${i}`, 0, 129, 57);
      ggb1.instance.setTextValue(`q${i}Text`, 'green');
    } else if (ggb1.instance.getValue(`q${i}Val`) == 4) {
      ggb1.instance.setColor(`q${i}`, 130, 63, 152);
      ggb1.instance.setTextValue(`q${i}Text`, 'purple');
    } else if (ggb1.instance.getValue(`q${i}Val`) == 5) {
      ggb1.instance.setColor(`q${i}`, 237, 178, 32);
      ggb1.instance.setTextValue(`q${i}Text`, 'yellow');
    }
  }

  ggb1.updateData({ init: true });
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
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !entries.some((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
