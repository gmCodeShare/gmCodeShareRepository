const {
  ggb1,
  select1,
  text2,
  text3,
  input2,
  cc_sharewithclass_fbdcb7a5c524_textbox1: text1,
  cc_sharewithclass_fbdcb7a5c524_input1: input1,
  cc_sharewithclass_fbdcb7a5c524_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  text1.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});
autorun(() => {
  if (select1.data.selected.includes("2")) {
    text3.updateData({ visible: true });
    input2.updateData({ visible: true });
  } else {
    text3.updateData({ visible: false });
    input2.updateData({ visible: false });
  }
});

select1.on("change", (selected) => {
  if (select1.data.selected[0] == 0) {
    input1.updateData({ text: `{ x | -5 ≤ x ≤ 5} because ` });
  }
  if (select1.data.selected[0] == 1) {
    input1.updateData({
      text: `{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5} because `,
    });
  }
  if (select1.data.selected[0] == 2) {
    input1.updateData({ text: `Neither because ` });
  }

  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
});
