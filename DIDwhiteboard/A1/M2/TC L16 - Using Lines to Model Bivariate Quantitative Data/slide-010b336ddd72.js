const {
  ggb1,
  feedback1,
  cc_submit_1847a2396fc7_textbox1: text1,
  cc_submit_1847a2396fc7_input1: input1,
  cc_submit_1847a2396fc7_button1: button1,
  separator3,
  cc_sharewithclass_0b60dd421c2f_textbox1: text2,
  cc_sharewithclass_0b60dd421c2f_input1: input2,
  cc_sharewithclass_0b60dd421c2f_button1: button2,
  cc_sharewithclass_0b60dd421c2f_studentanswers1,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setValue("slide8", true);
ggb1.instance.setErrorDialogsActive(false);
//ggb1.instance.setValue('fake', true);

let equa = getFromSlide(`slide-6c39a93a5e84`, `input1.data.text`, "") || "";

if (equa && ggb1.instance.getValue("fake")) {
  ggb1.instance.evalLaTeX(`fakeStudentLine: ${equa}`);
  ggb1.instance.setColor("fakeShortenedLine", 0, 127, 175);
  ggb1.instance.setVisible("fakeShortenedLine", true);
  ggb1.instance.setVisible("fakeEquationText", true);
}

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
    ggb1.instance.setVisible("slide10VerticalLine", true);
    ggb1.instance.setVisible("textSlide10", true);
    ggb1.instance.evalLaTeX(`slide10Val= ${input1.data.text}`);
    ggb1.instance.setVisible("Slide10Point", true);
  }
});

ggb1.instance.registerObjectUpdateListener("fake", fakeStuff);

function fakeStuff() {
  if (ggb1.instance.getValue("fake")) {
    ggb1.instance.evalLaTeX(`fakeStudentLine: ${equa}`);
    ggb1.instance.setColor("fakeShortenedLine", 0, 127, 175);
    ggb1.instance.setVisible("fakeShortenedLine", true);
    ggb1.instance.setVisible("fakeEquationText", true);
  } else {
    ggb1.instance.evalLaTeX(`g: ${equa}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.setVisible("shortenedStudentLine", true);
    ggb1.instance.setVisible("equationText", true);
    ggb1.instance.setVisible("fakeShortenedLine", false);
    ggb1.instance.setVisible("fakeEquationText", false);
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
    /* ggb1.instance.evalLaTeX(`g: ${equa}`);
    ggb1.instance.setVisible('g', false);
    ggb1.instance.evalCommand('studentLine=g');
    ggb1.instance.setVisible('shortenedStudentLine', true);
    ggb1.instance.setVisible('equationText', true);
    ggb1.instance.setVisible('fakeShortenedLine', false);
    ggb1.instance.setVisible('fakeEquationText', false);*/

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
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":false,"layout":"two col"}
*/
