const { ggb1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('fraction', updateRight);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

function updateRight() {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  if (
    ggb1.instance.getValue('fraction') == 5 &&
    ggb1.instance.getValue('showRecs') == true
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

/*
{"compTotals":{"geogebra":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":true,"layout":"one col"}
*/
