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
    input1.updateData({ text: "Same, because", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == "1") {
    text1.updateData({ visible: true });
    input1.updateData({ text: "Different, because", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

autorun(() => {
  if (select1.data.selected == "2") {
    text1.updateData({ visible: true });
    input1.updateData({ text: "I don't know, because", visible: true });
    button1.updateData({ disabled: true, visible: true });
  }
});

const blankBox = "";
const selectSame = "Same, because";
const selectDifferent = "Different, because";
const selectIDK = "I don't know, because";

autorun(() => {
  let studentInput = input1.data.text;
  if (
    input1.data.text == blankBox ||
    input1.data.text == selectSame ||
    input1.data.text == selectDifferent ||
    input1.data.text == selectIDK
  ) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
});
