const { ggb1, feedback, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: 'right' });

ggb1.instance.registerObjectUpdateListener('B', update);
ggb1.instance.registerObjectUpdateListener('C', update);

function update() {
  button1.updateData({ disabled: false, text: 'Submit' });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
}

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Submitted' });
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"6 M5 TA L01 - The Area of a Parallelogram","teacherView":false,"layout":"two col"}
*/
