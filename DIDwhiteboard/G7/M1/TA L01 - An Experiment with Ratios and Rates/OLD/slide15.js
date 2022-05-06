const {
  text1,
  text2,
  text3,
  table1,
  radio1,
  cc_sharewithclass_e9cf6bdb7413_textbox1: shareText1,
  cc_sharewithclass_e9cf6bdb7413_input1: shareInput1,
  cc_sharewithclass_e9cf6bdb7413_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    table1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = [
    'I chose Machine C because ',
    'I chose Machine D because ',
  ];
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
