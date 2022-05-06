const { ggb1, cc_sharewithclass_89484d9a56fd_button1: shareButton1 } =
  components;

const points = ["P1", "P2", "P3"];

if (!getData("initialized")) {
  // set initial states
  points.forEach((point) => {
    ggb1.instance.setVisible(point, false);
  });
  // save status
  saveData({ initialized: true });
}

shareButton1.on("click", () => {
  function createPoint() {
    let randX = -11 + Math.random() * 22;
    let randY = -11 + Math.random() * 22;
    // check random values to see if they're in the solution region
    // if not, delete it and try again to reduce number of points at borders
    const checkPoint = ggb1.instance.evalCommandGetLabels(
      `(${randX},${randY})`
    );
    const inRegion = !!ggb1.instance.getValue(
      `IsInRegion(${checkPoint}, solRegion)`
    );
    ggb1.instance.deleteObject(checkPoint);
    if (!inRegion) {
      randX = -11 + Math.random() * 22;
      randY = -11 + Math.random() * 22;
    }
    const newPoint = ggb1.instance.evalCommandGetLabels("PointIn(solRegion)");
    ggb1.instance.setFixed(newPoint, false, false);
    ggb1.instance.setCoords(newPoint, randX, randY);
  }
  let ms = 200;
  function timeout() {
    const allPoints = ggb1.instance.getAllObjectNames("point");
    if (allPoints.length > 500) {
      ggb1.instance.setValue("showSolRegion", true);
      return;
    }
    if (ms > 100) {
      ms -= 5;
    }
    setTimeout(() => {
      createPoint();
      timeout();
    }, ms);
  }
  timeout();
});

// RTS

utils.RTS.on("datachange", "slide-0bca97913e87", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // flash
  const allPoints = ggb1.instance.getAllObjectNames("point");
  allPoints.forEach((point) => {
    if (ggb1.instance.getCaption(point) === "studentPoint") {
      ggb1.instance.deleteObject(point);
    }
  });

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  lastRegister.forEach(({ data, info }) => {
    const incomingPoints = Object.values(data);
    incomingPoints.forEach(({ x, y, inRegion }) => {
      if (inRegion) {
        const newPoint = ggb1.instance.evalCommandGetLabels("(0,0)");
        ggb1.instance.setCoords(newPoint, x, y);
        ggb1.instance.setFixed(newPoint, false, false);
        ggb1.instance.setCaption(newPoint, "studentPoint");
      }
    });
  });
});

// library

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
