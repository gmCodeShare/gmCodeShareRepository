const { ggb1, text1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("platformPrintBBool", false);
ggb1.instance.setValue("platformPrintCBool", false);
ggb1.instance.setValue("origDimensionsBool", true);

autorun(() => {
  let time = ggb1.innerData["time"];
  let width = Math.round(ggb1.innerData["scaleWidth"] * 1000000) / 1000000;
  let height = ggb1.innerData["scaleHeight"];
  ggb1.instance.setValue("imageOrigOutlineBool", false);
  if (time > 0) {
    ggb1.instance.setValue("imageOrigOutlineBool", true);
  }
  if (time < 1) {
    text2.updateData({ text: "" });
  } else if (time == 1 && width > 3.5 && height < 8) {
    // console.log(width);
    text2.updateData({ text: "Great!" });
  } else {
    text2.updateData({ text: "Keep trying!" });
  }
});
