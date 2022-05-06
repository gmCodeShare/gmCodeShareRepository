// keep a button's disabled property updated even with prefilled text in the input box

const { button1, text1, input1 } = components;

const textStem = "Write something here";

slide.on("firstload", () => {
  input1.updateData({ text: textStem });
  button1.updateData({ align: "right" });
});

autorun(() => {
  button1.updateData({
    disabled: input1.data.text == "" || input1.data.text == textStem,
  });
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
});
