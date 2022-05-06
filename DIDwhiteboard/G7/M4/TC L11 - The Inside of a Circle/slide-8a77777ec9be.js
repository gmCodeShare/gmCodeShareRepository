const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_a60a548a2a9f_textbox1,
  cc_sharewithclass_a60a548a2a9f_input1,
  cc_sharewithclass_a60a548a2a9f_button1,
  cc_sharewithclass_a60a548a2a9f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  components.cc_sharewithclass_a60a548a2a9f_button1.updateData({
    visible: false,
  });
  components.cc_sharewithclass_a60a548a2a9f_textbox1.updateData({
    visible: false,
  });
  components.cc_sharewithclass_a60a548a2a9f_input1.updateData({
    visible: false,
  });
  components.cc_sharewithclass_a60a548a2a9f_button1.updateData({
    align: 'right',
  });
  ggb1.updateData({ init: true });
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  components.cc_sharewithclass_a60a548a2a9f_button1.updateData({
    visible: true,
  });
  components.cc_sharewithclass_a60a548a2a9f_textbox1.updateData({
    visible: true,
  });
  components.cc_sharewithclass_a60a548a2a9f_input1.updateData({
    visible: true,
  });
  ggb1.instance.setVisible('B1', false);
  ggb1.instance.setVisible('eq1', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible('B1', true);
  ggb1.instance.setVisible('eq1', true);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M4 TC L11 - The Inside of a Circle","teacherView":false,"layout":"two col"}
*/
