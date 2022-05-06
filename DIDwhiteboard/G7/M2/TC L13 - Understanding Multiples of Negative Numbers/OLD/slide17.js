const {
  text1,
  select1,
  cc_sharewithclass_4b5b6f021b1e_button1: button1,
  cc_sharewithclass_4b5b6f021b1e_textbox1: text3,
  cc_sharewithclass_4b5b6f021b1e_input1: input1,
} = components;

text1.updateData({ align: "center" });

onInit();
function onInit() {
  if (!text1.data.init) {
    // set initial states
    button1.updateData({ visible: false, align: "right" });
    input1.updateData({ visible: false });
    text3.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    text1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == "") {
    button1.updateData({ visible: false, align: "right" });
    input1.updateData({ visible: false });
    text3.updateData({ visible: false });
  }
  if (select1.data.selected == "0") {
    button1.updateData({ visible: true, align: "right" });
    input1.updateData({
      visible: true,
      text: `The meaning of 0 in 0-15-15-15 = 45 is `,
    });
    text3.updateData({ visible: true });
  }
  if (select1.data.selected == "1") {
    button1.updateData({ visible: true, align: "right" });
    input1.updateData({
      visible: true,
      text: `The meaning of -15 in 0-15-15-15 = 45 is `,
    });
    text3.updateData({ visible: true });
  }
  if (select1.data.selected == "2") {
    button1.updateData({ visible: true, align: "right" });
    input1.updateData({
      visible: true,
      text: `The meaning of -45 in 0-15-15-15 = 45 is `,
    });
    text3.updateData({ visible: true });
  }
});
