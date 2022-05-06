const { ggb1, Separator1, button1, feedback } = components;

components.feedback.updateData({ visible: false });

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(reset)');
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M2 TA L01 - PA Factors and Multiples","teacherView":false,"layout":"one col"}
*/
