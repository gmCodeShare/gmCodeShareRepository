const {
  ggb1,
  ggb2,
  text1,
  select1,
  craterTable1,
  carTable1,
  crawlingTable1,
  baseballTable1,
  nyTable1,
  craterTable2,
  carTable2,
  crawlingTable2,
  baseballTable2,
  nyTable2,
} = components;

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

text1.updateData({ align: "center" });

const id = `slide-a833275c68b2`;
let choiceData = getFromSlide(id, "select1", false) || false;
let choiceNum = choiceData.data?.selected;

if (!choiceNum) {
  text1.updateData({
    text: `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$`,
  });
  craterTable1.updateData({ visible: false });
  carTable1.updateData({ visible: false });
  crawlingTable1.updateData({ visible: false });
  baseballTable1.updateData({ visible: false });
  nyTable1.updateData({ visible: false });
  craterTable2.updateData({ visible: false });
  carTable2.updateData({ visible: false });
  crawlingTable2.updateData({ visible: false });
  baseballTable2.updateData({ visible: false });
  nyTable2.updateData({ visible: false });
}
if (choiceNum === "0") {
  text1.updateData({
    text: "This data set shows the ages of a variety of craters and the diameter of each crater’s impact area.\n\nWhat is the approximate diameter in meters of a crater that is $8$ thousand years old?",
  });
  ggb1.instance.setValue("craters", true);
  ggb1.instance.setValue("cars", false);
  ggb1.instance.setValue("crawling", false);
  ggb1.instance.setValue("baseball", false);
  ggb1.instance.setValue("nyHomes", false);
  ggb2.instance.setValue("craters", true);
  ggb2.instance.setValue("cars", false);
  ggb2.instance.setValue("crawling", false);
  ggb2.instance.setValue("baseball", false);
  ggb2.instance.setValue("nyHomes", false);
  craterTable1.updateData({ visible: true });
  carTable1.updateData({ visible: false });
  crawlingTable1.updateData({ visible: false });
  baseballTable1.updateData({ visible: false });
  nyTable1.updateData({ visible: false });
  craterTable2.updateData({ visible: false });
  carTable2.updateData({ visible: false });
  crawlingTable2.updateData({ visible: false });
  baseballTable2.updateData({ visible: false });
  nyTable2.updateData({ visible: false });
}
if (choiceNum === "1") {
  text1.updateData({
    text: "This data set shows the number of miles that used cars with a specific model year and name have been driven, and the prices of the cars.\n\nWhat is the approximate price of a used car in dollars that has been driven $25,000$ miles?",
  });
  ggb1.instance.setValue("cars", true);
  ggb1.instance.setValue("craters", false);
  ggb1.instance.setValue("crawling", false);
  ggb1.instance.setValue("baseball", false);
  ggb1.instance.setValue("nyHomes", false);
  ggb2.instance.setValue("cars", true);
  ggb2.instance.setValue("craters", false);
  ggb2.instance.setValue("crawling", false);
  ggb2.instance.setValue("baseball", false);
  ggb2.instance.setValue("nyHomes", false);
  craterTable1.updateData({ visible: false });
  carTable1.updateData({ visible: true });
  crawlingTable1.updateData({ visible: false });
  baseballTable1.updateData({ visible: false });
  nyTable1.updateData({ visible: false });
  craterTable2.updateData({ visible: false });
  carTable2.updateData({ visible: false });
  crawlingTable2.updateData({ visible: false });
  baseballTable2.updateData({ visible: false });
  nyTable2.updateData({ visible: false });
}
if (choiceNum === "2") {
  text1.updateData({
    text: "This data set shows the average outside temperatures when a sample of babies crawl for the first time.\n\nAt approximately what age in weeks will a baby crawl for the first time if the average outside temperature is $42\\degree F$?",
  });
  ggb1.instance.setValue("crawling", true);
  ggb1.instance.setValue("cars", false);
  ggb1.instance.setValue("craters", false);
  ggb1.instance.setValue("baseball", false);
  ggb1.instance.setValue("nyHomes", false);
  ggb2.instance.setValue("crawling", true);
  ggb2.instance.setValue("cars", false);
  ggb2.instance.setValue("craters", false);
  ggb2.instance.setValue("baseball", false);
  ggb2.instance.setValue("nyHomes", false);
  craterTable1.updateData({ visible: false });
  carTable1.updateData({ visible: false });
  crawlingTable1.updateData({ visible: true });
  baseballTable1.updateData({ visible: false });
  nyTable1.updateData({ visible: false });
  craterTable2.updateData({ visible: false });
  carTable2.updateData({ visible: false });
  crawlingTable2.updateData({ visible: false });
  baseballTable2.updateData({ visible: false });
  nyTable2.updateData({ visible: false });
}
if (choiceNum === "3") {
  text1.updateData({
    text: "This data set shows the salaries and batting averages of a sample of Major League Baseball players in 2018.\n\nWhat was the approximate batting average of a Major League Baseball player whose salary was $\\$31$ million in 2018?",
  });
  ggb1.instance.setValue("baseball", true);
  ggb1.instance.setValue("cars", false);
  ggb1.instance.setValue("crawling", false);
  ggb1.instance.setValue("craters", false);
  ggb1.instance.setValue("nyHomes", false);
  ggb2.instance.setValue("baseball", true);
  ggb2.instance.setValue("cars", false);
  ggb2.instance.setValue("crawling", false);
  ggb2.instance.setValue("craters", false);
  ggb2.instance.setValue("nyHomes", false);
  craterTable1.updateData({ visible: false });
  carTable1.updateData({ visible: false });
  crawlingTable1.updateData({ visible: false });
  baseballTable1.updateData({ visible: true });
  nyTable1.updateData({ visible: false });
  craterTable2.updateData({ visible: false });
  carTable2.updateData({ visible: false });
  crawlingTable2.updateData({ visible: false });
  baseballTable2.updateData({ visible: false });
  nyTable2.updateData({ visible: false });
}
if (choiceNum === "4") {
  text1.updateData({
    text: "This data set shows the prices and areas of living space of a sample of houses for sale in New York in 2010.\n\nWhat was the approximate price in dollars of a house in New York in 2010 that has $1350$ square feet of living space?",
  });
  ggb1.instance.setValue("nyHomes", true);
  ggb1.instance.setValue("cars", false);
  ggb1.instance.setValue("crawling", false);
  ggb1.instance.setValue("baseball", false);
  ggb1.instance.setValue("craters", false);
  ggb2.instance.setValue("nyHomes", true);
  ggb2.instance.setValue("cars", false);
  ggb2.instance.setValue("crawling", false);
  ggb2.instance.setValue("baseball", false);
  ggb2.instance.setValue("craters", false);
  craterTable1.updateData({ visible: false });
  carTable1.updateData({ visible: false });
  crawlingTable1.updateData({ visible: false });
  baseballTable1.updateData({ visible: false });
  nyTable1.updateData({ visible: true });
  craterTable2.updateData({ visible: false });
  carTable2.updateData({ visible: false });
  crawlingTable2.updateData({ visible: false });
  baseballTable2.updateData({ visible: false });
  nyTable2.updateData({ visible: false });
}

autorun(() => {
  if (!select1.data.selected.length) {
    ggb1.instance.setValue("lineOfBestFit", false);
    ggb1.instance.setValue("residuals", false);
    ggb1.instance.setValue("equation", false);
    ggb1.instance.setValue("r", false);
    ggb2.instance.setValue("residualPlot", false);
  }
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("lineOfBestFit", true);
  } else {
    ggb1.instance.setValue("lineOfBestFit", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("residuals", true);
    ggb1.instance.setValue("lineOfBestFit", true);
  } else {
    ggb1.instance.setValue("residuals", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setValue("equation", true);
  } else {
    ggb1.instance.setValue("equation", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setValue("r", true);
  } else {
    ggb1.instance.setValue("r", false);
  }
  if (select1.data.selected.includes("4")) {
    ggb2.instance.setValue("residualPlot", true);
    ggb2.updateData({ visible: true });
  } else {
    ggb2.instance.setValue("residualPlot", false);
    ggb2.updateData({ visible: false });
  }
});

autorun(() => {
  if (select1.data.selected.includes("1") && choiceNum === "0") {
    craterTable1.updateData({ visible: false });
    craterTable2.updateData({ visible: true });
  }
  if (!select1.data.selected.includes("1") && choiceNum === "0") {
    craterTable1.updateData({ visible: true });
    craterTable2.updateData({ visible: false });
  }
  if (select1.data.selected.includes("1") && choiceNum === "1") {
    carTable1.updateData({ visible: false });
    carTable2.updateData({ visible: true });
  }
  if (!select1.data.selected.includes("1") && choiceNum === "1") {
    carTable1.updateData({ visible: true });
    carTable2.updateData({ visible: false });
  }
  if (select1.data.selected.includes("1") && choiceNum === "2") {
    crawlingTable1.updateData({ visible: false });
    crawlingTable2.updateData({ visible: true });
  }
  if (!select1.data.selected.includes("1") && choiceNum === "2") {
    crawlingTable1.updateData({ visible: true });
    crawlingTable2.updateData({ visible: false });
  }
  if (select1.data.selected.includes("1") && choiceNum === "3") {
    baseballTable1.updateData({ visible: false });
    baseballTable2.updateData({ visible: true });
  }
  if (!select1.data.selected.includes("1") && choiceNum === "3") {
    baseballTable1.updateData({ visible: true });
    baseballTable2.updateData({ visible: false });
  }
  if (select1.data.selected.includes("1") && choiceNum === "4") {
    nyTable1.updateData({ visible: false });
    nyTable2.updateData({ visible: true });
  }
  if (!select1.data.selected.includes("1") && choiceNum === "4") {
    nyTable1.updateData({ visible: true });
    nyTable2.updateData({ visible: false });
  }
});
