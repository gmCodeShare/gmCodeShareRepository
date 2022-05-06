const {
  table1,
  table2,
  feedback1,
  cc_sharewithclass_e322b40afa63_textbox1: shareText1,
  cc_sharewithclass_e322b40afa63_input1: shareInput1,
  cc_sharewithclass_e322b40afa63_button1: shareButton1,
  cc_sharewithclass_e322b40afa63_studentanswers1: shareAnswers1,
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

//for table1
const id1 = `slide-2ede02c9c86d`;
let response1 = getFromSlide(id1, "radio1.data.selected", false) || false;
let response2 = getFromSlide(id1, "radio2.data.selected", false) || false;

if (response1 === "0") {
  response1 = "True";
} else if (response1 === "1") {
  response1 = "False";
} else {
  response1 = "$\\text\\color{A0A0A0}{[no input yet on slide 1]}$";
}

if (response2 === "0") {
  response2 = "True";
} else if (response2 === "1") {
  response2 = "False";
} else {
  response2 = `$\\text\\color{A0A0A0}{[no input yet on slide 1]}$`;
}

table1.updateCell(0, 1, { value: response1 });
table1.updateCell(1, 1, { value: response2 });

//for table2
const id3 = `slide-2acd7a1d80d8`;
let response3 = getFromSlide(id3, "select1.data.selected", [false]) || [false];
response3 = response3[0];

const id4 = `slide-b3731aa4ac53`;
let response4 = getFromSlide(id4, "radio1.data.selected", false) || false;

if (response3 === "0") {
  response3 = "True";
} else if (response3 === "1") {
  response3 = "False";
} else {
  response3 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id3
  )}\]}$`;
}

if (response4 === "0") {
  response4 = "True";
} else if (response4 === "1") {
  response4 = "False";
} else {
  response4 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id4
  )}\]}$`;
}

table2.updateCell(0, 1, { value: response3 });
table2.updateCell(1, 1, { value: response4 });

//response regarding converses
const id5 = `slide-11f7ef40036b`;
let response5 =
  getFromSlide(id5, "cc_sharewithclass_e322b40afa63_input1.data.text", false) ||
  false;

if (!response5) {
  response5 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id5
  )}\]}$`;
}

shareText1.updateData({
  text: `Earlier, you said: \n\n >${response5} \n\nWhat do you think about statements and their converses now?`,
});

/*
{"compTotals":{"table":2,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
