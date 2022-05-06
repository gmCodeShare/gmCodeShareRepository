const {
  ggb1,
  text2,
  radio1,
  cc_sharewithclass_9228a42d2d8d_textbox1: text1,
  cc_sharewithclass_9228a42d2d8d_input1: input1,
  cc_sharewithclass_9228a42d2d8d_button1: button1,
  cc_sharewithclass_9228a42d2d8d_studentanswers1,
} = components;

slide.on('firstload', () => {
  text1.updateData({ visible: false });
  button1.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ align: 'right' });
});

autorun(() => {
  var optionArray = ['Absolute error because ', 'Percent error because '];
  if (radio1.data.selected) {
    text1.updateData({ visible: true });
    button1.updateData({ visible: true });
    input1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      input1.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
