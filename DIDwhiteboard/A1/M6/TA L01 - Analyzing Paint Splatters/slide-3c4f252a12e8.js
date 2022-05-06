const {
  ggb1,
  separator2,
  buttonGroup1,
  feedback1,
  cc_sharewithclass_05850962f7be_textbox1,
  cc_sharewithclass_05850962f7be_input1,
  cc_sharewithclass_05850962f7be_button1,
  cc_sharewithclass_05850962f7be_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

/*slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});*/

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
  // Don't do anything if we don't have data
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  if (!register || !register.length) {
    return;
  }

  ggb1.instance.evalCommand("data={}");

  if (ggb1.instance.getValue("quadratic")) {
    ggb1.instance.setVisible("shortenedQuadratic", true);
  } else {
    ggb1.instance.setVisible("shortenedQuadratic", false);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6, num7, num8, num9, num10 } = data;
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num},${num2})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num3},${num4})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num5},${num6})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num7},${num8})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num9},${num10})))`);
    ggb1.instance.setVisible("data", true);
  });
  let dataLen = ggb1.instance.getValue("Length(data)");
  if (dataLen) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
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

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setVisible("shortenedQuadratic", true);
  ggb1.instance.setVisible("shortenedExponential", false);
  ggb1.instance.setValue("quadratic", true);
  ggb1.instance.setValue("exponential", false);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setVisible("shortenedQuadratic", false);
  ggb1.instance.setVisible("shortenedExponential", true);
  ggb1.instance.setValue("quadratic", false);
  ggb1.instance.setValue("exponential", true);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Analyzing Paint Splatters","teacherView":false,"layout":"two col"}
*/
