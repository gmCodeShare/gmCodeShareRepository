const { ggb1, feedback, Textbox3, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('state4', true);
ggb1.instance.setMode(62);
button1.updateData({ align: 'right' });

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();

function getDoodles() {
  let doodleArray = [];
  let allPenstrokes = ggb1.instance.getAllObjectNames('penstroke');
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb1.instance.getCommandString(allPenstrokes[i]));
  }
  ggb1.updateInnerData({ doodles: doodleArray });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
