const {
  ggb1,
  feedback1,
  text1,
  button1,
  separator3,
  text2,
  checkbox1,
  text3,
  input1,
  button2,
} = components;

ggb1.instance.setValue("state", 1);
ggb1.instance.setErrorDialogsActive(false);
button2.updateData({ align: "right" });
//ggb1.instance.setValue('fake', true);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  checkbox1.updateData({ visible: false });
  text3.updateData({ visible: false });
  input1.updateData({ visible: false });
  button2.updateData({ visible: false });
});

autorun(() => {
  if (checkbox1.data.checked) {
    text3.updateData({
      text: "Place the points on your line of fit and use them to write an equation.\n\nEquation:",
    });
    ggb1.instance.setValue("showRedPoints", true);
  } else {
    text3.updateData({ text: "Equation:" });
    ggb1.instance.setValue("showRedPoints", false);
  }
});

button1.on("click", () => {
  ggb1.instance.setVisible("A", false);
  ggb1.instance.setVisible("B", false);
  ggb1.instance.setVisible("eq1", false);
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("FakeA", false);
  ggb1.instance.setVisible("FakeB", false);
  ggb1.instance.setVisible("FakeAHalo", false);
  ggb1.instance.setVisible("FakeBHalo", false);
  text2.updateData({ visible: true });
  checkbox1.updateData({ visible: true });
  text3.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button2.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button2.on("click", () => {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible("dummyObjectForThisCode", false);
  if (ggb1.instance.getObjectType("dummyObjectForThisCode") == "line") {
    ggb1.instance.evalLaTeX(`g: ${input1.data.text}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.evalCommand("fakeStudentLine=g");
    if (ggb1.instance.getValue("fake")) {
      ggb1.instance.setVisible("fakeShortenedLine", true);
      ggb1.instance.setVisible("shortenedStudentLine", false);
    } else {
      ggb1.instance.setVisible("fakeShortenedLine", false);
      ggb1.instance.setVisible("shortenedStudentLine", true);
    }
    button2.updateData({ text: "Submitted", disabled: true });
  }
  ggb1.instance.deleteObject("dummyObjectForThisCode");
});

ggb1.instance.registerObjectUpdateListener("fake", fakeStuff);

function fakeStuff() {
  if (ggb1.instance.getValue("fake")) {
    ggb1.instance.setVisible("FakeAHalo", true);
    ggb1.instance.setVisible("FakeBHalo", true);
    ggb1.instance.setVisible("FakeA", true);
    ggb1.instance.setVisible("FakeB", true);
    ggb1.instance.setVisible("fakeSegment", true);
  } else {
    ggb1.instance.setVisible("FakeAHalo", false);
    ggb1.instance.setVisible("FakeBHalo", false);
    ggb1.instance.setVisible("FakeA", false);
    ggb1.instance.setVisible("FakeB", false);
    ggb1.instance.setVisible("fakeSegment", false);
  }
}

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
{"compTotals":{"geogebra":1,"textbox":4,"button":2,"separator":1,"checkbox":1,"input":1},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":false,"layout":"two col"}
*/
