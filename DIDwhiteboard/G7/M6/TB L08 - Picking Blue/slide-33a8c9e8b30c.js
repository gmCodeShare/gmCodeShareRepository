const {
  ggb1,
  feedback1,
  text1,
  button1,
  Separator2,
  cc_sharewithclass_d32b4971c803_textbox1,
  cc_sharewithclass_d32b4971c803_input1,
  cc_sharewithclass_d32b4971c803_button1,
  cc_sharewithclass_d32b4971c803_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_d32b4971c803_textbox1.updateData({
  visible: false,
});
components.cc_sharewithclass_d32b4971c803_input1.updateData({ visible: false });
components.cc_sharewithclass_d32b4971c803_button1.updateData({
  visible: false,
});
components.cc_sharewithclass_d32b4971c803_button1.updateData({
  align: 'right',
});

button1.on('click', animate);

function animate() {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

autorun(() => {
  let time20 = ggb1.innerData['time20'];
  if (ggb1.innerData['animationDone']) {
    components.cc_sharewithclass_d32b4971c803_textbox1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_d32b4971c803_input1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_d32b4971c803_button1.updateData({
      visible: true,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"two col"}
*/
