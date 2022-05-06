const {
  image1,
  image2,
  feedback1,
  text1,
  select1,
  cc_sharewithclass_d6f657c1ffb4_textbox1: shareText1,
  cc_sharewithclass_d6f657c1ffb4_input1: shareInput1,
  cc_sharewithclass_d6f657c1ffb4_button1: shareButton1,
  cc_sharewithclass_d6f657c1ffb4_studentanswers1,
} = components;

autorun(() => {
  if (select1.data.selected == '') {
    shareText1.updateData({
      visible: false,
    });
    shareButton1.updateData({
      visible: false,
    });
    shareInput1.updateData({
      visible: false,
    });
  } else {
    shareText1.updateData({
      visible: true,
    });
    shareButton1.updateData({
      visible: true,
    });
    shareInput1.updateData({
      visible: true,
    });
  }
});

/*
{"compTotals":{"uploaded-image":2,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
