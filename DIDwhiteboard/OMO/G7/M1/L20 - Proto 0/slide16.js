const { ggb1, input1, button1, media1, select1 } = components;

(() => {
  if (!getData("init")) {
    select1.selectOption("0");
    saveData({ init: true });
  }
})();

media1.on("ready", ({ data: vid }) => {
  vid.time(37);
  vid.bind("end", controls.next);
  if (getData("submitted")) {
    vid.play();
  }
});

select1.on("change", ({ selected }) => {
  ggb1.updateData({ visible: selected.includes("0") });
  media1.updateData({ visible: selected.includes("1") });
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (result.error) {
    return;
  }
  saveData({ submitted: true });
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
