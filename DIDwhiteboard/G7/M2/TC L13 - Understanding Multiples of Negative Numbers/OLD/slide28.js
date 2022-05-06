const {
  select1,
  text2,
  cc_sharewithclass_1867861f244c_textbox1: text1,
  cc_sharewithclass_1867861f244c_button1: button1,
  cc_sharewithclass_1867861f244c_input1: input1,
} = components;

onInit();
function onInit() {
  if (!text2.data.init) {
    // set initial states
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false, align: "right" });
    // create/update a dummy variable to keep track of whether the screen has initialized
    text2.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == "0") {
    text1.updateData({ visible: true });
    input1.updateData({ text: "Henry, because ", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == "1") {
    text1.updateData({ visible: true });
    input1.updateData({ text: "Ethan, because ", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == "2") {
    text1.updateData({ visible: true });
    input1.updateData({ text: "Both, because ", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == "3") {
    text1.updateData({ visible: true });
    input1.updateData({ text: "Neither, because ", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

const blankBox = "";
const selectHenry = "Henry, because ";
const selectEthan = "Ethan, because ";
const selectBoth = "Both, because ";
const selectNeither = "Neither, because ";

autorun(() => {
  let studentInput = input1.data.text;
  if (
    input1.data.text == blankBox ||
    input1.data.text == selectHenry ||
    input1.data.text == selectEthan ||
    input1.data.text == selectBoth ||
    input1.data.text == selectNeither
  ) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
});
