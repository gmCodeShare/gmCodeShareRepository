const { ggb1, table1, button1 } = components;

ggb1.instance.setValue("a", 10);
table1.updateCell(0, 0, { value: ggb1.instance.getValue("a") });
button1.updateData({ align: "right" });
ggb1.instance.setVisible("A", false);
ggb1.instance.setVisible("B", false);
ggb1.instance.setVisible("C", false);
ggb1.instance.setVisible("D", false);
ggb1.instance.setVisible("g", false);
ggb1.instance.setVisible("h", false);

button1.on("click", () => {
  const result = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  if (result.value < 0 || result.error || result.value > 10) {
    return;
  }
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  if (result2.value < 0 || result2.error || result2.value > 10) {
    return;
  }
  ggb1.instance.setValue("b", result.value);
  ggb1.instance.setValue("c", result2.value);
  ggb1.instance.setVisible("A", true);
  ggb1.instance.setVisible("B", true);
  ggb1.instance.setVisible("C", true);
  ggb1.instance.setVisible("D", true);
  ggb1.instance.setVisible("g", true);
  ggb1.instance.setVisible("h", true);
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
