const { ggb1, feedback, textDisplay1, table1, text1, button1, text2 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

//const id1 = "slide-ace8a78fb206";
const id2 = "slide-40e41f2af3c3";
const id3 = "slide-a67309b9afa4";

let defPrevText1 = {
  data: { text: "", domainString: "" },
};

slide.on("firstload", () => {
  button1.updateData({ visible: false });
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
  ggb1.instance.showToolBar(false);
  ggb1.instance.setColor("visPLine", 160, 160, 160);
  ggb1.instance.setLineStyle("visPLine", 2);
  /*text1.updateData({
    text: `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}$`,
  });*/
  button1.updateData({ align: "right", disabled: true });
});

// let oldLines = ggb1.instance
//   .getAllObjectNames()
//   .filter((obj) => ggb1.instance.getCaption(obj) == "old");
// for (let i = 0, L = oldLines.length; i < L; i++) {
//   ggb1.instance.deleteObject(oldLines[i]);
// }
toGGB();

//const prevText2 = getFromSlide(id2, "text1", defPrevText1) || defPrevText1;
const prevText3 = getFromSlide(id3, "text1", defPrevText1) || defPrevText1;

/*if (prevText2.data.domainString && !table1.data.init) {
  let firstPart = ggb1.instance.evalCommandGetLabels(
    prevText2.data.domainString
  );
  ggb1.instance.setCaption(firstPart, "old");
  ggb1.instance.setFixed(firstPart, false, false);
  ggb1.instance.setColor(firstPart, 0, 0, 0);
}*/

if (prevText3.data.domainString && !table1.data.init) {
  let firstPart = ggb1.instance.evalCommandGetLabels(
    prevText3.data.domainString
  );
  ggb1.instance.setCaption(firstPart, "old");
  ggb1.instance.setFixed(firstPart, false, false);
  ggb1.instance.setColor(firstPart, 0, 0, 0);
  // table1.updateData({ init: false });
}

(() => {
  // table1.updateData({ listening: false });
  // console.log("not listening!");
  const numRows = 5;
  //getFromSlide(id1, "cc_sharewithclass_8864c54161f8_input1.data.text", "") ||
  //  "";
  text1.updateData({ visible: !(numRows > 0) });
  //text2.updateData({ visible: numRows > 0 });
  button1.updateData({ visible: numRows > 0 });
  if (!numRows) {
    return;
  }
  for (let i = 0, L = table1.data.rows.length; i < L; i++) {
    table1.deleteRow(table1.data.rows.length - 1);
  }
  //const prevEq1 = getFromSlide()
  const prevSegs = [
    //  [...expressYourself(prevText2.data.domainString)],
    [...expressYourself(prevText3.data.domainString)],
  ];
  for (let i = 0, L = parseInt(numRows); i < L; i++) {
    table1.addRow();
    if (i < table1.data.last?.length) {
      table1.updateCell(i, 1, { value: table1.data.last[i][1] });
      table1.updateCell(i, 2, { value: table1.data.last[i][2] });
    } else {
      table1.updateCell(i, 1, { value: `y \\space = \\space ` });
    }
    table1.updateCell(i, 0, { value: `${i + 1}`, editable: false });
    if (i < prevSegs.length && !table1.data.init) {
      table1.updateCell(i, 1, {
        value: `y \\space = \\space ${prevSegs[i][0]}`,
      });
      table1.updateCell(i, 2, {
        value: `${prevSegs[i][1]}`,
      });
    }
    // possibly switch checking i; set equations 2 and 4 not editable
    switch (i) {
      case 1:
        table1.updateCell(1, 1, {
          value: `$y = -1.5t+27$`,
          editable: false,
        });
        break;
      case 3:
        table1.updateCell(3, 1, {
          value: `$y = -3t+45.9$`,
          editable: false,
        });
    }
    let entries = table1.data.rows
      .map((row) => row.map((cell) => cell.value.replaceAll(" ", "")))
      .flat();
    table1.updateData({ previous: [...entries] });
    console.log(table1);
    // table1.data.rows[0]({math: true});
  }
})();

function expressYourself(str) {
  const pattern = /If\((.*), (.*)\)/;
  if (!str || !pattern.test(str)) {
    return ["", ""];
  }
  let tString = str.replaceAll("x", "t").replaceAll("<=", `\\le`);
  let GGBarray = tString.match(pattern);
  return [GGBarray[2], GGBarray[1]];
}

autorun(() => {
  const tableVals = table1.data.rows.map((row) =>
    row.map((cell) => cell.value)
  );
  table1.updateData({ last: [...tableVals] });
  const tableStrings = tableVals.map(
    (row) =>
      `${row[1]
        .replaceAll(`\\ `, "")
        .replaceAll("y=", "")}, &\\text{for } ${row[2].replaceAll(`\\ `, "")}`
  );
  const wholeString = `$f(t) = \\begin{cases}  
  ${tableStrings.join("\\\\")}
  \\end{cases}$`;
  // text2.updateData({ text: wholeString });
});

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

function toGGB() {
  let inputFuncs = ggb1.instance
    .getAllObjectNames()
    .filter((obj) => ggb1.instance.getCaption(obj) === "old");
  for (let i = 0, L = inputFuncs.length; i < L; i++) {
    ggb1.instance.deleteObject(inputFuncs[i]);
  }
  let tableExp = table1.data.rows.map((row) => [row[1].value, row[2].value]);
  for (let i = 0, L = tableExp.length; i < L; i++) {
    let eqNoLatex = undoLaTeX(tableExp[i][0])
      .replaceAll(`\\ `, "")
      .replaceAll(` `, "");
    let pattern = /(y)=(.+)/;
    // console.log("eqNoLatex", eqNoLatex);
    if (!pattern.test(eqNoLatex)) {
      continue;
    }
    const GGBready = eqNoLatex.replaceAll("t", "x");
    ggb1.instance.setErrorDialogsActive(false);
    let madeDummy = ggb1.instance.evalCommand(`dummy: ${GGBready}`);
    let madeLine = ggb1.instance.getObjectType("dummy") == "line";
    ggb1.instance.deleteObject("dummy");
    // console.log("GGBready", GGBready);
    if (!madeDummy || !madeLine) {
      continue;
    }
    let ineqNoLatex = undoLaTeX(tableExp[i][1])
      .replaceAll(`\\ `, "")
      .replaceAll(` `, "");
    let pattern2 = /(.+)(<=|<)(t)(<=|<)(.+)/;
    // console.log("ineqNoLatex", ineqNoLatex);
    if (!pattern2.test(ineqNoLatex)) {
      continue;
    }
    let ineqCaptured = ineqNoLatex.match(pattern2);
    let result1 = utils.math.evaluateLatex(ineqCaptured[1]);
    let result2 = utils.math.evaluateLatex(ineqCaptured[5]);
    if (result1.error || result2.error) {
      continue;
    }
    let ggbString = `If(${ineqCaptured[1]} ${ineqCaptured[2]} x ${
      ineqCaptured[4]
    } ${ineqCaptured[5]}, ${GGBready.replace("y=", "")})`;
    let newFunc = ggb1.instance.evalCommandGetLabels(ggbString);
    ggb1.instance.setCaption(newFunc, "old");
    ggb1.instance.setFixed(newFunc, false, false);
    ggb1.instance.setColor(newFunc, 0, 0, 0);
    // console.log("ggbString", ggbString);
  }
}

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value.replaceAll(" ", "")))
    .flat();
  if (!table1.data.previous?.length) {
    return;
  }
  let previousAdj = table1.data.previous
    .map((val) => val.replaceAll(" ", ""))
    .flat();
  // if (!table1.data.listening) {
  //   table1.updateData({ listening: true });
  //   console.log("listening!");
  //   return;
  // }
  if (!arrayEquals(entries, previousAdj) && table1.data.rows.length) {
    // console.log("initialized!", entries, previous);
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    });
    table1.updateData({ previous: [...entries], init: true });
    toGGB();
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function undoLaTeX(inp) {
  let frac = inp.replace(/\\frac{/, "(");
  let fracMid = frac.replace(/\}\{/, ")/(");
  let leftParen = fracMid.replace(/\\left/g, "");
  let rightParen = leftParen.replace(/\\right/g, "");
  let absLeft = rightParen.replace(/\|/, "abs(");
  let absRight = absLeft.replace(/\|/, ")");
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");
  let brackRight = cbrtLeft.replace(/\}/g, ")");
  let brackLeft = brackRight.replace(/\{/g, "(");
  let lessThan = brackLeft.replace(/\\le/g, "<=");
  let greaterThan = lessThan.replace(/\\ge/g, ">=");
  let cDot = greaterThan.replace(/\\cdot/g, "*");
  let finalAnswer = cDot;
  return finalAnswer;
}

/*
{"compTotals":{"geogebra":1,"textbox":4,"table":1,"button":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"two col"}
*/
