const {
  cc_submit_c72a711560cb_input1: submitInput1,
  cc_submit_c72a711560cb_button1: submitButton1,
  cc_sharewithclass_730221628244_textbox1: shareText1,
  cc_sharewithclass_730221628244_input1: shareInput1,
  cc_sharewithclass_730221628244_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!submitInput1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    submitInput1.updateData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
