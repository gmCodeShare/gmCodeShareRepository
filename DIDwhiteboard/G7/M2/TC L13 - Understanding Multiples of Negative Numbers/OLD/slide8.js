const { ggb1, ggb2, button1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("state1", true);
ggb1.instance.showToolBar(false);
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

const id1 = `slide-5f810bc3020e`;
let studentInput =
  getFromSlide(id1, "cc_submit_153010d8cb1a_input1.data.text", "") || "";

if (!studentInput) {
  studentInput = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
  text1.updateData({
    text: `Your response was:
  >$${studentInput}$`,
  });
} else {
  text1.updateData({
    text: `Your response was:
  >$${studentInput}$`,
  });
}

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

let allPenstrokes = ggb2.instance.getAllObjectNames("penstroke");

for (let i = 0; i < allPenstrokes.length; i++) {
  ggb2.instance.deleteObject(allPenstrokes[i]);
}

const sketches =
  getFromSlide("slide-6bd82125410e", "ggb1.innerData.doodles", []) || [];

for (let i = 0; i < sketches.length; i++) {
  let name = ggb2.instance.evalCommandGetLabels(sketches[i]);
  ggb2.instance.setFixed(name, false, false);
}
