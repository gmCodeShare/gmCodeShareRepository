const { ggb1, buttonGroup1, button1 } = components;

slide.on("firstload", () => {
  button1.updateData({ outline: true });
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setValue("show", ggb1.instance.getValue("show") - 1);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("show", ggb1.instance.getValue("show") + 1);
});

buttonGroup1.on("click:3", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

button1.on("click", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setValue("show", 1);
});

autorun(() => {
  const show = ggb1.innerData["show"];
  buttonGroup1.updateSingleButton({ disabled: show <= 1 }, 1);
  buttonGroup1.updateSingleButton(
    { disabled: show >= ggb1.instance.getValue("max") },
    2
  );
  buttonGroup1.updateSingleButton(
    { disabled: show != ggb1.instance.getValue("max") },
    3
  );
});

autorun(() => {
  let time1 = ggb1.innerData["time1"];
  if (time1 == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("time1", false);
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
  }
});
