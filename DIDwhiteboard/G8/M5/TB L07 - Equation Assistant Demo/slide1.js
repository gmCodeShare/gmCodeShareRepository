const { fib1, fib2, fib3, button1, button2, button3, button4, ggb1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

function showControls(bool) {
  fib2.setVisible(bool);
  fib3.setVisible(bool);
  button2.updateData({ visible: bool });
  button3.updateData({ visible: bool });
  button4.updateData({ outline: true });
}

slide.on("firstload", () => {
  fib1.updateInput(0, { text: "y=\\frac{2}{3}x", type: "math" });
  showControls(false);
  ggb1.updateData({ visible: false, visibilityBehavior: "hide" });
  button2.updateData({ disabled: true });
  button3.updateData({ disabled: true });
});

fib1.on("change", ({ values }) => {
  ggb1.instance.setTextValue("grandAddend", "0");
  ggb1.instance.setTextValue("grandScale", "1");
  button1.updateData({ disabled: !fibFilled(values) });
  fib2.clear();
  fib3.clear();
  showControls(false);
});

fib2.on("change", ({ values }) => {
  button2.updateData({ disabled: !fibFilled(values) });
});

fib3.on("change", ({ values }) => {
  button3.updateData({ disabled: !fibFilled(values) });
});

function fibFilled(values) {
  return values.every((val) => !!val.text);
}

button1.on("click", () => {
  let GGBready = unLaTeX(fib1.data.values[0].text);
  if (GGBready) {
    showControls(true);
    ggb1.updateData({ visible: true });
    button1.updateData({ disabled: true });
    ggb1.instance.setTextValue("eqText", GGBready);
  }
});

button2.on("click", () => {
  if (addit()) {
    button2.updateData({ disabled: true });
  }
});

button3.on("click", () => {
  if (mult()) {
    button3.updateData({ disabled: true });
  }
});

button4.on("click", () => {
  ggb1.instance.setTextValue("grandAddend", "0");
  ggb1.instance.setTextValue("grandScale", "1");
  showControls(false);
  ggb1.instance.setTextValue("eqText", "y = 2 / 3 * 1 x");
  fib2.clear();
  fib3.clear();
  fib1.updateInput(0, { text: "y=\\frac{2}{3}x", type: "math" });
});

function mult() {
  let multText = fib3.getInput(0).text;
  const result = unLaTeX(multText);
  if (!result) {
    return false;
  }
  // let check = Number(ggb1.instance.getValueString("scale"));
  if (result != 0) {
    ggb1.instance.setTextValue("scale", `${result}`);
    let newScalar = ggb1.instance
      .evalCommandCAS("scale * grandScale")
      .replace(/(\S*) \/ (\S*)/g, "$1 / $2 * 1");
    ggb1.instance.setTextValue("grandScale", newScalar);
    let newAddend = ggb1.instance
      .evalCommandCAS("scale * grandAddend")
      .replace(/(\S*) \/ (\S*)/g, "$1 / $2 * 1");
    ggb1.instance.setTextValue("grandAddend", newAddend);
    return true;
  }
  return false;
}

function addit() {
  let addText = fib2.getInput(0).text;
  const result = unLaTeX(addText);
  if (!result) {
    return false;
  }
  ggb1.instance.setTextValue("addend", `${result}`);
  let newAddend = ggb1.instance
    .evalCommandCAS("(grandAddend)+addend")
    .replace(/(\S*) \/ (\S*)/g, "$1 / $2 * 1");
  // console.log("newAddend", newAddend);
  ggb1.instance.setTextValue("grandAddend", newAddend);
  return true;
}

function unLaTeX(latex, ...vars) {
  // x and y are first class citizens in GGB; need to anonymize
  vars.push("eksX", "wieY");
  // define variables so GGB can write equations with them
  ggb1.instance.setErrorDialogsActive(false);
  for (let i = 0, L = vars.length; i < L; i++) {
    if (vars[i] && !ggb1.instance.exists(vars[i])) {
      const newVar = ggb1.instance.evalCommandGetLabels(`${vars[i]} = 1`);
      ggb1.instance.setVisible(newVar, false);
    }
  }
  let generalXY = latex.replaceAll("x", "eksX").replaceAll("y", "wieY");
  ggb1.instance.evalLaTeX(`dummy: ${generalXY}`);
  let defString = ggb1.instance.getDefinitionString("dummy");
  // functions don't like definition strings
  if (!defString) {
    defString = ggb1.instance
      .getValueString("dummy")
      .replace("dummy(x) = ", "")
      .replace("dummy", "")
      .replace(":", "");
  }
  // un-anonymize and patch fractions
  defString = defString
    .replaceAll("eksX", "x")
    .replaceAll("wieY", "y")
    .replace(/(\S*) \/ (\S*)/g, "$1 / $2 * 1");
  // console.log(defString);
  ggb1.instance.deleteObject("dummy");
  return defString;
}
