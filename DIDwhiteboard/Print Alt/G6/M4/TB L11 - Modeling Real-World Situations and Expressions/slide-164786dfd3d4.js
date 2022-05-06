const {
  table1,
  ggb1,
  feedback1,
  separator1,
  cc_submit_7761349fa73e_textbox1,
  cc_submit_7761349fa73e_input1,
  cc_submit_7761349fa73e_button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();

function onInit() {
  if (!table1.data.init) {
    cc_submit_7761349fa73e_button1.updateData({ align: 'right' });
    ggb1.updateData({ visible: false });
    table1.updateCol(0, { math: true, editable: false });
    table1.updateCol(1, { math: true, editable: false });
    table1.updateData({ init: true });
  }
}

//on share button click
cc_submit_7761349fa73e_button1.on('click', () => {
  //pull data from input box
  let num = cc_submit_7761349fa73e_input1.data.text;
  //update expression cell
  table1.updateCell(11, 1, { value: num });
  //adds column and extra row - makes a function in GGB and hides it
  const result = utils.math.evaluateLatex(num);
  if (result.value == null) {
    const valueLaTeX = 'f:' + table1.getCell(11, 1).value;
    if (valueLaTeX.includes('m')) {
      ggb1.instance.evalLaTeX(valueLaTeX, 0);
      ggb1.instance.setVisible('f', false);
    }
    if (!valueLaTeX.includes('m')) {
      const valueLaTeX = 'f:{?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?}';
      ggb1.instance.evalCommand(valueLaTeX);
      ggb1.instance.setVisible('f', false);
    }
  } else {
    const valueLaTeX = 'f: 0m+' + table1.getCell(11, 1).value;
    ggb1.instance.evalLaTeX(valueLaTeX, 0);
    ggb1.instance.setVisible('f', false);
  }
  let Elementf1 = ggb1.instance.getValue('Element(f,1)').toFixed(2);

  //update values in table
  let regexTest = /([a-l]|[n-z])/;

  if (table1.data.columns.length < 3) {
    table1.addCol();
  }
  table1.updateHeader(2, {
    value: `$${num}$`,
    editable: false,
  });

  if (regexTest.test(num) && result.value == null) {
    table1.updateData({
      rows: [
        [
          { value: table1.data.rows[0][0].value },
          { value: table1.data.rows[0][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[1][0].value },
          { value: table1.data.rows[1][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[2][0].value },
          { value: table1.data.rows[2][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[3][0].value },
          { value: table1.data.rows[3][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[4][0].value },
          { value: table1.data.rows[4][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[5][0].value },
          { value: table1.data.rows[5][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[6][0].value },
          { value: table1.data.rows[6][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[7][0].value },
          { value: table1.data.rows[7][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[8][0].value },
          { value: table1.data.rows[8][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[9][0].value },
          { value: table1.data.rows[9][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[10][0].value },
          { value: table1.data.rows[10][1].value },
          { value: `?` },
        ],
        [
          { value: table1.data.rows[11][0].value },
          { value: table1.data.rows[11][1].value },
          { value: '?' },
        ],
      ],
    });
  } else {
    table1.updateData({
      rows: [
        [
          { value: table1.data.rows[0][0].value },
          { value: table1.data.rows[0][1].value },
          { value: `${Elementf1}` },
        ],
        [
          { value: table1.data.rows[1][0].value },
          { value: table1.data.rows[1][1].value },
          { value: ggb1.instance.getValue('Element(f,2)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[2][0].value },
          { value: table1.data.rows[2][1].value },
          { value: ggb1.instance.getValue('Element(f,3)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[3][0].value },
          { value: table1.data.rows[3][1].value },
          { value: ggb1.instance.getValue('Element(f,4)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[4][0].value },
          { value: table1.data.rows[4][1].value },
          { value: ggb1.instance.getValue('Element(f,5)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[5][0].value },
          { value: table1.data.rows[5][1].value },
          { value: ggb1.instance.getValue('Element(f,6)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[6][0].value },
          { value: table1.data.rows[6][1].value },
          { value: ggb1.instance.getValue('Element(f,7)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[7][0].value },
          { value: table1.data.rows[7][1].value },
          { value: ggb1.instance.getValue('Element(f,8)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[8][0].value },
          { value: table1.data.rows[8][1].value },
          { value: ggb1.instance.getValue('Element(f,9)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[9][0].value },
          { value: table1.data.rows[9][1].value },
          { value: ggb1.instance.getValue('Element(f,10)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[10][0].value },
          { value: table1.data.rows[10][1].value },
          { value: ggb1.instance.getValue('Element(f,11)').toFixed(2) },
        ],
        [
          { value: table1.data.rows[11][0].value },
          { value: table1.data.rows[11][1].value },
          { value: '...' },
        ],
      ],
    });
  }
  table1.updateCol(0, { math: true, editable: false });
  table1.updateCol(1, { math: true, editable: false });
  table1.updateCol(2, { math: true, editable: false });
});

/*
{"compTotals":{"table":1,"geogebra":1,"textbox":1,"separator":1,"submit":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Print Alternate Slide Deck for Modeling Real-Life Situations and Expressions","teacherView":true,"layout":"two col"}
*/
