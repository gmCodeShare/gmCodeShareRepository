const { button1, ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', play);

function play() {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

/*
{"compTotals":{"button":1,"geogebra":2,"textbox":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Print Alternate Slide Deck for Memory Games","teacherView":true,"layout":"T layout"}
*/
