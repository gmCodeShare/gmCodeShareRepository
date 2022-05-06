const {
  ggb1,
  separator2,
  buttonGroup1,
  feedback1,
  text1,
  ggb2,
  separator1,
  text2,
  button1,
  separator3,
  text3,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

text2.updateData({ align: 'center' });
text3.updateData({ align: 'center' });

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

autorun(() => {
  let trigger = ggb2.innerData['yourDistance']; //this just makes it so the autorun fires when the point is moved - there may be a better way
  let direction = ggb2.innerData['directionText'];
  let distance = ggb2.innerData['yourDistance'];
  text3.updateData({ text: `${direction} $${distance}$` });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb2.instance.evalCommand('RunClickScript(button2)');
  text2.updateData({ text: `Number of moves: $0$` });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button4)');
});

button1.on('click', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setCoords(
    'YourJump',
    ggb2.instance.getXcoord('YourJump'),
    ggb2.instance.getYcoord('YourJump')
  );
  ggb1.instance.evalCommand('RunClickScript(button1)');
  ggb2.instance.evalCommand('RunClickScript(button1)');
  let numOfMoves = ggb1.instance.getValue('count');
  text2.updateData({ text: `Number of moves: $${numOfMoves}$` });
});

/*
{"compTotals":{"geogebra":2,"separator":3,"buttongroup":1,"textbox":4,"button":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
