const {
  ggb1,
  feedback,
  cc_submit_89c468e8c9c3_textbox1: submitText1,
  cc_submit_89c468e8c9c3_input1: submitInput1,
  cc_submit_89c468e8c9c3_button1: submitButton1,
  separator5,
  cc_sharewithclass_e1b1bef67eaa_textbox1: shareText1,
  cc_sharewithclass_e1b1bef67eaa_input1: shareInput1,
  cc_sharewithclass_e1b1bef67eaa_button1: shareButton1,
  cc_sharewithclass_e1b1bef67eaa_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

submitButton1.updateData({ align: "right" });
shareButton1.updateData({ align: "right" });

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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

const id1 = "slide-b26c93f5dadd";
let num =
  getFromSlide(id1, "cc_submit_061e63dcb5e9_input1.data.text", "") || "";

if (!num) {
  num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
}

shareText1.updateData({
  text: `Earlier you predicted the population of generation $20$ was $${num}$.
    
    How close was your prediction to the actual population? Explain.`,
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
