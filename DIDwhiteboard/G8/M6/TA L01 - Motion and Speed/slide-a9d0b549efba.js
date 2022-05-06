const {
  ggb1,
  separator2,
  buttonGroup1,
  feedback1,
  cc_submit_411ec5c2928b_textbox1,
  cc_submit_411ec5c2928b_input1,
  cc_submit_411ec5c2928b_button1: submitButton1,
  separator1,
  text1,
  input1,
  text2,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ visible: false });
    text2.updateData({ visible: false });
    input1.updateData({ visible: false });
    button2.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  text1.updateData({ visible: true });
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
});

text2.updateData({ align: 'right' });
button2.updateData({ align: 'right' });

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.stopAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":3,"submit":1,"input":1,"button":1},"stage":"Launch","lessonInfo":"8 M6 TA L01 - Motion and Speed","teacherView":false,"layout":"two col"}
*/
