const { ggb1, button1, media1 } = components;

(() => {
  if (!getData("init")) {
    button1.updateData({ align: "right" });
    ggb1.instance.setValue("show2", false);
    ggb1.instance.setValue("show1", false);
    ggb1.instance.setValue("show4", true);
    saveData({ init: true });
  }
})();

media1.on("ready", ({ data: vid }) => {
  vid.time(24);
  button1.on("click", () => {
    button1.updateData({ disabled: true, text: "Submitted" });
    vid.play();
  });
  vid.bind("end", controls.next);
});

autorun(() => {
  const { TL, BL, BR } = ggb1.innerData;
  button1.updateData({ disabled: false, text: "Submit" });
});

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
