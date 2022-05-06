const {
  ggb1,
  feedback1,
  table1,
  cc_sharewithclass_aa4d988a132f_textbox1,
  cc_sharewithclass_aa4d988a132f_input1,
  cc_sharewithclass_aa4d988a132f_button1,
  cc_sharewithclass_aa4d988a132f_studentanswers1,
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

let data = getFromSlide("slide-7793d711ccda", "ggb2", false || false);
if (data.innerData) {
  ggb1.instance.setValue("a", data.innerData["a"]);
  ggb1.instance.setValue("b", data.innerData["b"]);
}

const id1 = "slide-108868af07bb";
const reason1 =
  getFromSlide(id1, "cc_sharewithclass_1ff8e22ed745_input1.data.text", "") ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`;

const id2 = "slide-39072d521b23";
const reason2 =
  getFromSlide(id2, "cc_sharewithclass_1ff8e22ed745_input1.data.text", "") ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}$`;

const id3 = "slide-b224b4d7157c";
const reason3 =
  getFromSlide(id3, "cc_submit_384b99447747_input1.data.text", "") ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id3)}\]}$`;

const id4 = "slide-b224b4d7157c";
const reason4 =
  getFromSlide(id4, "cc_sharewithclass_1ff8e22ed745_input1.data.text", "") ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id4)}\]}$`;

table1.updateCell(0, 1, { value: reason1 });
table1.updateCell(1, 1, { value: reason2 });
table1.updateCell(2, 1, { value: reason3 });
table1.updateCell(3, 1, { value: reason4 });

/*
{"compTotals":{"geogebra":1,"textbox":1,"table":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
