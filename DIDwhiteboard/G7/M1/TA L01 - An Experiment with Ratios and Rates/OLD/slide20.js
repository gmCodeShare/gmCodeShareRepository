const {
  text1,
  radio1,
  cc_sharewithclass_b6b81972d02f_textbox1: shareText1,
  cc_sharewithclass_b6b81972d02f_input1: shareInput1,
  cc_sharewithclass_b6b81972d02f_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    text1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ['Olivia because ', 'Eve because '];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      shareInput1.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});
