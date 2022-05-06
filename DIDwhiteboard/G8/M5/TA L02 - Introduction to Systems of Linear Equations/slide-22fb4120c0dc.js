const {
  ggb1,
  feedback1,
  text1,
  text2,
  cc_sharewithclass_b40a9427ec58_textbox1: shareText1,
  cc_sharewithclass_b40a9427ec58_input1: shareInput1,
  cc_sharewithclass_b40a9427ec58_button1: shareButton1,
  cc_sharewithclass_b40a9427ec58_studentanswers1,
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
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

ggb1.instance.registerObjectUpdateListener("show", enable);

function enable() {
  if (ggb1.instance.getValue("show")) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
}

const id = `slide-8682bc950a4d`;
let num = getFromSlide(id, `input1.data.text`, "") || "";
let num2 = getFromSlide(id, `input2.data.text`, "") || "";

/*if(!num){
num = "\\text\\color{707070}{\[no input yet on slide 11\]}"
}

if(!num2){
num2 = "\\text\\color{707070}{\[no input yet on slide 11\]}"
}*/

// text2.updateData({text:`$${num}$\n\n$${num2}$`});
if (!num || !num2) {
  text2.updateData({
    text: `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$`,
  });
} else {
  text2.updateData({
    text: `$\\begin{cases} ${num} \\\\ ${num2} \\end{cases}$`,
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
