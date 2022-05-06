const {
  ggb1,
  separator1,
  select1,
  feedback1,
  text1,
  separator4,
  cc_submit_a62f3489675b_textbox1,
  cc_submit_a62f3489675b_input1,
  cc_submit_a62f3489675b_button1: button1,
  separator2,
  cc_sharewithclass_e4ab0a0a3bc4_textbox1: text3,
  cc_sharewithclass_e4ab0a0a3bc4_input1: input2,
  cc_sharewithclass_e4ab0a0a3bc4_button1: button2,
  cc_sharewithclass_e4ab0a0a3bc4_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const id1 = "slide-845df5789f0c";

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
  text3.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  ggb1.instance.setValue("showVector", true);
  ggb1.instance.setValue("showDragPoint", false);
  ggb1.instance.setAnimating("timeMove", false);
  ggb1.instance.setValue("timeMove", 1);
  select1.selectOption("1");
});

let defPrevGGB1 = {
  innerData: { yourValuesHere: 0 },
};

let data = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes("innerData")
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

// let data = getFromSlide(id1, "ggb1");

if (data.innerData) {
  slide2x = data.innerData["xVal"];
  slide2y = data.innerData["yVal"];
  ggb1.instance.evalCommand(`DragPoint=(${slide2x},${slide2y})`);
}

let studentInput =
  getFromSlide(id1, "cc_sharewithclass_56104d8f91e1_input1.data.text", "") ||
  "";

if (!studentInput) {
  studentInput = `\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
  text1.updateData({
    text: `Here is your description of the translation:
  >$${studentInput}$`,
  });
} else {
  text1.updateData({
    text: `Here is your description of the translation:
  >${studentInput}`,
  });
}

button1.on("click", () => {
  text3.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setGridVisible(true);
    ggb1.instance.setAxesVisible(true, true);
    ggb1.instance.setValue("showCoordinatePlane", true);
    ggb1.instance.evalCommand(`ReadText("The coordinate plane is shown.")`);
  } else {
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);
    ggb1.instance.setValue("showCoordinatePlane", false);
    ggb1.instance.evalCommand(`ReadText("The coordinate plane is hidden.")`);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":3,"select":1,"textbox":2,"submit":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
