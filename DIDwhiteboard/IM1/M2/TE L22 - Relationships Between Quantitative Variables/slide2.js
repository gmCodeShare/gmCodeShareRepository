const {
  select1,
  cc_sharewithclass_674e0e203a7a_textbox1: text2,
  cc_sharewithclass_674e0e203a7a_input1: input1,
  cc_sharewithclass_674e0e203a7a_button1: button1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  var optionArray = ["A because ", "B because ", "C because ", "D because "];
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      input1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
});
