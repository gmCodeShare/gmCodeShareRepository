const { ggb1, button1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(reset)');
});

/*
{"compTotals":{"geogebra":1,"button":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M2 TA L01 - Factors and Multiples","teacherView":false,"layout":"one col"}
*/
