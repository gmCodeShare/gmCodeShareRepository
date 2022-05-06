const { ggb1, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("q3'", false);
    ggb1.instance.setVisible('show2', false);
    ggb1.instance.setVisible('show3', false);
    ggb1.instance.setVisible('show4', false);
    ggb1.instance.setVisible('show5', false);
    ggb1.instance.setVisible('Slide', false);
    ggb1.instance.setVisible('text1', false);
    ggb1.instance.setValue('Slide', 0);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setLayer('n', 7);
    ggb1.updateData({ init: true });
  }
}

count = 0;

buttonGroup1.on('click:1', () => {
  count += 1;
  ggb1.instance.setVisible("q3'", true);
  ggb1.instance.setVisible('show2', true);
  ggb1.instance.setVisible('show1', false);
  ggb1.instance.setVisible('Slide', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  if (count == 2) {
    ggb1.instance.setVisible('Slide', false);
    ggb1.instance.setVisible('show2', false);
    ggb1.instance.setVisible('show4', true);
    ggb1.instance.setVisible('show5', true);
    ggb1.instance.setVisible('show5', true);
    ggb1.instance.setFixed('Slide', 0, 0);
    ggb1.instance.setVisible('text1', true);
  }
});

ggb1.instance.registerObjectUpdateListener('Slide', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('Slide') == 1) {
    ggb1.instance.setVisible('show2', true);
    ggb1.instance.setVisible('show5', false);
    buttonGroup1.updateSingleButton({ disabled: false, text: 'Cut 2' }, 1);
  }
  if (count == 2) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
}

buttonGroup1.on('click:2', () => {
  count = 0;
  ggb1.instance.setValue('Slide', 0);
  ggb1.instance.setVisible("q3'", false);
  ggb1.instance.setVisible('show2', false);
  ggb1.instance.setVisible('show3', false);
  ggb1.instance.setVisible('show4', false);
  ggb1.instance.setVisible('show5', false);
  ggb1.instance.setVisible('Slide', false);
  ggb1.instance.setVisible('text1', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false, text: 'Cut' }, 1);
  ggb1.instance.setVisible('show1', true);
  ggb1.instance.setFixed('Slide', 1, 1);
  ggb1.instance.setCoords('Tri1', 19.28588, 3.88876);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - Print Alternate Slide Deck for The Area of a Parallelogram","teacherView":true,"layout":"one col"}
*/
