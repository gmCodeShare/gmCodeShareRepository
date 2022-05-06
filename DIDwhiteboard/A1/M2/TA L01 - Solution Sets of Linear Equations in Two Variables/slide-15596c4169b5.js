const {
  ggb2,
  feedback1,
  ggb1,
  text1,
  radio1,
  separator2,
  cc_sharewithclass_93133e3b2ce4_textbox1: text2,
  cc_sharewithclass_93133e3b2ce4_input1: input1,
  cc_sharewithclass_93133e3b2ce4_button1: button1,
  cc_sharewithclass_93133e3b2ce4_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

const defGGB = {
  innerData: false,
};

let data = getFromSlide("slide-102b2e9edb49", "ggb1", defGGB) || defGGB;
let num;

if (data.innerData) {
  num = data.innerData["distance"];
  ggb1.instance.evalCommand(`DragPoint=(${num},0)`);
}

slide.on("firstload", () => {
  ggb2.instance.showToolBar(false);
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
  if (radio1.data.selected === "0") {
    text2.updateData({
      text: "Explain how this graph shows every possible solution.",
    });
    ggb2.instance.showToolBar(false);
  }
  if (radio1.data.selected === "1") {
    text2.updateData({
      text: "Use the sketch tool to graph every possible solution.\n\nExplain your graph.",
    });
    ggb2.instance.showToolBar(true);
    ggb2.instance.setMode(62);
  }
});

utils.RTS.on("datachange", "slide-102b2e9edb49", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb2.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    ggb2.instance.evalCommand(
      "SetValue(pointList,Append(pointList,(" +
        distance +
        "," +
        remaining +
        ")))"
    );
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

ggb2.instance.registerStoreUndoListener(() => {
  ggb2.updateData({ save64: ggb2.instance.getBase64() });
});

/*
{"compTotals":{"geogebra":2,"textbox":2,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
