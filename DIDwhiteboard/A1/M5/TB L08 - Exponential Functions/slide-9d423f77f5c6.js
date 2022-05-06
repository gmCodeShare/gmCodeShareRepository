const {
  textDisplay12,
  ggb1,
  feedback,
  select1,
  text1,
  table1,
  separator7,
  cc_sharewithclass_e80abf37e24f_textbox1,
  cc_sharewithclass_e80abf37e24f_input1,
  cc_sharewithclass_e80abf37e24f_button1,
  cc_sharewithclass_e80abf37e24f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

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

slide.on("firstload", () => {
  select1.selectOption("0");
  table1.updateData({ visible: false });
});

select1.on("change", ({ selected }) => {
  text1.updateData({ visible: selected.includes("0") });
  table1.updateData({ visible: selected.includes("1") });
});

const id = "slide-dad136201475";
let prevEq =
  getFromSlide(id, "cc_submit_92d827505d19_input1.data.text", "") || "";
if (!prevEq || prevEq == "f(x) = ") {
  prevEq = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}`;
}

text1.updateData({ text: `$${prevEq}$` });

let prevTable = getFromSlide(id, "table1.data", []) || [];

for (let i = 0, L = table1.data.rows.length; i < L; i++) {
  let newVal = "";
  if (!prevTable.rows?.length || !prevTable.rows[i][1].value) {
    newVal = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`;
  } else {
    newVal = prevTable.rows[i][1].value;
  }
  table1.updateCell(i, 1, { value: `$${newVal}$` });
}

/*
{"compTotals":{"textbox":3,"geogebra":1,"select":1,"table":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"two col"}
*/
