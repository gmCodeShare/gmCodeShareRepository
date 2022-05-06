const {
  ggb1,
  separator2,
  buttonGroup1,
  feedback,
  cc_sharewithclass_e1282d485d2d_textbox1: shareText1,
  cc_sharewithclass_e1282d485d2d_input1: shareInput1,
  cc_sharewithclass_e1282d485d2d_button1: shareButton1,
  cc_sharewithclass_e1282d485d2d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let ID1 = "slide-482d83e73f40";

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
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.startAnimation();
});

autorun(() => {
  const enabledTimes = [0, ggb1.innerData["maxTime"]];
  buttonGroup1.updateSingleButton(
    {
      disabled: !enabledTimes.includes(ggb1.innerData["time"]),
    },
    1
  );
  if (ggb1.innerData["time"] == ggb1.innerData["maxTime"]) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

let prevGuess = getFromSlide(ID1, "button1.data.selection", false) || false;

const guess =
  prevGuess.length || prevGuess
    ? prevGuess[0]
    : `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(ID1)}\]}$`;

shareText1.updateData({
  text: `You said the following would be taller: \n\n >${guess} \n\n Would you change your answer? Why?`,
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"two col"}
*/
