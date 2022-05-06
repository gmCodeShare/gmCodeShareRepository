const { text1, buttonGroup1, ggb1, feedback1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('DragPoint3', updateRight);
ggb2.instance.registerObjectUpdateListener('DragPoint4', updateRight);
ggb2.instance.registerObjectUpdateListener('DragPoint6', updateRight);
ggb1.instance.registerObjectUpdateListener('showButton3', updateButton);

let haloArray = ['eq1', 'eq2', 'eq3', 'eq4', 'eq5', 'eq6'];
let dragPointArray = [
  'DragPoint1',
  'DragPoint2',
  'DragPoint3',
  'DragPoint4',
  'DragPoint5',
  'DragPoint6',
];

slide.on('firstload', () => {
  // set initial states
  buttonGroup1.updateSingleButton({ visible: false }, 1);
});

function updateRight() {
  ggb1.instance.setCoords(
    'DragPoint3',
    ggb2.instance.getXcoord('DragPoint3'),
    ggb2.instance.getYcoord('DragPoint3')
  );
  ggb1.instance.setCoords(
    'DragPoint4',
    ggb2.instance.getXcoord('DragPoint4'),
    ggb2.instance.getYcoord('DragPoint4')
  );
  ggb1.instance.setCoords(
    'DragPoint6',
    ggb2.instance.getXcoord('DragPoint6'),
    ggb2.instance.getYcoord('DragPoint6')
  );
}

autorun(() => {
  let Count1 = ggb1.innerData['count'];
  ggb1.instance.setValue('count', ggb2.instance.getValue('count'));
  if (Count1 > 8 && Count1 < 12) {
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
  }
  if ((Count1 > 8 && Count1 < 12) || Count1 > 14) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    text1.updateData({
      text: `Which option do you think is better on day ${Count1 + 1}? `,
    });
  }
  if (Count1 > 8 && Count1 < 12) {
    text1.updateData({
      text: `Move the red points on each graph to show the amount of money for days 10-12. `,
    });
  }
  if (Count1 > 11) {
    for (var i = 0, J = haloArray.length; i < J; i++) {
      ggb1.instance.setVisible(haloArray[i], false);
      ggb2.instance.setVisible(haloArray[i], false);
      ggb1.instance.setFixed(dragPointArray[i], false, false);
      ggb2.instance.setFixed(dragPointArray[i], false, false);
    }
  }
});

function updateButton() {
  let showButton3 = ggb1.innerData['showButton3'];
  console.log(showButton3);
  if (showButton3 == true) {
    //buttonGroup1.updateSingleButton({ disabled: false }, 3);
  } else {
    //buttonGroup1.updateSingleButton({ disabled: true }, 3);
  }
}

autorun(() => {
  let Count2 = ggb1.innerData['count'];
  ggb2.instance.setValue('count', ggb1.instance.getValue('count'));
});

autorun(() => {
  ggb2.updateInnerData({ time1: ggb1.innerData['time1'] });
  ggb2.updateInnerData({ time2: ggb1.innerData['time2'] });
  ggb2.updateInnerData({ time3: ggb1.innerData['time3'] });
  ggb2.updateInnerData({ time4: ggb1.innerData['time4'] });
  ggb2.updateInnerData({ time5: ggb1.innerData['time5'] });
  ggb2.updateInnerData({ time6: ggb1.innerData['time6'] });
  ggb2.updateInnerData({ time7: ggb1.innerData['time7'] });
  ggb2.updateInnerData({ time8: ggb1.innerData['time8'] });
  ggb2.updateInnerData({ time9: ggb1.innerData['time9'] });
  ggb2.updateInnerData({ time10: ggb1.innerData['time10'] });
  ggb2.updateInnerData({ time11: ggb1.innerData['time11'] });
  ggb2.updateInnerData({ time12: ggb1.innerData['time12'] });
  ggb2.updateInnerData({ time13: ggb1.innerData['time13'] });
  ggb2.updateInnerData({ time14: ggb1.innerData['time14'] });
  ggb2.updateInnerData({ time15: ggb1.innerData['time15'] });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  ggb2.instance.evalCommand('RunClickScript(button1)');
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  ggb2.instance.evalCommand('RunClickScript(button3)');
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button4)');
  ggb2.instance.evalCommand('RunClickScript(button4)');
  ggb1.instance.evalCommand('SelectObjects()');
  ggb2.instance.evalCommand('SelectObjects()');
});

buttonGroup1.on('click:4', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb2.instance.evalCommand('RunClickScript(button2)');
  for (var i = 0, J = haloArray.length; i < J; i++) {
    ggb1.instance.setVisible(haloArray[i], true);
    ggb2.instance.setVisible(haloArray[i], true);
    ggb1.instance.setFixed(dragPointArray[i], false, true);
    ggb2.instance.setFixed(dragPointArray[i], false, true);
  }
});

/*
{"compTotals":{"textbox":2,"buttongroup":1,"geogebra":2},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"T layout"}
*/
