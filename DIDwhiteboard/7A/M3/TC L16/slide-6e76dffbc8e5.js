const {
  cc_sharewithclass_f816c95f7912_textbox1: text1,
  cc_sharewithclass_f816c95f7912_input1: input1,
  cc_sharewithclass_f816c95f7912_button1: button1,
  select1,
} = components;

slide.on("firstload", () => {
  button1.updateData({ visible: false });
  input1.updateData({ visible: false });
  text1.updateData({ visible: false });
});
select1.on("change", (selected) => {
  button1.updateData({ visible: true });
  input1.updateData({ visible: true });
  text1.updateData({ visible: true });
});
