const {
  ggb1,
  text1,
  radio1,
  cc_sharewithclass_a382aa78a04a_textbox1: shareText1,
  cc_sharewithclass_a382aa78a04a_input1: shareInput1,
  cc_sharewithclass_a382aa78a04a_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });

    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let explain =
    radio1.data.selected == "0" ||
    radio1.data.selected == "1" ||
    radio1.data.selected == "2";
  // explain
  shareText1.updateData({ visible: explain });
  shareInput1.updateData({ visible: explain });
  shareButton1.updateData({ visible: explain });
}); // end autorun

autorun(() => {
  var optionArray = [
    "Why do you think you will sort at a slower rate?",
    "Why do you think you will sort at a faster rate?",
    "Why do you think you will sort at the same rate?",
  ];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      shareText1.updateData({ text: optionArray[radio1.data.selected] });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});
