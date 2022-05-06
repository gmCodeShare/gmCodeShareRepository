const { fib1, button1, fib2, button2, ggb1 } = components;

slide.on("firstload", () => {
  fib2.setVisible(false);
  button2.updateData({ visible: false, align: "right", disabled: true });
  button1.updateData({ align: "right", disabled: true });
  // reviewers decided not to do the "domain and range" box:
  const toBeDeleted = ["A", "B", "C", "D"];
  toBeDeleted.forEach((point) => {
    ggb1.instance.deleteObject(point);
  });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  fib2.setVisible(true);
  button2.updateData({ visible: true });
  button1.updateData({ text: "Submitted", disabled: true });
});

fib2.on("change", ({ values }) => {
  button2.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
});
