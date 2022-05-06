const { ggb1, text1, text2, select1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  select1.selectOption("0");
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

select1.on("change", ({ selected }) => {
  ggb1.instance.setValue("show3by3", selected.includes("0"));
  ggb1.instance.setValue("show4by4", selected.includes("1"));
  ggb1.instance.setValue("show5by5", selected.includes("2"));
});
