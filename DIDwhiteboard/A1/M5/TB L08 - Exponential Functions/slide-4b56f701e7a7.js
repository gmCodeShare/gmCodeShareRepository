const {
  text1,
  table1,
  feedback,
  text2,
  table2,
  cc_sharewithclass_53d97ea46c85_textbox1: shareText1,
  cc_sharewithclass_53d97ea46c85_input1,
  cc_sharewithclass_53d97ea46c85_button1,
  cc_sharewithclass_53d97ea46c85_studentanswers1,
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

let peopleOptions = ["3", "2"];
let spreadOptions = ["2", "3"];

const id = "slide-d021f4b47c14";
let prevSelArray = getFromSlide(id, "select1.data.selected", []) || [];
let chosenPeople;
let chosenSpread;
if (!prevSelArray || !prevSelArray.length) {
  chosenPeople = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
  chosenSpread = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
} else {
  chosenPeople = peopleOptions[parseInt(prevSelArray[0])];
  chosenSpread = spreadOptions[parseInt(prevSelArray[0])];
}

shareText1.updateData({
  text: `You thought starting with $${chosenPeople}$ people and each person spreading a smile to $${chosenSpread}$ people would spread smiles faster. Were you correct? Explain.`,
});

// if we need it again later, table1 had an additional row with the values [5, 96, 189]

/*
{"compTotals":{"textbox":3,"table":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"two col"}
*/
