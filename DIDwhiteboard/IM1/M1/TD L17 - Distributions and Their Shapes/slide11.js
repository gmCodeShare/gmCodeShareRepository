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
    ggb1.updateData({ init: true });
  }
}

utils.RTS.on("datachange", "slide-43b49a6aec4c", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("showProvided", !!prefs.data?.showProvided);
  ggb1.instance.setValue("showCombined", !!prefs.data?.showCombined);
  ggb2.instance.setValue("showProvided", !!prefs.data?.showProvided);
  ggb2.instance.setValue("showCombined", !!prefs.data?.showCombined);
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-3f75850fe6b3", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("l1={}");
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    // console.log(data);
    if (data.myData || data.myData === 0) {
      ggb1.instance.evalCommand(`SetValue(l1,Append(l1,1*${data.myData}))`);
    }
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

utils.RTS.on("datachange", "slide-ca9b726bccee", (register2) => {
  if (!register2 || !register2.length) {
    return;
  }
  ggb2.instance.evalCommand("l1={}");
  const lastRegister2 = discardOldResponses(register2);
  lastRegister2.forEach(({ data, info }) => {
    if (data.myData2 || data.myData2 === 0) {
      ggb2.instance.evalCommand(`SetValue(l1,Append(l1,${data.myData2}))`);
    }
  });
});

function discardOldResponses(register2) {
  const devices = new Set();

  return register2
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}
