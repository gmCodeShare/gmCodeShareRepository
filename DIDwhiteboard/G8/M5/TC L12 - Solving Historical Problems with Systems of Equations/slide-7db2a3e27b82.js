const {
  ggb1,
  ggb2,
  feedback1,
  text1,
  text2,
  image1,
  text3,
  input1,
  image2,
  text4,
  input2,
  button1,
  text5,
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

let picAValue;
let picBValue;

let shadowFill = 0.2;
let normalFill = 1;

let leftTotalGGB1;
let rightTotalGG1;
let leftTotalGGB2;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let picsAFromSecondSlide =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.picsA', '') || '';

let picsBFromSecondSlide =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.picsB', '') || '';

//const prev64A = getFromSlide('slide-4de50a577000', 'ggb1.data.save64');
let bottomImageA1 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.bottomImageA', '') || '';
let bottomImageB1 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.bottomImageB', '') || '';

let bottomImageA2 =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.bottomImageA', '') || '';
let bottomImageB2 =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.bottomImageB', '') || '';

let snapshot1 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.save64', '') || '';
if (snapshot1) {
  ggb1.instance.setBase64(snapshot1, onCallback1);
} else {
  onCallback1();
}

let snapshot2 =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.save64', '') || '';
if (snapshot2) {
  ggb2.instance.setBase64(snapshot2, onCallback2);
} else {
  onCallback2();
}

function onCallback1() {
  ggb1.instance.setVisible('drawer', false);
  ggb1.instance.setVisible('picSparrowText', false);
  ggb1.instance.setVisible('picSwallowText', false);
  ggb1.instance.setVisible(bottomImageA1, false);
  ggb1.instance.setVisible(bottomImageB1, false);
  let myArray = ggb1.instance.getAllObjectNames('image');
  for (let i = 0, L = myArray.length; i < L; i++) {
    ggb1.instance.setFixed(myArray[i], false, false);
  }
}

function onCallback2() {
  ggb2.instance.setVisible('drawer', false);
  ggb2.instance.setVisible('defaultMinusObjARight', false);
  ggb2.instance.setVisible('defaultMinusObjBRight', false);
  ggb2.instance.setVisible('defaultPlusObjARight', false);
  ggb2.instance.setVisible('defaultPlusObjBRight', false);
  ggb2.instance.setFilling('disabledMinusObjARight', 0);
  ggb2.instance.setFilling('disabledMinusObjBRight', 0);
  ggb2.instance.setFilling('disabledPlusObjARight', 0);
  ggb2.instance.setFilling('disabledPlusObjBRight', 0);
  ggb2.instance.setFilling('hoverMinusObjARight', 0);
  ggb2.instance.setFilling('hoverMinusObjBRight', 0);
  ggb2.instance.setFilling('hoverPlusObjARight', 0);
  ggb2.instance.setFilling('hoverPlusObjBRight', 0);
  ggb2.instance.setVisible(bottomImageA2, false);
  ggb2.instance.setVisible(bottomImageB2, false);
  let myArray = ggb2.instance.getAllObjectNames('image');
  for (let i = 0, L = myArray.length; i < L; i++) {
    //changing setFixed to setVisible
    //ggb2.instance.setFixed(myArray[i], false, false);
    ggb2.instance.setVisible(myArray[i], false);
  }
  ggb2.instance.setVisible('weight', true);
  ggb2.instance.setValue('forcedStackedBool', true);
  if (ggb2.instance.getValue('numObjAInArr1') > 0) {
    ggb2.instance.setFilling('objALeftMult', normalFill);
  } else {
    ggb2.instance.setFilling('objALeftMult', shadowFill);
  }
  if (ggb2.instance.getValue('numObjBInArr1') > 0) {
    ggb2.instance.setFilling('objBLeftMult', normalFill);
  } else {
    ggb2.instance.setFilling('objBLeftMult', shadowFill);
  }
}

let slide2Target1Arr =
  getFromSlide('slide-4de50a577000', 'ggb1.data.target1Arr', []) || [];

if (!slide2Target1Arr.length) {
  slide2Target1Arr = 0;
}

let slide2Target2Arr =
  getFromSlide('slide-4de50a577000', 'ggb1.data.target2Arr', []) || [];

if (!slide2Target2Arr.length) {
  slide2Target2Arr = 0;
}

let slide2CurentAInTar1 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.currentAInTar1', false) ||
  false;

if (!slide2CurentAInTar1) {
  slide2CurentAInTar1 = 0;
}

let slide2CurentBInTar1 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.currentBInTar1', false) ||
  false;

if (!slide2CurentBInTar1) {
  slide2CurentBInTar1 = 0;
}

let slide2CurentAInTar2 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.currentAInTar2', false) ||
  false;

if (!slide2CurentAInTar2) {
  slide2CurentAInTar2 = 0;
}

let slide2CurentBInTar2 =
  getFromSlide('slide-4de50a577000', 'ggb1.data.currentBInTar2', false) ||
  false;

if (!slide2CurentBInTar2) {
  slide2CurentBInTar2 = 0;
}

//const prev64B = getFromSlide('slide-705d219ad8ee', 'ggb1.data.save64');
let slide4Target1Arr =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.target1Arr', false) || false;

if (!slide4Target1Arr) {
  slide4Target1Arr = 0;
}

let slide4CurentAInTar1 =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.currentAInTar1', false) ||
  false;

if (!slide4CurentAInTar1) {
  slide4CurentAInTar1 = 0;
}

let slide4CurentBInTar1 =
  getFromSlide('slide-705d219ad8ee', 'ggb1.data.currentBInTar1', false) ||
  false;

if (!slide4CurentBInTar1) {
  slide4CurentBInTar1 = 0;
}

let jinWeight = 1;

ggb2.updateInnerData({ rightTotal: jinWeight });

ggb1.updateInnerData({ time: 0 });
ggb2.updateInnerData({ time: 0 });

/*
if (prev64A) {
  ggb1.instance.setBase64(prev64A, configAppA);
}

if (prev64B) {
  ggb2.instance.setBase64(prev64B, configAppB);
}
*/

const id = 'slide-45834b10817f';
let swallowInput = getFromSlide(id, 'input1.data.text', '') || '';
let sparrowInput = getFromSlide(id, 'input2.data.text', '') || '';

if (!swallowInput) {
  swallowInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

if (!sparrowInput) {
  sparrowInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

const id2 = 'slide-a8d3eadfd8ad';
let equation1 = getFromSlide(id2, 'input1.data.text', '') || '';
let equation2 = getFromSlide(id2, 'input2.data.text', '') || '';

let bothEquations;
if (!!equation1 && !!equation2) {
  bothEquations = true;
}

if (!equation1) {
  equation1 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}`;
}

if (!equation2) {
  equation2 = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}`;
}

text1.updateData({
  text: `For your variables, you said:\n\n >${swallowInput}\n\n >${sparrowInput}`,
});

if (bothEquations) {
  text2.updateData({
    text: `For your system of equations, you said:\n\n$\\begin{cases}
    ${equation1} \\\\
    ${equation2}
  \\end{cases}$`,
  });
} else {
  text2.updateData({
    text: `For your system of equations, you said:\n\n
    $${equation1}$\n\n
    $${equation2}$`,
  });
}

button1.updateData({ align: 'right' });

slide.on('firstload', () => {
  input1.updateData({ storedString: '' });
  input2.updateData({ storedString: '' });
  text5.updateData({ visible: false });
});

autorun(() => {
  let currentText1 = input1.data.text;
  let currentText2 = input2.data.text;
  if (
    currentText1 != input1.data.storedString ||
    currentText2 != input2.data.storedString
  ) {
    input1.updateData({ storedString: input1.data.text });
    input2.updateData({ storedString: input2.data.text });
    button1.updateData({ disabled: false });
  }
  if (currentText1 == '' || currentText2 == '') {
    button1.updateData({ disabled: true });
  }
  ggb1.updateInnerData({
    leftTotal:
      Math.round(
        (utils.math.evaluateLatex(input1.data.text).value *
          slide2CurentAInTar1.length +
          utils.math.evaluateLatex(input2.data.text).value *
            slide2CurentBInTar1.length) *
          1000000
      ) / 1000000,
  });
  leftTotalGGB1 = ggb1.innerData['leftTotal'];
  //console.log('leftTotalGGB1: ', leftTotalGGB1);
  ggb1.updateInnerData({
    rightTotal:
      Math.round(
        (utils.math.evaluateLatex(input1.data.text).value *
          slide2CurentAInTar2.length +
          utils.math.evaluateLatex(input2.data.text).value *
            slide2CurentBInTar2.length) *
          1000000
      ) / 1000000,
  });
  rightTotalGGB1 = ggb1.innerData['rightTotal'];
  //console.log('rightTotalGGB1: ', rightTotalGGB1);
  ggb2.updateInnerData({
    leftTotal:
      Math.round(
        (utils.math.evaluateLatex(input1.data.text).value *
          slide4CurentAInTar1.length +
          utils.math.evaluateLatex(input2.data.text).value *
            slide4CurentBInTar1.length) *
          1000000
      ) / 1000000,
  });
  leftTotalGGB2 = ggb1.innerData['leftTotal'];
  //console.log('leftTotalGGB2: ', leftTotalGGB2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('start', 0);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', false);
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue('start', 0);
  ggb2.instance.setValue('time', 0);
  ggb2.instance.setAnimating('time', false);
  text5.updateData({ visible: false });
});

button1.on('click', () => {
  ggb1.updateInnerData({});
  button1.updateData({ disabled: true });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('start', 0);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setValue('finish', ggb1.instance.getValue('tilt'));
  ggb1.instance.startAnimation();
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue('start', 0);
  ggb2.instance.setValue('time', 0);
  ggb2.instance.setAnimating('time', true);
  ggb2.instance.setValue('finish', ggb2.instance.getValue('tilt'));
  ggb2.instance.startAnimation();
  if (
    ggb1.instance.getValue('tilt') == 0 &&
    ggb2.instance.getValue('tilt') == 0
  ) {
    text5.updateData({ visible: true });
  }
});

autorun(() => {
  let time1 = ggb1.innerData['time'];
  let time2 = ggb1.innerData['time'];
  snapToLanding();
});

function snapToLanding() {
  for (let i = 0, L = slide2Target1Arr.length; i < L; i++) {
    ggb1.instance.setCoords(
      slide2Target1Arr[i],
      ggb1.instance.getListValue('target1LandingXVals', i + 1),
      ggb1.instance.getListValue('target1LandingYVals', i + 1)
    );
  }
  for (let i = 0, L = slide2Target2Arr.length; i < L; i++) {
    ggb1.instance.setCoords(
      slide2Target2Arr[i],
      ggb1.instance.getListValue('target2LandingXVals', i + 1),
      ggb1.instance.getListValue('target2LandingYVals', i + 1)
    );
  }
  for (let i = 0, L = slide4Target1Arr.length; i < L; i++) {
    ggb2.instance.setCoords(
      slide4Target1Arr[i],
      ggb2.instance.getListValue('target1LandingXVals', i + 1),
      ggb2.instance.getListValue('target1LandingYVals', i + 1)
    );
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":6,"uploaded-image":2,"input":2,"button":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Solving Historical Problems with Systems of Equations​","teacherView":false,"layout":"two col"}
*/
