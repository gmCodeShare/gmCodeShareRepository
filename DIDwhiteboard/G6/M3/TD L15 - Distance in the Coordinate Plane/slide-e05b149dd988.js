const { ggb1, feedback1, text, select1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({
    align: 'right',
    disabled: 'true',
  });
});

select1.on('change', (selected) => {
  button1.updateData({
    text: 'Submit',
    disabled: !!selected.length,
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"select":1,"button":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
