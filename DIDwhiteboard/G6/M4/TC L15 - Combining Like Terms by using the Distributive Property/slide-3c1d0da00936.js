const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_57af89bef08e_textbox1: shareText1,
  cc_sharewithclass_57af89bef08e_input1: shareInput1,
  cc_sharewithclass_57af89bef08e_button1: shareButton1,
  cc_sharewithclass_57af89bef08e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  // set initial states
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

autorun(() => {
  let A = ggb1.innerData['A'];
  if (ggb1.innerData['show']) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
