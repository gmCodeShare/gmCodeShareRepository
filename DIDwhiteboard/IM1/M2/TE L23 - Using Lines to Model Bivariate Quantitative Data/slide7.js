const {
  ggb1,
  cc_sharewithclass_60a014ef20fc_textbox1: text2,
  cc_sharewithclass_60a014ef20fc_input1: input1,
  cc_sharewithclass_60a014ef20fc_button1: button1,
} = components;

ggb1.instance.setValue("state", 1);
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

ggb1.instance.registerObjectUpdateListener("show", update);

function update() {
  if (ggb1.instance.getValue("show")) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-4c0089d01b35", {
      pointA: ggb1.innerData["A"],
      pointB: ggb1.innerData["B"],
    });
  }
});
