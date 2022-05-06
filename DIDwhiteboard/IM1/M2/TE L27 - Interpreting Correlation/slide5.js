const { ggb1, ggb2, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  button1.updateData({ align: "right", disabled: true });
  ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
  ggb2.instance.setAxisLabels(1, "$\\mathit{r}$");
  const thingsToHide = ["eq1", "eq2"];
  thingsToHide.forEach((thing) => ggb2.instance.setVisible(thing, false));
  const thingsToModify = ["A", "B"];
  thingsToModify.forEach((thing) => {
    ggb2.instance.setFixed(thing, false, false);
    ggb2.instance.setPointSize(thing, 4);
  });
  // save status
  saveData({ initialized: true });
}

ggb1.instance.registerObjectUpdateListener("CorrCoeff", () => {
  const a = ggb2.instance.getValue("a");
  const b = ggb2.instance.getValue("b");
  const r = ggb1.instance.getValue("CorrCoeff");
  if (r < a) {
    ggb2.instance.setCoords("A", r, 0);
  }
  if (r > b) {
    ggb2.instance.setCoords("B", r, 0);
  }
  button1.updateData({ disabled: false, text: "Submit" });
});

button1.on("click", () => {
  button1.updateData({ disabled: true, text: "Submitted" });
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-de266d0d66c4", {
      pointA: ggb2.innerData["A"],
      pointB: ggb2.innerData["B"],
    });
  }
});

// library

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
