const { ggb1, feedback1, text1, select1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ visible: false, align: 'center' });
});

autorun(() => {
  switch (select1.data.selected) {
    case '0':
      ggb1.instance.evalCommand('RunClickScript(undo)');
      button1.updateData({
        visible: true,
        text: 'Translate',
        align: 'left',
        selection: 1,
      });
      ggb1.instance.evalCommand('RunClickScript(translate)');
      break;
    case '1':
      ggb1.instance.evalCommand('RunClickScript(undo)');
      button1.updateData({
        visible: true,
        text: 'Reflect',
        align: 'left',
        selection: 2,
      });
      ggb1.instance.evalCommand('RunClickScript(reflect)');
      break;
    case '2':
      ggb1.instance.evalCommand('RunClickScript(undo)');
      button1.updateData({
        visible: true,
        text: 'Rotate',
        align: 'left',
        selection: 3,
      });
      ggb1.instance.evalCommand('RunClickScript(rotate)');
  }
});

button1.on('click', () => {
  switch (button1.data.selection) {
    case 1:
      ggb1.instance.evalCommand('RunClickScript(animate)');
      break;
    case 2:
      ggb1.instance.evalCommand('RunClickScript(animate)');
      break;
    case 3:
      ggb1.instance.evalCommand('RunClickScript(animate)');
      break;
    case 4:
      ggb1.instance.evalCommand('RunClickScript(undo)');
      select1.updateData({ selected: '' });
  }
  button1.updateData({
    visible: false,
    text: 'Reset',
    align: 'right',
    selection: 4,
  });
});

autorun(() => {
  if (ggb1.innerData['flag']) {
    button1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"button":1},"stage":"Launch","lessonInfo":"8 M2 TB L08 - Sequencing the Rigid Motions","teacherView":false,"layout":"two col"}
*/
