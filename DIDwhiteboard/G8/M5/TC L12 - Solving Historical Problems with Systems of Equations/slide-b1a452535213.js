const {
  ggb1,
  ggb2,
  feedback1,
  text1,
  text2,
  text3,
  input1,
  text4,
  input2,
  button1,
  text5,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

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

let correctValueOx = 7;
let correctValueSheep = 4;

let shadowFill = 0.2;
let normalFill = 1;

slide.on('firstload', () => {
  input1.updateData({ storedString: '' });
  input2.updateData({ storedString: '' });
  text5.updateData({ visible: false });
  button1.updateData({ align: 'right' });
});

const id = 'slide-c969e090344e';
let oxInput = getFromSlide(id, 'input1.data.text', '') || '';
let sheepInput = getFromSlide(id, 'input2.data.text', '') || '';

if (!oxInput) {
  oxInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

if (!sheepInput) {
  sheepInput = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

const id2 = 'slide-7f9a203b04df';
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
  text: `For your variables, you said:\n\n >${oxInput}\n\n >${sheepInput}`,
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

let snapshot1 =
  getFromSlide('slide-3636b837dd6b', 'ggb1.data.save64', '') || '';
if (snapshot1) {
  ggb1.instance.setBase64(snapshot1);
}

let snapshot2 =
  getFromSlide('slide-746092970a09', 'ggb1.data.save64', '') || '';
if (snapshot2) {
  ggb2.instance.setBase64(snapshot2, onCallback2);
} else {
  onCallback2();
}

function onCallback2() {
  ggb2.instance.setVisible('drawer', false);
  ggb2.instance.setVisible('defaultMinusObjA', false);
  ggb2.instance.setVisible('defaultMinusObjB', false);
  ggb2.instance.setVisible('defaultPlusObjA', false);
  ggb2.instance.setVisible('defaultPlusObjB', false);
  ggb2.instance.setVisible('objADrawer', false);
  ggb2.instance.setVisible('objBDrawer', false);
  ggb2.instance.setFilling('disabledMinusObjA', 0);
  ggb2.instance.setFilling('disabledMinusObjB', 0);
  ggb2.instance.setFilling('disabledPlusObjA', 0);
  ggb2.instance.setFilling('disabledPlusObjB', 0);
  ggb2.instance.setFilling('hoverMinusObjA', 0);
  ggb2.instance.setFilling('hoverMinusObjB', 0);
  ggb2.instance.setFilling('hoverPlusObjA', 0);
  ggb2.instance.setFilling('hoverPlusObjB', 0);
  let myArray = ggb2.instance.getAllObjectNames('image');
  for (let i = 0, L = myArray.length; i < L; i++) {
    ggb2.instance.setFixed(myArray[i], false, false);
  }
}

autorun(() => {
  let currentText1 = input1.data.text;
  let currentText2 = input2.data.text;
  text5.updateData({ visible: false });
  ggb1.instance.setValue('tableSubmittedBool', false);
  ggb2.instance.setValue('tableSubmittedBool', false);
  ggb1.instance.setFilling('objADisplay', normalFill);
  ggb1.instance.setFilling('objBDisplay', normalFill);
  ggb2.instance.setFilling('objADisplay', normalFill);
  ggb2.instance.setFilling('objBDisplay', normalFill);
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
  // console.log(isNaN(input2.data.text));
  // console.log(
  //   isNaN(
  //     Math.round(utils.math.evaluateLatex(input1.data.text).value * 1000000) /
  //       1000000
  //   )
  // );
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue(
    'valFromTable1',
    Math.round(utils.math.evaluateLatex(input1.data.text).value * 1000000) /
      1000000
  );
  ggb1.instance.setValue(
    'valFromTable2',
    Math.round(utils.math.evaluateLatex(input2.data.text).value * 1000000) /
      1000000
  );
  ggb2.instance.setValue(
    'valFromStudentOx',
    Math.round(utils.math.evaluateLatex(input1.data.text).value * 1000000) /
      1000000
  );
  ggb2.instance.setValue(
    'valFromStudentSheep',
    Math.round(utils.math.evaluateLatex(input2.data.text).value * 1000000) /
      1000000
  );
  ggb1.instance.setValue('tableSubmittedBool', true);
  ggb2.instance.setValue('tableSubmittedBool', true);
  ggb1.instance.setFilling('objADisplay', shadowFill);
  ggb1.instance.setFilling('objBDisplay', shadowFill);
  ggb2.instance.setFilling('objADisplay', shadowFill);
  ggb2.instance.setFilling('objBDisplay', shadowFill);
  if (
    correctValueOx ==
      Math.round(utils.math.evaluateLatex(input1.data.text).value * 1000000) /
        1000000 &&
    correctValueSheep ==
      Math.round(utils.math.evaluateLatex(input2.data.text).value * 1000000) /
        1000000
  ) {
    text5.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":2,"textbox":6,"input":2,"button":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Solving Historical Problems with Systems of Equations​","teacherView":false,"layout":"two col"}
*/
