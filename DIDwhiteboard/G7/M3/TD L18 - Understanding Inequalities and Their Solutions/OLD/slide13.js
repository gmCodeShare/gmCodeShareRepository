const {
  ggb13,
  cc_sharewithclass_01dbc22e931a_textbox1: text1,
  cc_sharewithclass_01dbc22e931a_input1: input1,
  cc_sharewithclass_01dbc22e931a_button1: shareButton1,
  button1,
} = components;

ggb13.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb13.data.init) {
    // set initial states
    ggb13.updateData({ def64: ggb13.instance.getBase64() });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb13.updateData({ init: true });
  }
}

button1.on("click", () => {
  // ggb13.instance.reset();
  ggb13.instance.setBase64(ggb13.data.def64);
});
