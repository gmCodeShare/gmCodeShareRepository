const { text1, table1, buttonGroup1 } = components;

let a4;
let a5;
let b2;
let b6;
let c1;
let c3;

onInit();
function onInit() {
  if (!text1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    text1.updateData({ a4: '', a5: '', b2: '', b6: '', c1: '', c3: '' });

    text1.updateData({ init: true });
  }
}

autorun(() => {
  //define these number using the table so the autrun runs
  a4 = table1.data.rows[3][1].value;
  a5 = table1.data.rows[4][1].value;
  b2 = table1.data.rows[1][2].value;
  b6 = table1.data.rows[5][2].value;
  c1 = table1.data.rows[0][3].value;
  c3 = table1.data.rows[2][3].value;

  if (
    (text1.data.a4 != a4 ||
      text1.data.a5 != a5 ||
      text1.data.b2 != b2 ||
      text1.data.b6 != b6 ||
      text1.data.c1 != c1 ||
      text1.data.c3 != c3) &&
    a4 != '' &&
    a5 != '' &&
    b2 != '' &&
    b6 != '' &&
    c1 != '' &&
    c3 != ''
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);

    table1.updateCell(3, 1, { className: '' });
    table1.updateCell(4, 1, { className: '' });
    table1.updateCell(1, 2, { className: '' });
    table1.updateCell(5, 2, { className: '' });
    table1.updateCell(0, 3, { className: '' });
    table1.updateCell(2, 3, { className: '' });
  }
});

buttonGroup1.on('click:1', () => {
  a4 = table1.data.rows[3][1].value;
  a5 = table1.data.rows[4][1].value;
  b2 = table1.data.rows[1][2].value;
  b6 = table1.data.rows[5][2].value;
  c1 = table1.data.rows[0][3].value;
  c3 = table1.data.rows[2][3].value;

  text1.updateData({ a4: a4, a5: a5, b2: b2, b6: b6, c1: c1, c3: c3 });

  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);

  if (utils.math.evaluateLatex(a4).value != 35) {
    table1.updateCell(3, 1, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(3, 1, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(a5).value != 320) {
    table1.updateCell(4, 1, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(4, 1, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(b2).value != 6) {
    table1.updateCell(1, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(1, 2, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(b6).value != 8) {
    table1.updateCell(5, 2, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(5, 2, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(c1).value != 7) {
    table1.updateCell(0, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(0, 3, { className: 'bg-success text-white' });
  }
  if (utils.math.evaluateLatex(c3).value != 6) {
    table1.updateCell(2, 3, { className: 'bg-danger text-white' });
  } else {
    table1.updateCell(2, 3, { className: 'bg-success text-white' });
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  table1.updateCell(3, 1, { className: '' });
  table1.updateCell(4, 1, { className: '' });
  table1.updateCell(1, 2, { className: '' });
  table1.updateCell(5, 2, { className: '' });
  table1.updateCell(0, 3, { className: '' });
  table1.updateCell(2, 3, { className: '' });
});
