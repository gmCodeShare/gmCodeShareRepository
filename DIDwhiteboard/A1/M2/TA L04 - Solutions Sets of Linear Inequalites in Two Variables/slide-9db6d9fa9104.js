const {
  ggb1,
  feedback1,
  text1,
  text2,
  cc_submit_c3bed359e4dc_textbox1: text3,
  cc_submit_c3bed359e4dc_input1: input1,
  cc_submit_c3bed359e4dc_button1: button1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();
function getDoodles() {
  text2.updateData({ visible: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
}

button1.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`eq1: ${input1.data.text}`);
    ggb1.instance.setVisible("eq1", true);
    //ggb1.instance.setFixed("g", false, false);
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
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

/*
{"compTotals":{"geogebra":1,"textbox":3,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Solution Sets of Linear Inequalities in Two Variables","teacherView":false,"layout":"two col"}
*/
