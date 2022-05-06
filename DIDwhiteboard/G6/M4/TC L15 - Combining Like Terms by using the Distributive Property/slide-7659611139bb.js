const {
  ggb1,
  feedback1,
  cc_submit_fefb98db98d9_textbox1: submitText1,
  cc_submit_fefb98db98d9_input1: submitInput1,
  cc_submit_fefb98db98d9_button1: submitButton1,
  separator1,
  cc_sharewithclass_4e9a2a2fee35_textbox1: shareText1,
  cc_sharewithclass_4e9a2a2fee35_input1: shareInput1,
  cc_sharewithclass_4e9a2a2fee35_button1: shareButton1,
  cc_sharewithclass_4e9a2a2fee35_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-273e2b51313c';

let id1SubmitInputA = 'cc_submit_e5cd438e66f2_input1';
let id1SubmitInputB = 'cc_submit_071e30cd6934_input1';

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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

let defPrevGGB1 = {
  innerData: { y5state: 4 },
};

let prevGGB1 = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasGGBData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes('innerData')
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasGGBData) {
  prevGGB1 = defPrevGGB1;
}

let defPrevInput1A = {
  data: { text: '' },
};

let prevInput1A =
  getFromSlide(id1, id1SubmitInputA, defPrevInput1A) || defPrevInput1A; // don't forget to change slide id

let id1PulledTextA = `$\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
  id1
)}\]}$`;

if (prevInput1A.data.text) {
  id1PulledTextA = prevInput1A.data.text;
}

let defPrevInput1B = {
  data: { text: '' },
};

let prevInput1B =
  getFromSlide(id1, id1SubmitInputB, defPrevInput1B) || defPrevInput1B; // don't forget to change slide id

let id1PulledTextB = `$\\color{707070}\\text{\[no input yet on slide ${getSlideNum(
  id1
)}\]}$`;

if (prevInput1B.data.text) {
  id1PulledTextB = prevInput1B.data.text;
}

if (id1HasGGBData) {
  ggb1.instance.setValue('y5state', prevGGB1.innerData['y5state']);
}

submitText1.updateData({
  text: `You wrote the expressions $${id1PulledTextA}$ and $${id1PulledTextB}$. \n\nWrite another expression that represents the total area of the given rectangle.`,
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TC L15 - Combining Like Terms by using the Distributive Property","teacherView":false,"layout":"two col"}
*/
