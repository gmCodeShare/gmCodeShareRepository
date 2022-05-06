const {
  ggb1,
  text1,
  text2,
  fib1,
  button1,
  cc_sharewithclass_16ecb474a61c_textbox1: shareText1,
  cc_sharewithclass_16ecb474a61c_input1: shareInput1,
  cc_sharewithclass_16ecb474a61c_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("show3by3", false);
ggb1.instance.setValue("show4by4", false);
ggb1.instance.setValue("show5by5", false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  ggb1.instance.setValue("show10by10blank", true);
  ggb1.instance.setValue("show10by10filled", false);
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

shareButton1.on("click", () => {
  ggb1.instance.setValue("show10by10blank", false);
  ggb1.instance.setValue("show10by10filled", true);
});
