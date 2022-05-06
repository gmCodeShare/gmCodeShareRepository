const {
  text2,
  select1,
  cc_submit_4681f01cdd63_textbox1: text1,
  cc_submit_4681f01cdd63_input1: input1,
  cc_submit_4681f01cdd63_button1: button1,
} = components;

onInit();
function onInit() {
  if (!text2.data.init) {
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    text2.updateData({ init: true });
  }
}

select1.on("change", (selected) => {
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
});
