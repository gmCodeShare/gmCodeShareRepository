const { text3, ggb1, text1, feedback1, ggb2, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

/*slide.on("firstload", () => {
  ggb2.instance.setValue("driving", false);
}); */

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
    // set initial states
    ggb2.instance.setValue('driving', false);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

let prevData =
  getFromSlide('slide-8921e01e1e57', 'select1.data', false) || false;
let prevChoice = '';

if (prevData.selected?.length) {
  prevChoice = prevData.options[parseInt(prevData.selected[0])].label;
  /*if (prevChoice == "Drive") {
    text2.updateData({ className: "text-light" });
  }*/
}

if (prevChoice == 'Drive') {
  text1.updateData({ className: '' });
  text2.updateData({ className: 'text-muted' });
} else if (prevChoice == 'Fly') {
  text2.updateData({ className: '' });
  text1.updateData({ className: 'text-muted' });
}

const id = 'slide-7d36c15d0675';
let dest = getFromSlide(id, 'ggb1.innerData.chosenText', false) || false;
if (!dest) {
  dest = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
} else {
  dest = dest.replace(/([A-Z][a-z]+)([A-Z][a-z]+)/, '$1 $2');
}

let dist = getFromSlide(id, 'text1.data.dist', false) || false;
if (!dist) {
  dist = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
}

autorun(() => {
  let driveSpeed = ggb1.innerData['driveSpeed'];
  let flySpeed = ggb2.innerData['flySpeed'];
  let preBoard = ggb2.innerData['preBoard'];
  let preBoardUnits = 'hours';
  let postLand = ggb2.innerData['postLand'];
  let airportText = '';
  let baggageText = '';
  if (preBoard == 1) {
    airportText = 'pretty quiet';
    preBoardUnits = 'hour';
  } else if (preBoard == 1.5) {
    airportText = 'a little busy';
  } else if (preBoard == 2 || preBoard == 2.5) {
    airportText = 'pretty busy';
  } else if (preBoard == 3) {
    airportText = 'very busy';
  }
  if (postLand) {
    baggageText = ` Once we land, we think it will take about $\\text\\color{823F98}{${postLand}}$ minutes to get our bags.`;
  }
  text1.updateData({
    text: `We're headed to ${dest}! We decided to drive. ${dest} is $${dist}$ miles away and we'll be driving about $\\text\\color{DA291C}{${driveSpeed}}$ $\\text{mph}$ the whole time.`,
  });
  text2.updateData({
    text: `We're headed to ${dest}! We decided to fly. We think the airport will be ${airportText}, so we're planning to get there $\\text\\color{007FAF}{${preBoard}}$ ${preBoardUnits} early. ${dest} is about $${dist}$ miles away and the plane flies about $\\text\\color{008139}{${flySpeed}}$ $\\text{mph}$ the whole time.${baggageText}`,
  });
  //let shown = text2.data
  //console.log({...shown});
});

/*
{"compTotals":{"textbox":4,"geogebra":2},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"T layout"}
*/
