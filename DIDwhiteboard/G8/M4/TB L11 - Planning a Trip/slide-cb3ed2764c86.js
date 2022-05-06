const {
  ggb1,
  separator2,
  button1,
  feedback1,
  text1,
  cc_sharewithclass_73b131d15b77_textbox1: shareText1,
  cc_sharewithclass_73b131d15b77_input1: shareInput1,
  cc_sharewithclass_73b131d15b77_button1: shareButton1,
  cc_sharewithclass_73b131d15b77_studentanswers1,
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

ggb1.instance.stopAnimation();
ggb1.instance.setValue('time', 0);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

const defaults = {
  carMPH: 55,
  timePreBoard: 120,
  planeMPH: 575,
  timePostBoard: 30,
  chosenCity: 'Fresno',
  chosenState: 'CA',
  dist: 229,
};

const id1 = 'slide-7d36c15d0675';
let dest = getFromSlide(id1, 'ggb1.innerData.chosenText', '') || '';
if (!dest) {
  dest = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  ggb1.instance.setCoords(
    'Chosen',
    ggb1.instance.getXcoord(defaults.chosenCity),
    ggb1.instance.getYcoord(defaults.chosenCity)
  );
} else {
  ggb1.instance.setCoords(
    'Chosen',
    ggb1.instance.getXcoord(dest),
    ggb1.instance.getYcoord(dest)
  );
  //dest = dest.replace(/([A-Z][a-z]+)([A-Z][a-z]+)/, "$1 $2");
}

let dist = getFromSlide(id1, 'text1.data.dist', '') || '';
if (!dist) {
  dist = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  ggb1.instance.setValue('dist', defaults.dist);
} else {
  ggb1.instance.setValue('dist', dist);
}

configGGB();
function configGGB() {
  let planeAssumptions =
    getFromSlide('slide-e2c5650a1171', 'ggb2.innerData', false) || false;
  if (!planeAssumptions || !planeAssumptions['preBoard']) {
    button1.updateData({ visible: false });
    return;
  } else {
    button1.updateData({ visible: true });
  }
  let carMPH =
    getFromSlide('slide-e2c5650a1171', 'ggb1.innerData.driveSpeed', false) ||
    false;
  if (!carMPH && carMPH != 0) {
    carMPH = defaults.carMPH;
  }
  ggb1.instance.setValue('carMPH', carMPH);

  let timePreBoard, planeMPH, timePostBoard;
  if (!planeAssumptions) {
    timePreBoard = defaults.timePreBoard;
    planeMPH = defaults.planeMPH;
    timePostBoard = defaults.timePostBoard;
  } else {
    timePreBoard = planeAssumptions['preBoard'] * 60;
    planeMPH = planeAssumptions['flySpeed'];
    timePostBoard = planeAssumptions['postLand'];
  }
  ggb1.instance.setValue('timePreBoard', timePreBoard);
  ggb1.instance.setValue('planeMPH', planeMPH);
  ggb1.instance.setValue('timePostBoard', timePostBoard);
}

const id2 = 'slide-11572d19b8c8';
let driveAnswer = getFromSlide(id2, 'input2.data.text', '') || '';
if (!driveAnswer) {
  driveAnswer = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}$`;
}

const id3 = 'slide-aefb5835fa1a';
let flyAnswer = getFromSlide(id3, 'input2.data.text', '') || '';
if (!flyAnswer) {
  flyAnswer = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id3
  )}\]}$`;
}

let chosenCity;
switch (dest) {
  case 'Dallas':
    ggb1.instance.setValue('topText', false);
    chosenCity = 'Dallas, TX';
    break;
  case 'Fresno':
    ggb1.instance.setValue('topText', true);
    chosenCity = 'Fresno, CA';
    break;
  case 'Jackson':
    ggb1.instance.setValue('topText', false);
    chosenCity = 'Jackson, WY';
    break;
  case 'LosAngeles':
    ggb1.instance.setValue('topText', true);
    chosenCity = 'Los Angeles, CA';
    break;
  case 'Phoenix':
    ggb1.instance.setValue('topText', false);
    chosenCity = 'Phoenix, AZ';
    break;
  case 'RapidCity':
    ggb1.instance.setValue('topText', false);
    chosenCity = 'Rapid City, SD';
    break;
  case 'SanDiego':
    ggb1.instance.setValue('topText', false);
    chosenCity = 'San Diego, CA';
    break;
  case 'SantaBarbara':
    ggb1.instance.setValue('topText', true);
    chosenCity = 'Santa Barbara, CA';
    break;
  default:
    ggb1.instance.setValue('topText', true);
    chosenCity = dest;
}

text1.updateData({
  text: `Your destination:
${chosenCity}, $${dist}$ $\\text{mi}$ from San Bernardino, CA

Your calculated trip times:  
Driving: $${driveAnswer}$ $\\text{hr}$  
Flying: $${flyAnswer}$ $\\text{hr}$

Use the animation to check your calculations.`,
});

button1.on('click', () => {
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  // button1.updateData({disabled: true});
});

autorun(() => {
  let time = ggb1.innerData['timeParam'];
  button1.updateData({ disabled: !(time == 0 || time == 1) });
  if (time == 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
