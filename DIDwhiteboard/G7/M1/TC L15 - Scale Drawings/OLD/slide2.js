const { ggb1, text1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_27a64de001ed_button1.updateData({
  align: "right",
});

autorun(() => {
  if (select1.data.selected == "") {
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
