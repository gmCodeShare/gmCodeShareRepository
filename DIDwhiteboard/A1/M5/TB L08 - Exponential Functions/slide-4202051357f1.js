const {
  cc_submit_b51173edde46_textbox1: submitText1,
  cc_submit_b51173edde46_input1: submitInput1,
  cc_submit_b51173edde46_button1: submitButton1,
  separator6,
  cc_submit_e23eafe346b2_textbox1: submitText2,
  cc_submit_e23eafe346b2_input1: submitInput2,
  cc_submit_e23eafe346b2_button1: submitButton2,
  feedback,
} = components;

const min = 1,
  max = 1000000000;

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
{"compTotals":{"submit":2,"separator":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"one col"}
*/
