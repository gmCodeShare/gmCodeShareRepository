const {
  ggb1,
  text2,
  button1,
  button2,
  cc_sharewithclass_35b6b8546b05_textbox1: text1,
  cc_sharewithclass_35b6b8546b05_input1: input1,
  cc_sharewithclass_35b6b8546b05_button1: button3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button3.updateData({ visible: false });
    button3.updateData({ align: "right" });
    ggb1.updateData({ init: true });
  }
}

button1.on("click", () => {
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  if (ggb1.instance.getValue("clickCount") == 4) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button3.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
});

button2.on("click", () => {
  ggb1.instance.setValue("clickCount", 0);
  button1.updateData({ disabled: false });
});
