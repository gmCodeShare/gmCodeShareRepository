const { ggb1, feedback1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states

    table1.updateCell(0, 0, { value: '0' });
    table1.updateCell(0, 1, { value: '0' });
    table1.updateCell(0, 2, { value: '0' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

let focusIndicators = [
  'focusLM',
  'focusLP',
  'focusMM',
  'focusMP',
  'focusRM',
  'focusRP',
];

ggb1.instance.registerClientListener(displayFocus);

function displayFocus(a) {
  if (a.type == 'select') {
    if (a.target == 'picDefLM') {
      ggb1.instance.setVisible('focusLM', true);
    } else if (a.target == 'picDefLP') {
      ggb1.instance.setVisible('focusLP', true);
    } else if (a.target == 'picDefMidM') {
      ggb1.instance.setVisible('focusMM', true);
    } else if (a.target == 'picDefMidP') {
      ggb1.instance.setVisible('focusMP', true);
    } else if (a.target == 'picDefRMin') {
      ggb1.instance.setVisible('focusRM', true);
    } else if (a.target == 'picDefRP') {
      ggb1.instance.setVisible('focusRP', true);
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusIndicators.length; i < L; i++) {
      ggb1.instance.setVisible(focusIndicators[i], false);
    }
  }
}

ggb1.instance.registerObjectUpdateListener('rightSideUpCount', rightSideUp);

function rightSideUp() {
  let num = ggb1.instance.getValue('rightSideUpCount');
  table1.updateCell(0, 0, { value: num });
}

ggb1.instance.registerObjectUpdateListener('upsideDownCount', upsideDown);

function upsideDown() {
  let num2 = ggb1.instance.getValue('upsideDownCount');
  table1.updateCell(0, 1, { value: num2 });
}

ggb1.instance.registerObjectUpdateListener('sideCount', side);

function side() {
  let num3 = ggb1.instance.getValue('sideCount');
  table1.updateCell(0, 2, { value: num3 });
}

ggb1.instance.registerObjectUpdateListener('totalCount', update);

function update() {
  let num4 = ggb1.instance.getValue('totalCount');
  text1.updateData({
    text: `Toss a paper cup $30$ times. Use the table to record the frequency of each outcome. You can use the cup counters to keep track as you go. \n\nNumber of tosses: $${num4}$`,
  });
  if (ggb1.instance.getValue('totalCount') != 30) {
    button1.updateData({ align: 'right', text: 'Submit', disabled: true });
  }
  if (ggb1.instance.getValue('totalCount') == 30) {
    button1.updateData({ align: 'right', text: 'Submit', disabled: false });
  }
}

autorun(() => {
  let rightSideUp = table1.getCell(0, 0).value;
  let upSideDown = table1.getCell(0, 1).value;
  let side = table1.getCell(0, 2).value;
  ggb1.updateInnerData({
    rightSideUpCount: rightSideUp,
    upsideDownCount: upSideDown,
    sideCount: side,
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  let rightSideUp = table1.getCell(0, 0).value;
  let upSideDown = table1.getCell(0, 1).value;
  let side = table1.getCell(0, 2).value;
  if (isNaN(rightSideUp)) {
    rightSideUp = 0;
    ggb1.updateInnerData({ rightSideUpCount: 0 });
  } else {
    rightSideUp = parseInt(rightSideUp);
    ggb1.updateInnerData({ rightSideUpCount: rightSideUp });
  }
  if (isNaN(upSideDown)) {
    upSideDown = 0;
    ggb1.updateInnerData({ upsideDownCount: 0 });
  } else {
    upSideDown = parseInt(upSideDown);
    ggb1.updateInnerData({ upsideDownCount: upSideDown });
  }
  if (isNaN(side)) {
    side = 0;
    ggb1.updateInnerData({ sideCount: 0 });
  } else {
    side = parseInt(side);
    ggb1.updateInnerData({ sideCount: side });
  }
  // Send the data to the RTS Server
  utils.RTS.sendData('slide-2cfe81abfc55', {
    rightSideUp: rightSideUp,
    upSideDown: upSideDown,
    side: side,
  });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
