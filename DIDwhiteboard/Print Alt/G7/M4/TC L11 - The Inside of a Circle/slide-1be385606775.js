const { text1, ggb1, Separator1, buttonGroup1, text2, feedback1 } = components;

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
    ggb1.instance.setValue('visA', true);
    ggb1.instance.setValue('visB', false);
    ggb1.instance.setValue('visOrigQuad', false);
    ggb1.instance.setValue('visT', true);
    ggb1.instance.setValue('visOrigTriangle', true);
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
  } else {
    ggb1.instance.setValue('visA', false);
    ggb1.instance.setValue('visT', false);
    ggb1.instance.setCoords(
      'B',
      ggb1.instance.getXcoord('BSetLoc'),
      ggb1.instance.getYcoord('BSetLoc')
    );
    setTimeout(triMidsegment, shortDelay);
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
  //Set specifics for triangle or quads
  ggb1.instance.setValue('visA', true);
  ggb1.instance.setValue('visB', false);
  ggb1.instance.setValue('visT', true);
  ggb1.instance.setValue('visOrigQuad', false);
  ggb1.instance.setValue('visOrigTriangle', true);
});

const triMidsegment = () => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('visTriMidsegment', true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimationSpeed('time', speed);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visTriMidsegment = ggb1.innerData['visTriMidsegment'];
    if (time == 1 && visTriMidsegment) {
      setTimeout(triRotate, longDelay);
    }
  });
};

const triRotate = () => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('visRotTriangle', true);
  ggb1.instance.setValue('visOrigTriangle', false);
  ggb1.instance.setValue('visTriMidsegment', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  autorun(() => {
    let time = ggb1.innerData['time'];
    let visRotTriangle = ggb1.innerData['visRotTriangle'];
    let xOfA = ggb1.instance.getXcoord('A');
    let xOfT = ggb1.instance.getXcoord('T');
    let numOfQuads = ggb1.innerData['numOfQuads'];
    if (time == 1 && visRotTriangle && (xOfT == 0 || xOfA == xOfT)) {
      setTimeout(transitionToFinalRectangle, shortDelay);
    } else if (time == 1 && visRotTriangle && numOfQuads == 1) {
      setTimeout(oneQuadStart, shortDelay);
    } else if (time == 1 && visRotTriangle && numOfQuads > 1) {
      setTimeout(multQuadsStart, shortDelay);
    }
  });
};

//draw separating horizontal segments
const oneQuadStart = () => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('visVerSegs', true);
  ggb1.instance.setValue('visStackedFinalQuads', true);
  ggb1.instance.setValue('visRotTriangle', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
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
  ggb1.instance.setValue('visRotTriangle', false);
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
    }
  });
};

const multQuadsStart = () => {
  let time = ggb1.innerData['time'];
  ggb1.instance.setValue('visHorSegs', true);
  ggb1.instance.setValue('visOrigQuad', true);
  ggb1.instance.setValue('visRotTriangle', false);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
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
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"buttongroup":1},"stage":"Launch","lessonInfo":"7 M4 TC L11 - Print Alternate Slide Deck for The Inside of a Circle","teacherView":true,"layout":"one col"}
*/
