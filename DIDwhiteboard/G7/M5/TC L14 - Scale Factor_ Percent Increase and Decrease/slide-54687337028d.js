const { ggb1, feedback1, text1, table1, button1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

text2.updateData({ visible: false });

ggb1.instance.setValue('origDimensionsBool', true);

ggb1.instance.setValue('desiredWidth', 6.4);
ggb1.instance.setValue('displayVal', 25);
ggb1.instance.setValue('platformClearBool', false);
ggb1.instance.setValue('platformModeBool', false);
ggb1.instance.setValue('platformPointBool', false);
ggb1.instance.setValue('platform0Bool', false);
ggb1.instance.setValue('platform1Bool', false);
ggb1.instance.setValue('platform2Bool', false);
ggb1.instance.setValue('platform3Bool', false);
ggb1.instance.setValue('platform4Bool', false);
ggb1.instance.setValue('platform5Bool', false);
ggb1.instance.setValue('platform6Bool', false);
ggb1.instance.setValue('platform7Bool', false);
ggb1.instance.setValue('platform8Bool', false);
ggb1.instance.setValue('platform9Bool', false);

button1.updateData({ align: 'right' });

ggb1.updateData({ disabled: true });

autorun(() => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
});

button1.on('click', () => {
  ggb1.updateData({ disabled: false });
  button1.updateData({ disabled: true, text: 'Submitted' });
  text2.updateData({ visible: true });
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

/*
{"compTotals":{"geogebra":1,"textbox":3,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Scale Factor—Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
