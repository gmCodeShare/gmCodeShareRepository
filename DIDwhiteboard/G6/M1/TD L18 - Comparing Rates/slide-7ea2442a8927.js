const {
  text1,
  feedback1,
  cc_sharewithclass_cd7682568d7b_textbox1,
  cc_sharewithclass_cd7682568d7b_input1,
  cc_sharewithclass_cd7682568d7b_button1,
  cc_sharewithclass_cd7682568d7b_studentanswers1,
} = components;

let id1 = 'slide-d1edeb748f96';

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

let data1 = getFromSlide(id1, 'ggb1', false) || false;

let num =
  typeof data1.innerData == 'undefined' ||
  typeof data1.innerData['count'] == 'undefined'
    ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
    : data1.innerData['count'];

text1.updateData({
  text: `Dancing Song: $720$ beats in $4$ minutes\n\nStudying Song: $720$ beats in $8$ minutes\n\nWalking Song: $${num}$ beats in $10$ seconds`,
});

/*
{"compTotals":{"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
