const { ggb1, text1, input1, button1, fib1 } = components;

if (!getData("initialized")) {
  // set initial states
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  ggb1.instance.setVisible("lineOfBestFit", true);
  // save status
  saveData({ initialized: true });
}

ggb1.instance.setErrorDialogsActive(false);

let num = Math.round(ggb1.instance.getValue("slope") * 100) / 100;
let num2 = Math.round(ggb1.instance.getValue("yInt") * 100) / 100;

text1.updateData({
  text: `An equation of the line of best fit for the MONOPOLY data is\n\n$y = ${num}x + ${num2}$\n\nPredict the price of a property that is $30~$spaces from GO.`,
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(fib1.getInput(0).text);
  if (!result.error) {
    button1.updateData({ text: "Submitted", disabled: true });
    ggb1.instance.evalLaTeX(`slide12YVal= ${result.value}`);
    ggb1.instance.setVisible("Slide12Point", true);
  }
});

// library

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
