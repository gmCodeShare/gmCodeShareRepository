const { ggb1, ggb2, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!getData("initialized")) {
  // set initial states
  table1.setVisible(false);
  ggb2.updateData({ visible: false });
  ggb2.instance.setValue("showScatter", false);
  // save status
  saveData({ initialized: true });
}

buttonGroup1.on("click:1", () => {
  addToStep(-1);
});

buttonGroup1.on("click:2", () => {
  addToStep(1);
});

function addToStep(delta) {
  const step = ggb1.instance.getValue("step") + delta;
  ggb1.instance.setValue("step", step);
  switch (step) {
    case 1:
      resetAnimation();
      break;
    case 2:
      resetAnimation();
      ggb1.instance.startAnimation();
      table1.setVisible(false);
      break;
    case 3:
      resetAnimation(1);
      table1.setVisible(true);
      ggb2.updateData({ visible: false });
      break;
    case 4:
      table1.setVisible(false);
      ggb2.updateData({ visible: true });
      break;
  }
}

function resetAnimation(newTimeVal = 0) {
  const { instance: ggb } = ggb1;
  ggb.stopAnimation();
  ggb.setValue("time", newTimeVal);
  ggb.setAnimating("time", true);
}

autorun(() => {
  const step = ggb1.innerData["step"];
  buttonGroup1.updateSingleButton({ disabled: step <= 1 }, 1);
  buttonGroup1.updateSingleButton({ disabled: step >= 4 }, 2);
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
