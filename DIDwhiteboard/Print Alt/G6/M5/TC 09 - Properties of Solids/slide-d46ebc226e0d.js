const { ggb1, ggb2, feedback1, buttonGroup1, table1, select1, buttonGroup2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup2.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setValue('n', false);
    ggb2.instance.setValue('n', false);
    ggb1.instance.setValue('o', true);
    ggb2.instance.setValue('o', true);
    ggb1.instance.setValue('p', false);
    ggb2.instance.setValue('p', false);
    //buttonGroup1.updateSingleButton({ disabled: true }, 4);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    ggb2.instance.registerObjectUpdateListener('number', updateRight);
    buttonGroup2.updateData({ visible: false }); // CW riff
    ggb1.updateData({ init: true });
  }
}

function updateRight() {
  ggb1.instance.setValue('number', ggb2.instance.getValue('number'));
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  //buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb1.instance.setValue('o', true);
  ggb2.instance.setValue('o', true);
  ggb1.instance.setValue('n', false);
  ggb2.instance.setValue('n', false);
  ggb1.instance.setValue('p', false);
  ggb2.instance.setValue('p', false);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  //buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb1.instance.setValue('n', true);
  ggb2.instance.setValue('n', true);
  ggb1.instance.setValue('p', false);
  ggb2.instance.setValue('p', false);
  ggb1.instance.setValue('o', false);
  ggb2.instance.setValue('o', false);
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  //buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb1.instance.setValue('p', true);
  ggb2.instance.setValue('p', true);
  ggb1.instance.setValue('o', false);
  ggb2.instance.setValue('o', false);
  ggb1.instance.setValue('n', false);
  ggb2.instance.setValue('n', false);
});

select1.on('change', ({ selected }) => {
  fillCells(selected.includes('0'), 0);
  fillCells(selected.includes('1'), 1);
  fillCells(selected.includes('2'), 2);
  fillCells(selected.includes('3'), 3);
});

function fillCells(visible = true, ...rows) {
  const completeTable = [
    ['4', '6', '4'],
    ['5', '8', '5'],
    ['6', '10', '6'],
    ['n+1', '2n', 'n+1'],
  ];
  // use values if showing, use empty string if hiding
  const vals = completeTable.map((row) =>
    row.map((val) => (visible ? val : ''))
  );
  for (let i = 0, L = rows.length; i < L; i++) {
    const currentRow = rows[i];
    // for each row provided, fill cells with vals
    for (let j = 0, K = vals[currentRow].length; j < K; j++) {
      const currentCol = j + 2;
      table1.updateCell(currentRow, currentCol, { value: vals[currentRow][j] });
    }
  }
}

buttonGroup2.on('click:1', () => {
  fillCells(true, 0, 1, 2, 3);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
});

buttonGroup2.on('click:2', () => {
  fillCells(false, 0, 1, 2, 3);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":2,"textbox":1,"buttongroup":2,"table":1,"select":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Print Alternate Slide Deck for Properties of Solids","teacherView":true,"layout":"two col"}
*/
