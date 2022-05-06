const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)

  ggb1.instance.setValue('state', 1);
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb1.updateData({ init: true });
}

autorun(() => {
  let Point1 = ggb1.innerData['P1'];
  if (ggb1.innerData['show']) {
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Print Alternate Slide Deck for Memory Games","teacherView":true,"layout":"one col"}
*/
