const {
  text1,
  table1,
  button2,
  feedback1,
  text2,
  text3,
  text4,
  text5,
  button1,
} = components;

slide.on("firstload", () => {
  button1.updateData({ visible: false });
  button2.updateData({ disabled: true });
  table1.updateData({ count: 0 });
  text3.updateData({ visible: true });
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
});

let num = 0;
let num2 = 0;
let num3 = 0;

const id1 = "slide-0238f6cbbc1b";

const id1PrevGGB1 = getPrevGGB(id1, "ggb1", {
  totalCon: 0,
  totalMov: 0,
  totalPlan: 0,
  totalThink: 0,
  totalMath: 0,
  totalEng: 0,
  overallTotal: 0,
  movEng: 0,
  thinkMath: 0,
  conMath: 0,
});

table1.updateCell(2, 1, { value: `$${id1PrevGGB1.innerData["totalCon"]}$` });
table1.updateCell(2, 2, { value: `$${id1PrevGGB1.innerData["totalMov"]}$` });
table1.updateCell(2, 3, { value: `$${id1PrevGGB1.innerData["totalPlan"]}$` });
table1.updateCell(2, 4, { value: `$${id1PrevGGB1.innerData["totalThink"]}$` });
table1.updateCell(0, 5, { value: `$${id1PrevGGB1.innerData["totalMath"]}$` });
table1.updateCell(1, 5, { value: `$${id1PrevGGB1.innerData["totalEng"]}$` });
table1.updateCell(2, 5, {
  value: `$${id1PrevGGB1.innerData["overallTotal"]}$`,
});

text3.updateData({
  text: `#### $${id1PrevGGB1.innerData["movEng"]}$ of the students with the mover personality type prefer English.`,
});
text4.updateData({
  text: `#### $${id1PrevGGB1.innerData["movEng"]}$ of the students with the mover personality type prefer English.\n\n#### $${id1PrevGGB1.innerData["thinkMath"]}$ of the students with the thinker personality type prefer Math.`,
});
text5.updateData({
  text: `#### $${id1PrevGGB1.innerData["movEng"]}$ of the students with the mover personality type prefer English.\n\n#### $${id1PrevGGB1.innerData["thinkMath"]}$ of the students with the thinker personality type prefer Math.\n\n#### $${id1PrevGGB1.innerData["conMath"]}$ of the students with the connector personality type prefer Math.`,
});

autorun(() => {
  let count = table1.data.count;
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(0, 2).value,
    table1.getCell(0, 3).value,
    table1.getCell(0, 4).value,
    table1.getCell(1, 1).value,
    table1.getCell(1, 2).value,
    table1.getCell(1, 3).value,
    table1.getCell(1, 4).value,
  ];
  if (!arrayEquals(entries, table1.data.last) && count < 2) {
    button1.updateData({
      visible: true,
      disabled: !entries.some((value) => !!value),
    });
    button2.updateData({
      visible: true,
      disabled: !entries.some((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
  if (!arrayEquals(entries, table1.data.last) && count <= 2) {
    button2.updateData({
      visible: true,
      disabled: !entries.some((value) => !!value),
    });
    button1.updateData({
      visible: false,
    });
    table1.updateData({ last: [...entries] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

button1.on("click", () => {
  let count = table1.data.count;
  if (count == 0) {
    text3.updateData({ visible: false });
    text4.updateData({ visible: true });
  }
  if (count == 1) {
    text4.updateData({ visible: false });
    text5.updateData({ visible: true });
    button1.updateData({ disabled: true, visible: false });
  }
  count++;
  table1.updateData({ count: count });
});

button2.on("click", () => {
  button2.updateData({ disabled: true });
  let connectorTotal = 0;
  let moverTotal = 0;
  let plannerTotal = 0;
  let thinkerTotal = 0;
  let mathTotal = 0;
  let englishTotal = 0;
  let overallTotal = 0;
  const result = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  const result2 = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  const result3 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  const result4 = utils.math.evaluateLatex(table1.getCell(1, 2).value);
  const result5 = utils.math.evaluateLatex(table1.getCell(0, 3).value);
  const result6 = utils.math.evaluateLatex(table1.getCell(1, 3).value);
  const result7 = utils.math.evaluateLatex(table1.getCell(0, 4).value);
  const result8 = utils.math.evaluateLatex(table1.getCell(1, 4).value);
  connectorTotal = result.value + result2.value;
  moverTotal = result3.value + result4.value;
  plannerTotal = result5.value + result6.value;
  thinkerTotal = result7.value + result8.value;
  mathTotal = result.value + result3.value + result5.value + result7.value;
  englishTotal = result2.value + result4.value + result6.value + result8.value;
  overallTotal =
    result.value +
    result3.value +
    result5.value +
    result7.value +
    result2.value +
    result4.value +
    result6.value +
    result8.value;
  if (connectorTotal == id1PrevGGB1.innerData["totalCon"]) {
    table1.updateCell(2, 1, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 1, { className: "bg-danger text-white" });
  }
  if (moverTotal == id1PrevGGB1.innerData["totalMov"]) {
    table1.updateCell(2, 2, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 2, { className: "bg-danger text-white" });
  }
  if (plannerTotal == id1PrevGGB1.innerData["totalPlan"]) {
    table1.updateCell(2, 3, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 3, { className: "bg-danger text-white" });
  }
  if (thinkerTotal == id1PrevGGB1.innerData["totalThink"]) {
    table1.updateCell(2, 4, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 4, { className: "bg-danger text-white" });
  }
  if (mathTotal == id1PrevGGB1.innerData["totalMath"]) {
    table1.updateCell(0, 5, { className: "bg-success text-white" });
  } else {
    table1.updateCell(0, 5, { className: "bg-danger text-white" });
  }
  if (englishTotal == id1PrevGGB1.innerData["totalEng"]) {
    table1.updateCell(1, 5, { className: "bg-success text-white" });
  } else {
    table1.updateCell(1, 5, { className: "bg-danger text-white" });
  }
  if (overallTotal == id1PrevGGB1.innerData["overallTotal"]) {
    table1.updateCell(2, 5, { className: "bg-success text-white" });
  } else {
    table1.updateCell(2, 5, { className: "bg-danger text-white" });
  }
});

function getPrevGGB(slideID, compName = "ggb1", innerData, storageComp = "") {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defGGB = {
    data: {},
    innerData,
  };
  // get previous data
  let prevGGB = getFromSlide(slideID, compName, false) || false;
  // check previous data
  const hasData = !prevGGB
    ? false
    : !Object.keys(prevGGB).includes("innerData")
    ? false
    : !Object.keys(prevGGB.innerData).length
    ? false
    : true;
  let returnGGB = hasData ? prevGGB : defGGB;
  // fill in other useful data
  returnGGB.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  returnGGB.data.hasData = hasData;
  returnGGB.data.slideNum = slideNum;
  // set text value
  returnGGB.data.flagText = hasData ? "" : returnGGB.data.goBackString;
  // record if there was already data so it doesn't wrongfully overwritten
  // maintain a record of whether we've had data
  const existingData = getData(`oldData${slideID + compName}`, storageComp);
  const hadData = hasData || existingData?.data?.hadData || false;
  if (hasData) {
    // if we have new data, (over)write to save it
    returnGGB.data.hadData = hadData;
    // create a dummy object to pass to updateData
    const newData = {};
    newData[`oldData${slideID + compName}`] = { ...returnGGB };
    // storageComp.updateData(newData);
    saveData(newData, storageComp);
  } else if (existingData?.data?.hasData) {
    // if we don't have new data but there is oldData, grab it
    returnGGB = { ...existingData };
  }
  return { ...returnGGB };
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

/*
{"compTotals":{"textbox":6,"table":1,"button":2},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Print Alt: Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":true,"layout":"two col"}
*/
