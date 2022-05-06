const { ggb1, feedback, text1, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

var rowNumber = table1.data.rows.length;
var click = 1;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  const prev64 =
    getFromSlide("slide-a82c4d5898ab", "ggb1.data.next64", "") || "";
  rowNumber = 1;
  if (prev64) {
    ggb1.instance.setBase64(prev64, configApp);
  }

  function configApp() {
    ggb1.instance.setValue("showPoints", false);
  }
});

//add row
buttonGroup1.on("click:1", () => {
  /*const createTableCell = (value) => ({
		editable: true,
		math: !isNaN(value),
		value,
	});
	const createTableRowsData = (rows) =>
		rows.map((row) => row.map(createTableCell));
	let oldRows = [...table1.data.rows];
	let modRows = oldRows.map((row) => row.map((cell) => cell.value));
	let newRow = ["", "", "", "", ""];
	let combinedRows = [...modRows, [...newRow]];
	const tableRows = createTableRowsData(combinedRows);
	console.log("Table Rows", tableRows); // For illustrative purposes only
	// Step 6: Update table
	table1.updateData({ rows: tableRows });
	
	let oldRows = table1.data.rows;
	let newRow = [];
	for (let i = 0, L = table1.data.columns.length; i < L; i++) {
		let sampleCell = {
			className: false,
			editable: true,
			math: true,
			value: "",
		};
		newRow.push(sampleCell);
	}
	table1.updateData({ rows: [...oldRows, [...newRow]] });
    */
  rowNumber++;
  table1.addRow();
  table1.updateCell(rowNumber - 1, 0, {
    className: false,
    editable: false,
    math: true,
    value: "f_{" + rowNumber + "}(x)=",
  });
  table1.updateCell(rowNumber - 1, 3, {
    className: false,
    editable: false,
    math: false,
    value: "${\\le x\\le}$",
  });
});

//remove row
buttonGroup1.on("click:2", () => {
  ggb1.instance.setVisible("g" + (rowNumber + 1), false);
  let newRows = [...table1.data.rows];
  newRows.pop();
  table1.updateData({ rows: newRows });
  rowNumber--;
});
//FIX EMPTY ROW GRAPHING ERROR!!! FIX GRAPHING WHEN X IS NOT PRESENT!!!
//graph it
buttonGroup1.on("click:3", () => {
  for (let i = 2, L = 2 + table1.data.rows.length; i < L; i++) {
    if (
      table1.getCell(i - 2, 1).value.includes("x") ||
      /\w/.test(table1.getCell(i - 2, 1).value == false)
    ) {
      // console.log(/\w/.test(table1.getCell(i - 2, 1).value));
      let frac = table1.getCell(i - 2, 1).value.replace(/\\frac{/, "(");
      let fracMid = frac.replace(/\}\{/, ")/(");
      let leftParen = fracMid.replace(/\\left/g, "");
      let rightParen = leftParen.replace(/\\right/g, "");
      let absLeft = rightParen.replace(/\|/, "abs(");
      let absRight = absLeft.replace(/\|/, ")");
      let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");
      let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");
      let brackRight = cbrtLeft.replace(/\}/, ")");
      let brackLeft = brackRight.replace(/\{/, "(");
      let finalAnswer = '"' + brackLeft.replace(/\{/, "(") + '"';
      // console.log("replaced: " + finalAnswer);
      ggb1.instance.evalCommand(
        "ParseToFunction(A" + i + "," + finalAnswer + ")"
      );
      ggb1.instance.setVisible("A" + i, false);
      ggb1.instance.setValue(
        "B" + i,
        utils.math.evaluateLatex(table1.data.rows[i - 2][2].value).value
      );
      ggb1.instance.setValue(
        "C" + i,
        utils.math.evaluateLatex(table1.data.rows[i - 2][4].value).value
      );
      if (
        table1.data.rows[i - 2][2].value == table1.data.rows[i - 2][4].value
      ) {
        ggb1.instance.evalCommand(
          "Allow" +
            rowNumber +
            "=(" +
            table1.data.rows[i - 2][2].value +
            ",A" +
            i +
            "(" +
            table1.data.rows[i - 2][2].value +
            "))"
        );
      }
      ggb1.instance.setVisible("g" + i, true);
      ggb1.instance.setVisible("g20", false);
      // console.log(ggb1.instance.getValue("B" + i));
      // console.log(ggb1.instance.getValue("C" + i));
      // console.log(ggb1.instance.getCommandString("g" + i));
    }
  }
});
//remove row
buttonGroup1.on("click:4", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  click++;
  /*if (click % 2 == 1) {
    buttonGroup1.updateSingleButton({ text: "All Done!" }, 4);
  } else {
    buttonGroup1.updateSingleButton({ text: "Unlock It" }, 4);
  }*/
  let hideyPoints = ggb1.instance.getAllObjectNames("point");
  // console.log(hideyPoints);
  for (let i = 0, L = hideyPoints.length; i < L; i++) {
    if (!hideyPoints[i].includes("Allow")) {
      ggb1.instance.setVisible(hideyPoints[i], click % 2);
    }
  }
  ggb1.instance.setValue("showPoints", click % 2);
});

buttonGroup1.on("click:5", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  click++;
  /* if (click % 2 == 1) {
    buttonGroup1.updateSingleButton({ text: "All Done!" }, 4);
  } else {
    buttonGroup1.updateSingleButton({ text: "Unlock It" }, 4);
  }*/
  let hideyPoints = ggb1.instance.getAllObjectNames("point");
  // console.log(hideyPoints);
  for (let i = 0, L = hideyPoints.length; i < L; i++) {
    if (!hideyPoints[i].includes("Allow")) {
      ggb1.instance.setVisible(hideyPoints[i], click % 2);
    }
  }
  ggb1.instance.setValue("showPoints", click % 2);
});

autorun(() => {
  // disable deletion of first row
  buttonGroup1.updateSingleButton({ disabled: table1.data.rows.length < 2 }, 2);
});

autorun(() => {
  let entries = [];
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    entries.push(table1.getCell(i, 1).value);
    entries.push(table1.getCell(i, 2).value);
    entries.push(table1.getCell(i, 4).value);
    // console.log(entries);
  }
  if (!arrayEquals(entries, table1.data.last)) {
    buttonGroup1.updateSingleButton(
      {
        disabled: !entries.every((value) => !!value),
      },
      3
    );
    table1.updateData({ last: [...entries] });
  }
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
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M4 TC L20 - Art with Transformations","teacherView":false,"layout":"two col"}
*/
