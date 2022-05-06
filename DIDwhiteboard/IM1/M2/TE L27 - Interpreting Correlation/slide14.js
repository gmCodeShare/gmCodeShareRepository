const { image1, text1, button1, text2, button2, text3 } = components;

onInit();
function onInit() {
  if (!image1.data.init) {
    text2.updateData({ visible: false });
    button2.updateData({ visible: false });
    text3.updateData({ visible: false });
    image1.updateData({ init: true });
  }
}

button1.on("click", () => {
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

button2.on("click", () => {
  text3.updateData({ visible: true });
  button2.updateData({ disabled: true });
});
