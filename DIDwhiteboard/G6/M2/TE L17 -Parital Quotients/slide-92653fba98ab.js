const { text1, ggb1, separator1, button1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('enableButton', buttonWork);
ggb1.instance.registerStoreUndoListener(snap);

slide.on('firstload', () => {
  button1.updateData({ disabled: true });
});

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  button1.updateData({ disabled: true });
});

function buttonWork() {
  if (ggb1.instance.getValue('enableButton')) {
    button1.updateData({ disabled: false });
  }
}

function snap() {
  ggb1.updateData({ image: ggb1.instance.getPNGBase64(1, true, 300) });
}

snap();

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"button":1},"stage":"Launch","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"one col"}
*/
