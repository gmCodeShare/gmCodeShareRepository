const {
  ggb1,
  ggb2,
  separator1,
  buttonGroup1,
  feedback1,
  text2,
  cc_sharewithclass_6f4dfdafc86d_textbox1: text1,
  cc_sharewithclass_6f4dfdafc86d_input1: input1,
  cc_sharewithclass_6f4dfdafc86d_button1: button1,
  cc_sharewithclass_6f4dfdafc86d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let linearResiduals = [];
let linearXValues = [];
let linearResidualValues = [];

slide.on("firstload", () => {
  ggb2.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

utils.RTS.on("datachange", "slide-62797c462e04", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    ggb1.instance.setTextValue("text1", data.text1x);
    ggb2.instance.setTextValue("text2", data.text1x);
    ggb1.instance.setTextValue("text2", data.text2y);
    ggb1.instance.setValue("showText", true);
  });
});

utils.RTS.on("datachange", "slide-fa863e2a26e0", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  ggb1.instance.evalCommand("data={}");
  clearResiduals();

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { num, num2, num3, num4, num5, num6, num7, num8, num9, num10 } = data;
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num},${num2})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num3},${num4})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num5},${num6})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num7},${num8})))`);
    ggb1.instance.evalCommand(`SetValue(data,Append(data,(${num9},${num10})))`);
    ggb1.instance.setVisible("data", true);
    ggb1.instance.setVisible("shortenedLinear", true);
  });
  createResiduals();
  createResidualPlot();
  for (var i = 0, J = linearResiduals.length; i < J; i++) {
    ggb1.instance.setVisible(linearResiduals[i], false);
  }
  ggb2.instance.setVisible("linearData", true);
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

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
});

function clearResiduals() {
  for (var i = 0, J = linearResiduals.length; i < J; i++) {
    ggb1.instance.deleteObject(linearResiduals[i]);
    ggb1.instance.deleteObject(linearXValues[i]);
    ggb1.instance.deleteObject(linearResidualValues[i]);
  }
  linearResiduals = [];
  linearXValues = [];
  linearResidualValues = [];
}

function createResiduals() {
  let listLength = ggb1.instance.getValue("listLength");
  for (let i = 0, L = listLength; i < L; i++) {
    linRes = ggb1.instance.evalCommandGetLabels(
      `Segment(Element(data, ${
        i + 1
      }), Intersect(linearBestFit, x = x(Element(data, ${i + 1}))))`
    );
    linXVal = ggb1.instance.evalCommandGetLabels(`x(Element(data, ${i + 1}))`);
    linResVal = ggb1.instance.evalCommandGetLabels(
      `y(Vector(Intersect(linearBestFit, x = x(Element(data, ${
        i + 1
      }))),Element(data, ${i + 1})))`
    );
    linearResiduals.push(linRes);
    linearXValues.push(linXVal);
    linearResidualValues.push(linResVal);
  }
}

function createResidualPlot() {
  let listLength = ggb1.instance.getValue("listLength");
  for (var i = 0, L = listLength; i < L; i++) {
    ggb2.instance.evalCommand(
      `SetValue(linearData, Append(linearData, (${ggb1.instance.getValue(
        linearXValues[i]
      )},${ggb1.instance.getValue(linearResidualValues[i])})))`
    );
  }
}

/*
{"compTotals":{"geogebra":2,"separator":1,"buttongroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Analyzing Paint Splatters","teacherView":false,"layout":"two col"}
*/
