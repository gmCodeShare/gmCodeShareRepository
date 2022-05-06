const { ggb1, text1, text2, input1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("show7by7", false);
ggb1.instance.setValue("show8by8", false);
ggb1.instance.setValue("showBlank44", false);
ggb1.instance.setValue("showTopRight", true);

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  ggb1.instance.setTextValue("textTop", `${fib1.getInput(0).text}`);
  ggb1.instance.setValue("showTextTop", true);
  ggb1.instance.setTextValue("textRight", `${fib1.getInput(1).text}`);
  ggb1.instance.setValue("showTextRight", true);
});
