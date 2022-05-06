const {
  text1,
  ggb1,
  separator1,
  buttonGroup1,
  feedback,
  ggb2,
  separator10,
  button2,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
// const points = ["C", "D", "E", "F", "G", "H", "I", "J"];

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  //text1.updateData({ align: "center" });
  button1.updateData({
    disabled: true,
    visible: false, // comment if we decide we need this button
  });
  let toBeColored = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "CHalo",
    "DHalo",
    "EHalo",
    "FHalo",
    "GHalo",
    "HHalo",
    "IHalo",
    "JHalo",
    "shade1",
    "shade2",
    "shade3",
    "shade4",
  ];
  for (let i = 0, L = toBeColored.length; i < L; i++) {
    ggb2.instance.setColor(toBeColored[i], 218, 41, 28);
  }
  // let last = points.map((point) => ggb2.innerData[point]).flat();
  // saveData({ last });
});

function reset(ggbComp) {
  const points = ["C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0, L = points.length; i < L; i++) {
    ggbComp.instance.setCoords(points[i], 0, -1);
  }
  const bools = ["show3", "show2", "show1"];
  for (let i = 0, L = bools.length; i < L; i++) {
    ggbComp.instance.setValue(bools[i], false);
  }
}

function linkGGB() {
  ggb1.instance.setValue("time", ggb2.instance.getValue("scrub"));
}

function linkSpeed() {
  ggb2.instance.setValue("speed", ggb1.instance.getValue("speed"));
}

ggb2.instance.registerObjectUpdateListener("scrub", linkGGB);
ggb1.instance.registerObjectUpdateListener("speed", linkSpeed);

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setAnimating("Scrubber", true);
  ggb2.instance.startAnimation();
  saveData({ slowMo: false });
  ggb1.instance.setVisible("speed", false);
  ggb1.instance.setValue("speed", 1);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  ggb2.instance.stopAnimation();
});

buttonGroup1.on("click:3", () => {
  ggb2.instance.stopAnimation();
  ggb2.instance.setCoords("Scrubber", 0, -4);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:4", () => {
  ggb2.instance.evalCommand("SelectObjects()");
  if (ggb2.instance.getValue("scrub") == 1) {
    ggb2.instance.setCoords("Scrubber", 0, -4);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setAnimating("Scrubber", true);
  ggb2.instance.startAnimation();
  saveData({ slowMo: true });
  ggb1.instance.setVisible("speed", true);
});

autorun(() => {
  if (ggb1.innerData["time"] == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    if (getData("slowMo")) {
      ggb2.instance.setCoords("Scrubber", 0, -4);
      ggb2.instance.setAnimating("Scrubber", true);
      ggb2.instance.startAnimation();
      buttonGroup1.updateSingleButton({ disabled: false }, 2);
    }
  }
});

autorun(() => {
  let trigger = ggb2.innerData["I"];
  if (trigger[0] > 0.02) {
    ggb2.instance.setValue("show3", true);
  }
});

autorun(() => {
  let trigger = ggb2.innerData["G"];
  if (trigger[0] > 0.02) {
    ggb2.instance.setValue("show2", true);
  }
});

autorun(() => {
  let trigger = ggb2.innerData["E"];
  if (trigger[0] > 0.02) {
    ggb2.instance.setValue("show1", true);
  }
});

/* autorun(() => {
  let triggers = [ggb2.innerData["lowParam"], ggb2.innerData["highParam"]];
  if (!arrayEquals(triggers, getData("last"))) {
    button1.updateData({
      text: "Submit",
      disabled: false,
      last: [...triggers], // change this if we need this button
    });

  }
}); */

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

button2.on("click", () => {
  reset(ggb2);
});

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

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":2,"buttongroup":1,"button":2},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Print Alt: Exploring Key Features of a Function and Its Graph","teacherView":true,"layout":"T layout"}
*/
