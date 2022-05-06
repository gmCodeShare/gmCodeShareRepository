const {
  ggb1,
  feedback1,
  text1,
  button1,
  separator1,
  cc_submit_dc47db4a3ebd_textbox1: text2,
  cc_submit_dc47db4a3ebd_input1: input1,
  cc_submit_dc47db4a3ebd_button1: button2,
} = components;

ggb1.instance.setValue("showSquares", true);
ggb1.instance.setValue("showRes", false);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
  button1.updateData({ disabled: true });
});

button1.on("click", () => {
  ggb1.instance.setValue("show", false);
  ggb1.instance.setValue("showPoints", false);
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("showBestLine", true);
});

ggb1.instance.registerObjectUpdateListener("enableButton", update);

function update() {
  if (ggb1.instance.getValue("enableButton")) {
    button1.updateData({ disabled: false });
  }
}

utils.RTS.on("datachange", "slide-e89c96d31a0d", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-290b837ee12a", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("data={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    //ggb1.instance.setValue('fake', false);
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );

    if (ggb1.instance.getValue("maxX") > 2700) {
      ggb1.instance.setValue("xMax", ggb1.instance.getValue("maxX") + 500);
    } else {
      ggb1.instance.setValue("xMax", 2700);
    }
    if (ggb1.instance.getValue("maxY") > 430) {
      ggb1.instance.setValue("yMax", ggb1.instance.getValue("maxY") + 500);
    } else {
      ggb1.instance.setValue("yMax", 430);
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
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Modeling Relationships with a Line","teacherView":false,"layout":"two col"}
*/
