const {
  ggb1,
  cc_submit_f56f03b679cc_textbox1: text1,
  cc_submit_f56f03b679cc_input1: input1,
  cc_submit_f56f03b679cc_button1: button1,
  cc_submit_e85e327b3d2c_textbox1: text2,
  cc_submit_e85e327b3d2c_input1: input2,
  cc_submit_e85e327b3d2c_button1: button2,
  cc_sharewithclass_ea2cf95b3465_textbox1: text3,
  cc_sharewithclass_ea2cf95b3465_input1: input3,
  cc_sharewithclass_ea2cf95b3465_button1: button3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
});
button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
});
