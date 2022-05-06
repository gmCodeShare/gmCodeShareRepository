const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator1,
  text2,
  text3,
  input1,
  text4,
  button2,
} = components;

slide.on('firstload', () => {
  text3.updateData({ visible: false });
  input1.updateData({ visible: false });
  text4.updateData({ visible: false });
  button2.updateData({ visible: false });
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
});

ggb1.instance.setErrorDialogsActive(false);

button2.updateData({ align: 'right' });

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on('click:1', () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  text4.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.setFixed('DragPoint', false, false);
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setFixed('DragPoint', false, true);
});

ggb1.instance.registerObjectUpdateListener('distance', update);

function update() {
  let num = Math.round(ggb1.instance.getValue('distance') * 100) / 100;
  text2.updateData({ text: `Me: $${num}$ kilometers` });
}

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-102b2e9edb49', {
      distance: Math.round(ggb1.instance.getValue('distance') * 100) / 100,
      remaining: Math.round(ggb1.instance.getValue('remaining') * 100) / 100,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":5,"buttongroup":1,"separator":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
