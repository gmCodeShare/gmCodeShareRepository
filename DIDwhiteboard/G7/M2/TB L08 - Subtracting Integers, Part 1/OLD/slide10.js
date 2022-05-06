const {
  ggb1,
  text1,
  cc_submit_f7bb5587866d_button1: submitButton1,
  cc_submit_a414fcdbe3ff_textbox1: shareText1,
  cc_submit_a414fcdbe3ff_input1: shareInput1,
  cc_submit_a414fcdbe3ff_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    text1.updateData({ text: "" });
    ggb1.updateData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

shareButton1.on("click", () => {
  let answer = shareInput1.data.text;
  // console.log(answer);
  if (answer == "-3+-7=-10" || answer == "-3+\\left(-7\\right)=-10") {
    text1.updateData({ text: "" });
  } else if (!answer.includes("=")) {
    text1.updateData({ text: "Please write the complete number sentence." });
  } else {
    text1.updateData({
      text: "That’s not quite right. Use the number sentence that has been started for you and determine what the unknown addend must be. Then write the complete number sentence.",
    });
  }
});
