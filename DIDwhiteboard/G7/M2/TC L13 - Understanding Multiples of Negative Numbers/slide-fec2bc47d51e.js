const {
  ggb1,
  feedback,
  textDisplay2,
  input2,
  textDisplay3,
  input3,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('state1', true);
ggb1.instance.showToolBar(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ disabled: true });
    button2.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (input3.data.text != input3.data.last) {
    button2.updateData({ text: 'Submit', disabled: false });
    input3.updateData({ last: input3.data.text });
  }
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: false });
    input2.updateData({ last: input2.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":2,"button":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
