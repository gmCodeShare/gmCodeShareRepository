const {
  ggb1,
  feedback1,
  ggb2,
  separator1,
  text1,
  separator3,
  select1,
  separator2,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

select1.on("change", (selected) => {
  button1.updateData({
    text: "Submit",
    disabled: !!selected.length,
  });
  ggb1.instance.setValue("time", 1);
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("solid", true);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("solid", false);
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
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
{"compTotals":{"geogebra":2,"textbox":2,"separator":3,"select":1,"button":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Solution Sets of Linear Inequalities in Two Variables","teacherView":false,"layout":"two col"}
*/
