const {
  ggb1,
  feedback,
  cc_submit_29ca6e3ac5b2_textbox1: text1,
  cc_submit_29ca6e3ac5b2_input1,
  cc_submit_29ca6e3ac5b2_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: "right" });

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

const id1 = "slide-755a4b257adf";
let num =
  getFromSlide(id1, "cc_sharewithclass_9ffdfff3446d_input1.data.text", "") ||
  "";

if (!num) {
  num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
}

text1.updateData({
  text: `You said $${num}$ critters from generation $0$ will duplicate.  
  
  Add them to the total population.
  
  How many total critters are there now?`,
});

let defPrevGGB1 = {
  innerData: {},
  default: true,
};

for (let i = 1; i < 33; i++) {
  defPrevGGB1.innerData[`P${i}`] = [-9.85, -9.85];
}

let prevGGB1 = getFromSlide("slide-755a4b257adf", "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes("innerData")
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  prevGGB1 = defPrevGGB1;
}

// let graph1 = getFromSlide("slide-755a4b257adf", "ggb1");

if (!prevGGB1.default) {
  for (var i = 1; i < 33; i++) {
    // ggb1.instance.evalCommand(`P` + i + `=(${prevGGB1.innerData["P" + i]})`);
    ggb1.instance.setCoords(
      `P${i}`,
      prevGGB1.innerData[`P${i}`][0],
      prevGGB1.innerData[`P${i}`][1]
    );
  }
}

ggb1.instance.evalCommand("UpdateConstruction()");

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1},"stage":"Launch","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
