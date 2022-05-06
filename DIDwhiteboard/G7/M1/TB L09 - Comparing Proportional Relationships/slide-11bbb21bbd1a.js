const {
  ggb1,
  feedback1,
  text2,
  check1,
  check2,
  check3,
  cc_sharewithclass_84ee8f3e614f_textbox1: text1,
  cc_sharewithclass_84ee8f3e614f_input1: input1,
  cc_sharewithclass_84ee8f3e614f_button1: button1,
  cc_sharewithclass_84ee8f3e614f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'right' });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
    text1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}
autorun(() => {
  if (check1.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check2.updateData({ checked: false });
    check3.updateData({ checked: false });
    input1.updateData({ text: 'Group C, because', visible: true });
  }
});
autorun(() => {
  if (check2.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check3.updateData({ checked: false });
    input1.updateData({ text: 'Group D, because', visible: true });
  }
});
autorun(() => {
  if (check3.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check2.updateData({ checked: false });
    input1.updateData({ text: 'No way to tell, because', visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"checkbox":3,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"two col"}
*/
