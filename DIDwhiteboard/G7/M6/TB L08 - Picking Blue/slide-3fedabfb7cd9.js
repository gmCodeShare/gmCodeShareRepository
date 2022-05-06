const {
  image1,
  feedback1,
  text1,
  select1,
  cc_sharewithclass_020447fffb7a_textbox1,
  cc_sharewithclass_020447fffb7a_input1,
  cc_sharewithclass_020447fffb7a_button1,
  cc_sharewithclass_020447fffb7a_studentanswers1,
} = components;

cc_sharewithclass_020447fffb7a_button1.updateData({ align: 'right' });

cc_sharewithclass_020447fffb7a_textbox1.updateData({ visible: false });
cc_sharewithclass_020447fffb7a_input1.updateData({ visible: false });
cc_sharewithclass_020447fffb7a_button1.updateData({ visible: false });

autorun(() => {
  var optionArray = [
    'I want to use bucket A because ',
    'I want to use bucket B because ',
  ];
  if (select1.data.selected) {
    cc_sharewithclass_020447fffb7a_textbox1.updateData({ visible: true });
    cc_sharewithclass_020447fffb7a_input1.updateData({ visible: true });
    cc_sharewithclass_020447fffb7a_button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      cc_sharewithclass_020447fffb7a_input1.updateData({
        text: optionArray[select1.data.selected],
      });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"uploaded-image":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"two col"}
*/
