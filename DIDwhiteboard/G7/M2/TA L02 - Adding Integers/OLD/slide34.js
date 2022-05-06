const {
  ggb1,
  text1,
  text2,
  text3,
  select1,
  select2,
  cc_submit_af6d18028670_textbox1: text4,
  cc_submit_af6d18028670_input1: input4,
  cc_submit_af6d18028670_button1: button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text3.updateData({ visible: false });
    select2.updateData({ visible: false });
    text4.updateData({ visible: false });
    input4.updateData({ visible: false });
    button4.updateData({ visible: false, align: "right" });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
    problem = ggb1.innerData["addProblem"];
    addend1 = ggb1.innerData["addend2"];
    text1.updateData({ align: "center", text: `$${problem}$` });
    text3.updateData({
      text: `Is the result greater than or less than $${addend1}$?`,
    });
  }
}

autorun(() => {
  if (select1.data.selected) {
    // CW
    text3.updateData({ visible: true });
    select2.updateData({ visible: true });
  }
});

autorun(() => {
  if (select2.data.selected) {
    // CW
    text4.updateData({ visible: true });
    input4.updateData({ visible: true });
    button4.updateData({ visible: true, align: "right" });
  }
});
