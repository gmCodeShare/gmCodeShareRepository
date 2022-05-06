const {
  textDisplay3,
  image1,
  textDisplay4,
  image2,
  text2,
  text3,
  radio1,
  cc_sharewithclass_aa88643aa297_textbox1: text1,
  cc_sharewithclass_aa88643aa297_input1: input1,
  cc_sharewithclass_aa88643aa297_button1: button1,
  cc_sharewithclass_aa88643aa297_studentanswers1,
} = components;

/*let student=getFromSlide(`slide-d8eeaea00b6a`,`radio1.data.selected`);

var name = ["Lily","Ethan",`\\text\\color{A0A0A0}{[no input yet on slide 1]}`];
let choose=parseInt(student);
if(isNaN(choose)) {
  choose = 2;
}

if(choose==2){
     text2.updateData({text:`Earlier, you thought that $${name[choose]}$ had a better guess.`});
}else{
text2.updateData({text:`Earlier, you thought that ${name[parseInt(student)]} had a better guess.`});
}*/

slide.on('firstload', () => {
  button1.updateData({ visible: false });
  text1.updateData({ visible: false });
  input1.updateData({ visible: false });
});

autorun(() => {
  var optionArray = ['Lily because ', 'Ethan because '];
  if (radio1.data.selected) {
    button1.updateData({ visible: true });
    text1.updateData({ visible: true });
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
{"compTotals":{"textbox":4,"uploaded-image":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
