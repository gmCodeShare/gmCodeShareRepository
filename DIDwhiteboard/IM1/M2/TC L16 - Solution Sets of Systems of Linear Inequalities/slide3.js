const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let inequalityGroup1 = [
  "P1A",
  "P1B",
  "inequality1LessGreaterToggle",
  "inequality1EqualNotEqualToggle",
];
let inequalityGroup2 = [
  "P2A",
  "P2B",
  "inequality2LessGreaterToggle",
  "inequality2EqualNotEqualToggle",
];

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.setValue("showLine2", false);
  ggb1.instance.setValue("showFrog", true);
  ggb1.instance.setValue("showCheese1", true);
  ggb1.instance.setValue("showCheese2", true);
  ggb1.instance.setValue("showCheese3", true);

  ggb1.instance.setCoords("FrogPoint", -1, 2);
  ggb1.instance.setCoords("Cheese1Point", -6, -2);
  ggb1.instance.setCoords("Cheese2Point", 4, -4);
  ggb1.instance.setCoords("Cheese3Point", 6, 4);

  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);
  // save status
  saveData({ initialized: true });
}

ggb1.instance.registerClientListener(clientFunction);

function clientFunction(a) {
  switch (a.type) {
    case "deselect":
      ggb1.instance.setValue("inequalityGroup1Selected", false);
      ggb1.instance.setValue("inequalityGroup2Selected", false);
      break;
    case "select":
      if (inequalityGroup1.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup1Selected", true);
      } else if (inequalityGroup2.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup2Selected", true);
      }
  }
}

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
