const {
  ggb1,
  image1,
  feedback1,
  text1,
  select1,
  separator4,
  cc_sharewithclass_27a64de001ed_textbox1,
  cc_sharewithclass_27a64de001ed_input1,
  cc_sharewithclass_27a64de001ed_button1,
  cc_sharewithclass_27a64de001ed_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_27a64de001ed_button1.updateData({
  align: 'right',
});

autorun(() => {
  if (select1.data.selected == '') {
    components.cc_sharewithclass_27a64de001ed_textbox1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_input1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_button1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_studentanswers1.updateData({
      visible: false,
    });
  } else {
    components.cc_sharewithclass_27a64de001ed_textbox1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_input1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_button1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_studentanswers1.updateData({
      visible: true,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"uploaded-image":1,"textbox":2,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M1 TC L15 - Scale Drawings","teacherView":false,"layout":"two col"}
*/
