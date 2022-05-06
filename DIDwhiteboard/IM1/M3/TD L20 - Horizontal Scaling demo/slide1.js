const { ggb1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("horizScale", true);
});

button1.on("click", () => {
  result = utils.math.evaluateLatex(fib1.getInput(0).text);
  const min = 0.01;
  const max = 100;
  num = boundIt(result, 0, min, max);
  ggb1.instance.setValue("k", num);
  ggb1.instance.setValue("showScale", true);
  button1.updateData({ disabled: true });
});

fib1.on("change", ({ values }) => {
  button1.updateData({ disabled: false });
  ggb1.instance.setValue("showScale", false);
});

function boundIt(result, position, min, max) {
  if (result.error) {
    fib1.updateInput(position, { text: `${min}` });
    return min;
  } else if (result.value < min) {
    fib1.updateInput(position, { text: `${min}` });
    return min;
  } else if (result.value > max) {
    fib1.updateInput(position, { text: `${max}` });
    return max;
  }
  return result.value;
}
