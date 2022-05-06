const {
  text4,
  ggb1,
  feedback1,
  text8,
  text3,
  cc_submit_711448252bea_textbox1: text1,
  cc_submit_711448252bea_input1: input1,
  cc_submit_711448252bea_button1: button1,
  separator2,
  cc_sharewithclass_75f5ecfd0455_textbox1: text2,
  cc_sharewithclass_75f5ecfd0455_input1: input2,
  cc_sharewithclass_75f5ecfd0455_button1: button2,
  cc_sharewithclass_75f5ecfd0455_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

text2.updateData({ visible: false });
input2.updateData({ visible: false });
button2.updateData({ visible: false });

ggb1.instance.setAxisLabels(1, '$\\mathit{n}$', '$\\mathit{t}$');
ggb1.instance.registerObjectUpdateListener('D', update);

function update() {
  let num = ggb1.instance.getValue('y(D)');
  let num2 = ggb1.instance.getValue('x(D)');
  text3.updateData({
    text: `A ratio of your total earnings to the number of lawns mowed is $${num}$ : $${num2}$.`,
  });
}
button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":4,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"T layout"}
*/
