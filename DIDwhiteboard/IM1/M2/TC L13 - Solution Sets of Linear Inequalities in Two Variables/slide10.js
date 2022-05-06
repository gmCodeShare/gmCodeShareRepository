const {
  ggb1,
  radio1,
  button1,
  cc_submit_a00bc28a9f01_textbox1: text2,
  cc_submit_a00bc28a9f01_input1: input1,
  cc_submit_a00bc28a9f01_button1: button2,
  cc_submit_b6b11e60b190_textbox1: text3,
  cc_submit_b6b11e60b190_input1: input2,
  cc_submit_b6b11e60b190_button1: button3,
} = components;

slide.on("firstload", () => {
  button1.updateData({ disabled: true });
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button3.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setValue("time", 1);
ggb1.instance.deleteObject("text1");
ggb1.instance.deleteObject("u");

autorun(() => {
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
  if (radio1.data.selected === "0") {
    text2.updateData({
      text: "There are infinitely many ordered pairs of numbers that each have a difference of less than $6$. Do you still think it is possible to plot every point in the solution set? Explain.",
    });
    button1.updateData({ disabled: true });
  }
  if (radio1.data.selected === "1") {
    text2.updateData({
      text: "Describe how you can show the graph of the solution set without plotting every point.",
    });
    text3.updateData({ visible: false });
    input2.updateData({ visible: false });
    button3.updateData({ visible: false });
    if (ggb1.instance.getValue("time2") < 1) {
      button1.updateData({ disabled: false });
    }
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
});

button2.on("click", () => {
  if (radio1.data.selected === "0") {
    // text2.updateData({
    //   text: "Since it is impossible to plot an infinite number of points, how could you represent the graph of the solution set?",
    // });
    button1.updateData({ disabled: false });
    text3.updateData({ visible: true });
    input2.updateData({ visible: true });
    button3.updateData({ visible: true });
  }
});

utils.RTS.on("datachange", "slide-1a0fd993032e", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { a, b, c, d, e, f, total, total2, total3 } = data;
    if (total < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + a + "," + b + ")))"
      );
    }
    if (total2 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + c + "," + d + ")))"
      );
    }
    if (total3 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + e + "," + f + ")))"
      );
    }
  });
});

// Retrieving information
utils.RTS.on("datachange", "slide-8e74cc3defa1", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList2={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { g, h, i, j, k, l, total4, total5, total6 } = data;
    if (total4 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + g + "," + h + ")))"
      );
    }
    if (total5 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + i + "," + j + ")))"
      );
    }
    if (total6 < 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + k + "," + l + ")))"
      );
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
