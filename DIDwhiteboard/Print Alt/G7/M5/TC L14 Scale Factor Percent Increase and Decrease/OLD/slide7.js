const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredMult = 0.8;
ggb1.instance.setValue("platformPrintBBool", false);
ggb1.instance.setValue("platformPrintCBool", true);
ggb1.instance.setValue("platformModeBool", false);
ggb1.instance.setValue("outlineMult", desiredMult);
ggb1.instance.setValue("origDimensionsBool", true);
ggb1.instance.setValue("outlineBool", false);

autorun(() => {
  let time = ggb1.innerData["time"];
  let width = ggb1.innerData["scaleWidth"];
  let height = ggb1.innerData["scaleHeight"];
  ggb1.instance.setValue("imageOrigOutlineBool", false);
  ggb1.instance.setValue("outlineGreenBool", false);
  ggb1.instance.setValue("outlineRedBool", false);

  if (time > 0) {
    ggb1.instance.setValue("imageOrigOutlineBool", true);
  }
  if (time == 1 && ggb1.instance.getValue("multiplier") == desiredMult) {
    ggb1.instance.setValue("outlineBool", false);
    ggb1.instance.setValue("outlineGreenBool", true);
  } else if (time == 1 && ggb1.instance.getValue("multiplier") != desiredMult) {
    ggb1.instance.setValue("outlineBool", false);
    ggb1.instance.setValue("outlineRedBool", true);
  }
});
