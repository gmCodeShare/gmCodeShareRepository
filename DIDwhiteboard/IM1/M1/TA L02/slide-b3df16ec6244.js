const {
  ggb1,
  fib1,
  submitButton1,
  cc_sharewithclass_af1232b15c32_textbox1: shareText1,
  cc_sharewithclass_af1232b15c32_input1: shareInput1,
  cc_sharewithclass_af1232b15c32_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!getData("init")) {
    const allPoints = ggb1.instance.getAllObjectNames("point");
    for (let i = 0, L = allPoints.length; i < L; i++) {
      const current = allPoints[i];
      ggb1.instance.setVisible(current, false);
    }
    ggb1.instance.setGridVisible(false);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    submitButton1.updateData({ align: "right", disabled: true });
    saveData({ init: true });
  }
}

fib1.on("change", ({ values }) => {
  submitButton1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  submitButton1.updateData({ text: "Submitted", disabled: true });
});

const obsoleteSegs = ggb1.instance
  .getAllObjectNames("segment")
  .filter((seg) => ggb1.instance.getCaption(seg) === "prev");

for (let i = 0, L = obsoleteSegs.length; i < L; i++) {
  ggb1.instance.deleteObject(obsoleteSegs[i]);
}

const prevSegs =
  getFromSlide("slide-10b318d0c944", "text1.storage.segStrings", []) || [];

for (let i = 0, L = prevSegs.length; i < L; i++) {
  const newSeg = ggb1.instance.evalCommandGetLabels(prevSegs[i]);
  ggb1.instance.setColor(newSeg, 130, 63, 152);
  ggb1.instance.setFixed(newSeg, false, false);
  ggb1.instance.setCaption(newSeg, "prev");
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
