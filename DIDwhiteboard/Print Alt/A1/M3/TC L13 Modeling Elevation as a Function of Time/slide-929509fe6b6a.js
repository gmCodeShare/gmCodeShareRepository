const { textDisplay2, media5, buttonGroup1, feedback, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setMode(62);

buttonGroup1.on("click:1", () => {
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  // console.log(allPenstrokes);
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb1.instance.setVisible(allPenstrokes[i], false);
  }
});

buttonGroup1.on("click:2", () => {
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  // console.log(allPenstrokes);
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb1.instance.setVisible(allPenstrokes[i], true);
  }
});

/*
{"compTotals":{"textbox":2,"media":1,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"T layout"}
*/
