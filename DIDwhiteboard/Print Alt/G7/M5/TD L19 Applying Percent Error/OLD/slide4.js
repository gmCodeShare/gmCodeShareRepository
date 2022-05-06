const { ggb1, text1, text2, text3, text4, input1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

/*onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: "right" });
    text3.updateData({ align: "right" });
    text4.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on("click", () => {
  const num = utils.math.evaluateLatex(input1.data.text);
  if (num.value < 0 || num.error) {
    return;
  } else {
    ggb1.instance.setValue("studentEstimate", num.value);
    // console.log(ggb1.instance.getValue("studentEstimate"));
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
    button1.updateData({ text: "Submitted", disabled: true });
    text4.updateData({ visible: true });
    text3.updateData({ visible: false });
    input1.updateData({ visible: false });
    text4.updateData({ text: `$${num.value}$ miles` });
    // Send response to Real Time Server
    utils.RTS.sendData("slide-a61b2c9bc11b.input1", { estimate: num.value });
  }
});*/
