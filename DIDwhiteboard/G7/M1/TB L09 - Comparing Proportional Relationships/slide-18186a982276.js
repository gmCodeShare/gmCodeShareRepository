const {
  ggb1,
  feedback1,
  text1,
  check1,
  check2,
  check3,
  cc_sharewithclass_da87e10b60ec_textbox1: shareText1,
  cc_sharewithclass_da87e10b60ec_input1: shareInput1,
  cc_sharewithclass_da87e10b60ec_button1: shareButton1,
  cc_sharewithclass_da87e10b60ec_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareButton1.updateData({ align: 'right', visible: false });
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (check1.data.checked) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    check2.updateData({ checked: false });
    check3.updateData({ checked: false });
    shareInput1.updateData({ text: 'Group C, because', visible: true });
  }
});
autorun(() => {
  if (check2.data.checked) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check3.updateData({ checked: false });
    shareInput1.updateData({ text: 'Group D, because', visible: true });
  }
});

autorun(() => {
  if (check3.data.checked) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check2.updateData({ checked: false });
    shareInput1.updateData({ text: 'No way to tell, because', visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"checkbox":3,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"two col"}
*/
