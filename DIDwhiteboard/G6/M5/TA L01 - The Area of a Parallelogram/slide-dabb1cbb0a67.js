const {
  ggb1,
  feedback,
  text1,
  radio1,
  cc_sharewithclass_9da491c4e9e7_textbox1: text2,
  cc_sharewithclass_9da491c4e9e7_input1: input2,
  cc_sharewithclass_9da491c4e9e7_button1: button2,
  cc_sharewithclass_9da491c4e9e7_studentanswers1,
} = components;

components.ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button2.updateData({ visible: false });
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
});

autorun(() => {
  var optionArray = ['Yes because ', 'No because '];
  if (radio1.data.selected) {
    button2.updateData({ visible: true });
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      input2.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
