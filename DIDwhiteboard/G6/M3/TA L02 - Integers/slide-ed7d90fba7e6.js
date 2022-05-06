const { ggb1, feedback1, text1, text2, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('sliderOptions', 0);
    ggb1.instance.setValue('movingCenterPoint', 0);
    ggb1.instance.setValue('center', 0);
    ggb1.instance.setValue('xmin', -12.5);
    ggb1.instance.setValue('xmax', 12.5);
    button1.updateData({ align: 'right' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  // I bet there's a better way to do this than hard-coding each cell!
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(1, 0).value,
    table1.getCell(2, 0).value,
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"table":1,"button":1},"stage":"Launch","lessonInfo":"6 M3 TA L02 - Integers","teacherView":false,"layout":"two col"}
*/
