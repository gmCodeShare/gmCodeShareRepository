const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator5,
  cc_sharewithclass_a08bdfbbc8c2_textbox1: text2,
  cc_sharewithclass_a08bdfbbc8c2_input1: input1,
  cc_sharewithclass_a08bdfbbc8c2_button1: button2,
  cc_sharewithclass_a08bdfbbc8c2_studentanswers1: answers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 4);
    text2.updateData({ visible: false });
    input1.updateData({ visible: false });
    button2.updateData({ visible: false });
    answers1.updateData({ visible: false });
    button2.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.setValue('showCarShadow', true);
ggb1.instance.setValue('myPercent', 0.8);
ggb1.instance.setValue('maxLaps', 5);
ggb1.instance.setValue('speed', 0.5);

autorun(() => {
  let time = ggb1.innerData['time'];
  text2.updateData({
    text: `Original car laps: $${time}$\n\nAdjusted car laps: $?$ \n\nHow does the speed of the adjusted car compare to the speed of the original car?
`,
  });
  if (time == ggb1.instance.getValue('maxLaps')) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
  }
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  answers1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.stopAnimation();
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:4', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
