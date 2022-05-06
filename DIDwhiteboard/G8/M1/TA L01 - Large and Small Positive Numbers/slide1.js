const { ggb1, ggb2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

function playIt() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("last", ggb1.instance.getValue("next"));
  ggb1.instance.setValue("next", ggb2.instance.getValue("selPower"));
  ggb1.instance.setValue("selPower", ggb2.instance.getValue("selPower"));
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
}

ggb2.instance.registerObjectUpdateListener("selPower", playIt);

autorun(() => {
  let time = ggb1.innerData["time"];
  let next = ggb1.innerData["next"];
  // ggb1.instance.setValue("time", time);
  const enableVals = [0, 1];
  buttonGroup1.updateSingleButton(
    { disabled: !enableVals.includes(time) || next == -12 },
    1
  );
  buttonGroup1.updateSingleButton(
    { disabled: !enableVals.includes(time) || next == 27 },
    2
  );
  if (time == 1) {
    if (ggb1.instance.getValue("max") > 10 ** 5) {
      ggb1.instance.setColor("text1", 255, 255, 255);
    } else {
      ggb1.instance.setColor("text1", 0, 0, 0);
    }
  }
});

buttonGroup1.on("click:1", () => {
  ggb2.instance.evalCommand(
    "SetValue(fakeOptions, SelectedIndex(fakeOptions) - 1)"
  );
  // playIt();
  // console.log("1 clicked");
});

buttonGroup1.on("click:2", () => {
  ggb2.instance.evalCommand(
    "SetValue(fakeOptions, SelectedIndex(fakeOptions) + 1)"
  );
  // playIt();
  // console.log("2 clicked");
});
