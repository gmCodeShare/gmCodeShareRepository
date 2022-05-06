const {
  image1,
  feedback1,
  cc_sharewithclass_266dde9717be_textbox1,
  cc_sharewithclass_266dde9717be_input1,
  cc_sharewithclass_266dde9717be_button1,
  cc_sharewithclass_266dde9717be_studentanswers1,
} = components;

components.cc_sharewithclass_266dde9717be_button1.updateData({
  align: 'right',
});

const id1 = 'slide-9d205f5d5967';

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

let defPrevGGB1 = {
  innerData: {
    count: 2,
  },
};

let data = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes('innerData')
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

let grab = getFromSlide(id1, 'ggb2.data.image', '') || '';

if (grab) {
  image1.updateData({ src: `data:image/png;base64,${grab}` });
  image1.updateData({ alt: 'This is a really beautiful graph' });
}

// let data = getFromSlide(id1, "ggb1");
let num = -1;

if (num == -1) {
  num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
}

if (data.innerData) {
  num = data.innerData['count'] - 2;
}

cc_sharewithclass_266dde9717be_textbox1.updateData({
  text: `Here are your $${num}$ pulls. \n\nBased on your results, what is an estimate for the theoretical probability of pulling a blue chip?`,
});

/*
{"compTotals":{"bynder-image":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"two col"}
*/
