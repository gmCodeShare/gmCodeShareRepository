const { ggb2, ggb1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let id1 = 'slide-ed3177f3fd8a';

slide.on('firstload', () => {
  button1.updateData({ disabled: true, align: 'right' });
});

let data1 = getFromSlide(id1, 'ggb1', false) || false;
let data2 = getFromSlide(id1, 'ggb2', false) || false;

if (data1.innerData) {
  ggb1.instance.setValue('showColor01', data1.innerData['showColor01']);
  if (ggb1.instance.getValue('showColor01') == 1) {
    ggb1.instance.setColor('rhombus1', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus1', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor02', data1.innerData['showColor02']);
  if (ggb1.instance.getValue('showColor02') == 1) {
    ggb1.instance.setColor('rhombus2', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus2', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor03', data1.innerData['showColor03']);
  if (ggb1.instance.getValue('showColor03') == 1) {
    ggb1.instance.setColor('rhombus3', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus3', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor04', data1.innerData['showColor04']);
  if (ggb1.instance.getValue('showColor04') == 1) {
    ggb1.instance.setColor('rhombus4', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus4', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor05', data1.innerData['showColor05']);
  if (ggb1.instance.getValue('showColor05') == 1) {
    ggb1.instance.setColor('rhombus5', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus5', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor06', data1.innerData['showColor06']);
  if (ggb1.instance.getValue('showColor06') == 1) {
    ggb1.instance.setColor('rhombus6', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus6', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor07', data1.innerData['showColor07']);
  if (ggb1.instance.getValue('showColor07') == 1) {
    ggb1.instance.setColor('rhombus7', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus7', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor08', data1.innerData['showColor08']);
  if (ggb1.instance.getValue('showColor08') == 1) {
    ggb1.instance.setColor('rhombus8', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus8', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor09', data1.innerData['showColor09']);
  if (ggb1.instance.getValue('showColor09') == 1) {
    ggb1.instance.setColor('rhombus9', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus9', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor10', data1.innerData['showColor10']);
  if (ggb1.instance.getValue('showColor10') == 1) {
    ggb1.instance.setColor('rhombus10', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus10', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor11', data1.innerData['showColor11']);
  if (ggb1.instance.getValue('showColor11') == 1) {
    ggb1.instance.setColor('rhombus11', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus11', 218, 41, 28);
  }
  ggb1.instance.setValue('showColor12', data1.innerData['showColor12']);
  if (ggb1.instance.getValue('showColor12') == 1) {
    ggb1.instance.setColor('rhombus12', 0, 127, 175);
  } else {
    ggb1.instance.setColor('rhombus12', 218, 41, 28);
  }
}

ggb1.instance.setFixed('rhombus1', true, false);
ggb1.instance.setFixed('rhombus2', true, false);
ggb1.instance.setFixed('rhombus3', true, false);
ggb1.instance.setFixed('rhombus4', true, false);
ggb1.instance.setFixed('rhombus5', true, false);
ggb1.instance.setFixed('rhombus6', true, false);
ggb1.instance.setFixed('rhombus7', true, false);
ggb1.instance.setFixed('rhombus8', true, false);
ggb1.instance.setFixed('rhombus9', true, false);
ggb1.instance.setFixed('rhombus10', true, false);
ggb1.instance.setFixed('rhombus11', true, false);
ggb1.instance.setFixed('rhombus12', true, false);

if (data2.innerData) {
  ggb2.instance.setValue('tapeNumbers', data2.innerData['tapeNumbers']);
}
ggb2.instance.setValue('tile', 3);

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(0, 4).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
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
{"compTotals":{"geogebra":2,"textbox":1,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
