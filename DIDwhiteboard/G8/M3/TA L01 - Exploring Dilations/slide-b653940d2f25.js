const {
  ggb1,
  separator3,
  buttonGroup1,
  feedback1,
  text1,
  select1,
  separator1,
  cc_sharewithclass_d3978607bee8_textbox1: shareText1,
  cc_sharewithclass_d3978607bee8_input1: shareInput1,
  cc_sharewithclass_d3978607bee8_button1: shareButton1,
  cc_sharewithclass_d3978607bee8_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('speed', 5);
  ggb1.instance.setAnimating('timeMove', true);
  ggb1.instance.setAnimating('timePause', false);
  ggb1.instance.setValue('timeMove', 0);
  ggb1.instance.setValue('timePause', 0);
  ggb1.instance.startAnimation();
});

select1.on('change', () => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    let chosen = select1.data.options[parseInt(select1.data.selected[0])].label;
    shareInput1.updateData({ text: chosen + ', because ' });
    utils.RTS.sendData('slide-b653940d2f25', {
      chosen,
    });
  }
});

autorun(() => {
  if (ggb1.innerData['timeMove'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeMove', false);
    ggb1.instance.setAnimating('timePause', true);
    ggb1.instance.setValue('timePause', 0);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['timePause'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeMove', true);
    ggb1.instance.setAnimating('timePause', false);
    ggb1.instance.setValue('timeMove', 0);
    ggb1.instance.startAnimation();
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('timeMove', true);
  ggb1.instance.setAnimating('timePause', false);
  ggb1.instance.setValue('timeMove', 0);
  ggb1.instance.setValue('timePause', 0);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":2,"select":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M3 TA L01 - Exploring Dilations","teacherView":false,"layout":"two col"}
*/
