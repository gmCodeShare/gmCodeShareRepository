const { ggb1, separator4, button2, feedback1, ggb2, table1, buttonGroup1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
button2.updateData({ disabled: true });
ggb2.instance.registerObjectUpdateListener('number', updateRight);

function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
  button2.updateData({ disabled: false });
}

buttonGroup1.on('click:1', () => {
  table1.updateCell(2, 1, {
    value: '10',
  });
  table1.updateCell(2, 2, {
    value: '15',
  });
  table1.updateCell(2, 3, {
    value: '7',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  table1.updateCell(2, 1, {
    value: '',
  });
  table1.updateCell(2, 2, {
    value: '',
  });
  table1.updateCell(2, 3, {
    value: '',
  });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

button2.on('click', () => {
  ggb1.instance.reset();
  ggb2.instance.setValue('number', 0);
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":1,"textbox":1,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"two col"}
*/
