const { buttongroup1, ggb1, separator1, feedback1, ggb2, separator2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

buttongroup1.updateSingleButton({ disabled: true }, 2);

ggb1.instance.registerObjectUpdateListener('time1', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time2', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time3', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time4', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time5', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time6', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time7', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time8', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time9', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time10', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time11', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time12', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time13', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time14', windowAdjust);
ggb1.instance.registerObjectUpdateListener('time15', windowAdjust);

function windowAdjust() {
  if (ggb1.instance.getValue('time3') > 0.4) {
    ggb1.instance.setValue('ymax', 10);
    ggb1.instance.setValue('ymin', -1);
    ggb1.instance.setValue('distance', 0.5);
    ggb2.instance.setValue('ymax', 10);
    ggb2.instance.setValue('ymin', -1);
    ggb2.instance.setValue('distance', 0.5);
  }
  if (ggb1.instance.getValue('time4') > 0.4) {
    ggb1.instance.setValue('ymax', 20);
    ggb1.instance.setValue('ymin', -2);
    ggb1.instance.setValue('distance', 1);
    ggb2.instance.setValue('ymax', 20);
    ggb2.instance.setValue('ymin', -2);
    ggb2.instance.setValue('distance', 1);
  }
  if (ggb1.instance.getValue('time9') > 0.4) {
    ggb1.instance.setValue('ymax', 50);
    ggb1.instance.setValue('ymin', -5);
    ggb1.instance.setValue('distance', 2.5);
    ggb2.instance.setValue('ymax', 50);
    ggb2.instance.setValue('ymin', -5);
    ggb2.instance.setValue('distance', 2.5);
  }
  if (ggb1.instance.getValue('time13') > 0.4) {
    ggb1.instance.setValue('ymax', 100);
    ggb1.instance.setValue('ymin', -10);
    ggb1.instance.setValue('distance', 5);
    ggb2.instance.setValue('ymax', 100);
    ggb2.instance.setValue('ymin', -10);
    ggb2.instance.setValue('distance', 5);
  }
  if (ggb1.instance.getValue('time14') > 0.4) {
    ggb1.instance.setValue('ymax', 200);
    ggb1.instance.setValue('ymin', -20);
    ggb1.instance.setValue('distance', 10);
    ggb2.instance.setValue('ymax', 200);
    ggb2.instance.setValue('ymin', -20);
    ggb2.instance.setValue('distance', 10);
  }
  if (ggb1.instance.getValue('time15') > 0.4) {
    ggb1.instance.setValue('ymax', 400);
    ggb1.instance.setValue('ymin', -40);
    ggb1.instance.setValue('distance', 20);
    ggb2.instance.setValue('ymax', 400);
    ggb2.instance.setValue('ymin', -40);
    ggb2.instance.setValue('distance', 20);
  }
}
autorun(() => {
  ggb2.updateInnerData({ time1: ggb1.innerData['time1'] });
  ggb2.updateInnerData({ time2: ggb1.innerData['time2'] });
  ggb2.updateInnerData({ time3: ggb1.innerData['time3'] });
  ggb2.updateInnerData({ time4: ggb1.innerData['time4'] });
  ggb2.updateInnerData({ time5: ggb1.innerData['time5'] });
  ggb2.updateInnerData({ time6: ggb1.innerData['time6'] });
  ggb2.updateInnerData({ time7: ggb1.innerData['time7'] });
  ggb2.updateInnerData({ time8: ggb1.innerData['time8'] });
  ggb2.updateInnerData({ time9: ggb1.innerData['time9'] });
  ggb2.updateInnerData({ time10: ggb1.innerData['time10'] });
  ggb2.updateInnerData({ time11: ggb1.innerData['time11'] });
  ggb2.updateInnerData({ time12: ggb1.innerData['time12'] });
  ggb2.updateInnerData({ time13: ggb1.innerData['time13'] });
  ggb2.updateInnerData({ time14: ggb1.innerData['time14'] });
  ggb2.updateInnerData({ time15: ggb1.innerData['time15'] });
});

buttongroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  ggb2.instance.evalCommand('RunClickScript(button1)');
  buttongroup1.updateSingleButton({ disabled: false }, 2);
  buttongroup1.updateSingleButton({ disabled: true }, 1);
});

buttongroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb2.instance.evalCommand('RunClickScript(button2)');
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":2,"separator":2,"textbox":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - PA Exploring Exponents","teacherView":true,"layout":"T layout"}
*/
