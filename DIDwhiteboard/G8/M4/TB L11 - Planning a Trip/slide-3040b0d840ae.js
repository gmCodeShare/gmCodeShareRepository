const {
  cc_sharewithclass_667f835d80df_textbox1: shareText1,
  cc_sharewithclass_667f835d80df_input1: shareInput1,
  cc_sharewithclass_667f835d80df_button1: shareButton1,
  cc_sharewithclass_667f835d80df_studentanswers1,
  feedback1,
} = components;

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

const id1 = 'slide-11572d19b8c8';
let driveAnswer = getFromSlide(id1, 'input2.data.text', '') || '';

const id2 = 'slide-aefb5835fa1a';
let flyAnswer = getFromSlide(id2, 'input2.data.text', '') || '';

const id3 = 'slide-8921e01e1e57';
let tripChoice = getFromSlide(id3, 'select1.data.selected', false) || false;
let tripOptions = getFromSlide(id3, 'select1.data.options', false) || false;

let tripText = '';

if (!driveAnswer) {
  driveAnswer = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}
if (!flyAnswer) {
  flyAnswer = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}$`;
}
if (!tripOptions.length || !tripChoice.length) {
  tripText = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id3
  )}\]}$`;
} else {
  tripText = tripOptions[parseInt(tripChoice[0])].label.toLowerCase();
}

shareText1.updateData({
  text: `Your calculated driving time: $${driveAnswer}$ $\\text{hr}$ \n\n Your calculated flying time: $${flyAnswer}$ $\\text{hr}$ \n\n You also said that you would ${tripText}. Would you change your mind? Why?`,
});

/*
    let chosen = select1.data.options[
      parseInt(select1.data.selected[0])
    ].label.toLowerCase();
*/

/*
{"compTotals":{"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"one col"}
*/
