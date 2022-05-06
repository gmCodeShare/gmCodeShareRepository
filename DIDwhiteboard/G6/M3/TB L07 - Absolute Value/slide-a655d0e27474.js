const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator1,
  text2,
  select1,
  button2,
  text3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('state', 2);
    ggb1.instance.setValue('breakSpeed', 30);
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    select1.updateData({ visible: false });
    text3.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected) {
    button2.updateData({ visible: true });
  }
});

button2.on('click', () => {
  button2.updateData({ disabled: true, visible: true });
  text3.updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  text2.updateData({ visible: true });
  select1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('break', false);
  ggb1.instance.setValue('break', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"buttongroup":1,"separator":1,"radiogroup":1,"button":1},"stage":"Launch","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
