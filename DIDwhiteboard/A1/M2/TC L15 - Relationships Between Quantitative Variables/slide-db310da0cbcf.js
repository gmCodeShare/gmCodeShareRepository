const {
  select1,
  feedback1,
  text1,
  cc_sharewithclass_674e0e203a7a_textbox1: text2,
  cc_sharewithclass_674e0e203a7a_input1: input1,
  cc_sharewithclass_674e0e203a7a_button1: button1,
  cc_sharewithclass_674e0e203a7a_studentanswers1,
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

/*
{"compTotals":{"radiogroup":1,"textbox":2,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M2 TC L15 - Relationships Between Quantitative Variables","teacherView":false,"layout":"two col"}
*/
