const {
  cc_submit_4ed67fa7c0e3_button1: submitButton1,
  cc_sharewithclass_a0a73f3f4025_textbox1: shareText2,
  cc_sharewithclass_a0a73f3f4025_input1: shareInput2,
  cc_sharewithclass_a0a73f3f4025_button1: shareButton2,
} = components;

slide.on("firstload", () => {
  shareText2.updateData({ visible: false });
  shareInput2.updateData({ visible: false });
  shareButton2.updateData({ visible: false });
});

submitButton1.on("click", () => {
  shareText2.updateData({ visible: true });
  shareInput2.updateData({ visible: true });
  shareButton2.updateData({ visible: true });
});
