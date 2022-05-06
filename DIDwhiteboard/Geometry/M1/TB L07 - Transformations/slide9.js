const { ggb1 } = components;

let booleanArray = [
  'showALandingSpots',
  'showBLandingSpots',
  'showCLandingSpots',
  'showDLandingSpots',
  'showELandingSpots',
  'showFLandingSpots',
  'showGLandingSpots',
  'showHLandingSpots',
];

let focusIndicators = [
  'cardAFocusIndicator',
  'cardBFocusIndicator',
  'cardCFocusIndicator',
  'cardDFocusIndicator',
  'cardEFocusIndicator',
  'cardFFocusIndicator',
  'cardGFocusIndicator',
  'cardHFocusIndicator',
];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(showPurpleBoxes);

function showPurpleBoxes(a) {
  if (a.type == 'select') {
    if (a.target == 'CardAPoint') {
      ggb1.instance.setValue('showALandingSpots', true);
      ggb1.instance.setVisible('cardAFocusIndicator', true);
    } else if (a.target == 'CardBPoint') {
      ggb1.instance.setValue('showBLandingSpots', true);
      ggb1.instance.setVisible('cardBFocusIndicator', true);
    } else if (a.target == 'CardCPoint') {
      ggb1.instance.setValue('showCLandingSpots', true);
      ggb1.instance.setVisible('cardCFocusIndicator', true);
    } else if (a.target == 'CardDPoint') {
      ggb1.instance.setValue('showDLandingSpots', true);
      ggb1.instance.setVisible('cardDFocusIndicator', true);
    } else if (a.target == 'CardEPoint') {
      ggb1.instance.setValue('showELandingSpots', true);
      ggb1.instance.setVisible('cardEFocusIndicator', true);
    } else if (a.target == 'CardFPoint') {
      ggb1.instance.setValue('showFLandingSpots', true);
      ggb1.instance.setVisible('cardFFocusIndicator', true);
    } else if (a.target == 'CardGPoint') {
      ggb1.instance.setValue('showGLandingSpots', true);
      ggb1.instance.setVisible('cardGFocusIndicator', true);
    } else if (a.target == 'CardHPoint') {
      ggb1.instance.setValue('showHLandingSpots', true);
      ggb1.instance.setVisible('cardHFocusIndicator', true);
    }
  }
  if (a.type == 'dragEnd' || a.type == 'deselect') {
    for (let i = 0, L = booleanArray.length; i < L; i++) {
      ggb1.instance.setValue(booleanArray[i], false);
      ggb1.instance.setVisible(focusIndicators[i], false);
    }
  }
}
