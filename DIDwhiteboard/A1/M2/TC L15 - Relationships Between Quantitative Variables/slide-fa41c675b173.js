const {
  ggb1,
  feedback1,
  cc_submit_171e58faa011_textbox1: text1,
  cc_submit_171e58faa011_input1,
  cc_submit_171e58faa011_button1: button1,
  separator2,
  cc_sharewithclass_0b39da8dd26a_textbox1: text2,
  cc_sharewithclass_0b39da8dd26a_input1: input2,
  cc_sharewithclass_0b39da8dd26a_button1: button2,
  cc_sharewithclass_0b39da8dd26a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

ggb1.instance.registerObjectUpdateListener("fake", fakeStuff);

function fakeStuff() {
  if (ggb1.instance.getValue("fake")) {
    ggb1.instance.setVisible("RedPoint", true);
    ggb1.instance.setVisible("A", false);
    text1.updateData({
      text: `The red point on the graph has coordinates $(587, 205)$. What does this point represent?`,
    });
  } else {
    ggb1.instance.setVisible("RedPoint", false);
    ggb1.instance.setVisible("A", true);
    ggb1.instance.setLayer("A", 3);
    ggb1.instance.setLayer("data", 1);
    let num = ggb1.instance.getXcoord("A");
    let num2 = ggb1.instance.getYcoord("A");
    text1.updateData({
      text: `The red point on the graph has coordinates $(${num}, ${num2})$. What does this point represent?`,
    });
  }
}

utils.RTS.on("datachange", "slide-380d9e72741f", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("fake", !!prefs.data?.showProvided);
  if (ggb1.instance.getValue("fake")) {
    ggb1.instance.setVisible("RedPoint", true);
    ggb1.instance.setVisible("A", false);
    text1.updateData({
      text: `The red point on the graph has coordinates $(587, 205)$. What does this point represent?`,
    });
  } else {
    ggb1.instance.setVisible("RedPoint", false);
    ggb1.instance.setVisible("A", true);
    ggb1.instance.setLayer("A", 3);
    ggb1.instance.setLayer("data", 1);
    let num = ggb1.instance.getXcoord("A");
    let num2 = ggb1.instance.getYcoord("A");
    text1.updateData({
      text: `The red point on the graph has coordinates $(${num}, ${num2})$. What does this point represent?`,
    });
  }
});

utils.RTS.on("datachange", "slide-0f4cf0884e2b", (register) => {
  if (!register || !register.length) {
    return;
  }
  let point;
  ggb1.instance.deleteObject(point);
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

    ggb1.instance.evalCommand(`A=(${num},${num2})`);
    ggb1.instance.setColor("A", 218, 41, 28);
    ggb1.instance.setCaption("A", "$%v$");
    ggb1.instance.setLabelVisible("A", true);
    ggb1.instance.setFixed("A", false, false);
    ggb1.instance.setLabelStyle("A", 3);
    ggb1.instance.setLayer("A", 3);
    ggb1.instance.setLayer("data", 1);

    let number = ggb1.instance.getXcoord("A");
    let number2 = ggb1.instance.getYcoord("A");
    text1.updateData({
      text: `The red point on the graph has coordinates $(${number}, ${number2})$. What does this point represent?`,
    });

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
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Relationships Between Quantitative Variables","teacherView":false,"layout":"two col"}
*/
