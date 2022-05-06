//slide 6
const { text1, table1, ggb1, button1 } = components;
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ disabled: true, align: "right" });
});

const oldCell00 = "-4";
const oldCell01 = "-7";
const oldCell02 = "(-4, -7)";
const oldCell10 = "0";
const oldCell11 = "1";
const oldCell12 = "(0, 1)";
const oldCell20 = "4";
const oldCell21 = "9";
const oldCell22 = "(4, 9)";
const oldCell30 = "-2";
const oldCell31 = "-3";
const oldCell32 = "(-2, -3)";
const oldCell40 = "2";
const oldCell41 = "5";
const oldCell42 = "(2, 5)";

table1.updateCell(0, 0, { value: `\\color{#F26A36}{${oldCell00}}` });
table1.updateCell(0, 1, { value: `\\color{#F26A36}{${oldCell01}}` });
table1.updateCell(0, 2, { value: `\\color{#F26A36}{${oldCell02}}` });

table1.updateCell(1, 0, { value: `\\color{#F26A36}{${oldCell10}}` });
table1.updateCell(1, 1, { value: `\\color{#F26A36}{${oldCell11}}` });
table1.updateCell(1, 2, { value: `\\color{#F26A36}{${oldCell12}}` });

table1.updateCell(2, 0, { value: `\\color{#F26A36}{${oldCell20}}` });
table1.updateCell(2, 1, { value: `\\color{#F26A36}{${oldCell21}}` });
table1.updateCell(2, 2, { value: `\\color{#F26A36}{${oldCell22}}` });

table1.updateCell(3, 0, { value: `\\color{#F26A36}{${oldCell30}}` });
table1.updateCell(3, 1, { value: `\\color{#F26A36}{${oldCell31}}` });
table1.updateCell(3, 2, { value: `\\color{#F26A36}{${oldCell32}}` });

table1.updateCell(4, 0, { value: `\\color{#F26A36}{${oldCell40}}` });
table1.updateCell(4, 1, { value: `\\color{#F26A36}{${oldCell41}}` });
table1.updateCell(4, 2, { value: `\\color{#F26A36}{${oldCell42}}` });

(() => {
  ggb1.instance.getAllObjectNames("point").forEach((point) => {
    if (ggb1.instance.getCaption(point) === "prevPoint") {
      ggb1.instance.deleteObject(point);
    }
  });
  // create new points from prev
  [oldCell02, oldCell12, oldCell22, oldCell32, oldCell42].forEach((value) => {
    const { x, y, error } = getCoords(value);
    if (error) {
      return;
    }
    const newPoint = createPoint(x, y, "prevPoint");
    ggb1.instance.setColor(newPoint, 242, 106, 54);
  });
})();

function getCoords(str) {
  const valuesInParens = /(?:\\.*)?\((.+),(?: |(?:\\ ))*(.+?)(?:\\.*)?\)/;
  const matches = str.match(valuesInParens);
  if (!matches) {
    return { error: true };
  }
  // capture groups from regex are x and y values
  const xObj = utils.math.evaluateLatex(matches[1]);
  const yObj = utils.math.evaluateLatex(matches[2]);
  if (xObj.error || yObj.error) {
    return { error: true };
  }
  return { x: xObj.value, y: yObj.value, error: false };
}

function createPoint(x, y, caption = "studentPoint") {
  const newPoint = ggb1.instance.evalCommandGetLabels(`(${x}, ${y})`);
  ggb1.instance.setCaption(newPoint, caption);
  ggb1.instance.setFixed(newPoint, false, false);
  ggb1.instance.setLabelVisible(newPoint, false);
  return newPoint;
}

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

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  // delete old points
  ggb1.instance.getAllObjectNames("point").forEach((point) => {
    if (ggb1.instance.getCaption(point) === "studentPoint") {
      ggb1.instance.deleteObject(point);
    }
  });
  // create new points from table
  table1.data.rows.forEach(([cell0, cell1, { value, editable }]) => {
    if (!editable) {
      // prevent duplicate creation of getFromSlide points
      return;
    }
    const { x, y, error } = getCoords(value);
    if (error) {
      return;
    }
    createPoint(x, y);
  });
});

// library

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
