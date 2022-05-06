const { fib1, button1 } = components;

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
});
