const {
  ggb1,
  ggb2,
  radio1,
  cc_sharewithclass_93133e3b2ce4_textbox1: text2,
  cc_sharewithclass_93133e3b2ce4_input1: input1,
  cc_sharewithclass_93133e3b2ce4_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerAddListener((a) => {
  if (ggb2.instance.getObjectType(a) === "line") {
    const ints = ggb2.instance.evalCommandGetLabels(`Intersect(${a}, edge)`);
    const intsArr = ints.split(",");
    intsArr.forEach((point) => {
      ggb2.instance.setVisible(point, false);
    });
    if (intsArr.length === 2) {
      ggb2.instance.evalCommand(`Segment(${intsArr[0]}, ${intsArr[1]})`);
    }
    ggb2.instance.setVisible(a, false);
  }
});

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
      text: "Explain why your graph shows every possible solution.",
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
