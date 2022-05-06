const { ggb1, ggb2, select1, select2, buttonGroup1 } = components;

if (!getData("initialized")) {
  // set initial states
  ggb2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("set1", true);
  ggb2.instance.setValue("set1", true);
  select1.selectOption("0");
  select2.selectOption("2");
  // save status
  saveData({ initialized: true });
}

ggb1.instance.registerClickListener((clicked) => {
  if (ggb1.instance.getObjectType(clicked) !== "image") {
    return;
  }
  showIndividual(clicked);
});

ggb2.instance.registerObjectClickListener("pic1", () => {
  ggb2.updateData({ visible: false });
  ggb1.updateData({ visible: true });
});

function showIndividual(imgName) {
  // depending on which image is clicked in which GGB, show an individual tile
  const mapping = [
    {
      // set1
      expandTL: "showA",
      expandTR: "showB",
      expandBL: "showC",
      expandBR: "showD",
    },
    {
      // set2
      expandTL: "showE",
      expandTR: "showF",
      expandBL: "showG",
      expandBR: "showH",
    },
  ];
  ggb1.updateData({ visible: false });
  const setIndex = ggb1.instance.getValue("set2") ? 1 : 0;
  const boolName = mapping[setIndex][imgName];
  const allBools = [
    "showA",
    "showB",
    "showC",
    "showD",
    "showE",
    "showF",
    "showG",
    "showH",
  ];
  allBools.forEach((bool) => ggb1.instance.setValue(bool, false));
  ggb1.instance.setValue(boolName, true);
  ggb1.updateData({ visible: true });
}

select1.on("change", ({ selected }) => {
  const set1 = selected.includes("0");
  ggb1.instance.setValue("set1", set1);
  ggb1.instance.setValue("set2", !set1);
});

select2.on("change", ({ selected }) => {
  const showDistances = selected.includes("0");
  const showAngles = selected.includes("1");
  const ggbComps = [ggb1, ggb2];
  ggbComps.forEach(({ instance: { setValue } }) => {
    setValue("showLengths", showDistances);
    setValue("showAngles", showAngles);
  });
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
