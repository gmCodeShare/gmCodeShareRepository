const { ggb1, feedback1, text1, buttonGroup1, Separator3, table1, button2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button2.updateData({ disabled: true, align: 'right' });
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: true, text: 'See larger squares' },
      ],
    });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerClickListener(cycle);

function cycle(a) {
  switch (ggb1.instance.getColor(a)) {
    case '#FFFFFF':
      //when the square is white, change to blue
      ggb1.instance.setColor(a, 0, 127, 175);
      ggb1.instance.setFilling(a, 0.35);
      ggb1.instance.setValue(
        'totalShadedArea',
        ggb1.instance.getValue('totalShadedArea') + 1
      );
      break;
    case '#007FAF':
      //when the square is blue, change to white
      ggb1.instance.setColor(a, 255, 255, 255);
      ggb1.instance.setFilling(a, 0.05);
      ggb1.instance.setValue(
        'totalShadedArea',
        ggb1.instance.getValue('totalShadedArea') - 1
      );
  }
}

function clearSquares() {
  for (let i = 1; i < 337; i++) {
    ggb1.instance.setColor(`q${i}`, 255, 255, 255);
    ggb1.instance.setFilling(`q${i}`, 0.05);
  }
}

buttonGroup1.on('click:1', () => {
  if (ggb1.innerData['unitValue'] == 1) {
    clearSquares();
    ggb1.instance.setValue('unitValue', 0.5);
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
  if (ggb1.innerData['unitValue'] == 0.5) {
    clearSquares();
    ggb1.instance.setValue('unitValue', 0.25);
    buttonGroup1.updateData({
      buttons: [
        { disabled: true, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
  ggb1.instance.setValue('totalShadedArea', 0);
});

buttonGroup1.on('click:2', () => {
  clearSquares();
  if (ggb1.innerData['unitValue'] == 0.5) {
    clearSquares();
    ggb1.instance.setValue('unitValue', 1);
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: true, text: 'See larger squares' },
      ],
    });
  }
  if (ggb1.innerData['unitValue'] == 0.25) {
    clearSquares();
    ggb1.instance.setValue('unitValue', 0.5);
    buttonGroup1.updateData({
      buttons: [
        { disabled: false, text: 'See smaller squares' },
        { disabled: false, text: 'See larger squares' },
      ],
    });
  }
  ggb1.instance.setValue('totalShadedArea', 0);
});

autorun(() => {
  let num = ggb1.innerData['totalShadedArea'];
  text1.updateData({
    text: `Click on squares to shade them in. Use this tool to estimate the area of the figure. \n\nSquare count: $${num}$`,
  });
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button2.updateData({
      text: 'Submit',
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button2.on('click', () => {
  button2.updateData({ text: 'Submitted', disabled: true });
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
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M4 TC L11 - The Inside of a Circle","teacherView":false,"layout":"two col"}
*/
