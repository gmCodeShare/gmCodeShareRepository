const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredMult = 2.85;
ggb1.instance.setValue("platformPrintBBool", false);
ggb1.instance.setValue("platformPrintCBool", false);
ggb1.instance.setValue("outlineMult", desiredMult);
ggb1.instance.setValue("origDimensionsBool", true);
ggb1.instance.setValue("outlineBool", true);

let shareTextShown = false;

autorun(() => {
  let time = ggb1.innerData["time"];
  let multiplier = ggb1.innerData["multiplier"];
  let printedValue;
  let percentsOrDecimalsOpposite;
  ggb1.instance.setValue("imageOrigOutlineBool", false);
  if (time > 0) {
    ggb1.instance.setValue("imageOrigOutlineBool", true);
  }
  if (time < 1) {
    ggb1.instance.setValue("outlineGreenBool", false);
    ggb1.instance.setValue("outlineRedBool", false);
    ggb1.instance.setValue("outlineBool", true);
  } else if (time == 1 && multiplier == desiredMult) {
    ggb1.instance.setValue("outlineBool", false);
    ggb1.instance.setValue("outlineGreenBool", true);
  } else if (time == 1 && multiplier != desiredMult) {
    ggb1.instance.setValue("outlineBool", false);
    ggb1.instance.setValue("outlineRedBool", true);
  }
  if (ggb1.innerData["percentBool"] == true) {
    percentsOrDecimalsOpposite = "decimals";
    printedValue = "$285\\%$";
  } else {
    percentsOrDecimalsOpposite = "percents";
    printedValue = "$2.85$";
  }
});
