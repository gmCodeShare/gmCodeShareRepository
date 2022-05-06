const { ggb1, ggb2 } = components;

ggb2.instance.registerObjectUpdateListener("factor1", () => {
  link("factor1");
});

ggb2.instance.registerObjectUpdateListener("factor2", () => {
  link("factor2");
});

function link(name) {
  ggb1.instance.setValue(name, ggb2.instance.getValue(name));
}
