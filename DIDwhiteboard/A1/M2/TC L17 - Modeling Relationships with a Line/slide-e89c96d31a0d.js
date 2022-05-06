const { text1, select1 } = components;

if (!getData("initialized")) {
  // set initial states
  select1.selectOption("0");
  // save status
  saveData({ initialized: true });
}

select1.on("change", ({ selected }) => {
  utils.RTS.sendData("slide-e89c96d31a0d", {
    showProvided: selected.includes("1"),
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

/*
{"compTotals":{"textbox":1,"select":1},"stage":"Launch","lessonInfo":"9 M2 TC L17 - Modeling Relationships with a Line","teacherView":true,"layout":"one col"}
*/
