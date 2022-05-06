const { ggb1, image1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-eb7da8aaf525';

slide.on('firstload', () => {
  table1.updateCol(0, { math: true, editable: true });
  button1.updateData({ disabled: true });
  ggb1.instance.setErrorDialogsActive(false);
  ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
});

let data = getFromSlide(id1, 'ggb1', false) || false;

if (data.innerData) {
  ggb1.instance.setCoords(
    'Point1',
    data.innerData['Point1'][0],
    data.innerData['Point1'][1]
  );
  ggb1.instance.setCoords(
    'Point2',
    data.innerData['Point2'][0],
    data.innerData['Point2'][1]
  );
  ggb1.instance.setCoords(
    'Point3',
    data.innerData['Point3'][0],
    data.innerData['Point3'][1]
  );
  ggb1.instance.setCoords(
    'Point4',
    data.innerData['Point4'][0],
    data.innerData['Point4'][1]
  );
  ggb1.instance.setCoords(
    'Point5',
    data.innerData['Point5'][0],
    data.innerData['Point5'][1]
  );

  ggb1.instance.setColor('Point1', 0, 127, 175);
  ggb1.instance.setColor('Point2', 0, 127, 175);
  ggb1.instance.setColor('Point3', 0, 127, 175);
  ggb1.instance.setColor('Point4', 0, 127, 175);
  ggb1.instance.setColor('Point5', 0, 127, 175);
  ggb1.instance.setPointStyle('Point1', 10);
  ggb1.instance.setPointStyle('Point2', 10);
  ggb1.instance.setPointStyle('Point3', 10);
  ggb1.instance.setPointStyle('Point4', 10);
  ggb1.instance.setPointStyle('Point5', 10);
}

button1.on('click', () => {
  let pattern = /\\left\(\d+,\d+\\right\)/;
  if (pattern.test(table1.getCell(0, 0).value)) {
    ggb1.instance.evalLaTeX(`CheckPoint1=${table1.getCell(0, 0).value}`);
    /*ggb1.instance.setPointStyle('CheckPoint1', 2);
    ggb1.instance.setPointSize('CheckPoint1', 7);
    ggb1.instance.setFixed('CheckPoint1', true, false);*/
    ggb1.instance.setVisible('CheckPoint1', true);
  }
  if (pattern.test(table1.getCell(1, 0).value)) {
    ggb1.instance.evalLaTeX(`CheckPoint2=${table1.getCell(1, 0).value}`);
    /*ggb1.instance.setPointStyle('CheckPoint2', 2);
    ggb1.instance.setPointSize('CheckPoint2', 7);
    ggb1.instance.setFixed('CheckPoint2', true, false);*/
    ggb1.instance.setVisible('CheckPoint2', true);
  }
  if (pattern.test(table1.getCell(2, 0).value)) {
    ggb1.instance.evalLaTeX(`CheckPoint3=${table1.getCell(2, 0).value}`);
    /*ggb1.instance.setPointStyle('CheckPoint3', 2);
    ggb1.instance.setPointSize('CheckPoint3', 7);
    ggb1.instance.setFixed('CheckPoint3', true, false);*/
    ggb1.instance.setVisible('CheckPoint3', true);
  }
  if (pattern.test(table1.getCell(3, 0).value)) {
    ggb1.instance.evalLaTeX(`CheckPoint4=${table1.getCell(3, 0).value}`);
    /*ggb1.instance.setPointStyle('CheckPoint4', 2);
    ggb1.instance.setPointSize('CheckPoint4', 7);
    ggb1.instance.setFixed('CheckPoint4', true, false);*/
    ggb1.instance.setVisible('CheckPoint4', true);
  }
  if (pattern.test(table1.getCell(4, 0).value)) {
    ggb1.instance.evalLaTeX(`CheckPoint5=${table1.getCell(4, 0).value}`);
    /*ggb1.instance.setPointStyle('CheckPoint5', 2);
    ggb1.instance.setPointSize('CheckPoint5', 7);
    ggb1.instance.setFixed('CheckPoint5', true, false);*/
    ggb1.instance.setVisible('CheckPoint5', true);
  }
});

autorun(() => {
  let entries = [
    table1.getCell(0, 0).value,
    table1.getCell(1, 0).value,
    table1.getCell(2, 0).value,
    table1.getCell(3, 0).value,
    table1.getCell(4, 0).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Graph',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"geogebra":1,"uploaded-image":1,"textbox":1,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
