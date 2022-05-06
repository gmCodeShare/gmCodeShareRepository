const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  table1,
  cc_sharewithclass_aa4d988a132f_textbox1,
  cc_sharewithclass_aa4d988a132f_input1,
  cc_sharewithclass_aa4d988a132f_button1,
  cc_sharewithclass_aa4d988a132f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

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

let data = getFromSlide('slide-77f8d1fdbe6c', 'ggb2', false) || false;
if (data.innerData) {
  ggb1.instance.setValue('a', data.innerData['a']);
  ggb1.instance.setValue('b', data.innerData['b']);
}

const id1 = 'slide-ff9a717055b2';
const reason1 =
  getFromSlide(id1, 'cc_sharewithclass_6347c64e3bee_input1.data.text', '') ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`;

const id2 = 'slide-85cfbb8a3cde';
const reason2 =
  getFromSlide(id2, 'cc_sharewithclass_67182260e199_input1.data.text', '') ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id2)}\]}$`;

const id3 = 'slide-dfbfe2a5e129';
const reason3 =
  getFromSlide(id3, 'cc_sharewithclass_67182260e199_input1.data.text', '') ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id3)}\]}$`;

const id4 = 'slide-04ba43a43d48';
const reason4 =
  getFromSlide(id4, 'cc_sharewithclass_67182260e199_input1.data.text', '') ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id4)}\]}$`;

const id5 = 'slide-c236f1b33a03';
const reason5 =
  getFromSlide(id5, 'cc_sharewithclass_67182260e199_input1.data.text', '') ||
  `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id5)}\]}$`;

table1.updateCell(0, 1, { value: reason1 });
table1.updateCell(1, 1, { value: reason2 });
table1.updateCell(2, 1, { value: reason3 });
table1.updateCell(3, 1, { value: reason4 });
table1.updateCell(4, 1, { value: reason5 });

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('colorBool', true);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('colorBool', false);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"table":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
