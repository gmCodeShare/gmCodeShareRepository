const { ggb1, buttonGroup1 } = components;

if (!getData("initialized")) {
  // set initial states
  buttonGroup1.updateSingleButton({ outline: true }, 2);
  saveData({ step: 0 });
  // save status
  saveData({ initialized: true });
}

ggb1.instance.registerObjectUpdateListener("time1", manageAnimations);

ggb1.instance.registerObjectUpdateListener("time2", (name) => {
  manageAnimations(name, true);
});

ggb1.instance.registerObjectUpdateListener("time3", manageAnimations);

ggb1.instance.registerObjectUpdateListener("time4", manageAnimations);

function manageAnimations(timeName, start3 = false) {
  if (ggb1.instance.getValue(timeName) === 1) {
    const step = getData("step");
    if (start3) {
      startNextAnimation(2);
    } else {
      buttonGroup1.updateSingleButton({ disabled: step >= 4 }, 1);
    }
  }
}

function startNextAnimation(step) {
  ggb1.instance.stopAnimation();
  const times = ["time1", "time2", "time3", "time4"];
  times.forEach((time) => {
    ggb1.instance.setAnimating(time, false);
  });
  const nextTime = times[step];
  ggb1.instance.setAnimating(nextTime, true);
  ggb1.instance.setValue(nextTime, 0);
  ggb1.instance.startAnimation();
  saveData({ step: step + 1 });
}

buttonGroup1.on("click:1", () => {
  const step = getData("step");
  startNextAnimation(step);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.stopAnimation();
  const times = ["time1", "time2", "time3", "time4"];
  times.forEach((time) => {
    ggb1.instance.setAnimating(time, false);
    ggb1.instance.setValue(time, 0);
  });
  saveData({ step: 0 });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
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
