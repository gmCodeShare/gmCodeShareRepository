const { ggb1, input1, button1, select1, media1 } = components;

(() => {
  if (!getData("init")) {
    select1.selectOption("0");
    saveData({ init: true });
  }
})();

media1.on("ready", ({ data: vid }) => {
  const endTime = vid.duration();
  vid.time(37);
  vid.bind("betweentimes", 47, endTime, (withinInterval) => {
    if (withinInterval) {
      controls.next;
    }
  });
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
  ggb1.instance.setValue("inputLength", result.value);
  configAnimations();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

function configAnimations() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
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
