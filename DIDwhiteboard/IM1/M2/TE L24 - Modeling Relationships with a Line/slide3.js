const { ggb1, text2, cc_submit_c08e2661d81f_button1: button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  ggb1.instance.setValue("showText", true);
});
