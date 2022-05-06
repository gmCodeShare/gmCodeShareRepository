const {
  ggb1,
  ggb2,
  separator2,
  buttonGroup1,
  text1,
  select1,
  separator7,
  cc_sharewithclass_54441dfadd42_textbox1: text2,
  cc_sharewithclass_54441dfadd42_input1: input1,
  cc_sharewithclass_54441dfadd42_button1: button1,
  cc_sharewithclass_54441dfadd42_studentanswers1,
  feedback1,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setValue("showRedPoints", false);
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.setValue("state", 2);
//ggb1.instance.setValue('fake', true);

let equa = getFromSlide(`slide-6c39a93a5e84`, `input1.data.text`, "") || "";

if (equa && ggb1.instance.getValue("fake")) {
  ggb1.instance.evalLaTeX(`fakeStudentLine: ${equa}`);
  ggb1.instance.setColor("fakeShortenedLine", 0, 127, 175);
  ggb1.instance.setVisible("fakeShortenedLine", true);
}

let equa2 =
  getFromSlide(
    `slide-97ff43948160`,
    `cc_submit_8dd0e0ddcf25_input1.data.text`,
    ""
  ) || "";
if (equa2) {
  ggb2.instance.evalLaTeX(`g: ${equa2}`);
  ggb2.instance.setVisible("g", false);
  ggb2.instance.evalCommand("studentLine=g");
  ggb2.instance.setVisible("shortenedStudentLine", true);
  ggb2.instance.setColor("shortenedStudentLine", 0, 127, 175);
  ggb2.instance.setVisible("shortenedStudentLine", true);
}

let choiceVal;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    ggb2.updateData({ visible: false });
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
    ggb1.updateData({ init: true });
  }
}

/*slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
});*/

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
});

autorun(() => {
  var optionArray = ["The flights line because ", "The MONOPOLY line because "];
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      input1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
  if (select1.data.selected == 0) {
    choiceVal = 1;
  }
  if (select1.data.selected == 1) {
    choiceVal = 2;
  }
  // console.log(choiceVal);
});

/*autorun(() => {
var optionArray = ["Positive because ",  "Negative because "];
  if(select1.data.selected) {
    text2.updateData({visible: true});
    input1.updateData({visible: true});
    button1.updateData({visible: true});
    if(select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      input1.updateData({text: optionArray[select1.data.selected]});
      select1.updateData({last: select1.data.selected});
    };
  };
});*/

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-0637f0fae6a5", {
      choiceVal,
    });
  }
});

ggb1.instance.registerObjectUpdateListener("fake", fakeStuff);

function fakeStuff() {
  if (ggb1.instance.getValue("fake")) {
    ggb1.instance.evalLaTeX(`fakeStudentLine: ${equa}`);
    ggb1.instance.setColor("fakeShortenedLine", 0, 127, 175);
    ggb1.instance.setVisible("fakeShortenedLine", true);
  } else {
    ggb1.instance.evalLaTeX(`g: ${equa}`);
    ggb1.instance.setVisible("g", false);
    ggb1.instance.evalCommand("studentLine=g");
    ggb1.instance.setVisible("shortenedStudentLine", true);
    ggb1.instance.setVisible("fakeShortenedLine", false);
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

    /*ggb1.instance.evalLaTeX(`g: ${equa}`);
    ggb1.instance.setVisible('g', false);
    ggb1.instance.evalCommand('studentLine=g');
    ggb1.instance.setVisible('shortenedStudentLine', true);
    ggb1.instance.setVisible('fakeShortenedLine', false);*/

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
{"compTotals":{"geogebra":2,"separator":2,"buttongroup":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L16 - Using Lines to Model Bivariate Quantitative Data","teacherView":false,"layout":"two col"}
*/
