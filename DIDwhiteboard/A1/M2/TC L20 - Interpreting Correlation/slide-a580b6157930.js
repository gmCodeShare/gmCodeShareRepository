const {
  ggb1,
  separator2,
  select1,
  feedback,
  ggb2,
  separator1,
  table1,
  table2,
  table3,
  table4,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  table2.updateData({ visible: false });
  table1.updateData({ visible: true });
  table3.updateData({ visible: false });
  table4.updateData({ visible: false });
  ggb2.updateData({ visible: false });
});

//choiceNum = 0 for Flights and choiceNum = 1 for Monopoly
let choiceNum = "0";

autorun(() => {
  if (!select1.data.selected.length) {
    ggb1.instance.setValue("lineOfBestFit", false);
    ggb1.instance.setValue("residuals", false);
    ggb1.instance.setValue("equation", false);
    ggb1.instance.setValue("r", false);
    ggb2.instance.setValue("residualPlot", false);
  }
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("lineOfBestFit", true);
  } else {
    ggb1.instance.setValue("lineOfBestFit", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("lineOfBestFit", true);
    ggb1.instance.setValue("residuals", true);
  } else {
    ggb1.instance.setValue("residuals", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setValue("equation", true);
  } else {
    ggb1.instance.setValue("equation", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setValue("r", true);
  } else {
    ggb1.instance.setValue("r", false);
  }
  if (select1.data.selected.includes("4")) {
    ggb2.instance.setValue("residualPlot", true);
    ggb2.updateData({ visible: true });
  } else {
    ggb2.instance.setValue("residualPlot", false);
    ggb2.updateData({ visible: false });
  }
});

autorun(() => {
  if (select1.data.selected.includes("1") && choiceNum === "0") {
    if (ggb1.instance.getValue("fake")) {
      table2.updateData({ visible: true });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: false });
    } else {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: true });
    }
  }
  if (!select1.data.selected.includes("1") && choiceNum === "0") {
    if (ggb1.instance.getValue("fake")) {
      table2.updateData({ visible: false });
      table1.updateData({ visible: true });
      table3.updateData({ visible: false });
      table4.updateData({ visible: false });
    } else {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: true });
      table4.updateData({ visible: false });
    }
  }
});

utils.RTS.on("datachange", "slide-0c7d50858588", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("fake", !!prefs.data?.showProvided);
  ggb2.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-ffd0bc2076d0", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("SetValue(data,{})");
  for (var i = 0, L = table3.data.rows.length; i < L; i++) {
    table3.deleteRow(0);
  }
  for (var i = 0, L = table4.data.rows.length; i < L; i++) {
    table4.deleteRow(0);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6 } = data;
    //ggb1.instance.setValue('fake', false);
    //ggb2.instance.setValue('fake', false);
    if (!ggb1.instance.getValue("fake")) {
      table1.updateData({ visible: false });
      table2.updateData({ visible: false });
      table3.updateData({ visible: true });
      if (select1.data.selected.includes("1") && choiceNum === "0") {
        table2.updateData({ visible: false });
        table1.updateData({ visible: false });
        table3.updateData({ visible: false });
        table4.updateData({ visible: true });
      }
      if (!select1.data.selected.includes("1") && choiceNum === "0") {
        table2.updateData({ visible: false });
        table1.updateData({ visible: false });
        table3.updateData({ visible: true });
        table4.updateData({ visible: false });
      }
    }
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num + "," + num2 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num3 + "," + num4 + ")))"
    );
    ggb1.instance.evalCommand(
      "SetValue(data,Append(data,(" + num5 + "," + num6 + ")))"
    );
  });
  for (var i = 1; i < 41; i++) {
    if (ggb1.instance.getValue("x" + i) > 0) {
      table3.addRow();
      table4.addRow();
      // console.log("adding row", i);
      ggb2.instance.setValue("x" + i, ggb1.instance.getValue("x" + i));
      ggb2.instance.setValue(
        "resVal" + i,
        ggb1.instance.getValue("resVal" + i)
      );
      table3.updateCell(i - 1, 0, {
        value: `${ggb1.instance.getValue("x" + i)}`,
        editable: false,
      });
      table3.updateCell(i - 1, 1, {
        value: `${ggb1.instance.getValue("y" + i)}`,
        editable: false,
      });
      table4.updateCell(i - 1, 0, {
        value: `${ggb1.instance.getValue("x" + i)}`,
        editable: false,
      });
      table4.updateCell(i - 1, 1, {
        value: `${ggb1.instance.getValue("y" + i)}`,
        editable: false,
      });
      table4.updateCell(i - 1, 2, {
        value: `${
          Math.round(ggb1.instance.getValue("resVal" + i) * 1000) / 1000
        }`,
        editable: false,
      });
    }
  }
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
{"compTotals":{"geogebra":2,"separator":2,"select":1,"textbox":1,"table":4},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"two col"}
*/
