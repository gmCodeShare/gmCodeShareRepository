const {
  ggb7,
  text5,
  select1,
  cc_sharewithclass_e9e8c1953484_textbox1: text1,
  cc_sharewithclass_e9e8c1953484_input1: input1,
  cc_sharewithclass_e9e8c1953484_button1: button1,
} = components;

ggb7.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb7.data.init) {
    // set initial states
    input1.updateData({ visible: false });
    text1.updateData({ visible: false });
    button1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb7.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected) {
    input1.updateData({ visible: true });
    text1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});
