const {
  text3,
  check1,
  check2,
  cc_sharewithclass_5f588d790100_textbox1: text5,
  cc_sharewithclass_5f588d790100_input1: input1,
  cc_sharewithclass_5f588d790100_button1: button1,
} = components;

slide.on("firstload", () => {
  button1.updateData({ align: "right" });
  button1.updateData({ visible: false });
  input1.updateData({ visible: false });
  text5.updateData({ visible: false });
});

autorun(() => {
  if (check1.data.checked) {
    text5.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check2.updateData({ checked: false });
    input1.updateData({ text: "Yes, because", visible: true });
  }
});
autorun(() => {
  if (check2.data.checked) {
    text5.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    input1.updateData({ text: "No, because", visible: true });
  }
});
