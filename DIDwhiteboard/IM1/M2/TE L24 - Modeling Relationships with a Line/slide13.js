const { ggb1, select1, button2, text2, input1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
button1.updateData({ align: "right" });

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  button2.updateData({ visible: false });
});

autorun(() => {
  if (select1.data.selected.length) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    // button2.updateData({ visible: true });
  }
  if (!select1.data.selected.length) {
    ggb1.instance.setVisible("lineOfBestFit", false);
    ggb1.instance.setValue("residuals", false);
    ggb1.instance.setVisible("equationText", false);
    ggb1.instance.setValue("showSquares", false);
  }
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setVisible("lineOfBestFit", true);
  } else {
    ggb1.instance.setVisible("lineOfBestFit", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("residuals", true);
    ggb1.instance.setVisible("lineOfBestFit", true);
  } else {
    ggb1.instance.setValue("residuals", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setVisible("equationText", true);
  } else {
    ggb1.instance.setVisible("equationText", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setValue("showSquares", true);
  } else {
    ggb1.instance.setValue("showSquares", false);
  }
});

button2.on("click", () => {
  button2.updateData({ disabled: true });
  ggb1.instance.setVisible("studentPredictionSegment", true);
  ggb1.instance.setVisible("text3", true);
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});
