const {
  ggb1,
  feedback1,
  cc_sharewithclass_b27d794e57ba_textbox1,
  cc_sharewithclass_b27d794e57ba_input1,
  cc_sharewithclass_b27d794e57ba_button1,
  cc_sharewithclass_b27d794e57ba_studentanswers1,
} = components;

//didn't change anything from original

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_b27d794e57ba_button1.updateData({
  align: 'right',
});
components.cc_sharewithclass_b27d794e57ba_input1.updateData({
  type: 'multiline',
}); // CW

// onInit();
let prevPerspective =
  getFromSlide('slide-9b47ecb2225b', 'ggb1.data.storedPerspective', '') || '';

if (prevPerspective) {
  ggb1.instance.setBase64(prevPerspective);
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TE L23 - Cross Section Scavenger Hunt","teacherView":false,"layout":"two col"}
*/
