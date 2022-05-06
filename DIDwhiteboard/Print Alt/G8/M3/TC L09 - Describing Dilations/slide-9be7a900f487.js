const { ggb1, separator2, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on("click:1", () => {
  let rand = ggb1.instance.getValue("RandomBetween(0.02 50,50 rMax)/50");
  let newPoly = ggb1.instance.evalCommandGetLabels(
    "Dilate({basePoly}," + rand + ",center)"
  );
  ggb1.instance.setFixed(newPoly, true, false);
  ggb1.instance.setColor(newPoly, 218, 41, 28);
  ggb1.instance.setCaption(newPoly, "rando");
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  const randos = ggb1.instance
    .getAllObjectNames()
    .filter((tri) => ggb1.instance.getCaption(tri) === "rando");
  for (let i = 0, L = randos.length; i < L; i++) {
    ggb1.instance.deleteObject(randos[i]);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Launch","lessonInfo":"8 M3 TC L09 - Print Alternate Slide Deck for Describing Dilations","teacherView":true,"layout":"one col"}
*/
