const {
  ggb8,
  separator1,
  button2,
  feedback1,
  cc_sharewithclass_749efda97d70_textbox1: shareText1,
  cc_sharewithclass_749efda97d70_input1: shareInput1,
  cc_sharewithclass_749efda97d70_button1: shareButton1,
  cc_sharewithclass_749efda97d70_studentanswers1,
} = components;

ggb8.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb8.data.init) {
    // set initial states
    ggb8.instance.setAnimating('time', true);
    ggb8.instance.startAnimation();
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb8.updateData({ init: true });
  }
}

button2.on('click', () => {
  ggb8.instance.setValue('time', 0);
  ggb8.instance.setValue('time2', 0);
  ggb8.instance.setAnimating('time', true);
  ggb8.instance.startAnimation();
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
