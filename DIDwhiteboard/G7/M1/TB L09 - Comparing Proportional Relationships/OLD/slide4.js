const {
  ggb1,
  text1,
  cc_submit_9d7775533762_textbox1,
  cc_submit_9d7775533762_input1,
  cc_submit_9d7775533762_button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

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

const id1 = `slide-4410e360d22f`;

let studentInput =
  getFromSlide(id1, 'cc_sharewithclass_a7c9bd6842f5_input1.data.text', '') ||
  '';
if (!studentInput) {
  studentInput = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  text1.updateData({
    text: `This is what you said all the graphs in group A have in common:  
  >$${studentInput}$ `,
  });
} else {
  text1.updateData({
    text: `This is what you said all the graphs in group A have in common:  
  >${studentInput}`,
  });
}

cc_submit_9d7775533762_button1.updateData({ align: 'right' });
