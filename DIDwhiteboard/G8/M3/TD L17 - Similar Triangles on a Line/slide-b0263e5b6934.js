const {
  ggb1,
  feedback1,
  text3,
  cc_submit_1f5703a86cc4_textbox1,
  cc_submit_1f5703a86cc4_input1: input1,
  cc_submit_1f5703a86cc4_button1: button1,
  separator2,
  cc_sharewithclass_11ed18838dea_textbox1: text2,
  cc_sharewithclass_11ed18838dea_input1: input2,
  cc_sharewithclass_11ed18838dea_button1: button2,
  cc_sharewithclass_11ed18838dea_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!text3.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    text3.updateData({ init: true });
  }
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

utils.RTS.on('datachange', 'slide-a54624cada0b', (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();

  ggb1.instance.setValue('rightCount', 0);

  lastRegister.forEach(({ data, info }) => {
    const { isSelf } = info;
    const { xVal, yVal } = data;
    if (!isSelf) {
      let index = (ggb1.instance.getValue('rightCount') % 4) + 1;
      ggb1.instance.setValue('x' + index + '', xVal);
      ggb1.instance.setValue('y' + index + '', yVal);
      ggb1.instance.setValue(
        'rightCount',
        ggb1.instance.getValue('rightCount') + 1
      );
    }
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device);
      devices.add(device);
      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M3 TD L17 - Similar Triangles on a Line","teacherView":false,"layout":"two col"}
*/
