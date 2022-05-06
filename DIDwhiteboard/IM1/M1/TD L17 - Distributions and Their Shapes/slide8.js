const {
  select1,
  text3,
  ggb1,
  cc_submit_8025d8eef115_textbox1: text1,
  button3,
  cc_submit_8025d8eef115_input1: input1,
  cc_submit_8025d8eef115_button1: button1,
  cc_submit_29fc8e056afb_textbox1: text2,
  cc_submit_29fc8e056afb_input1: input2,
  cc_submit_29fc8e056afb_button1: button2,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("classABigTop", false);
    ggb1.instance.setVisible("classBBigTop", false);
    ggb1.instance.setVisible("classCBigTop", false);
    ggb1.instance.setVisible("classCBigBottom", false);
    ggb1.instance.setVisible("classDBigBottom", false);
    ggb1.instance.setVisible("classBBigBottom", false);
    button3.updateData({ disabled: true });
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setVisible("classASmall", false);
    ggb1.instance.setVisible("classBSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classDSmall", false);
    ggb1.instance.setVisible("classABigTop", true);
    ggb1.instance.setVisible("classBBigBottom", true);
    ggb1.instance.setVisible("classCBigTop", false);
    ggb1.instance.setVisible("classCBigBottom", false);
    ggb1.instance.setVisible("classDBigBottom", false);
    ggb1.instance.setVisible("classBBigTop", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setVisible("classASmall", false);
    ggb1.instance.setVisible("classBSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classDSmall", false);
    ggb1.instance.setVisible("classBBigTop", true);
    ggb1.instance.setVisible("classCBigBottom", true);
    ggb1.instance.setVisible("classABigTop", false);
    ggb1.instance.setVisible("classCBigTop", false);
    ggb1.instance.setVisible("classDBigBottom", false);
    ggb1.instance.setVisible("classBBigBottom", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setVisible("classASmall", false);
    ggb1.instance.setVisible("classBSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classDSmall", false);
    ggb1.instance.setVisible("classABigTop", true);
    ggb1.instance.setVisible("classCBigBottom", true);
    ggb1.instance.setVisible("classBBigtop", false);
    ggb1.instance.setVisible("classCBigTop", false);
    ggb1.instance.setVisible("classDBigBottom", false);
    ggb1.instance.setVisible("classBBigBottom", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setVisible("classASmall", false);
    ggb1.instance.setVisible("classBSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classDSmall", false);
    ggb1.instance.setVisible("classABigTop", true);
    ggb1.instance.setVisible("classDBigBottom", true);
    ggb1.instance.setVisible("classCBigTop", false);
    ggb1.instance.setVisible("classCBigBottom", false);
    ggb1.instance.setVisible("classBBigTop", false);
    ggb1.instance.setVisible("classBBigBottom", false);
  }
  if (select1.data.selected.includes("4")) {
    ggb1.instance.setVisible("classASmall", false);
    ggb1.instance.setVisible("classBSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classDSmall", false);
    ggb1.instance.setVisible("classBBigTop", true);
    ggb1.instance.setVisible("classDBigBottom", true);
    ggb1.instance.setVisible("classCBigTop", false);
    ggb1.instance.setVisible("classCBigBottom", false);
    ggb1.instance.setVisible("classABigTop", false);
    ggb1.instance.setVisible("classBBigBottom", false);
  }
  if (select1.data.selected.includes("5")) {
    ggb1.instance.setVisible("classASmall", false);
    ggb1.instance.setVisible("classBSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classCSmall", false);
    ggb1.instance.setVisible("classCBigTop", true);
    ggb1.instance.setVisible("classDBigBottom", true);
    ggb1.instance.setVisible("classABigTop", false);
    ggb1.instance.setVisible("classCBigBottom", false);
    ggb1.instance.setVisible("classBBigTop", false);
    ggb1.instance.setVisible("classBBigBottom", false);
  }
});

select1.on("change", (selected) => {
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  button3.updateData({ disabled: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button3.on("click", () => {
  ggb1.instance.setVisible("classABigTop", false);
  ggb1.instance.setVisible("classBBigTop", false);
  ggb1.instance.setVisible("classCBigTop", false);
  ggb1.instance.setVisible("classCBigBottom", false);
  ggb1.instance.setVisible("classDBigBottom", false);
  ggb1.instance.setVisible("classBBigBottom", false);
  select1.unselectAll();
  ggb1.instance.setVisible("classASmall", true);
  ggb1.instance.setVisible("classBSmall", true);
  ggb1.instance.setVisible("classCSmall", true);
  ggb1.instance.setVisible("classDSmall", true);
  button3.updateData({ disabled: true });
});
