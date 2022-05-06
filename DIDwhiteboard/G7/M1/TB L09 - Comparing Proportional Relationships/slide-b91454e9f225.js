const { ggb1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('A', update);

button1.on('click', () => {
  ggb1.instance.setValue('showValue', true);
  button1.updateData({ disabled: true });
});

function update() {
  button1.updateData({ disabled: false });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"two col"}
*/
