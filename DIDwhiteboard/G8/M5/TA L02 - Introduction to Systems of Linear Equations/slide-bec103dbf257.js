const {
  text1,
  feedback1,
  text2,
  select1,
  separator3,
  cc_sharewithclass_2b4f597faec4_textbox1: shareText1,
  cc_sharewithclass_2b4f597faec4_input1: shareInput1,
  cc_sharewithclass_2b4f597faec4_button1: shareButton1,
  cc_sharewithclass_2b4f597faec4_studentanswers1,
} = components;

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
});

autorun(() => {
  var optionArray = [
    'It is only the line represented by x + y = -2 because ',
    'It is only the line represented by 3x - y = -15 because ',
    'It is on both lines because ',
    'It is on neither line because ',
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

/*
{"compTotals":{"textbox":3,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
