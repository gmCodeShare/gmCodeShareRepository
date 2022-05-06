const {
  ggb1,
  ggb2,
  text4,
  text5,
  cc_submit_5d9e12e99d25_textbox1: text1,
  cc_submit_5d9e12e99d25_input1: input1,
  cc_submit_5d9e12e99d25_button1: button1,
  cc_submit_97623b8acf34_textbox1: text2,
  cc_submit_97623b8acf34_input1: input2,
  cc_submit_97623b8acf34_button1: button2,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    ggb1.instance.setVisible("Answer", false);
    ggb2.instance.setVisible("Answer2", false);
    ggb1.instance.setVisible("eq1", false);
    ggb2.instance.setVisible("eq1", false);
    //text5.updateData({ align:"center" });
    //text4.updateData({ align:"center" });
    ggb2.updateData({ visible: false });
    text4.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}
button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb2.updateData({ visible: true });
  text4.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-4bfb4c854b0b", (register3) => {
  if (!register3 || !register3.length) {
    return;
  }
  const lastRegister3 = discardOldResponses(register3);
  lastRegister3.forEach(({ data, info }) => {
    ggb1.instance.evalCommand(`(${data.Answer[0]},${data.Answer[1]})`);
  });
});

function discardOldResponses(register3) {
  const devices = new Set();

  return register3
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

utils.RTS.on("datachange", "slide-4ef6031b9218", (register4) => {
  if (!register4 || !register4.length) {
    return;
  }
  const lastRegister4 = discardOldResponses(register4);
  lastRegister4.forEach(({ data, info }) => {
    ggb2.instance.evalCommand(`(${data.Answer2[0]},${data.Answer2[1]})`);
  });
});

function discardOldResponses(register4) {
  const devices = new Set();

  return register4
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}
