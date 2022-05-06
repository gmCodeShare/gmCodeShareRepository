const {
  ggb1,
  feedback1,
  textDisplay1,
  ggb2,
  button1,
  button2,
  image1,
  separator4,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button2.updateData({ visible: false });
  ggb1.instance.showToolBar(false);
  image1.updateData({ visible: false });
  ggb1.instance.setVisible("f_5", false);
  ggb1.instance.setVisible("Point1", false);
  ggb1.instance.setVisible("Point2", false);
  ggb1.instance.setVisible("Point3", false);
  ggb1.instance.setVisible("Point4", false);
  ggb1.instance.setVisible("Point5", false);
  ggb1.instance.setVisible("Point6", false);
  ggb1.instance.setVisible("Point7", false);
  ggb1.instance.setVisible("Point8", false);
  ggb1.instance.setVisible("Point9", false);
  ggb1.instance.setVisible("Point10", false);
  ggb1.instance.setVisible("Point11", false);
  ggb1.instance.setVisible("Point12", false);
  ggb1.instance.setVisible("Point13", false);
  ggb1.instance.setVisible("Point14", false);
  ggb1.instance.setVisible("Point15", false);
  ggb1.instance.setVisible("Point16", false);
  ggb1.instance.setVisible("Point17", false);
  ggb1.instance.setVisible("Point18", false);
  ggb1.instance.setVisible("Point19", false);
  ggb1.instance.setVisible("Point20", false);
  ggb1.instance.setVisible("Point21", false);
});

/*utils.RTS.on("datachange", "slide-3b6db967be76", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  // the FLASH
  let allFlashPoints = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0, L = allFlashPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allFlashPoints[i]);
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const sketches = data.myDoodles;
    for (let i = 0; i < sketches.length; i++) {
      let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
      ggb1.instance.setFixed(name, false, false);
      ggb1.instance.setColor(name, 130, 63, 152);
    }
  });
});*/
const sketches2 =
  getFromSlide(`slide-3b6db967be76`, `ggb1.innerData.doodles2`, []) || [];
// console.log(sketches2);
for (let i = 0; i < sketches2.length; i++) {
  let name2 = ggb1.instance.evalCommandGetLabels(sketches2[i]);
  ggb1.instance.setFixed(name2, false, false);
  ggb1.instance.setColor(name2, 242, 106, 54);
  ggb1.instance.setLineThickness(name2, 6);
  //console.log(name);
}

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

button1.on("click", () => {
  button2.updateData({ visible: true });
  button1.updateData({ visible: false });
  image1.updateData({ visible: true });
  ggb1.instance.setVisible("f_5", true);
  false;
  ggb1.instance.setAnimating("timeAnimate");
  ggb1.instance.setValue("timeAnimate", -10);
  ggb1.instance.setAnimating("timeAnimate", true);
  ggb1.instance.startAnimation();
  //ggb2.updateData({ visible: false });
});

button2.on("click", () => {
  button2.updateData({ visible: false });
  button1.updateData({ visible: true });
  image1.updateData({ visible: false });
  ggb1.instance.setVisible("f_5", false);
  // ggb2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":2,"textbox":2,"button":2,"uploaded-image":1,"separator":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - Print Alt Slide Deck for The Graph of a Function","teacherView":true,"layout":"two col"}
*/
