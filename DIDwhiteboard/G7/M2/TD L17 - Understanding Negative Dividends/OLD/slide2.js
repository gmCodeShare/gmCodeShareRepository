const {
  text2,
  image1,
  select1,
  cc_sharewithclass_769523474b8b_textbox1: text1,
  cc_sharewithclass_769523474b8b_input1: input1,
  cc_sharewithclass_769523474b8b_button1: button1,
} = components;

button1.updateData({ align: "right" });

onInit();
function onInit() {
  if (!image1.data.init) {
    // set initial states
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    image1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == "0" || select1.data.selected == "1") {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});
