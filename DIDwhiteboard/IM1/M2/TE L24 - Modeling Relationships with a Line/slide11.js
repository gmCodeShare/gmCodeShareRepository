const {
  ggb1,
  button1,
  cc_submit_dc47db4a3ebd_textbox1: text2,
  cc_submit_dc47db4a3ebd_input1: input1,
  cc_submit_dc47db4a3ebd_button1: button2,
  cc_sharewithclass_cb7ba723f7d0_textbox1: shareText1,
  cc_sharewithclass_cb7ba723f7d0_input1: shareInput1,
  cc_sharewithclass_cb7ba723f7d0_button1: shareButton1,
} = components;

ggb1.instance.setValue("showSquares", true);
ggb1.instance.setValue("showRes", false);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

utils.RTS.on("datachange", "slide-eb89dc46e780", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
  const { showProvided } = lastRegister[0].data;
  ggb1.instance.setValue("fake", showProvided);
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

// check storyboard, then delete this if reviewers decided not to keep the question
// button2.on("click", () => {
//   shareText1.updateData({ visible: true });
//   shareInput1.updateData({ visible: true });
//   shareButton1.updateData({ visible: true });
// });

ggb1.instance.registerObjectUpdateListener("enableButton", update);

function update() {
  if (ggb1.instance.getValue("enableButton")) {
    button1.updateData({ disabled: false });
  }
}

utils.RTS.on("datachange", "slide-290b837ee12a", (register) => {
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
