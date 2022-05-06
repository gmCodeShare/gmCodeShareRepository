const { ggb1, select1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.setValue("showLine1", false);
  ggb1.instance.setValue("showLine2", false);
  ggb1.instance.setValue("showFrog", true);
  ggb1.instance.setValue("showCheese1", true);
  ggb1.instance.setValue("showCheese2", true);
  ggb1.instance.setValue("showCheese3", true);

  ggb1.instance.setCoords("FrogPoint", -3, 4);
  ggb1.instance.setCoords("Cheese1Point", 8.5, 2);
  ggb1.instance.setCoords("Cheese2Point", -6, -5);
  ggb1.instance.setCoords("Cheese3Point", 3.5, -5);

  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);

  button1.updateData({
    align: "right",
    disabled: "true",
  });
  // save status
  saveData({ initialized: true });
}

select1.on("change", ({ selected }) => {
  const ineqs = ["ineqA", "ineqB", "ineqC", "ineqD"];
  ineqs.forEach((ineq) => {
    ggb1.instance.setVisible(ineq, false);
  });
  const showIneq = ineqs[selected[0]];
  ggb1.instance.setVisible(showIneq, true);
  button1.updateData({
    text: "Submit",
    disabled: !selected.length,
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
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
