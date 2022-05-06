const { ggb1, button1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on("click", () => {
  ggb1.instance.setValue("showValue", true);
  button1.updateData({ disabled: true });
});

ggb1.instance.registerObjectUpdateListener("A", update);

function update() {
  button1.updateData({ disabled: false });
}
