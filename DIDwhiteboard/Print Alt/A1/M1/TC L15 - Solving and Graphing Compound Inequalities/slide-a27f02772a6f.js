const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const id1 = "slide-b79aa809e39b";

//let data = getFromSlide(id1, `ggb1`);

const defInnerData = {};

for (let i = 1; i < 31; i++) {
  defInnerData[`x${i}`] = 0;
  defInnerData[`y${i}`] = -1;
}

let data = getPrevGGB(id1, "ggb1", defInnerData);

//if (data.innerData) {
for (let j = 1; j < 31; j++) {
  ggb1.instance.setValue(`x${j}`, data.innerData[`x${j}`]);
  ggb1.instance.setValue(`y${j}`, data.innerData[`y${j}`]);
}
//}

function getPrevGGB(slideID, compName = "ggb1", innerData) {
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
  return { ...returnGGB };
}

/*
{"compTotals":{"geogebra":1},"stage":"Launch","lessonInfo":"9 M1 TC L15 - Print Alt: Solving and Graphing Compound Inequalities","teacherView":true,"layout":"one col"}
*/
