const { ggb1, fib1, button1, buttonGroup1 } = components;

const prob = 3;
const relevantSeg = "seg7";
const correctLength = "\\sqrt{26}";

if (!getData("initialized")) {
  // set initial states
  button1.updateData({ align: "right", disabled: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  configGGB();
  resetZoom(true, false);
  // save status
  saveData({ initialized: true });
}

function configGGB() {
  // ggb1.instance.setGridVisible(true);
  ggb1.instance.setAxesVisible(true, true);
  // set start and end points to this problem
  const { getXcoord: x, getYcoord: y } = ggb1.instance;
  const probStart = `Prob${prob}Start`;
  const probEnd = `Prob${prob}End`;
  ggb1.instance.setCoords("Start", x(probStart), y(probStart));
  ggb1.instance.setCoords("End", x(probEnd), y(probEnd));
  ggb1.instance.setVisible("Start", true);
  ggb1.instance.setVisible("End", true);
  ggb1.instance.setVisible(relevantSeg, true);
  // style segments not relevant to this problem
  ggb1.instance
    .getAllObjectNames("segment")
    .filter((seg) => seg.includes("seg"))
    .forEach((seg) => {
      if (seg !== relevantSeg) {
        ggb1.instance.setLineThickness(seg, 4);
        ggb1.instance.setColor(seg, 117, 117, 117);
      }
    });
}

function zoomIn() {
  resetZoom(false, true);
  ggb1.instance.startAnimation();
}

function resetZoom(showProblem, aboutToZoom) {
  ggb1.instance.stopAnimation();
  const probBool = `showProb${prob}`;
  ggb1.instance.setValue(probBool, showProblem);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setAnimating("timeZoom", aboutToZoom);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("timeZoom", 0);
}

autorun(() => {
  const time = ggb1.innerData["timeZoom"];
  if (time === 1) {
    const probBool = `showProb${prob}`;
    ggb1.instance.setValue(probBool, true);
  }
});

button1.on("click", () => {
  const guessRaw = fib1.getInput(0).text;
  const guessObj = boundIt(guessRaw, 0, 20, 0, true);
  // only show student's input in GGB if it's in-bounds
  if (guessObj.boundedVal !== guessObj.value) {
    fib1.updateInput(0, { text: guessObj.boundedVal });
  } else {
    button1.updateData({ disabled: true });
    ggb1.instance.setVisible(relevantSeg, false);
    ggb1.instance.setValue("inputLength", guessObj.boundedVal);
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.setAnimating("timeZoom", false);
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setValue("timeZoom", 1);
    ggb1.instance.setVisible(relevantSeg, false);
    ggb1.instance.startAnimation();
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
  const correct =
    utils.math.evaluateLatex(correctLength).value === guessObj.boundedVal;
  ggb1.instance.setValue("correct", correct);
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    disabled: !values.every(({ text }) => !!text),
  });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
});

buttonGroup1.on("click:1", () => {
  zoomIn();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  resetZoom(true, false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

// library
function boundIt(inputString, min, max, def = 0, moreInfo = false) {
  const { value, error } = utils.math.evaluateLatex(inputString);
  let boundedVal = value;
  if (error) {
    // what should the text do/say if students input "cabbage"?
    // whatever you go with here, make sure it's inside of your min and max!
    boundedVal = def;
  } else if (value < min) {
    boundedVal = min;
  } else if (value > max) {
    boundedVal = max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  // let flooredNum = Math.floor(value);
  // boundedVal = flooredNum;
  if (moreInfo) {
    return { boundedVal, value, error };
  }
  return boundedVal;
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
