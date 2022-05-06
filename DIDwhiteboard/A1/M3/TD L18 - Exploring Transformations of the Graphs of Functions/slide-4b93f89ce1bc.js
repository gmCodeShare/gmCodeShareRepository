const {
  select1,
  feedback1,
  Textbox5,
  cc_sharewithclass_b182189981b1_textbox1: text1,
  cc_sharewithclass_b182189981b1_input1: input1,
  cc_sharewithclass_b182189981b1_button1: button1,
  cc_sharewithclass_b182189981b1_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!select1.data.init) {
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    select1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ["A because ", "B because ", "C because ", "D because "];
  if (select1.data.selected) {
    text1.updateData({ visible: true });
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
{"compTotals":{"radiogroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TD L18 - Exploring Transformations of the Graphs of Functions","teacherView":false,"layout":"two col"}
*/
