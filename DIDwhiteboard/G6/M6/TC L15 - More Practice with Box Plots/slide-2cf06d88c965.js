const {
  ggb1,
  feedback1,
  cc_sharewithclass_3ab60a0e4d8f_textbox1,
  cc_sharewithclass_3ab60a0e4d8f_input1,
  cc_sharewithclass_3ab60a0e4d8f_button1: button1,
  cc_sharewithclass_3ab60a0e4d8f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', play);

function play() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
