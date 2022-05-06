function ggbOnInit() {
  ggbApplet.setSize(590, 590);
  ggbApplet.registerObjectUpdateListener("step", "hup234");
  ggbApplet.registerObjectUpdateListener("time", "moveIt");
}
ggbApplet.setValue("step", 0);

function hup234() {
  if (ggbApplet.getValue("step") == 1) {
    popul8();
  }
  if (ggbApplet.getValue("step") == 2) {
    ggbApplet.setAnimating("time", true);
    ggbApplet.startAnimation();
  }
  if (ggbApplet.getValue("step") == 3) {
    reset();
  }
}

let allPoints = [];
let factorCase = 0;

function popul8() {
  let arrayNumber = ggbApplet.getValue("factor1");
  switch (factorCase) {
    case 1: //3*60
      for (let j = 0, rowNumber = ggbApplet.getValue("factor1") * (ggbApplet.getValue("factor2") + 1); j < rowNumber; j++) {
        for (let i = 0, rowLength = ggbApplet.getValue("factor3"); i < rowLength; i++) {
          ggbApplet.evalCommand("Point" + j + i + "=CopyFreeObject(ig7+(" + i + ",-(" + j + ")))");
          allPoints.push("Point" + j + i);
          ggbApplet.setFixed("Point" + j + i, true, false);
        }
      }
      break;
    case 2: //3*(6*10)
      for (let j = 0, rowNumber = ggbApplet.getValue("factor1") * (ggbApplet.getValue("factor2") + 1); j <= rowNumber; j++) {
        for (let i = 0, rowLength = ggbApplet.getValue("factor3"); i < rowLength; i++) {
          ggbApplet.evalCommand("Point" + j + i + "=CopyFreeObject(ig7+(" + i + ",-(" + j + ")))");
          allPoints.push("Point" + j + i);
          ggbApplet.setFixed("Point" + j + i, true, false);
          if (j % (ggbApplet.getValue("factor2") + 1) == 0) {
            ggbApplet.setVisible("Point" + j + i, false);
          }
        }
      }
      break;
    case 3: //(3*6)*10
      for (let j = 0, rowNumber = ggbApplet.getValue("factor2"); j < rowNumber; j++) {
        for (let i = 0, rowLength = ggbApplet.getValue("factor3"); i < rowLength; i++) {
          ggbApplet.evalCommand("Point" + j + i + "=CopyFreeObject(ig7+(" + i + ",-(" + j + ")))");
          allPoints.push("Point" + j + i);
          ggbApplet.setFixed("Point" + j + i, true, false);
        }
      }
      break;
  }
}

function moveIt() {
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggbApplet.setVisible(allPoints[i], false);
    ggbApplet.evalCommand("Translate(" + allPoints[i] + ",time*(-sectionWidth,0))");
  }
}

function reset() {
  ggbApplet.setValue("step", 0);
  for (let i = 0, L = allPoints.length; i < L; i++) {
    if (!allPoints[i].includes("ig")) {
      ggbApplet.deleteObject(allPoints[i]);
    }
  }
}