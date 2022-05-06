const {
  separator5,
  text2,
  ggb1,
  text3,
  ggb2,
  text1,
  button1,
  text4,
  feedback1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  button1.updateData({
    disabled: true,
    text: 'Submitted',
  });
  if (
    ggb1.instance.getValue('openPoint') == 1 ||
    Math.abs(ggb1.instance.getXcoord('D') + 4) > 0.1 ||
    ggb1.instance.getValue('blueA') == 1 ||
    ggb2.instance.getValue('openPoint') == 0 ||
    Math.abs(ggb2.instance.getXcoord('A') + 4) > 0.1 ||
    ggb2.instance.getValue('blueA') == 1
  ) {
    text4.updateData({ visible: true });
  }
});

autorun(() => {
  let reup = ggb1.innerData['A'];
  let reup2 = ggb2.innerData['D'];
  let click = ggb1.innerData['blueA'];
  let click2 = ggb2.innerData['blueA'];
  let open = ggb1.innerData['openPoint'];
  let open2 = ggb2.innerData['openPoint'];
  button1.updateData({
    disabled: false,
    text: 'Submit',
  });
  text4.updateData({ visible: false });
});

/*
{"compTotals":{"separator":1,"textbox":5,"geogebra":2,"button":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
