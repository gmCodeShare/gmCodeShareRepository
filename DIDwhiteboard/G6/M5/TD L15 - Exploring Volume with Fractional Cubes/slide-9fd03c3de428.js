const { text1, ggb1, feedback1, ggb2, separator1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

ggb1.instance.registerObjectUpdateListener('height', update);
ggb1.instance.registerObjectUpdateListener('leng', update);
ggb1.instance.registerObjectUpdateListener('width', update);
ggb1.instance.registerObjectUpdateListener('time', update);
ggb1.instance.registerObjectUpdateListener('B', update);
ggb1.instance.registerObjectUpdateListener('D', update);

function update() {
  ggb2.instance.setValue('height', ggb1.instance.getValue('height'));
  ggb2.instance.setValue('leng', ggb1.instance.getValue('leng'));
  ggb2.instance.setValue('width', ggb1.instance.getValue('width'));
  ggb2.instance.setValue('time', ggb1.instance.getValue('time'));
  ggb2.instance.setCoords(
    'B',
    ggb1.instance.getXcoord('B'),
    ggb1.instance.getYcoord('B')
  );
  ggb2.instance.setCoords(
    'D',
    ggb1.instance.getXcoord('D'),
    ggb1.instance.getYcoord('D')
  );
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setAnimating('time', true);
  ggb2.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb2.instance.setAnimating('time', false);
  ggb2.instance.setValue('time', 0);
});

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"T layout"}
*/
