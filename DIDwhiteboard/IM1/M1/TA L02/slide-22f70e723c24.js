const {
  ggb1,
  cc_submit_370e2aff1a01_textbox1: submitText1,
  cc_submit_370e2aff1a01_input1: submitInput1,
  cc_submit_370e2aff1a01_button1: submitButton1,
  cc_sharewithclass_82c7b90c966f_textbox1: shareText1,
  cc_sharewithclass_82c7b90c966f_input1: shareInput1,
  cc_sharewithclass_82c7b90c966f_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!getData("init")) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.instance.setValue("show", 5);
    ggb1.instance.setValue("showControl", true);
    ggb1.instance.setValue("showPerimeter", true);
    const allSegs = ggb1.instance.getAllObjectNames("segment");
    const ignoreSegs = ["left", "right"];
    for (let i = 0, L = allSegs.length; i < L; i++) {
      if (!ignoreSegs.includes(allSegs[i])) {
        ggb1.instance.setColor(allSegs[i], 160, 160, 160);
      }
    }
    saveData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

shareButton1.on("click", () => {
  utils.RTS.sendData("slide-9da1dbdb3ec5", {
    exp: shareInput1.data.text,
  });
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
