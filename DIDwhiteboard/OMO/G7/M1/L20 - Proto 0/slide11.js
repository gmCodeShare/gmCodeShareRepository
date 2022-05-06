const { ggb1, ggb2, input1, button1 } = components;

ggb2.instance.registerObjectUpdateListener("factor1", () => {
  link("factor1");
  configAnimations();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  button1.updateData({ disabled: !input1.data.text });
});

ggb2.instance.registerObjectUpdateListener("factor2", () => {
  link("factor2");
  configAnimations();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  button1.updateData({ disabled: !input1.data.text });
});

function link(name) {
  ggb1.instance.setValue(name, ggb2.instance.getValue(name));
}

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.error) {
    return;
  }
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("inputFactor", result.value);
  configAnimations();
  ggb1.instance.setValue("time1", 0);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.startAnimation();
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

autorun(() => {
  const time = ggb1.innerData["time1"];
  if (time == 1) {
    configAnimations();
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
  }
});

function configAnimations() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setAnimating("time2", false);
}
