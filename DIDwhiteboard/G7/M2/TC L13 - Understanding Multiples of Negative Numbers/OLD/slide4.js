const {
  table1,
  cc_sharewithclass_1b2b32102d85_button1: button1,
  cc_sharewithclass_1b2b32102d85_textbox1: text1,
  cc_sharewithclass_1b2b32102d85_input1: input1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    // set initial states
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false, align: "right" });
    // create/update a dummy variable to keep track of whether the screen has initialized
    table1.updateData({ init: true });
  }
}

autorun(() => {
  if (
    table1.getCell(0, 1).value != "" &&
    table1.getCell(1, 1).value != "" &&
    table1.getCell(2, 1).value != "" &&
    table1.getCell(3, 1).value != ""
  ) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
});
