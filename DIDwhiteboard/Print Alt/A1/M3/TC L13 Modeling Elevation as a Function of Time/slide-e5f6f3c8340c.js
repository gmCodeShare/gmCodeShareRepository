const { textDisplay2, media1, feedback, ggb1, separator1, buttonGroup1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
buttonGroup1.updateData({ visible: false });
ggb1.instance.setValue("speed", 0.6);

/* const allStrokes = ggb1.instance.getAllObjectNames("penstroke");
if (allStrokes.length) {
  adds(allStrokes[0]); // this enables ok erase responsiveness
} */

// slide.on("firstload", () => {
ggb1.instance.showToolBar(false);
// });

media1.on("ready", ({ data: vidInstance }) => {
  vidInstance.bind("timechange", (t) => {
    ggb1.instance.stopAnimation();
    let ggbTime = adjustTime(t);
    if (ggbTime > 0 && vidInstance.state() === "playing") {
      ggb1.instance.setAnimating("time", true);
      ggb1.instance.startAnimation();
    }
    ggb1.instance.setValue("time", ggbTime);
  });
});

function adjustTime(time) {
  // on screen timer starts at t = 2.559459
  return Math.min(Math.max(0, time - 2.559459), 16) / 16;
}

buttonGroup1.on("click:1", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

/* autorun(() => {
  const enableTimes = [0, 1];
  buttonGroup1.updateSingleButton(
    {
      disabled: !enableTimes.includes(ggb1.innerData["time"]),
    },
    1
  );
}); */

/*const prevSketches =
  getFromSlide("slide-c79aa62c31a4", "ggb1.data.strokeStrings") || [];
const currentSketches = ggb1.instance.getAllObjectNames("penstroke");
if (prevSketches.length && (!ggb1.data.init || !currentSketches.length)) {
  for (let i = 0, L = currentSketches.length; i < L; i++) {
    ggb1.instance.deleteObject(currentSketches[i]);
  }
  for (let i = 0, L = prevSketches.length; i < L; i++) {
    const newSketch = ggb1.instance.evalCommandGetLabels(prevSketches[i]);
    ggb1.instance.setColor(newSketch, 0, 0, 0);
    ggb1.instance.setFixed(newSketch, false, false);
  }
}

ggb1.instance.registerAddListener(adds);

function adds(name) {
  if (ggb1.instance.getObjectType(name) == "penstroke") {
    ggb1.updateData({ init: true });
  }
}*/
const sketches =
  getFromSlide("slide-c79aa62c31a4", "ggb1.innerData.doodles", []) || [];

for (let i = 0; i < sketches.length; i++) {
  let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
  ggb1.instance.setFixed(name, false, false);
  ggb1.instance.setColor(name, 242, 106, 54);
  ggb1.instance.setLineThickness(name, 2);
  ggb1.instance.setCaption(name, "ignore");
  //console.log(name);
}

/*
{"compTotals":{"textbox":2,"media":1,"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"T layout"}
*/
