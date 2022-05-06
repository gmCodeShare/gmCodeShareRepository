const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  Separator1,
  text2,
  cc_sharewithclass_a60a548a2a9f_textbox1: shareText1,
  cc_sharewithclass_a60a548a2a9f_input1: shareInput1,
  cc_sharewithclass_a60a548a2a9f_button1: shareButton1,
  cc_sharewithclass_a60a548a2a9f_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredArea = 12;
let shortDelay = 500; //delay in animations in milliseconds
let longDelay = 1000; //delay in animations in milliseconds
let speed = 6.5;
ggb1.instance.setValue('speed', speed);

onInit();

function onInit() {
  if (!ggb1.data.init) {
    // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
    components.cc_sharewithclass_a60a548a2a9f_button1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_a60a548a2a9f_textbox1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_a60a548a2a9f_input1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_a60a548a2a9f_button1.updateData({
      align: 'right',
    });
    ggb1.instance.setValue('visA', true);
    ggb1.instance.setValue('visB', true);
    ggb1.instance.setValue('visOrigQuad', true);
    ggb1.instance.setValue('visT', false);
    ggb1.instance.setValue('visOrigTriangle', false);
    updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

function updateSingleButtonGroup(
  indexStartingInOne,
  data,
  buttonGroupComponent
) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroupComponent.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroupComponent.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on('click:1', () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  if (ggb1.instance.getValue('y(B)') == 0) {
    text2.updateData({ text: 'Hmm... your figure has no height.' });
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  } else if (
    ggb1.instance.getValue('x(B)') == 0 &&
    ggb1.instance.getValue('finalRectangle') == desiredArea
  ) {
    //condiditon not needed for triangle on slide 3
    text2.updateData({
      text:
        'Excellent! Challenge yourself and make one that is not a rectangle.',
    });
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  } else {
    ggb1.instance.setValue('visA', false);
    ggb1.instance.setValue('visB', false);
    if (ggb1.instance.getValue('numOfQuads') == 1) {
      setTimeout(oneQuadStart, shortDelay);
    } else {
      setTimeout(multQuadsStart, shortDelay);
    }
  }
});

buttonGroup1.on('click:2', () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  //set all values back to initial state
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('visFinalPolys', false);
  ggb1.instance.setValue('visFinalRectangle', false);
  ggb1.instance.setValue('visHorSegs', false);
  ggb1.instance.setValue('visRotTriangle', false);
  ggb1.instance.setValue('visStackedFinalQuads', false);
  ggb1.instance.setValue('visTriMidsegment', false);
  ggb1.instance.setValue('visVerSegs', false);
  ggb1.instance.setAnimationSpeed('time', speed);
  //Set specifics for triangle or quads
  ggb1.instance.setValue('visA', true);
  ggb1.instance.setValue('visB', true);
  ggb1.instance.setValue('visT', false);
  ggb1.instance.setValue('visOrigQuad', true);
  ggb1.instance.setValue('visOrigTriangle', false);
  text2.updateData({ text: '' });
});

//draw separating horizontal segments
const oneQuadStart = () => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('visVerSegs', true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimationSpeed('time', speed);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visVerSegs = ggb1.innerData['visVerSegs'];
    if (time == 1 && visVerSegs) {
      setTimeout(quadSplit, longDelay);
    }
  });
};

//changes visibility of initial quadrilateral to final quad and trianlge. Goes to final polys for finalTrianlgesSlide
const quadSplit = () => {
  ggb1.instance.setValue('visVerSegs', false);
  ggb1.instance.setValue('visFinalPolys', true);
  ggb1.instance.setValue('visOrigQuad', false);
  ggb1.instance.setValue('visStackedFinalQuads', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visFinalPolys = ggb1.innerData['visFinalPolys'];
    if (time == 1 && visFinalPolys) {
      setTimeout(transitionToFinalRectangle, longDelay);
    }
  });
};

const transitionToFinalRectangle = () => {
  ggb1.instance.setValue('visFinalRectangle', true);
  ggb1.instance.setValue('visFinalPolys', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimationSpeed('time', 20);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visFinalRectangle = ggb1.innerData['visFinalRectangle'];
    if (time == 1 && visFinalRectangle) {
      updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
      shareText1.updateData({ visible: true });
      shareInput1.updateData({ visible: true });
      shareButton1.updateData({ visible: true });
      shareAnswers1.updateData({ visible: true });
    }
  });
};

const multQuadsStart = () => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('visHorSegs', true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimationSpeed('time', speed);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visHorSegs = ggb1.innerData['visHorSegs'];
    if (time == 1 && visHorSegs) {
      setTimeout(quadSlide, longDelay);
    }
  });
};

const quadSlide = () => {
  ggb1.instance.setValue('visHorSegs', false);
  ggb1.instance.setValue('visTranslatedQuads', true);
  ggb1.instance.setValue('visOrigQuad', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visTranslatedQuads = ggb1.innerData['visTranslatedQuads'];
    if (time == 1 && visTranslatedQuads) {
      setTimeout(stackedQuads, longDelay);
    }
  });
};

const stackedQuads = () => {
  ggb1.instance.setValue('visStackedFinalQuads', true);
  ggb1.instance.setValue('visTranslatedQuads', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  setTimeout(oneQuadStart, shortDelay);
};

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M4 TC L11 - The Inside of a Circle","teacherView":false,"layout":"two col"}
*/
