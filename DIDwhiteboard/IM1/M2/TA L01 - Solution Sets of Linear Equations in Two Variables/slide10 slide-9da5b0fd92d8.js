const {
  radio1,
  cc_sharewithclass_8990f9eb89f9_textbox1: text2,
  cc_sharewithclass_8990f9eb89f9_input1: input1,
  cc_sharewithclass_8990f9eb89f9_button1: button1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  var optionArray = [
    "write the solution set by using set-builder notation because ",
    "draw the graph of the solution set because ",
    "list elements of the solution set in a table because ",
  ];
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace(".", ",");
      input1.updateData({
        text: "I prefer to " + optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});
