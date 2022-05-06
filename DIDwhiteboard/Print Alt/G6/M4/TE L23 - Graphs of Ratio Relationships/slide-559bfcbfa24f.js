const { ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setValue('gallons', 5);
ggb1.instance.setValue('gallons2', 5);
ggb1.instance.setValue('on', false);
ggb1.instance.setValue('onY', true);
ggb1.instance.setVisible('xAxisDepend', false);
ggb1.instance.setVisible('yAxisInDepend', false);
ggb2.instance.setValue('gallons', 5);
ggb2.instance.setValue('gallons2', 5);
ggb2.instance.setValue('on', true);
ggb2.instance.setValue('onY', false);
ggb2.instance.setVisible('xAxisInDepend', false);
ggb2.instance.setVisible('yAxisDepend', false);
ggb1.instance.setAxisLabels(1, '$\\mathit{g}$', '$\\mathit{c}$');
ggb2.instance.setAxisLabels(1, '$\\mathit{c}$', '$\\mathit{g}$');

/*
{"compTotals":{"geogebra":2,"textbox":1},"stage":"Launch","lessonInfo":"6 M4 TE L23 - Print Alt Slide Deck Graphs of Ratio Relationships","teacherView":true,"layout":"two col"}
*/
