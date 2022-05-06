const {
  text1,
  ggb1,
  text2,
  ggb2,
  feedback1,
  cc_submit_5d9e12e99d25_textbox1: submitText1,
  cc_submit_5d9e12e99d25_input1: input1,
  cc_submit_5d9e12e99d25_button1: button1,
} = components;

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

/*
{"compTotals":{"textbox":3,"geogebra":2,"submit":1},"stage":"Learn","lessonInfo":"9 M1 TD L18 - Distributions and Their Shapes","teacherView":false,"layout":"two col"}
*/
