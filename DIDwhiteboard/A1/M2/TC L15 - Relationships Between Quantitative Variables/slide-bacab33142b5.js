const {
  ggb1,
  ggb2,
  separator1,
  button1,
  button2,
  cc_sharewithclass_821c9b3639ee_textbox1,
  cc_sharewithclass_821c9b3639ee_input1,
  cc_sharewithclass_821c9b3639ee_button1,
  cc_sharewithclass_821c9b3639ee_studentanswers1,
  feedback1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
  button1.updateData({ visible: false });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  button2.updateData({ visible: false });
  button1.updateData({ visible: true });
});

utils.RTS.on("datachange", "slide-380d9e72741f", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("fake", !!prefs.data?.showProvided);
  ggb2.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-0f4cf0884e2b", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("data={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );

    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb2.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );

    if (ggb1.instance.getValue("maxX") > 2700) {
      ggb1.instance.setValue("xMax", ggb1.instance.getValue("maxX") + 500);
      ggb2.instance.setValue("xMax", ggb1.instance.getValue("maxX") + 500);
    } else {
      ggb1.instance.setValue("xMax", 2700);
      ggb2.instance.setValue("xMax", 2700);
    }
    if (ggb1.instance.getValue("maxY") > 430) {
      ggb1.instance.setValue("yMax", ggb1.instance.getValue("maxY") + 500);
      ggb2.instance.setValue("yMax", ggb1.instance.getValue("maxY") + 500);
    } else {
      ggb1.instance.setValue("yMax", 430);
      ggb2.instance.setValue("yMax", 430);
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

/*
{"compTotals":{"geogebra":2,"separator":1,"button":2,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Relationships Between Quantitative Variables","teacherView":false,"layout":"two col"}
*/
