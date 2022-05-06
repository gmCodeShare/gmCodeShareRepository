const {
  text1,
  ggb1,
  feedback1,
  text2,
  text3,
  cc_sharewithclass_fe8ba7d9cc4d_textbox1: text4,
  cc_sharewithclass_fe8ba7d9cc4d_input1: input1,
  cc_sharewithclass_fe8ba7d9cc4d_button1: button1,
  cc_sharewithclass_fe8ba7d9cc4d_studentanswers1,
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
  text4.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

const id = `slide-08abfceb4a95`;
let equa =
  getFromSlide(id, `cc_sharewithclass_895a8bb3acfc_input1.data.text`, "") || "";

if (!equa || equa == "R(x)=") {
  equa = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`;
  text2.updateData({ text: `$${equa}$` });
} else {
  text2.updateData({ text: `$${equa}$` });
}

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();
function getDoodles() {
  let doodleArray = [];
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb1.instance.getCommandString(allPenstrokes[i]));
  }
  ggb1.updateInnerData({ doodles: doodleArray });
  text4.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
}

/*
{"compTotals":{"textbox":4,"geogebra":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Creating Equations of Quadratic Functions to Model Contexts","teacherView":false,"layout":"two col"}
*/
