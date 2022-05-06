const {
  ggb1,
  feedback1,
  cc_sharewithclass_e262872cb60a_textbox1: shareText1,
  cc_sharewithclass_e262872cb60a_input1: shareInput1,
  cc_sharewithclass_e262872cb60a_button1: shareButton1,
  cc_sharewithclass_e262872cb60a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('pause', swap);

shareButton1.on('click', play);

function play() {
  ggb1.instance.setAnimating('pause', false);
  ggb1.instance.setValue('pause', 0);
  ggb1.instance.setAnimating('pause', true);
  ggb1.instance.startAnimation();
}

function swap() {
  if (ggb1.instance.getValue('pause') == 1) {
    ggb1.instance.stopAnimation('pause', false);
    ggb1.instance.setAnimating('t', true);
    ggb1.instance.startAnimation('t');
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
