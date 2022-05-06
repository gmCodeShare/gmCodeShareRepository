const {
  text1,
  text2,
  ggb1,
  separator4,
  button1,
  feedback,
  text3,
  ggb2,
  separator5,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
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

button1.on("click", () => {
  reset(ggb1);
});

button2.on("click", () => {
  reset(ggb2);
});

autorun(() => {
  let trigger = ggb1.innerData["I"];
  if (trigger[0] > 0.02) {
    ggb1.instance.setValue("show3", true);
  }
});

autorun(() => {
  let trigger = ggb1.innerData["G"];
  if (trigger[0] > 0.02) {
    ggb1.instance.setValue("show2", true);
  }
});

autorun(() => {
  let trigger = ggb1.innerData["E"];
  if (trigger[0] > 0.02) {
    ggb1.instance.setValue("show1", true);
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

// receive data section:
utils.RTS.on("datachange", "slide-7d04d771b18a", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  const allLists = ggb1.instance.getAllObjectNames("list");
  const deleteLists = allLists.filter((list) => !list.includes("points"));
  // for (const list of deleteLists) {
  //   ggb1.instance.deleteObject(list);
  // }
  deleteLists.forEach((list) => {
    ggb1.instance.deleteObject(list);
  });

  lastRegister.forEach(({ data, info }) => {
    /* params: [
      ggb2.instance.getValue("lowParam"),
      ggb2.instance.getValue("highParam"),
    ], */
    const { params } = data; // destructuring assignment, like for components
    const newPoints = ggb1.instance.evalCommandGetLabels(
      `Sequence(Point(jumps, i), i, ${params[0]}, ${params[1]}, 0.002)`
    );
    ggb1.instance.setVisible(newPoints, false);
    const newPLine = ggb1.instance.evalCommandGetLabels(
      `Polyline(${newPoints})`
    );
    ggb1.instance.setFixed(newPLine, false, false);
  });
});

utils.RTS.on("datachange", "slide-fbf629b044b7", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  const allLists = ggb2.instance.getAllObjectNames("list");
  const deleteLists = allLists.filter((list) => !list.includes("points"));
  deleteLists.forEach((list) => {
    ggb2.instance.deleteObject(list);
  });

  lastRegister.forEach(({ data, info }) => {
    /* params: [
      ggb2.instance.getValue("lowParam"),
      ggb2.instance.getValue("highParam"),
    ], */
    const { params } = data; // destructuring assignment, like for components
    const newPoints = ggb2.instance.evalCommandGetLabels(
      `Sequence(Point(jumps, i), i, ${params[0]}, ${params[1]}, 0.002)`
    );
    ggb2.instance.setVisible(newPoints, false);
    const newPLine = ggb2.instance.evalCommandGetLabels(
      `Polyline(${newPoints})`
    );
    ggb2.instance.setFixed(newPLine, false, false);
    ggb2.instance.setColor(newPLine, 218, 41, 28);
  });
});

// use this function as is
function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"textbox":4,"geogebra":2,"separator":2,"button":2},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"T layout"}
*/
