const {
  ggb1,
  feedback1,
  text1,
  table1,
  button1,
  separator1,
  cc_sharewithclass_8e314fc26dd7_textbox1: shareText1,
  cc_sharewithclass_8e314fc26dd7_input1: shareInput1,
  cc_sharewithclass_8e314fc26dd7_button1: shareButton1,
  cc_sharewithclass_8e314fc26dd7_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  // create/update a dummy variable to keep track of whether the screen has initialized
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
  let entries = [table1.getCell(0, 1).value, table1.getCell(0, 2).value];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({ disabled: !entries.every((value) => !!value) });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  let Number = table1.getCell(0, 1).value;
  let Number2 = table1.getCell(0, 2).value;
  if (Number2 > 0) {
    ggb1.instance.setValue('yMin', Number);
    ggb1.instance.setValue('yMax', Number2);
  }
  if (Number2 == 0) {
    ggb1.instance.setValue('yMin', Number);
    ggb1.instance.setValue('yMax', 0.1);
  }

  button1.updateData({ disabled: true });
  ggb1.instance.evalCommand('ReadText(AAppletStatus)');
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
