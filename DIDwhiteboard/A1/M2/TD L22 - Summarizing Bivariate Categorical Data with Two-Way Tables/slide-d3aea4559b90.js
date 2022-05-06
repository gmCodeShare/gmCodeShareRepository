const {
  text1,
  radio1,
  cc_sharewithclass_9ffb74e10969_textbox1: text2,
  cc_sharewithclass_9ffb74e10969_input1: input1,
  cc_sharewithclass_9ffb74e10969_button1: button1,
  cc_sharewithclass_9ffb74e10969_studentanswers1,
  feedback1,
} = components;

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

autorun(() => {
  var optionArray = ["Yes, because ", "No, because "];
  if (radio1.data.selected) {
    text2.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      input1.updateData({ text: optionArray[radio1.data.selected] });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
{"compTotals":{"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"one col"}
*/
