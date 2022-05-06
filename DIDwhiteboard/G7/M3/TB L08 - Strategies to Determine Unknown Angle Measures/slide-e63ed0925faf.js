const {
  ggb1,
  feedback,
  text1,
  button1,
  text2,
  radio1,
  cc_sharewithclass_c78bcc179dc6_textbox1: text3,
  cc_sharewithclass_c78bcc179dc6_input1: input3,
  cc_sharewithclass_c78bcc179dc6_button1: button3,
  cc_sharewithclass_c78bcc179dc6_studentanswers1,
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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button3.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    button3.updateData({ visible: false });
    text3.updateData({ visible: false });
    input3.updateData({ visible: false });
    radio1.updateData({ visible: false });
    text2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

const id1 = `slide-cbb4f4d70110`;
let num =
  getFromSlide(id1, `cc_submit_6dec7d7b823f_input1.data.text`, '') || '';

const id2 = `slide-a36f89b2879a`;
let num2 =
  getFromSlide(id2, `cc_sharewithclass_c78bcc179dc6_input1.data.text`, '') ||
  '';

if (!num) {
  num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
}

if (!num2) {
  num2 = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id2)}\]}`;
}

text1.updateData({
  text: `You wrote that this situation is represented by the equation $${num2}$.  

In your book, solve the equation by using if–then moves.`,
});

text2.updateData({ text: `Does $x$ have the same value of  $${num}$?` });

button1.on('click', () => {
  radio1.updateData({ visible: true });
  text2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (radio1.data.selected) {
    button3.updateData({ visible: true });
    text3.updateData({ visible: true });
    input3.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
