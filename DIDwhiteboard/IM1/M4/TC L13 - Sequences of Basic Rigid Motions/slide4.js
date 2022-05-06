const { ggb1, select1, buttonGroup1 } = components;

if (!getData("initialized")) {
  // set initial states
  select1.selectOption("0");
  setAnimation(true, false, false);
  setDisabled(true, 2, 3);
  // save status
  saveData({ initialized: true });
}

function setAnimation(trBool, reBool, playBool) {
  // arguments: translation boolean, reflection boolean, play animation boolean
  ggb1.instance.stopAnimation();
  // if reflection is animating next, set time to 1, otherwise 0
  ggb1.instance.setValue("time", reBool ? 1 : 0);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time", trBool);
  ggb1.instance.setAnimating("time2", reBool);
  if (playBool) {
    ggb1.instance.startAnimation();
  }
}

function setDisabled(boolDisabled, ...indices) {
  indices.forEach((index) => {
    buttonGroup1.updateSingleButton({ disabled: boolDisabled }, index);
  });
}

ggb1.instance.registerObjectUpdateListener("time", () => {
  if (ggb1.instance.getValue("time") === 1) {
    setAnimation(false, true, true);
  }
});

ggb1.instance.registerObjectUpdateListener("time2", () => {
  if (ggb1.instance.getValue("time2") === 1) {
    setDisabled(true, 1, 2);
  }
});

select1.on("change", ({ selected }) => {
  ggb1.instance.setValue("showSteps", selected.includes("0"));
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.startAnimation();
  setDisabled(true, 1);
  setDisabled(false, 2, 3);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.stopAnimation();
  setDisabled(true, 2);
  setDisabled(false, 1, 3);
});

buttonGroup1.on("click:3", () => {
  setAnimation(true, false, false);
  setDisabled(true, 2, 3);
  setDisabled(false, 1);
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
