const { ggb1, select1, buttonGroup1, button1 } = components;

if (!getData("initialized")) {
  // set initial states
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("showA", true);
  ggb1.instance.setVisible("pic1", false);
  select1.selectOption("0");
  // save status
  saveData({ initialized: true });
}

select1.on("change", ({ selected }) => {
  const showDistances = selected.includes("0");
  const showAngles = selected.includes("1");
  ggb1.instance.setValue("showLengths", showDistances);
  ggb1.instance.setValue("showAngles", showAngles);
});

button1.on("click", () => {
  ggb1.instance.setValue("showRandSegs", true);
  const rand1 = Math.random();
  const rand2 = Math.random();
  ggb1.instance.setValue("param1", rand1);
  ggb1.instance.setValue("param2", rand2);
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
