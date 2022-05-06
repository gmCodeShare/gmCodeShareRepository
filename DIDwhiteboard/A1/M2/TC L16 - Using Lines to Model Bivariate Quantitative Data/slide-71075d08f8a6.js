const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_60a014ef20fc_textbox1: text2,
  cc_sharewithclass_60a014ef20fc_input1: input1,
  cc_sharewithclass_60a014ef20fc_button1: button1,
  cc_sharewithclass_60a014ef20fc_studentanswers1,
} = components;

let fakeList = ["FakeAHalo", "FakeBHalo", "FakeA", "FakeB", "fakeSegment"];

ggb1.instance.setValue("state", 1);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

ggb1.instance.registerObjectUpdateListener("show", update);

function update() {
  if (ggb1.instance.getValue("show")) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
}

ggb1.instance.registerObjectUpdateListener("fake", fakeStuff);

function fakeStuff() {
  if (ggb1.instance.getValue("fake")) {
    for (let i = 0, L = fakeList.length; i < L; i++) {
      ggb1.instance.setVisible(fakeList[i], true);
    }
  } else {
    for (let i = 0, L = fakeList.length; i < L; i++) {
      ggb1.instance.setVisible(fakeList[i], false);
    }
  }
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    if (ggb1.instance.getValue("fake")) {
      utils.RTS.sendData("slide-71075d08f8a6", {
        pointA: ggb1.innerData["FakeA"],
        pointB: ggb1.innerData["FakeB"],
      });
    }
    if (!ggb1.instance.getValue("fake")) {
      utils.RTS.sendData("slide-71075d08f8a6", {
        pointA: ggb1.innerData["A"],
        pointB: ggb1.innerData["B"],
      });
    }
  }
});

utils.RTS.on("datachange", "slide-1c80a58b9dc4", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("fake", !!prefs.data?.showProvided);
});

utils.RTS.on("datachange", "slide-28a7788bcedd", (register) => {
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

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":false,"layout":"two col"}
*/
