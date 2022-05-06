const {
  ggb1,
  text2,
  cc_sharewithclass_8470cb5ad686_textbox1: shareText1,
  cc_sharewithclass_8470cb5ad686_input1: shareInput1,
  cc_sharewithclass_8470cb5ad686_button1: shareButton1,
} = components;

if (!getData("initialized")) {
  // set initial states
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  // save status
  saveData({ initialized: true });
}

ggb1.instance.registerObjectUpdateListener("P1", showSolutions);
ggb1.instance.registerObjectUpdateListener("P2", showSolutions);
ggb1.instance.registerObjectUpdateListener("P3", () => {
  showSolutions();
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
showSolutions();

function showSolutions() {
  function x(pointName) {
    return round(ggb1.instance.getXcoord(pointName), 1);
  }
  function y(pointName) {
    return round(ggb1.instance.getYcoord(pointName), 1);
  }
  const point1 = `$(${x("P1")},${y("P1")})$`;
  const point2 = `$(${x("P2")},${y("P2")})$`;
  const point3 = `$(${x("P3")},${y("P3")})$`;
  const text = `Your solutions: \n\n ${point1} \n\n ${point2} \n\n ${point3}`;
  text2.updateData({ text });
}

// RTS

const now = controls.current;
autorun(() => {
  if (controls.current != now) {
    const { getXcoord: x, getYcoord: y } = ggb1.instance;
    const points = ["P1", "P2", "P3"];
    const sendObject = points.reduce((acc, point) => {
      acc[point] = {
        x: x(point),
        y: y(point),
        inRegion: !!ggb1.instance.getValue(`${point}InRegion`),
      };
      return acc;
    }, {});
    utils.RTS.sendData("slide-0bca97913e87", sendObject);
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

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
