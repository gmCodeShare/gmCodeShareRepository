const {
  ggb1,
  feedback1,
  text1,
  select1,
  separator1,
  cc_sharewithclass_3def01d6f537_textbox1,
  cc_sharewithclass_3def01d6f537_input1,
  cc_sharewithclass_3def01d6f537_button1,
  cc_sharewithclass_3def01d6f537_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_3def01d6f537_button1.updateData({
  align: 'right',
});

cc_sharewithclass_3def01d6f537_textbox1.updateData({ visible: false });
cc_sharewithclass_3def01d6f537_input1.updateData({ visible: false });
cc_sharewithclass_3def01d6f537_button1.updateData({ visible: false });

autorun(() => {
  var optionArray = [
    'The top histogram is correct because ',
    'The bottom histogram is correct because ',
    'Both histograms are correct because ',
    'Neither histogram is correct because ',
  ];
  if (select1.data.selected) {
    cc_sharewithclass_3def01d6f537_textbox1.updateData({ visible: true });
    cc_sharewithclass_3def01d6f537_input1.updateData({ visible: true });
    cc_sharewithclass_3def01d6f537_button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      cc_sharewithclass_3def01d6f537_input1.updateData({
        text: optionArray[select1.data.selected],
      });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TA L04 - Creating a Histogram","teacherView":false,"layout":"two col"}
*/
