const { text1, table1, buttonGroup1 } = components;

let a1;
let a2;
let a3;
let a4;

onInit();
function onInit() {
  if (!text1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text1.updateData({ a1: '', a2: '', a3: '', a4: '' });

    text1.updateData({ init: true });
  }
}

autorun(() => {
  //define these number using the table so the autrun runs
  a1 = table1.data.rows[0][3].value;
  a2 = table1.data.rows[1][3].value;
  a3 = table1.data.rows[2][3].value;
  a4 = table1.data.rows[3][3].value;

  if (
    (text1.data.a1 != a1 ||
      text1.data.a2 != a2 ||
      text1.data.a3 != a3 ||
      text1.data.a4 != a4) &&
    a1 != '' &&
    a2 != '' &&
    a3 != '' &&
    a4 != ''
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);

    table1.updateCell(0, 3, { className: '' });
    table1.updateCell(1, 3, { className: '' });
    table1.updateCell(2, 3, { className: '' });
    table1.updateCell(3, 3, { className: '' });
  }
});

buttonGroup1.on('click:1', () => {
  a1 = table1.data.rows[0][3].value;
  a2 = table1.data.rows[1][3].value;
  a3 = table1.data.rows[2][3].value;
  a4 = table1.data.rows[3][3].value;

  text1.updateData({ a1: a1, a2: a2, a3: a3, a4: a4 });

  //check all input types
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  if (utils.math.evaluateLatex(a1).value != 5) {
    table1.updateCell(0, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(0, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a2).value != 5.5) {
    table1.updateCell(1, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a3).value != 4.5) {
    table1.updateCell(2, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a4).value != 6) {
    table1.updateCell(3, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(3, 3, { className: 'bg-success text-white' });
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  table1.updateCell(0, 3, { className: '' });
  table1.updateCell(1, 3, { className: '' });
  table1.updateCell(2, 3, { className: '' });
  table1.updateCell(3, 3, { className: '' });
});
