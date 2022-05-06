const {
  image1,
  image2,
  text1,
  select1,
  cc_sharewithclass_d6f657c1ffb4_textbox1: text2,
  cc_sharewithclass_d6f657c1ffb4_button1: button1,
  cc_sharewithclass_d6f657c1ffb4_input1: input1,
} = components;

autorun(() => {
  if (select1.data.selected == "") {
    text2.updateData({
      visible: false,
    });
    button1.updateData({
      visible: false,
    });
    input1.updateData({
      visible: false,
    });
  } else {
    text2.updateData({
      visible: true,
    });
    button1.updateData({
      visible: true,
    });
    input1.updateData({
      visible: true,
    });
  }
});
