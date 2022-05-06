const { ggb1, button1, text2, text3, button2, button3 } = components;

if (!getData("initialized")) {
  // set initial states
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  button2.updateData({ visible: false, align: "right" });
  button3.updateData({ visible: false, align: "right" });
  ggb1.instance.setCoords("GreenDragPoint", 0, 0);
  ggb1.instance.setCoords("PurpleDragPoint", 0, 0);
  // save status
  saveData({ initialized: true });
}

ggb1.instance.setErrorDialogsActive(false);

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

button3.on("click", () => {
  button3.updateData({ disabled: true });
  text3.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.evalCommand("SetConditionToShowObject(NewPurple, true)");
});

button2.on("click", () => {
  button2.updateData({ disabled: true });
});

ggb1.instance.registerObjectUpdateListener("time", update);

function update() {
  if (ggb1.instance.getValue("time") == 1) {
    text2.updateData({ visible: true });
    button3.updateData({ visible: true });
  }
}

autorun(() => {
  // enable buttons only when points are moved
  const point = ggb1.innerData["NewGreen"];
  const coords = [point[0], point[1]];
  if (arrayEquals(coords, getData("NewGreenCoords"))) {
    return;
  }
  saveData({ NewGreenCoords: [...coords] });
  button3.updateData({ disabled: false });
});

autorun(() => {
  const point = ggb1.innerData["NewPurple"];
  const coords = [point[0], point[1]];
  if (arrayEquals(coords, getData("NewPurpleCoords"))) {
    return;
  }
  saveData({ NewPurpleCoords: [...coords] });
  button2.updateData({ disabled: false });
});

// ggb1.instance.registerObjectUpdateListener("NewGreen", () => {
//   button3.updateData({ disabled: false });
// });

// ggb1.instance.registerObjectUpdateListener("NewPurple", () => {
//   button2.updateData({ disabled: false });
// });

// ggb1.instance.registerObjectUpdateListener("count", labelStuff);

// function labelStuff() {
//   if (ggb1.instance.getValue("count") == 1) {
//     ggb1.instance.setLabelVisible("eq1", false);
//   } else {
//     ggb1.instance.setLabelVisible("eq1", true);
//   }
// }

// ggb1.instance.registerObjectUpdateListener("showPurple", update2);

// function update2() {
//   if (ggb1.instance.getValue("showPurple")) {
//     text3.updateData({ visible: true });
//     button2.updateData({ visible: true });
//   }
// }

// ggb1.instance.registerObjectUpdateListener("submitted", buttonStuff);

// function buttonStuff() {
//   if (!ggb1.instance.getValue("submitted")) {
//     button2.updateData({ disabled: false });
//   }
// }

/*autorun(() => {
  let purple = ggb1.innerData["NewPurple"];
  let green = ggb1.innerData["NewGreen"]; 
  button2.updateData({disabled: false});
});*/

utils.RTS.on("datachange", "slide-1a0fd993032e", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      a,
      b,
      c,
      d,
      e,
      f,
      total,
      total2,
      total3,
    } = data;
    if (total == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + a + "," + b + ")))"
      );
    }
    if (total2 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + c + "," + d + ")))"
      );
    }
    if (total3 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + e + "," + f + ")))"
      );
    }
    ggb1.instance.setVisible("pointList", true);
  });
});

utils.RTS.on("datachange", "slide-8e74cc3defa1", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList2={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      g,
      h,
      i,
      j,
      k,
      l,
      total4,
      total5,
      total6,
    } = data;
    if (total4 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + g + "," + h + ")))"
      );
    }
    if (total5 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + i + "," + j + ")))"
      );
    }
    if (total6 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + k + "," + l + ")))"
      );
    }
    ggb1.instance.setVisible("pointList2", true);
  });
});

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

// library

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

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
