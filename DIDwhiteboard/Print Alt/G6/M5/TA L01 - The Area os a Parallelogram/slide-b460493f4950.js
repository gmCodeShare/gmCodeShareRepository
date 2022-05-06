const { ggb1, separator1, buttonGroup1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("q3'", false);
    ggb1.instance.setVisible('q4', false);
    ggb1.instance.setVisible('Slide', false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setLayer('n', 5);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setVisible("q3'", true);
  ggb1.instance.setVisible('q4', true);
  ggb1.instance.setVisible('Slide', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible('q1', false);
  ggb1.instance.setVisible('F', false);
  ggb1.instance.setVisible('D', false);
  ggb1.instance.setVisible('eq1', false);
  ggb1.instance.setVisible('eq2', false);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('Slide', 0);
  ggb1.instance.setVisible('F', true);
  ggb1.instance.setVisible('D', true);
  ggb1.instance.setVisible('eq1', true);
  ggb1.instance.setVisible('eq2', true);
  ggb1.instance.setVisible("q3'", false);
  ggb1.instance.setVisible('q4', false);
  ggb1.instance.setVisible('Slide', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setVisible('q1', true);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - Print Alternate Slide Deck for The Area of a Parallelogram","teacherView":true,"layout":"one col"}
*/
