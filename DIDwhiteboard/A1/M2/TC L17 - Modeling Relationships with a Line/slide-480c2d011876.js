const { ggb1, feedback1, text1, input1, text2, button1 } = components;

text2.updateData({ align: "right" });
button1.updateData({ align: "right" });
ggb1.instance.setValue("showSquares", true);
ggb1.instance.setValue("showBestLine", true);
ggb1.instance.setColor("fakeBestFit", 0, 127, 175);
ggb1.instance.setColor("shortenedLine", 0, 127, 175);
ggb1.instance.setValue("showRes", false);
ggb1.instance.setValue("showPoints", false);
ggb1.instance.setValue("showSegments", false);
ggb1.instance.setErrorDialogsActive(false);

let num = Math.round(ggb1.instance.getValue("slope") * 100) / 100;
let num2 = Math.round(ggb1.instance.getValue("yInt") * 100) / 100;

text1.updateData({
  text: `You can use technology to find the equation of the line of best fit.\n\nThe equation of the line of best fit for the class data is\n\n$y = ${num}x + ${num2}$\n\nUse the equation to predict the ticket price of a flight that is $1600$ miles.`,
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    button1.updateData({ text: "Submitted", disabled: true });
    ggb1.instance.evalLaTeX(`slide10Val= ${input1.data.text}`);
    ggb1.instance.setVisible("Slide10Point", true);
  }
});

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
    text1.updateData({
      text: `You can use technology to find the equation of the line of best fit.\n\nThe equation of the line of best fit for the class data is\n\n$y = ${num}x + ${num2}$\n\nUse the equation to predict the ticket price of a flight that is $1600$ miles.`,
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
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Modeling Relationships with a Line","teacherView":false,"layout":"two col"}
*/
