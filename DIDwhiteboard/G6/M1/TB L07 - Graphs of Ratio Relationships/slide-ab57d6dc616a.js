const {
  text1,
  ggb1,
  cc_sharewithclass_3c812752c133_textbox1: shareText1,
  cc_sharewithclass_3c812752c133_input1: shareInput1,
  cc_sharewithclass_3c812752c133_button1: shareButton1,
  cc_sharewithclass_3c812752c133_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-839f56a33283';

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

let animal = getFromSlide(id1, 'select1.data.selected', false) || false;

text1.updateData({ text: '' });

if (animal.length == 0) {
  let missingText = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  text1.updateData({ text: `$${missingText}$` });
}

if (animal == 0 && animal.length == 1) {
  ggb1.instance.setValue('showCat', true);
} else {
  ggb1.instance.setValue('showCat', false);
}
if (animal == 1) {
  ggb1.instance.setValue('showDog', true);
} else {
  ggb1.instance.setValue('showDog', false);
}
if (animal == 2) {
  ggb1.instance.setValue('showParrot', true);
} else {
  ggb1.instance.setValue('showParrot', false);
}
if (animal == 3) {
  ggb1.instance.setValue('showBunny', true);
} else {
  ggb1.instance.setValue('showBunny', false);
}

/*
{"compTotals":{"textbox":1,"geogebra":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
