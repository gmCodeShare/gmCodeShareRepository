const {
  ggb1,
  text1,
  text2,
  cc_submit_1567f0f8b712_textbox1: submitText1,
  cc_submit_1567f0f8b712_input1: submitInput1,
  cc_submit_1567f0f8b712_button1: submitButton1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('DragPoint', updateRight);

let id1 = 'slide-e83f4c9b4c23';

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

slide.on('firstload', () => {
  button1.updateData({ visible: false });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  ggb1.instance.setVisible('B', false);
  ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
});

let animal = getFromSlide(id1, 'select1.data.selected', false) || false;

if (!animal) {
  animal = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

let animalName = [
  'cat',
  'dog',
  'mouse',
  'parrot',
  'rabbit',
  'zebra',
  'bear',
  'pig',
  'snake',
  'fish',
  'turtle',
  'spider',
];

let num =
  getFromSlide(id1, 'cc_submit_6bc092fd2459_input1.data.text', false) || false;

let noMoney;
if (!!num) {
  noMoney = num.replace('\\$', '');
}

let result = utils.math.evaluateLatex(noMoney);
if (!result.error) {
  ggb1.instance.evalCommand(`CheckPoint1=(30,${result.value})`);
  ggb1.instance.setVisible('CheckPoint1', false);
  if (result.value > 45 && result.value < 300) {
    ggb1.instance.setValue('ymax', result.value + 10);
    ggb1.instance.setValue('xmax', result.value + 10);
    ggb1.instance.setValue('spacer', result.value / 5);
  } else {
    ggb1.instance.setValue('ymax', 50);
    ggb1.instance.setValue('xmax', 50);
    ggb1.instance.setValue('spacer', 9.2);
  }
  if (result.value >= 300) {
    ggb1.instance.setValue('ymax', 330);
    ggb1.instance.setValue('xmax', 330);
    ggb1.instance.setValue('spacer', result.value / 5);
  }
} else {
  num = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

let choice = animalName[parseInt(animal)];
if (animal.length == 0) {
  choice = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  text1.updateData({
    text: `You chose a $${choice}$ as a pet.  You estimated that it would cost  $${num}$ to feed your pet every $30$ days.`,
  });
} else {
  text1.updateData({
    text: `You chose a ${
      animalName[parseInt(animal)]
    } as a pet.  You estimated that it would cost  $${num}$ to feed your pet every $30$ days.`,
  });
}

if (!!num) {
  ggb1.instance.setValue('yCoord', num);
}

if (animal == 0 && animal.length == 1) {
  ggb1.instance.setValue('showCat', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 5);
} else {
  ggb1.instance.setValue('showCat', false);
}
if (animal == 1) {
  ggb1.instance.setValue('showDog', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 5);
} else {
  ggb1.instance.setValue('showDog', false);
}
if (animal == 2) {
  ggb1.instance.setValue('showMouse', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 5);
} else {
  ggb1.instance.setValue('showMouse', false);
}
if (animal == 3) {
  ggb1.instance.setValue('showParrot', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 7);
} else {
  ggb1.instance.setValue('showParrot', false);
}
if (animal == 4) {
  ggb1.instance.setValue('showBunny', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 7);
} else {
  ggb1.instance.setValue('showBunny', false);
}
if (animal == 5) {
  ggb1.instance.setValue('showZebra', true);
  ggb1.instance.setColor('DragPoint', 218, 41, 28);
  ggb1.instance.setValue('labelHeight', 5);
  blackAnswer();
} else {
  ggb1.instance.setValue('showZebra', false);
}
if (animal == 6) {
  ggb1.instance.setValue('showBear', true);
  ggb1.instance.setColor('DragPoint', 237, 178, 32);
  ggb1.instance.setValue('labelHeight', 5);
  blackAnswer();
} else {
  ggb1.instance.setValue('showBear', false);
}
if (animal == 7) {
  ggb1.instance.setValue('showPig', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 5);
} else {
  ggb1.instance.setValue('showPig', false);
}
if (animal == 8) {
  ggb1.instance.setValue('showSnake', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 7);
} else {
  ggb1.instance.setValue('showSnake', false);
}
if (animal == 9) {
  ggb1.instance.setValue('showFish', true);
  blackAndBlue();
  ggb1.instance.setValue('labelHeight', 6);
} else {
  ggb1.instance.setValue('showFish', false);
}
if (animal == 10) {
  ggb1.instance.setValue('showTurtle', true);
  ggb1.instance.setColor('DragPoint', 237, 178, 32);
  ggb1.instance.setValue('labelHeight', 7);
  blackAnswer();
} else {
  ggb1.instance.setValue('showTurtle', false);
}
if (animal == 11) {
  ggb1.instance.setValue('showSpider', true);
  ggb1.instance.setColor('DragPoint', 242, 106, 54);
  ggb1.instance.setValue('labelHeight', 9);
  blackAnswer();
} else {
  ggb1.instance.setValue('showSpider', false);
}

function updateRight() {
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  ggb1.instance.setValue('show', false);
}

function blackAndBlue() {
  ggb1.instance.setColor('DragPoint', 0, 0, 0);
  ggb1.instance.setColor('B', 0, 127, 175);
  ggb1.instance.setColor('C4', 0, 127, 175);
}

function blackAnswer() {
  ggb1.instance.setColor('B', 0, 0, 0);
  ggb1.instance.setColor('C4', 0, 0, 0);
}

submitButton1.on('click', () => {
  let pattern = /\\left\(\d+,\d+\\right\)/;
  if (pattern.test(submitInput1.data.text)) {
    ggb1.instance.evalLaTeX(`B=${submitInput1.data.text}`);
    ggb1.instance.setLayer('B', 6);
    ggb1.instance.setPointStyle('B', 10);
    ggb1.instance.setPointSize('B', 4);
    ggb1.instance.setFixed('B', true, false);
    ggb1.instance.setVisible('B', true);
    ggb1.instance.setVisible('C4', true);
    button1.updateData({ disabled: false });
  }
  ggb1.instance.setVisible('CheckWrong', false);
  ggb1.instance.setVisible('CheckPoint1', false);
  button1.updateData({ visible: true });
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  let pattern2 = /\\left\(\d+,\d+\\right\)/;
  if (pattern2.test(submitInput1.data.text)) {
    ggb1.instance.setVisible('CheckPoint1', false);
    ggb1.instance.setValue('show', true);
    ggb1.instance.setValue('correct', true);
    ggb1.instance.evalLaTeX(`CheckWrong=${submitInput1.data.text}`);
    ggb1.instance.setVisible('CheckWrong', false);
    if (
      ggb1.instance.getXcoord('CheckWrong') ==
        ggb1.instance.getXcoord('CheckPoint1') &&
      ggb1.instance.getYcoord('CheckWrong') ==
        ggb1.instance.getYcoord('CheckPoint1')
    ) {
      ggb1.instance.setValue('correct', true);
    } else {
      ggb1.instance.setVisible('CheckWrong', false);
      ggb1.instance.setValue('correct', false);
    }
    ggb1.instance.setVisible('CheckWrong', false);
    ggb1.instance.setValue('show', true);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"button":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
