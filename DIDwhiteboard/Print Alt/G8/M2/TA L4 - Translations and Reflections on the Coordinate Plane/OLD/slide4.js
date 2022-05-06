const { ggb1, text1, select1 } = components;

slide.on("firstload", () => {
  ggb1.instance.setVisible("tranVec", true);
  ggb1.instance.setAnimating("timeMove", false);
  ggb1.instance.setValue("timeMove", 1);
  select1.selectOption("1");
});

let data = getFromSlide("slide-845df5789f0c", "ggb1");

if (data.innerData) {
  slide2x = data.innerData["xVal"];
  slide2y = data.innerData["yVal"];
  ggb1.instance.evalCommand(`DragPoint=(${slide2x},${slide2y})`);
}

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setGridVisible(true);
    ggb1.instance.setAxesVisible(true, true);
  } else {
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);
  }
});
