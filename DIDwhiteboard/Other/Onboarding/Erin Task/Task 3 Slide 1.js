const { table1, button1, ggb1 } = components;

button1.on("click", () => {
  const min = -12;
  const max = 12;

  let x1 = boundIt(table1, 1, 0, min, max);
  let y1 = boundIt(table1, 1, 1, min, max);
  let x2 = boundIt(table1, 2, 0, min, max);
  let y2 = boundIt(table1, 2, 1, min, max);
  let x3 = boundIt(table1, 3, 0, min, max);
  let y3 = boundIt(table1, 3, 1, min, max);
  let x4 = boundIt(table1, 4, 0, min, max);
  let y4 = boundIt(table1, 4, 1, min, max);

  ggb1.instance.evalCommand(`B=(${x1},${y1})`);
  ggb1.instance.evalCommand(`C=(${x2},${y2})`);
  ggb1.instance.evalCommand(`D=(${x3},${y3})`);
  ggb1.instance.evalCommand(`E=(${x4},${y4})`);

  ggb1.instance.setFixed("B", false, false);
  ggb1.instance.setFixed("C", false, false);
  ggb1.instance.setFixed("D", false, false);
  ggb1.instance.setFixed("E", false, false);

  ggb1.instance.setLabelVisible("B", false);
  ggb1.instance.setLabelVisible("C", false);
  ggb1.instance.setLabelVisible("D", false);
  ggb1.instance.setLabelVisible("E", false);

  utils.RTS.sendData("slide-181c49f67940", {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    x3: x3,
    y3: y3,
    x4: x4,
    y4: y4,
  });

  button1.updateData({ text: "Submitted", disabled: true });
});

autorun(() => {
  // use the following definition of entries to quickly gather all cell values:
  const entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, getData("entries"))) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    });
    saveData({ entries });
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

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

function boundIt(tableComp, row, column, min, max) {
  const result = utils.math.evaluateLatex(tableComp.getCell(row, column).value);
  if (result.error) {
    table1.updateCell(row, column, {
      value: "1",
    }); // what should the text do/say if students input "cabbage"?
    return 1; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    table1.updateCell(row, column, {
      value: `${min}`,
    });
    return min;
  } else if (result.value > max) {
    table1.updateCell(row, column, {
      value: `${max}`,
    });
    return max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  //let flooredNum = Math.floor(result.value);
  //inputComp.updateData({ text: `${flooredNum}` });
  //return flooredNum;
  return result.value;
}
