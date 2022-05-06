const { ggb1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showOrigGraph", false);
  ggb1.instance.setValue("showFakeGrids", true);
  ggb1.instance.setAxesVisible(false, false);
  ggb1.instance.setGridVisible(false);

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation("time");
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  ggb1.instance.setVisible("Intercept1", false);
  ggb1.instance.setVisible("Intercept2", false);
  ggb1.instance.setVisible("Intercept3", false);
  ggb1.instance.setVisible("Intercept4", false);
});

/*
{"compTotals":{"geogebra":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Print Alt: Solution Sets of Systems of Linear Inequalities","teacherView":true,"layout":"two col"}
*/
