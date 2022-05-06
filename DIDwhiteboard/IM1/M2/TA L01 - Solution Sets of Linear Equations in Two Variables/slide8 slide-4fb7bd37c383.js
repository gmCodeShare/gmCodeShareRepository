const {
  cc_submit_b0239a19a612_button1: button1,
  cc_submit_c3c732df6ec3_textbox1: text2,
  cc_submit_c3c732df6ec3_input1: input2,
  cc_submit_c3c732df6ec3_button1: button2,
  cc_sharewithclass_8936e0a7549f_textbox1: text4,
  cc_sharewithclass_8936e0a7549f_input1: input4,
  cc_sharewithclass_8936e0a7549f_button1: button4,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text4.updateData({ visible: false });
  input4.updateData({ visible: false });
  button4.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  text4.updateData({ visible: true });
  input4.updateData({ visible: true });
  button4.updateData({ visible: true });
});
