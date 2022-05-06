const { ggb1, feedback1, text1, input1, button1, separator1, text2, button2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

let storedWidth;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    input1.updateData({ storedString: '' }); //storedString for comparing when returning to this slide
    button1.updateData({ align: 'right' });
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    storedWidth = 6.4; //declared above onInit function
    ggb1.instance.setValue('origDimensionsBool', true);
    ggb1.instance.setValue('desiredWidth', 6.4);
    ggb1.instance.setValue('displayVal', 25);
    ggb1.instance.setValue('platformClearBool', false);
    ggb1.instance.setValue('platformModeBool', false);
    ggb1.instance.setValue('platformPointBool', false);
    ggb1.instance.setValue('platform0Bool', false);
    ggb1.instance.setValue('platform1Bool', false);
    ggb1.instance.setValue('platform2Bool', false);
    ggb1.instance.setValue('platform3Bool', false);
    ggb1.instance.setValue('platform4Bool', false);
    ggb1.instance.setValue('platform5Bool', false);
    ggb1.instance.setValue('platform6Bool', false);
    ggb1.instance.setValue('platform7Bool', false);
    ggb1.instance.setValue('platform8Bool', false);
    ggb1.instance.setValue('platform9Bool', false);
    ggb1.updateData({ disabled: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  input1.updateData({ storedString: input1.data.text });
  button1.updateData({ disabled: true });
  ggb1.updateData({ disabled: false });
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on('click', () => {
  storedWidth = 6.4;
  ggb1.instance.setValue('desiredWidth', 6.4);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  button2.updateData({ disabled: true });
});

autorun(() => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
    button2.updateData({ disabled: false });
  }
  if (time == 0) {
    ggb1.instance.setValue('desiredWidth', storedWidth);
  }
  if (time == 1) {
    storedWidth = ggb1.instance.getValue('scaleWidth');
  }
});

autorun(() => {
  let currentText = input1.data.text;
  if (currentText != input1.data.storedString) {
    button1.updateData({ disabled: false });
  }
  if (currentText == '') {
    button1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":2,"separator":1},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Scale Factor—Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
