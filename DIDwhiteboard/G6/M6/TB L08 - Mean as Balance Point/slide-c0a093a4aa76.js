const {
  ggb1,
  feedback1,
  text1,
  select1,
  cc_sharewithclass_3dc1c8e884a2_textbox1,
  cc_sharewithclass_3dc1c8e884a2_input1,
  cc_sharewithclass_3dc1c8e884a2_button1,
  cc_sharewithclass_3dc1c8e884a2_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

cc_sharewithclass_3dc1c8e884a2_button1.updateData({ align: 'right' });

cc_sharewithclass_3dc1c8e884a2_textbox1.updateData({ visible: false });
cc_sharewithclass_3dc1c8e884a2_input1.updateData({ visible: false });
cc_sharewithclass_3dc1c8e884a2_button1.updateData({ visible: false });

autorun(() => {
  var optionArray = [
    'Beam 1 is balanced because ',
    'Beam 2 is balanced because ',
    'Both beams are balanced because ',
    'Neither beam is balanced because ',
  ];
  if (select1.data.selected) {
    cc_sharewithclass_3dc1c8e884a2_textbox1.updateData({ visible: true });
    cc_sharewithclass_3dc1c8e884a2_input1.updateData({ visible: true });
    cc_sharewithclass_3dc1c8e884a2_button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      cc_sharewithclass_3dc1c8e884a2_input1.updateData({
        text: optionArray[select1.data.selected],
      });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TB L08 - The Mean as a Balance Point","teacherView":false,"layout":"two col"}
*/
