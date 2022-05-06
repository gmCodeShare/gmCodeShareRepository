const { ggb1, Separator4, button2, feedback1, text1, ggb2 } = components;

components.feedback1.updateData({ visible: false });

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ align: 'center' });
    ggb1.updateData({ init: true });
  }
}

ggb2.instance.registerObjectUpdateListener('bluePaintToAdd', update);
ggb2.instance.registerObjectUpdateListener('redPaintToAdd', update);
ggb2.instance.registerObjectUpdateListener('blueTotal', update);
ggb2.instance.registerObjectUpdateListener('time', update);

function update() {
  ggb1.instance.setValue(
    'bluePaintToAdd',
    ggb2.instance.getValue('bluePaintToAdd')
  );
  ggb1.instance.setValue(
    'redPaintToAdd',
    ggb2.instance.getValue('redPaintToAdd')
  );
  ggb1.instance.setValue('blueTotal', ggb2.instance.getValue('blueTotal'));
  ggb1.instance.setValue('time', ggb2.instance.getValue('time'));
  ggb1.instance.setAnimating('time', false);
  if (
    ggb2.instance.getValue('bluePaintToAdd') > 0 ||
    ggb2.instance.getValue('redPaintToAdd') > 0
  ) {
    button2.updateData({ disabled: false });
  } else {
    button2.updateData({ disabled: true });
  }
}

button2.on('click', () => {
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button2.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"button":1,"textbox":2},"stage":"Learn","lessonInfo":"6 M1 TA L04 - PA Slide Deck for Exploring Ratios by Making Batches","teacherView":true,"layout":"two col"}
*/
