const { text1, table1, ggb1, text2, table2, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

const id1 = "slide-0238f6cbbc1b";

const id1PrevGGB1 = getPrevGGB(id1, "ggb1", {
  totalCon: 0,
  totalMov: 0,
  totalPlan: 0,
  totalThink: 0,
  totalMath: 0,
  totalEng: 0,
  overallTotal: 0,
  conEng: 0,
  conMath: 0,
  movEng: 0,
  movMath: 0,
  planEng: 0,
  planMath: 0,
  thinkEng: 0,
  thinkMath: 0,
  perConEng: 0,
  perConMath: 0,
  perMovEng: 0,
  perMovMath: 0,
  perPlanEng: 0,
  perPlanMath: 0,
  perThinkEng: 0,
  perThinkMath: 0,
  perConTotal: 0,
  perMovTotal: 0,
  perPlanTotal: 0,
  perThinkTotal: 0,
});

ggb2.instance.setValue("y1", id1PrevGGB1.innerData["perConMath"]);
ggb2.instance.setValue("y2", id1PrevGGB1.innerData["perConTotal"]);
ggb2.instance.setValue("y3", id1PrevGGB1.innerData["perMovMath"]);
ggb2.instance.setValue("y4", id1PrevGGB1.innerData["perMovTotal"]);
ggb2.instance.setValue("y5", id1PrevGGB1.innerData["perPlanMath"]);
ggb2.instance.setValue("y6", id1PrevGGB1.innerData["perPlanTotal"]);
ggb2.instance.setValue("y7", id1PrevGGB1.innerData["perThinkMath"]);
ggb2.instance.setValue("y8", id1PrevGGB1.innerData["perThinkTotal"]);

ggb1.instance.setValue("y1", id1PrevGGB1.innerData["conMath"]);
ggb1.instance.setValue("y2", id1PrevGGB1.innerData["totalCon"]);
ggb1.instance.setValue("y3", id1PrevGGB1.innerData["movMath"]);
ggb1.instance.setValue("y4", id1PrevGGB1.innerData["totalMov"]);
ggb1.instance.setValue("y5", id1PrevGGB1.innerData["planMath"]);
ggb1.instance.setValue("y6", id1PrevGGB1.innerData["totalPlan"]);
ggb1.instance.setValue("y7", id1PrevGGB1.innerData["thinkMath"]);
ggb1.instance.setValue("y8", id1PrevGGB1.innerData["totalThink"]);

table1.updateCell(0, 1, { value: `$${id1PrevGGB1.innerData["conMath"]}$` });
table1.updateCell(0, 2, { value: `$${id1PrevGGB1.innerData["movMath"]}$` });
table1.updateCell(0, 3, { value: `$${id1PrevGGB1.innerData["planMath"]}$` });
table1.updateCell(0, 4, { value: `$${id1PrevGGB1.innerData["thinkMath"]}$` });
table1.updateCell(0, 5, { value: `$${id1PrevGGB1.innerData["totalMath"]}$` });
table1.updateCell(1, 1, { value: `$${id1PrevGGB1.innerData["conEng"]}$` });
table1.updateCell(1, 2, { value: `$${id1PrevGGB1.innerData["movEng"]}$` });
table1.updateCell(1, 3, { value: `$${id1PrevGGB1.innerData["planEng"]}$` });
table1.updateCell(1, 4, { value: `$${id1PrevGGB1.innerData["thinkEng"]}$` });
table1.updateCell(1, 5, { value: `$${id1PrevGGB1.innerData["totalEng"]}$` });
table1.updateCell(2, 1, { value: `$${id1PrevGGB1.innerData["totalCon"]}$` });
table1.updateCell(2, 2, { value: `$${id1PrevGGB1.innerData["totalMov"]}$` });
table1.updateCell(2, 3, { value: `$${id1PrevGGB1.innerData["totalPlan"]}$` });
table1.updateCell(2, 4, { value: `$${id1PrevGGB1.innerData["totalThink"]}$` });
table1.updateCell(2, 5, {
  value: `$${id1PrevGGB1.innerData["overallTotal"]}$`,
});

table2.updateCell(0, 1, {
  value: `$\\frac{${id1PrevGGB1.innerData["conMath"]}}{${id1PrevGGB1.innerData["totalCon"]}}$`,
});
table2.updateCell(1, 1, {
  value: `$\\frac{${id1PrevGGB1.innerData["conEng"]}}{${id1PrevGGB1.innerData["totalCon"]}}$`,
});
table2.updateCell(2, 1, {
  value: `$\\frac{${id1PrevGGB1.innerData["totalCon"]}}{${id1PrevGGB1.innerData["totalCon"]}}$`,
});
table2.updateCell(2, 5, {
  value: `$\\frac{${id1PrevGGB1.innerData["overallTotal"]}}{${id1PrevGGB1.innerData["overallTotal"]}}$`,
});
table2.updateCell(0, 2, {
  value: `$\\frac{${id1PrevGGB1.innerData["movMath"]}}{${id1PrevGGB1.innerData["totalMov"]}}$`,
});
table2.updateCell(1, 2, {
  value: `$\\frac{${id1PrevGGB1.innerData["movEng"]}}{${id1PrevGGB1.innerData["totalMov"]}}$`,
});
table2.updateCell(2, 2, {
  value: `$\\frac{${id1PrevGGB1.innerData["totalMov"]}}{${id1PrevGGB1.innerData["totalMov"]}}$`,
});
table2.updateCell(0, 3, {
  value: `$\\frac{${id1PrevGGB1.innerData["planMath"]}}{${id1PrevGGB1.innerData["totalPlan"]}}$`,
});
table2.updateCell(1, 3, {
  value: `$\\frac{${id1PrevGGB1.innerData["planEng"]}}{${id1PrevGGB1.innerData["totalPlan"]}}$`,
});
table2.updateCell(2, 3, {
  value: `$\\frac{${id1PrevGGB1.innerData["totalPlan"]}}{${id1PrevGGB1.innerData["totalPlan"]}}$`,
});
table2.updateCell(0, 4, {
  value: `$\\frac{${id1PrevGGB1.innerData["thinkMath"]}}{${id1PrevGGB1.innerData["totalThink"]}}$`,
});
table2.updateCell(1, 4, {
  value: `$\\frac{${id1PrevGGB1.innerData["thinkEng"]}}{${id1PrevGGB1.innerData["totalThink"]}}$`,
});
table2.updateCell(2, 4, {
  value: `$\\frac{${id1PrevGGB1.innerData["totalThink"]}}{${id1PrevGGB1.innerData["totalThink"]}}$`,
});
table2.updateCell(0, 5, {
  value: `$\\frac{${id1PrevGGB1.innerData["totalMath"]}}{${id1PrevGGB1.innerData["totalMath"]}}$`,
});
table2.updateCell(1, 5, {
  value: `$\\frac{${id1PrevGGB1.innerData["totalEng"]}}{${id1PrevGGB1.innerData["totalEng"]}}$`,
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
{"compTotals":{"textbox":2,"table":2,"geogebra":2},"stage":"Learn","lessonInfo":"9 M2 TD L22 - Print Alt: Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":true,"layout":"two col"}
*/
