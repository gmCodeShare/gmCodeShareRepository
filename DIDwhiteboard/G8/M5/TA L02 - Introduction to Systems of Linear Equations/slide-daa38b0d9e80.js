const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_91136a679b1d_textbox1: shareText1,
  cc_sharewithclass_91136a679b1d_input1,
  cc_sharewithclass_91136a679b1d_button1,
  cc_sharewithclass_91136a679b1d_studentanswers1,
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

const id = `slide-2c4c567cf5e4`;
let choiceData = getFromSlide(id, "select1", false) || false;
let choiceNum = choiceData.data?.selected;

if (!choiceNum) {
  shareText1.updateData({
    text: `You said that $(-5,3)$ $\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$ a solution to the system of equations. Do you want to change your answer? Why?`,
  });
}
if (choiceNum === "0") {
  shareText1.updateData({
    text: "You said that $(-5,3)$ is a solution to the system of equations. Do you want to change your answer? Why?",
  });
}
if (choiceNum === "1") {
  shareText1.updateData({
    text: "You said that $(-5,3)$ is not a solution to the system of equations. Do you want to change your answer? Why?",
  });
}

// Retrieving information
utils.RTS.on("datachange", "slide-2c4c567cf5e4", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  let yesCount = 0;
  let noCount = 0;
  lastRegister.forEach(({ data, info }) => {
    const { choiceVal } = data;
    if (choiceVal == 1) {
      yesCount++;
    } else if (choiceVal == 2) {
      noCount++;
    }
  });
  ggb1.instance.setValue("yesBarHeight", yesCount);
  ggb1.instance.setValue("noBarHeight", noCount);
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
