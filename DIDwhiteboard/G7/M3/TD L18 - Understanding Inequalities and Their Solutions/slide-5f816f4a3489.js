const {
  separator4,
  text2,
  ggb14,
  text3,
  ggb15,
  text1,
  button1,
  text4,
  feedback1,
} = components;

text4.updateData({ visible: false });

ggb14.instance.setErrorDialogsActive(false);
ggb15.instance.setErrorDialogsActive(false);

ggb14.instance.registerStoreUndoListener(() => {
  ggb14.updateData({ save64: ggb14.instance.getBase64() });
});
ggb15.instance.registerStoreUndoListener(() => {
  ggb15.updateData({ save64: ggb15.instance.getBase64() });
});

text2.updateData({ align: 'center' });
text3.updateData({ align: 'center' });

button1.on('click', () => {
  button1.updateData({
    disabled: true,
    text: 'Submitted',
  });
  if (
    ggb14.instance.getValue('openPoint') == 1 ||
    Math.abs(ggb14.instance.getXcoord('D') + 2) > 0.1 ||
    ggb14.instance.getValue('blueA') == 0 ||
    ggb15.instance.getValue('openPoint') == 0 ||
    Math.abs(ggb15.instance.getXcoord('A') + 2) > 0.1 ||
    ggb14.instance.getValue('blueA') == 0
  ) {
    text4.updateData({ visible: true });
  }
});

autorun(() => {
  let reup = ggb14.innerData['A'];
  let reup2 = ggb15.innerData['D'];
  let click = ggb14.innerData['blueA'];
  let click2 = ggb15.innerData['blueA'];
  let open = ggb14.innerData['openPoint'];
  let open2 = ggb15.innerData['openPoint'];
  button1.updateData({
    disabled: false,
    text: 'Submit',
  });
  text4.updateData({ visible: false });
});

/*
{"compTotals":{"separator":1,"textbox":5,"geogebra":2,"button":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
