const {
  text1,
  radio1,
  cc_sharewithclass_6008ee81ff4d_textbox1: shareText1,
  cc_sharewithclass_6008ee81ff4d_input1: shareInput1,
  cc_sharewithclass_6008ee81ff4d_button1: shareButton1,
  cc_sharewithclass_6008ee81ff4d_studentanswers1,
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
  var optionArray = [
    'Graph because ',
    'Table because ',
    'Double Number Line because ',
  ];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ',');
      shareInput1.updateData({ text: optionArray[radio1.data.selected] });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
{"compTotals":{"textbox":1,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"one col"}
*/
