const {
  ggb1,
  button1,
  cc_sharewithclass_cecb2311dc72_textbox1: shareText1,
  cc_sharewithclass_cecb2311dc72_input1: shareInput1,
  cc_sharewithclass_cecb2311dc72_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', runTime2);
ggb1.instance.registerObjectUpdateListener('time2', runTime3);
ggb1.instance.registerObjectUpdateListener('time3', runPause);
ggb1.instance.registerObjectUpdateListener('pause', pauseResets);

let topTrianglesArray = ['t1', 't2', 't3'];
let topHoverBooleans = ['t1HoverEnabled', 't2HoverEnabled', 't3HoverEnabled'];
let bottomTrianglesArray = ['t4', 't5', 't6', 't7', 't8', 't9'];
let bottomHoverBooleans = [
  't4HoverEnabled',
  't5HoverEnabled',
  't6HoverEnabled',
  't7HoverEnabled',
  't8HoverEnabled',
  't9HoverEnabled',
];
let doneBooleans = ['t1Done', 't2Done', 't3Done'];
let allTrianglesArray = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9'];

for (let i = 4, L = bottomTrianglesArray.length + 4; i < L; i++) {
  ggb1.instance.registerObjectClickListener(`t${i}`, () => {
    ggb1.instance.setValue(`t${i}Selected`, true);
    ggb1.instance.setLineThickness(`t${i}`, 10);
    ggb1.instance.setLineThickness(`angleT${i}`, 10);
    for (let i = 0, L = bottomTrianglesArray.length; i < L; i++) {
      ggb1.instance.setFixed(bottomTrianglesArray[i], true, false);
      ggb1.instance.setValue(bottomHoverBooleans[i], false);
    }
    for (let i = 0, L = topTrianglesArray.length; i < L; i++) {
      ggb1.instance.setFixed(topTrianglesArray[i], true, true);
      ggb1.instance.setValue(topHoverBooleans[i], true);
    }
    hoverWork();
  });
}

for (let i = 1, L = topTrianglesArray.length + 1; i < L; i++) {
  ggb1.instance.registerObjectClickListener(`t${i}`, () => {
    ggb1.instance.setValue(`t${i}Selected`, true);
    for (let i = 1, L = allTrianglesArray.length + 1; i < L; i++) {
      ggb1.instance.setLineThickness(`t${i}`, 5);
      ggb1.instance.setLineThickness(`angleT${i}`, 5);
    }
    for (let i = 0, L = topTrianglesArray.length; i < L; i++) {
      ggb1.instance.setFixed(topTrianglesArray[i], true, false);
      ggb1.instance.setValue(topHoverBooleans[i], false);
    }
    hoverWork();
    runTime();
  });
}

function runTime() {
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time3', false);
  ggb1.instance.setValue('time3', 0);
  ggb1.instance.setAnimating('pause', false);
  ggb1.instance.setValue('pause', 0);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

function runTime2() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

function runTime3() {
  if (ggb1.instance.getValue('time2') == 1) {
    if (ggb1.instance.getValue('noTime3')) {
      ggb1.instance.setAnimating('pause', false);
      ggb1.instance.setValue('pause', 0);
      ggb1.instance.setAnimating('pause', true);
      ggb1.instance.startAnimation();
    } else {
      ggb1.instance.setAnimating('time3', false);
      ggb1.instance.setValue('time3', 0);
      ggb1.instance.setAnimating('time3', true);
      ggb1.instance.startAnimation();
    }
  }
}

function runPause() {
  if (ggb1.instance.getValue('time3') == 1) {
    if (
      ggb1.instance.getValue('t1Selected') &&
      ggb1.instance.getValue('t6Selected')
    ) {
      ggb1.instance.setValue('t1Done', true);
    }
    if (
      ggb1.instance.getValue('t2Selected') &&
      ggb1.instance.getValue('t9Selected')
    ) {
      ggb1.instance.setValue('t2Done', true);
    }
    if (
      ggb1.instance.getValue('t3Selected') &&
      ggb1.instance.getValue('t7Selected')
    ) {
      ggb1.instance.setValue('t3Done', true);
    }
    if (
      ggb1.instance.getValue('t1Done') &&
      ggb1.instance.getValue('t2Done') &&
      ggb1.instance.getValue('t3Done')
    ) {
      shareText1.updateData({ visible: true });
      shareInput1.updateData({ visible: true });
      shareButton1.updateData({ visible: true });
    }
    if (
      ggb1.instance.getValue('t1Done') ||
      ggb1.instance.getValue('t2Done') ||
      ggb1.instance.getValue('t3Done')
    ) {
      getReadyForMore();
    } else {
      ggb1.instance.setAnimating('pause', false);
      ggb1.instance.setValue('pause', 0);
      ggb1.instance.setAnimating('pause', true);
      ggb1.instance.startAnimation();
    }
  }
}

function getReadyForMore() {
  for (let i = 1, L = allTrianglesArray.length + 1; i < L; i++) {
    ggb1.instance.setValue(`t${i}Selected`, false);
  }
  for (let i = 0, L = bottomTrianglesArray.length; i < L; i++) {
    ggb1.instance.setFixed(bottomTrianglesArray[i], true, true);
  }
  for (let i = 0, L = topTrianglesArray.length; i < L; i++) {
    ggb1.instance.setFixed(topTrianglesArray[i], true, false);
  }
  for (let i = 0, L = bottomHoverBooleans.length; i < L; i++) {
    ggb1.instance.setValue(bottomHoverBooleans[i], true);
  }
  hoverWork();
}

function hoverWork() {
  if (ggb1.instance.getValue('t1Done')) {
    ggb1.instance.setFixed('t1', false, false);
    ggb1.instance.setFixed('t6', false, false);
    ggb1.instance.setColor('t6', 128, 128, 128);
    ggb1.instance.setValue('t1HoverEnabled', false);
    ggb1.instance.setValue('t6HoverEnabled', false);
  }
  if (ggb1.instance.getValue('t2Done')) {
    ggb1.instance.setFixed('t2', false, false);
    ggb1.instance.setFixed('t9', false, false);
    ggb1.instance.setColor('t9', 128, 128, 128);
    ggb1.instance.setColor('angleT9', 128, 128, 128);
    ggb1.instance.setValue('t2HoverEnabled', false);
    ggb1.instance.setValue('t9HoverEnabled', false);
  }
  if (ggb1.instance.getValue('t3Done')) {
    ggb1.instance.setFixed('t3', false, false);
    ggb1.instance.setFixed('t7', false, false);
    ggb1.instance.setColor('t7', 128, 128, 128);
    ggb1.instance.setColor('angleT7', 128, 128, 128);
    ggb1.instance.setValue('t3HoverEnabled', false);
    ggb1.instance.setValue('t7HoverEnabled', false);
  }
  if (
    ggb1.instance.getValue('t1Done') &&
    ggb1.instance.getValue('t2Done') &&
    ggb1.instance.getValue('t3Done')
  ) {
    ggb1.instance.setFixed('t4', false, false);
    ggb1.instance.setFixed('t5', false, false);
    ggb1.instance.setFixed('t8', false, false);
    ggb1.instance.setValue('t4HoverEnabled', false);
    ggb1.instance.setValue('t5HoverEnabled', false);
    ggb1.instance.setValue('t8HoverEnabled', false);
  }
}

function pauseResets() {
  if (ggb1.instance.getValue('pause') == 1) {
    getReadyForMore();
  }
}

button1.on('click', () => {
  for (let i = 0, L = bottomTrianglesArray.length; i < L; i++) {
    ggb1.instance.setFixed(bottomTrianglesArray[i], true, true);
  }
  for (let i = 0, L = topTrianglesArray.length; i < L; i++) {
    ggb1.instance.setFixed(topTrianglesArray[i], true, false);
    ggb1.instance.setValue(doneBooleans[i], false);
  }
  for (let i = 1, L = allTrianglesArray.length + 1; i < L; i++) {
    ggb1.instance.setValue(`t${i}Selected`, false);
    ggb1.instance.setLineThickness(`t${i}`, 5);
    ggb1.instance.setColor(`t${i}`, 0, 0, 0);
    ggb1.instance.setLineThickness(`angleT${i}`, 5);
    ggb1.instance.setColor(`angleT${i}`, 0, 0, 0);
  }
  for (let i = 0, L = bottomHoverBooleans.length; i < L; i++) {
    ggb1.instance.setValue(bottomHoverBooleans[i], true);
  }
});
