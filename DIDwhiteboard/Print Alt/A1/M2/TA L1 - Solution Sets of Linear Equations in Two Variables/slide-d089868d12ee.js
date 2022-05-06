const { table1, buttonGroup1 } = components;

buttonGroup1.on("click:1", () => {
  if (table1.data.columns.length < 3) {
    table1.addCol();
    table1.updateHeader(2, {
      editable: false,
      value: `$(x,y)$`,
      type: "singleline",
    });
    table1.updateHeader(0, {
      editable: false,
      value: `First Number, $x$`,
      type: "singleline",
    });
    table1.updateHeader(1, {
      editable: false,
      value: `Second Number, $y$`,
      type: "singleline",
    });
  }
  // fillTable();
});

function fillTable() {
  const tableVals = table1.data.rows.map((row) => [row[0].value, row[1].value]);
  for (let i = 0, L = tableVals.length; i < L; i++) {
    table1.updateCell(i, 2, {
      value: `(${tableVals[i][0]},${tableVals[i][1]})`,
      editable: false,
    });
  }
}

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (table1.data.columns.length === 3) {
    fillTable();
  }
});

autorun(() => {
  let moreToShow = table1.data.columns.length < 3;
  buttonGroup1.updateSingleButton({ disabled: !moreToShow }, 1);
  buttonGroup1.updateSingleButton({ disabled: moreToShow }, 2);
});

/*buttonGroup1.on('click:2', () => {
  if (table1.data.columns.length == 3) {
    table1.deleteCol(2);
    table1.updateHeader(0, {
      editable: {
        colums: false,
        rows: false,
        math: true,
      },
      value: `First Number, $x$`,
      type: 'singleline',
    });
    table1.updateHeader(1, {
      editable: {
        colums: false,
        rows: false,
      },
      value: `Second Number, $y$`,
      type: 'singleline',
    });
  }
});*/

buttonGroup1.on("click:2", () => {
  if (table1.data.columns.length == 3) {
    table1.deleteCol(2);
    table1.updateHeader(0, {
      editable: false,
      value: `First Number, $x$`,
      type: "singleline",
    });
    table1.updateHeader(1, {
      editable: false,
      value: `Second Number, $y$`,
      type: "singleline",
    });
  }
});

/*
{"compTotals":{"table":1,"buttongroup":1},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Print Alternate Slide Deck for Solution Sets of Linear Equations in Two Variables","teacherView":true,"layout":"one col"}
*/
