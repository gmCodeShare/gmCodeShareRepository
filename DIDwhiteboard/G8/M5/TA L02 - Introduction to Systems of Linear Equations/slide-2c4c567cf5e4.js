const {
  text1,
  text2,
  select1,
  separator4,
  cc_sharewithclass_2b4f597faec4_textbox1: shareText1,
  cc_sharewithclass_2b4f597faec4_input1: shareInput1,
  cc_sharewithclass_2b4f597faec4_button1: shareButton1,
  cc_sharewithclass_2b4f597faec4_studentanswers1,
  feedback1,
} = components;

let choiceVal;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
  if (select1.data.selected == 0) {
    choiceVal = 1;
  }
  if (select1.data.selected == 1) {
    choiceVal = 2;
  }
});

autorun(() => {
  var optionArray = [
    'It is a solution because ',
    'It is not a solution because ',
  ];
  if (select1.data.selected) {
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ',');
      shareInput1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-2c4c567cf5e4', {
      choiceVal,
    });
  }
});

/*
{"compTotals":{"textbox":3,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"one col"}
*/
