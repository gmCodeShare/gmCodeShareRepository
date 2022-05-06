const {
  ggb1,
  feedback1,
  textDisplay1,
  select1,
  cc_sharewithclass_466b9873a781_textbox1: textDisplay2,
  cc_sharewithclass_466b9873a781_input1: textInput1,
  cc_sharewithclass_466b9873a781_button1: button1,
  cc_sharewithclass_466b9873a781_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ visible: false, align: "right" });
ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

autorun(() => {
  let explain = select1.data.selected == "0" || select1.data.selected == "1";
  let disableButton = textInput1.data.text == "";
  // explain
  textDisplay2.updateData({ visible: explain });
  textInput1.updateData({ visible: explain });
  button1.updateData({ visible: explain });
  // disableButton
  button1.updateData({ disabled: disableButton });
}); // end autorun

autorun(() => {
  var optionArray = ["Yes, because ", "No, because "];
  if (select1.data.selected) {
    textDisplay2.updateData({ visible: true });
    textInput1.updateData({ visible: true });
    button1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      textInput1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Exploring Transformations of the Graphs of Functions","teacherView":false,"layout":"two col"}
*/
