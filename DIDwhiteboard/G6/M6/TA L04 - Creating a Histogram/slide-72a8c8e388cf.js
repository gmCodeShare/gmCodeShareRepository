const {
  select1,
  feedback1,
  Textbox6,
  cc_sharewithclass_86c95cb6e756_textbox1,
  cc_sharewithclass_86c95cb6e756_input1,
  cc_sharewithclass_86c95cb6e756_button1,
  cc_sharewithclass_86c95cb6e756_studentanswers1,
} = components;

components.cc_sharewithclass_86c95cb6e756_button1.updateData({
  align: 'right',
});

cc_sharewithclass_86c95cb6e756_textbox1.updateData({ visible: false });
cc_sharewithclass_86c95cb6e756_input1.updateData({ visible: false });
cc_sharewithclass_86c95cb6e756_button1.updateData({ visible: false });

autorun(() => {
  if (select1.data.selected) {
    cc_sharewithclass_86c95cb6e756_textbox1.updateData({ visible: true });
    cc_sharewithclass_86c95cb6e756_input1.updateData({ visible: true });
    cc_sharewithclass_86c95cb6e756_button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      cc_sharewithclass_86c95cb6e756_input1.updateData({
        text: 'The data display is not a histogram because ',
      });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"radiogroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
