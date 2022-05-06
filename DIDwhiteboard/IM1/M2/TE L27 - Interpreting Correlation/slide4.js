const {
  ggb1,
  text1,
  button1,
  cc_sharewithclass_4f50d6f4b87e_textbox1: shareText1,
  cc_sharewithclass_4f50d6f4b87e_input1: shareInput1,
  cc_sharewithclass_4f50d6f4b87e_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

button1.on("click", () => {
  button1.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
