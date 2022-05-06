const { text1, ggb1, feedback1, ggb2, separator5, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

button1.updateData({ disabled: true });

ggb2.instance.setCoords(
  'C',
  ggb1.instance.getXcoord('C'),
  ggb1.instance.getYcoord('C')
);
ggb2.instance.setCoords(
  'F',
  ggb1.instance.getXcoord('F'),
  ggb1.instance.getYcoord('F')
);
ggb2.instance.setCoords(
  'I',
  ggb1.instance.getXcoord('I'),
  ggb1.instance.getYcoord('I')
);

ggb2.instance.setVisible('C', false);
ggb2.instance.setVisible('F', false);
ggb2.instance.setVisible('I', false);

ggb1.instance.registerObjectUpdateListener('C', updateRight);
ggb1.instance.registerObjectUpdateListener('F', updateRight);
ggb1.instance.registerObjectUpdateListener('I', updateRight);

function updateRight() {
  ggb2.instance.setCoords(
    'C',
    ggb1.instance.getXcoord('C'),
    ggb1.instance.getYcoord('C')
  );
  ggb2.instance.setCoords(
    'F',
    ggb1.instance.getXcoord('F'),
    ggb1.instance.getYcoord('F')
  );
  ggb2.instance.setCoords(
    'I',
    ggb1.instance.getXcoord('I'),
    ggb1.instance.getYcoord('I')
  );
  button1.updateData({ disabled: false });
}

button1.on('click', () => {
  ggb1.instance.reset();
  ggb2.instance.reset();
  ggb2.instance.setCoords(
    'C',
    ggb1.instance.getXcoord('C'),
    ggb1.instance.getYcoord('C')
  );
  ggb2.instance.setCoords(
    'F',
    ggb1.instance.getXcoord('F'),
    ggb1.instance.getYcoord('F')
  );
  ggb2.instance.setCoords(
    'I',
    ggb1.instance.getXcoord('I'),
    ggb1.instance.getYcoord('I')
  );
  ggb1.instance.registerObjectUpdateListener('C', updateRight);
  ggb1.instance.registerObjectUpdateListener('F', updateRight);
  ggb1.instance.registerObjectUpdateListener('I', updateRight);
  ggb2.instance.setVisible('C', false);
  ggb2.instance.setVisible('F', false);
  ggb2.instance.setVisible('I', false);
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":1,"button":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"T layout"}
*/
