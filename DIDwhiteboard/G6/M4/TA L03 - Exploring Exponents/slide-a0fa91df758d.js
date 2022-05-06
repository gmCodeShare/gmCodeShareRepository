const {
  text1,
  radio1,
  cc_sharewithclass_fe4d7ad971a9_textbox1: shareText1,
  cc_sharewithclass_fe4d7ad971a9_input1: shareInput1,
  cc_sharewithclass_fe4d7ad971a9_button1: shareButton1,
  cc_sharewithclass_fe4d7ad971a9_studentanswers1,
  feedback1,
} = components;

let choiceVal;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
});

autorun(() => {
  var optionArray = ['Option 1 because ', 'Option 2 because '];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ',');
      shareInput1.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
  if (radio1.data.selected == 0) {
    choiceVal = 1;
  }
  if (radio1.data.selected == 1) {
    choiceVal = 2;
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-a0fa91df758d', {
      choiceVal,
    });
  }
});

/*
{"compTotals":{"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"one col"}
*/
