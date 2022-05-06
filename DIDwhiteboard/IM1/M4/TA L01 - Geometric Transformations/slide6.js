const { ggb1, ggb2, ggb3, ggb4, select1, buttonGroup1 } = components;

if (!getData("initialized")) {
  // set initial states
  ggb2.updateData({ visible: false });
  ggb4.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("set1", true);
  ggb2.instance.setValue("set1", true);
  ggb3.instance.setValue("set2", true);
  ggb4.instance.setValue("set2", true);
  select1.selectOption("2");
  // save status
  saveData({ initialized: true });
}

ggb1.instance.registerClickListener((clicked) => {
  if (ggb1.instance.getObjectType(clicked) !== "image") {
    return;
  }
  showIndividual(clicked, ggb1);
});

ggb3.instance.registerClickListener((clicked) => {
  if (ggb3.instance.getObjectType(clicked) !== "image") {
    return;
  }
  showIndividual(clicked, ggb3);
});

ggb2.instance.registerObjectClickListener("pic1", () => {
  ggb2.updateData({ visible: false });
  ggb1.updateData({ visible: true });
});

ggb4.instance.registerObjectClickListener("pic1", () => {
  ggb4.updateData({ visible: false });
  ggb3.updateData({ visible: true });
});

function showIndividual(imgName, sourceGGBComp) {
  // depending on which image is clicked in which GGB, show an individual tile
  const mapping = {
    ggb1: {
      partnerGGB: ggb2,
      expandTL: "showA",
      expandTR: "showB",
      expandBL: "showC",
      expandBR: "showD",
    },
    ggb3: {
      partnerGGB: ggb4,
      expandTL: "showE",
      expandTR: "showF",
      expandBL: "showG",
      expandBR: "showH",
    },
  };
  const sourceName = sourceGGBComp.name;
  sourceGGBComp.updateData({ visible: false });
  const targetComp = mapping[sourceName]["partnerGGB"];
  const boolName = mapping[sourceName][imgName];
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
  allBools.forEach((bool) => targetComp.instance.setValue(bool, false));
  targetComp.instance.setValue(boolName, true);
  targetComp.updateData({ visible: true });
}

select1.on("change", ({ selected }) => {
  const showDistances = selected.includes("0");
  const showAngles = selected.includes("1");
  const ggbComps = [ggb1, ggb2, ggb3, ggb4];
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
