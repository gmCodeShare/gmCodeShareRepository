const {
  text1,
  ggb1,
  feedback,
  cc_submit_57489fd729b5_textbox1: submitText1,
  cc_submit_57489fd729b5_input1: submitInput1,
  cc_submit_57489fd729b5_button1: submitButton1,
  separator1,
  table1,
  buttonGroup1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.updateData({ visible: false });
  table1.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("end", 10);
});

submitButton1.on("click", () => {
  let classSize = boundIt(submitInput1.data.text, 1, 100);
  ggb1.instance.setValue("end", classSize);
  ggb1.updateData({ visible: true });
  table1.updateData({ visible: true });
  buttonGroup1.updateData({ visible: true });
  displayVals();
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(dec)");
  displayVals();
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(inc)");
  displayVals();
});

autorun(() => {
  // disable buttons appropriately
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] < 1 }, 1);
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] > 4 }, 2);
});

function boundIt(inp, min, max) {
  let noCommas = inp.replaceAll(",", "");
  const result = utils.math.evaluateLatex(noCommas);
  if (result.error) {
    submitInput1.updateData({ text: `${min}` }); // what should the text do/say if students input "cabbage"?
    return min; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    submitInput1.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    submitInput1.updateData({ text: `${max}` });
    return max;
  }
  let flooredNum = Math.floor(result.value);
  submitInput1.updateData({ text: `${flooredNum}` });
  return flooredNum;
}

function displayVals() {
  table1.updateCell(0, 0, { value: `${ggb1.instance.getValue("gen")}` });
  table1.updateCell(0, 1, { value: `${ggb1.instance.getValue("numNew")}` });
  let totalSmiles =
    1 * ggb1.instance.getValue("numNew") + 1 * ggb1.instance.getValue("numOld");
  table1.updateCell(0, 2, {
    value: `${totalSmiles}`,
  });
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"submit":1,"separator":1,"table":1,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"T layout"}
*/
