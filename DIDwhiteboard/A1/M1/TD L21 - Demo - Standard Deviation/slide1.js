const { ggb1, select1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: 'right' });

let ggbObjects = [
  'minimum',
  'firstQuartile',
  'median',
  'thirdQuartile',
  'maximum',
  'standardDeviation',
];

for (let i = 0, L = ggbObjects.length; i < L; i++) {
  ggb1.instance.registerObjectUpdateListener(ggbObjects[i], () => {
    let num = Math.round(ggb1.instance.getValue(ggbObjects[0]) * 100) / 100;
    let num2 = Math.round(ggb1.instance.getValue(ggbObjects[1]) * 100) / 100;
    let num3 = Math.round(ggb1.instance.getValue(ggbObjects[2]) * 100) / 100;
    let num4 = Math.round(ggb1.instance.getValue(ggbObjects[3]) * 100) / 100;
    let num5 = Math.round(ggb1.instance.getValue(ggbObjects[4]) * 100) / 100;
    let num6 = Math.round(ggb1.instance.getValue(ggbObjects[5]) * 100) / 100;
    text1.updateData({
      text: `$\\bullet$ Minimum: $${num}$\n\n$\\bullet$ First Quartile: $${num2}$\n\n$\\bullet$ Median: $${num3}$\n\n$\\bullet$ Third Quartile: $${num4}$\n\n$\\bullet$ Maximum: $${num5}$\n\n$\\bullet$ Standard Deviation: $${num6}$`,
    });
  });
}

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
  ggb1.instance.evalCommand('data={}');
  for (var i = 0, L = table1.data.rows.length; i < L; i++) {
    ggb1.instance.evalCommand(
      `SetValue(data,Append(data,${table1.getCell(i, 0).value}))`
    );
  }
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('showDotPlot', true);
  } else {
    ggb1.instance.setValue('showDotPlot', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('showHistogram', true);
    ggb1.instance.setAxesVisible(true, true);
  } else {
    ggb1.instance.setValue('showHistogram', false);
    ggb1.instance.setAxesVisible(true, false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('showBoxPlot', true);
  } else {
    ggb1.instance.setValue('showBoxPlot', false);
  }
});
