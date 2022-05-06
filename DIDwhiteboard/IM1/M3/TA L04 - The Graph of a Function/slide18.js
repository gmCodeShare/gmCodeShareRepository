const {
  cc_submit_843e839cf95b_textbox1: submitText1,
  cc_submit_843e839cf95b_input1: submitInput1,
  cc_submit_843e839cf95b_button1: submitButton1,
  cc_sharewithclass_553b8153e595_textbox1: shareText1,
  cc_sharewithclass_553b8153e595_input1: shareInput1,
  cc_sharewithclass_553b8153e595_button1: shareButton1,
  ggb1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: "right" });
  submitButton1.updateData({ align: "right" });
  ggb1.instance.setErrorDialogsActive(false);
  ggb1.instance.setVisible("button2", false);
  ggb1.instance.setVisible("button3", false);
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
