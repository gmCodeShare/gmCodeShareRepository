const {
  button1,
  select1,
  cc_sharewithclass_26f4fd502bd3_textbox1: shareText1,
  cc_sharewithclass_26f4fd502bd3_input1: shareInput1,
  cc_sharewithclass_26f4fd502bd3_button1: shareButton1,
  cc_sharewithclass_26f4fd502bd3_studentanswers1: shareAnswers1,
} = components;

shareButton1.updateData({ align: "right" });

shareText1.updateData({ visible: false });
shareInput1.updateData({ visible: false });
shareButton1.updateData({ visible: false });
shareAnswers1.updateData({ visible: false });

button1.on("click", () => {
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

select1.on("change", (selected) => {
  button1.updateData({ disabled: false });
});
