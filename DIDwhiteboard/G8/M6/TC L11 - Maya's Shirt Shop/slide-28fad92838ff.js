const { text1, ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
  ggb1.instance.setVisible('plane1', true);
  ggb1.instance.setAnimating('pin1Time', false);
  ggb1.instance.setValue('pin1Time', 0);
  ggb1.instance.setAnimating('pin1Time', true);
  ggb1.instance.startAnimation();
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb1.updateData({ init: true });
}

autorun(() => {
  let time = ggb1.innerData['pin1Time'];
  if (ggb1.innerData['pin1Time'] == 1) {
    ggb2.instance.setVisible('J', true);
  }
  if (ggb1.innerData['pin2Time'] == 1) {
    ggb2.instance.setVisible('G', true);
  }
  if (ggb1.innerData['pin3Time'] == 1) {
    ggb2.instance.setVisible('F', true);
  }
  if (ggb1.innerData['pin4Time'] == 1) {
    ggb2.instance.setVisible('H', true);
  }
  if (ggb1.innerData['pin5Time'] == 1) {
    ggb2.instance.setVisible('A', true);
  }
  if (ggb1.innerData['pin6Time'] == 1) {
    ggb2.instance.setVisible('E', true);
  }
  if (ggb1.innerData['pin7Time'] == 1) {
    ggb2.instance.setVisible('I', true);
  }
  if (ggb1.innerData['pin8Time'] == 1) {
    ggb2.instance.setVisible('B', true);
  }
  if (ggb1.innerData['pin9Time'] == 1) {
    ggb2.instance.setVisible('C', true);
  }
  if (ggb1.innerData['pin10Time'] == 1) {
    ggb2.instance.setVisible('D', true);
  }
});

/*
{"compTotals":{"textbox":2,"geogebra":2},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"T layout"}
*/
