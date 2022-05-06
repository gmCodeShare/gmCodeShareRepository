const {
  ggb1,
  ggb2,
  radio1,
  cc_sharewithclass_93133e3b2ce4_textbox1: text2,
  cc_sharewithclass_93133e3b2ce4_input1: input1,
  cc_sharewithclass_93133e3b2ce4_button1: button1,
} = components;

slide.on("firstload", () => {
  ggb2.instance.showToolBar(false);
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

ggb2.instance.setErrorDialogsActive(false);

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

utils.RTS.on("datachange", "slide-fd85e50c42c6", (register) => {
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

/*ggb2.instance.registerStoreUndoListener(getDoodles);
getDoodles();
function getDoodles(){
  let doodleArray = [];
  let allPenstrokes = ggb2.instance.getAllObjectNames("penstroke");
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb2.instance.getCommandString(allPenstrokes[i]));
  }
  ggb2.updateInnerData({'doodles': doodleArray});
}*/

ggb2.instance.registerStoreUndoListener(() => {
  ggb2.updateData({ save64: ggb2.instance.getBase64() });
});
