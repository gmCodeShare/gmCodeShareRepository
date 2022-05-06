const {
  ggb1,
  cc_submit_0487fb1cbe00_textbox1: text1,
  cc_submit_0487fb1cbe00_input1: input1,
  cc_submit_0487fb1cbe00_button1: button1,
  cc_sharewithclass_6fd27ee1a6f6_textbox1: text2,
  cc_sharewithclass_6fd27ee1a6f6_input1: input2,
  cc_sharewithclass_6fd27ee1a6f6_button1: button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});
