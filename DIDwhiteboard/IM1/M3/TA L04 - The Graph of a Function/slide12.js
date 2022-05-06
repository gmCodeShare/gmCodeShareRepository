const { ggb1, ggb2, button1, button2, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

ggb1.instance.setMode(62);

slide.on("firstload", () => {
  ggb1.instance.setValue("count", -10);
  button1.updateData({ disabled: true });
  text2.updateData({ visible: false });
  ggb1.instance.setVisible("f_5", false);
});

// const sketches2 =
//   getFromSlide(`slide-a7b672b5dd25`, `ggb1.innerData.doodles2`, []) || [];
// // console.log(sketches2);
// for (let i = 0; i < sketches2.length; i++) {
//   let name2 = ggb1.instance.evalCommandGetLabels(sketches2[i]);
//   ggb1.instance.setFixed(name2, false, false);
//   ggb1.instance.setColor(name2, 242, 106, 54);
//   ggb1.instance.setLineThickness(name2, 2);
//   ggb1.instance.setCaption(name2, "ignore");
//   //console.log(name);
// }

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();

function getDoodles() {
  let doodleArray = [];
  let doodleArray2 = [];
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb1.instance.getCommandString(allPenstrokes[i]));
  }
  let curvyPenstrokes = allPenstrokes.filter(
    (doodle) => ggb1.instance.getCaption(doodle) != "ignore"
  );
  for (let i = 0; i < curvyPenstrokes.length; i++) {
    doodleArray2.push(ggb1.instance.getCommandString(curvyPenstrokes[i]));
  }
  ggb1.updateInnerData({ doodles: doodleArray });
  ggb1.updateInnerData({ doodles2: doodleArray2 });
  // console.log(doodleArray);
  utils.RTS.sendData("slide-3b6db967be76", {
    myDoodles: ggb1.innerData[`doodles2`],
  });
}

function resetAnimation() {
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue("time", 0);
  ggb2.instance.setAnimating("time", true);
  ggb1.instance.setValue("count", -10);
}

button2.on("click", () => {
  button2.updateData({ disabled: true });
  button1.updateData({ disabled: false });
  resetAnimation();
  ggb2.instance.startAnimation();
});

button1.on("click", () => {
  resetAnimation();
  button1.updateData({ disabled: true });
  button2.updateData({ disabled: false });
});

ggb2.instance.registerObjectUpdateListener("numFinished", updateRight);
function updateRight() {
  const leftCount = ggb2.instance.getValue("numFinished") / 4 - 10;
  ggb1.instance.setValue("count", leftCount);
}

// autorun(() => {
//   let Count2 = ggb1.innerData["count"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
//   ggb2.instance.setValue("count", ggb1.instance.getValue("count"));
//   // console.log(Count2);
// });
