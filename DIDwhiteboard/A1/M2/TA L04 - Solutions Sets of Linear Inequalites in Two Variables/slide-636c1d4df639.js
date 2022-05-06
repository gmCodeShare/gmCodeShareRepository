const {
  ggb1,
  feedback1,
  cc_submit_4ded5c2958b8_textbox1,
  cc_submit_4ded5c2958b8_input1,
  cc_submit_4ded5c2958b8_button1: button1,
  separator1,
  text2,
} = components;

slide.on('firstload', () => {
  text2.updateData({ visible: false });
});

let focusObjects = [
  'homeFocusIndicator',
  'zoomInFocusIndicator',
  'zoomOutFocusIndicator',
];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(focusIndicators);
ggb1.instance.registerObjectClickListener('defaultHome', homeClick);

function focusIndicators(a) {
  if (a.type == 'select') {
    if (a.target == 'defaultHome') {
      ggb1.instance.setVisible('homeFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('homeFocusIndicator', false);
    }
    if (a.target == 'defaultZoomIn') {
      ggb1.instance.setVisible('zoomInFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('zoomInFocusIndicator', false);
    }
    if (a.target == 'defaultZoomOut') {
      ggb1.instance.setVisible('zoomOutFocusIndicator', true);
    } else {
      ggb1.instance.setVisible('zoomOutFocusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusObjects.length; i < L; i++) {
      ggb1.instance.setVisible(focusObjects[i], false);
    }
  }
}

function homeClick() {
  ggb1.instance.evalCommand('ZoomIn()');
  ggb1.instance.setValue('showHome', false);
  ggb1.instance.setVisible('homeFocusIndicator', false);
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  ggb1.instance.setVisible('text1', true);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Solution Sets of Linear Inequalities in Two Variables","teacherView":false,"layout":"two col"}
*/
