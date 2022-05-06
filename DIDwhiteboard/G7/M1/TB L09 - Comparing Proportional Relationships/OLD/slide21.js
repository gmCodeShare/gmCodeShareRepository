const {
  image1,
  text2,
  check1,
  check2,
  check3,
  cc_sharewithclass_491a244f9a79_button1: button1,
  cc_sharewithclass_491a244f9a79_input1: input1,
  cc_sharewithclass_491a244f9a79_textbox1: text1,
} = components;

onInit();
function onInit() {
  if (!image1.data.init) {
    button1.updateData({ align: "right" });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
    text1.updateData({ visible: false });
    image1.updateData({ init: true });
  }
}
autorun(() => {
  if (check1.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check2.updateData({ checked: false });
    check3.updateData({ checked: false });
    input1.updateData({ text: "Unit Rate Triangle, because", visible: true });
  }
});
autorun(() => {
  if (check2.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check3.updateData({ checked: false });
    input1.updateData({
      text: "Not Unit Rate Triangle, because",
      visible: true,
    });
  }
});
autorun(() => {
  if (check3.data.checked) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    check1.updateData({ checked: false });
    check2.updateData({ checked: false });
    input1.updateData({ text: "No way to tell, because", visible: true });
  }
});
