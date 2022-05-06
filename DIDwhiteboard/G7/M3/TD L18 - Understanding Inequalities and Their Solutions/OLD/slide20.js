const {
  ggb1,
  ggb2,
  text3,
  text4,
  text1,
  cc_sharewithclass_0187fa47e8ae_textbox1: text2,
  cc_sharewithclass_0187fa47e8ae_button1: button1,
  cc_sharewithclass_0187fa47e8ae_input1: input1,
  text5,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text5.updateData({ visible: false });
    text4.updateData({ align: "center" });
    text3.updateData({ align: "center" });
    text2.updateData({ visible: false });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

button2.on("click", () => {
  button2.updateData({
    disabled: true,
    text: "Submitted",
  });
  if (
    ggb1.instance.getValue("openPoint") == 0 ||
    Math.abs(ggb1.instance.getXcoord("D") - 6) > 0.1 ||
    ggb1.instance.getValue("blueA") == 0 ||
    ggb2.instance.getValue("openPoint") == 0 ||
    Math.abs(ggb2.instance.getXcoord("A") - 6) > 0.1 ||
    ggb2.instance.getValue("blueA") == 0
  ) {
    text5.updateData({ visible: true });
    text2.updateData({ visible: false });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
  } else {
    text5.updateData({ visible: false });
    text2.updateData({ visible: true });
    button1.updateData({ visible: true });
    input1.updateData({ visible: true });
  }
  // console.log(
  //   ggb1.instance.getValue("openPoint") +
  //     " " +
  //     Math.abs(ggb2.instance.getXcoord("A") - 6) +
  //     " " +
  //     ggb1.instance.getValue("blueA") +
  //     " " +
  //     ggb2.instance.getValue("openPoint") +
  //     " " +
  //     Math.abs(ggb1.instance.getXcoord("D") - 6) +
  //     " " +
  //     ggb2.instance.getValue("blueA")
  // );
});

autorun(() => {
  let reup = ggb1.innerData["A"];
  let reup2 = ggb2.innerData["D"];
  let click = ggb1.innerData["blueA"];
  let click2 = ggb2.innerData["blueA"];
  let open = ggb1.innerData["openPoint"];
  let open2 = ggb2.innerData["openPoint"];
  button2.updateData({
    disabled: false,
    text: "Submit",
  });
  text5.updateData({ visible: false });
  text2.updateData({ visible: false });
  button1.updateData({ visible: false });
  input1.updateData({ visible: false });
});
