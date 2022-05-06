const {
  Image7,
  separator1,
  text1,
  Image8,
  separator2,
  text2,
  feedback,
  Textbox3,
  select1,
  cc_sharewithclass_a059b36f1560_textbox1: shareText1,
  cc_sharewithclass_a059b36f1560_input1: shareInput1,
  cc_sharewithclass_a059b36f1560_button1: shareButton1,
  cc_sharewithclass_a059b36f1560_studentanswers1,
} = components;

components.cc_sharewithclass_a059b36f1560_button1.updateData({
  align: 'right',
});

text1.updateData({ align: 'center' });
text2.updateData({ align: 'center' });

onInit();
function onInit() {
  if (!select1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    select1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ',');
      shareInput1.updateData({ text: sentStart + ' because ' });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"uploaded-image":2,"separator":2,"textbox":4,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
