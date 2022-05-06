const { button1, separator1, ggb1, feedback1 } = components;

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

const id = "slide-c872d475010b";
let num1 = getFromSlide(id, "input2.data.text", "") || "";

if (!num1) {
  num1 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
} else {
  num1 = `$${num1}$`; // include this else statement if you expect your prior input to be a number
}

button1.on("click", () => {
  ggb1.instance.evalCommand("RunClickScript(button2)");
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (ggb1.innerData["time"] == 1) {
    button1.updateData({ disabled: false });
  }
});

/*
{"compTotals":{"button":1,"separator":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - PA Planning a Trip","teacherView":true,"layout":"one col"}
*/
