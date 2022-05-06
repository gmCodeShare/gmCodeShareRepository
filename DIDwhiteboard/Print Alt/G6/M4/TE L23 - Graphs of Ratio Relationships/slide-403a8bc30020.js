const { ggb1, feedback1, text8, text3, separator2 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, '$\\mathit{n}$', '$\\mathit{t}$');
ggb1.instance.registerObjectUpdateListener('D', update);

function update() {
  let num = ggb1.instance.getValue('y(D)');
  let num2 = ggb1.instance.getValue('x(D)');
  text3.updateData({
    text: `#### A ratio of your total earnings in dollars to the number of lawns mowed is $${num}$ : $${num2}$.`,
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Print Alt Slide Deck Graphs of Ratio Relationships","teacherView":true,"layout":"T layout"}
*/
