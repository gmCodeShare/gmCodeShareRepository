const {
  ggb1,
  cc_submit_c700867743a5_textbox1: text1,
  cc_submit_c700867743a5_input1: input1,
  cc_submit_c700867743a5_button1: button1,
  cc_submit_3e4ac958adea_textbox1: text3,
  cc_submit_3e4ac958adea_input1: input3,
  cc_submit_3e4ac958adea_button1: button3,
  cc_sharewithclass_553b8153e595_textbox1: text2,
  cc_sharewithclass_553b8153e595_input1: input2,
  cc_sharewithclass_553b8153e595_button1: button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
  ggb1.instance.setVisible("button2", false);
  ggb1.instance.setVisible("button3", false);
});

button1.on("click", () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
});

button3.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});
