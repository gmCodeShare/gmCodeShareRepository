const { ggb1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  const showScatter = ggb1.innerData["showScatter"];
  buttonGroup1.updateSingleButton({ disabled: showScatter }, 1);
  buttonGroup1.updateSingleButton({ disabled: !showScatter }, 2);
});

buttonGroup1.on("click:1", toggleScatter);

buttonGroup1.on("click:2", toggleScatter);

function toggleScatter() {
  ggb1.instance.setValue("showScatter", !ggb1.instance.getValue("showScatter"));
}
