const {
  cc_submit_numbersNumbers_textbox1: submitText1,
  cc_submit_numbersNumbers_input1: submitInput1,
  cc_submit_numbersNumbers_button1: submitButton1,
  cc_sharewithclass_numbersNumbers_textbox1: shareText1,
  cc_sharewithclass_numbersNumbers_input1: shareInput1,
  cc_sharewithclass_numbersNumbers_button1: shareButton1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: "right" });
  submitButton1.updateData({ align: "right" });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
