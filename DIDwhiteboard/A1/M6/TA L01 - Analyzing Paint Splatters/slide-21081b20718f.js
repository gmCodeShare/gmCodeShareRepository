const {
  ggb1,
  feedback1,
  text3,
  cc_submit_d25bbb0670b6_textbox1: text1,
  cc_submit_d25bbb0670b6_input1: input1,
  cc_submit_d25bbb0670b6_button1: button1,
  separator2,
  cc_sharewithclass_05850962f7be_textbox1: text2,
  cc_sharewithclass_05850962f7be_input1: input2,
  cc_sharewithclass_05850962f7be_button1: button2,
  cc_sharewithclass_05850962f7be_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

utils.RTS.on("datachange", "slide-62797c462e04", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    ggb1.instance.setTextValue("text1", data.text1x);
    ggb1.instance.setTextValue("text2", data.text2y);
    ggb1.instance.setValue("showText", true);
  });
});

utils.RTS.on("datachange", "slide-fa863e2a26e0", (register) => {
  if (!register || !register.length) {
    return;
  }

  ggb1.instance.evalCommand("data={}");

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6, num7, num8, num9, num10 } = data;
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num},${num2})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num3},${num4})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num5},${num6})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num7},${num8})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num9},${num10})))`);
    ggb1.instance.setVisible("data", true);
    ggb1.instance.setVisible("shortenedLinear", true);
  });

  let slope = Math.round(ggb1.instance.getValue(`linearSlope`) * 100) / 100;
  let yInt = Math.round(ggb1.instance.getValue(`linearYVal`) * 100) / 100;

  if (yInt >= 0) {
    text3.updateData({
      text: `The class aggregate is shown here.   
          
          The line of best fit is $y=${slope}x+${yInt}$`,
    });
  } else {
    text3.updateData({
      text: `The class aggregate is shown here.   
          
          The line of best fit is $y=${slope}x${yInt}$`,
    });
  }
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

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Analyzing Paint Splatters","teacherView":false,"layout":"two col"}
*/
