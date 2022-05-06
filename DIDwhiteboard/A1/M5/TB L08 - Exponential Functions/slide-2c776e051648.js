const {
  cc_submit_e6a119967b77_textbox1: submitText1,
  cc_submit_e6a119967b77_input1: submitInput1,
  cc_submit_e6a119967b77_button1: submitButton1,
  warningText,
  separator2,
  cc_sharewithclass_3c3c64371bb3_textbox1: submitText2,
  cc_sharewithclass_3c3c64371bb3_input1: submitInput2,
  cc_sharewithclass_3c3c64371bb3_button1: submitButton2,
  cc_sharewithclass_3c3c64371bb3_studentanswers1,
  feedback,
} = components;

const min = 1,
  max = 10000;

slide.on("firstload", () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
  boundIt(submitInput1, min, max);
});

/*autorun(() => {
  const result = utils.math.evaluateLatex(submitInput1.data.text);
  //let min = 1;
  //let max = 10000;
  if (result.error) {
  // nothing to do here
  } else if (result.value < min) {
    //submitInput1.updateData({ text: `${min}` });
    warningText.updateData({ text: "That's too small!" });
    return min;
  } else if (result.value > max) {
    //submitInput1.updateData({ text: `${max}` });
    warningText.updateData({ text: "That's too large!" });
    return max;
  }
  warningText.updateData({ text: "" });
});*/

let now = controls.current;
autorun(() => {
  if (controls.current > now) {
    boundIt(submitInput1, min, max);
  }
});

function boundIt(inputComp, min, max) {
  let noCommas = inputComp.data.text.replaceAll(",", "");
  const result = utils.math.evaluateLatex(noCommas);
  if (result.error) {
    inputComp.updateData({ text: `${min}` });
    return min;
  } else if (result.value < min) {
    inputComp.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    inputComp.updateData({ text: `${max}` });
    return max;
  }
  let flooredNum = Math.floor(result.value);
  inputComp.updateData({ text: `${flooredNum}` });
  return flooredNum;
}

/*
{"compTotals":{"submit":1,"textbox":2,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"one col"}
*/
