const { ggb1, feedback1, text1, table1, button1 } = components;

button1.updateData({ align: 'right' });
ggb1.instance.setValue('state', 1);

ggb1.instance.setErrorDialogsActive(false);

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
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});
button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

utils.RTS.on('datachange', 'slide-2f5efef9be15', (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('data={}');
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    if (data.total) {
      ggb1.instance.evalCommand(`SetValue(data,Append(data,${data.total}))`);
    }
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
