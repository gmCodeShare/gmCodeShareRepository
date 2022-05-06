const {
  cc_sharewithclass_a83fd2af2920_textbox1: shareText1,
  cc_sharewithclass_a83fd2af2920_input1,
  cc_sharewithclass_a83fd2af2920_button1,
  cc_sharewithclass_a83fd2af2920_studentanswers1,
  feedback,
} = components;

const id1 = 'slide-338d3b66bbdd';
const id2 = 'slide-d16f272ab1a4';

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

const prevGuess =
  getFromSlide(id1, 'cc_sharewithclass_9d4f7fa9c547_input1.data.text', false) ||
  false;
const guess = prevGuess
  ? `\\pi^2 \\approx ${prevGuess}`
  : `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;

const prevTable = getFromSlide(id2, 'table1.data.rows', false) || false;
const approx =
  prevTable && prevTable[1][1].value
    ? `\\pi^2 \\approx ${prevTable[1][1].value}`
    : `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}`;

shareText1.updateData({
  text: `Your guess from earlier was $${guess}$.
  
  Your current approximation is $${approx}$.
  
  What do you notice? What do you wonder?`,
});

/*
{"compTotals":{"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M1 TE L21 - Approximate Values of Roots and π²","teacherView":false,"layout":"one col"}
*/
