const {
  ggb1,
  text2,
  check1,
  check2,
  check3,
  cc_sharewithclass_38f12250f57a_button1: button1,
  cc_sharewithclass_38f12250f57a_input1: input1,
  cc_sharewithclass_38f12250f57a_textbox1: text1,
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
    input1.updateData({ text: 'Group A, because', visible: true });
  }
});
autorun(() => {
  if (check2.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check3.updateData({ checked: false });
    input1.updateData({ text: 'Group B, because', visible: true });
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
