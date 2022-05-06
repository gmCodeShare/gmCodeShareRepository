const { ggb1, image1, feedback1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('picSet', 1);
    ggb1.instance.setValue('picWidth1', 5);
    ggb1.instance.setValue('scaleFactor', 3);
    ggb1.instance.setValue('clickCount', 0);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

//disables button when animation is happening and disables it completely at end
autorun(() => {
  let time = ggb1.innerData['time'];
  let clickCount = ggb1.innerData['clickCount'];
  if (clickCount >= 6) {
    button1.updateData({ disabled: true });
  } else if (time == 0 || time == 1) {
    button1.updateData({ disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
});

//sets cell 00 as user drags first segment
autorun(() => {
  let seg1Length = ggb1.innerData['origSegLength1'];
  if (ggb1.instance.getValue('clickCount') == 0) {
    table1.updateCell(0, 0, { value: seg1Length, editable: false });
  }
});

//sets cell 10 as user drags second segment
autorun(() => {
  let seg2Length = ggb1.innerData['origSegLength2'];
  if (ggb1.instance.getValue('clickCount') == 2) {
    table1.updateCell(1, 0, { value: seg2Length, editable: false });
  }
});

//sets cell 20 as user drags third segment
autorun(() => {
  let seg3Length = ggb1.innerData['origSegLength3'];
  if (ggb1.instance.getValue('clickCount') == 4) {
    table1.updateCell(2, 0, { value: seg3Length, editable: false });
  }
});

//starts animation of seg onto scale figure
button1.on('click', () => {
  ggb1.instance.setValue(
    'clickCount',
    ggb1.instance.getValue('clickCount') + 1
  );
  if (ggb1.instance.getValue('clickCount') % 2 == 1) {
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  switch (ggb1.instance.getValue('clickCount')) {
    case 0:
      text1.updateData({
        text:
          "Place the pink segment somewhere on the original figure to measure the distance between two points. Try to choose something specific, but also something you don't think others will choose.\n\nWhen ready, click Try it.",
      });
      break;
    case 1:
      table1.updateCell(0, 1, {
        value:
          Math.round(ggb1.instance.getValue('enlargeSegLength1') * 10) / 10,
        editable: false,
      });
      table1.updateData({
        cell00: Math.round(ggb1.instance.getValue('origSegLength1') * 10) / 10,
      });
      table1.updateData({
        cell01:
          Math.round(ggb1.instance.getValue('enlargeSegLength1') * 10) / 10,
      });
      text1.updateData({
        text:
          'Notice the lengths of the two segments. Is there any relationship between those two lengths?\n\nTake a look, and when ready, click Try it again to test out a new segment.',
      });
      break;
    case 2:
      table1.updateCell(1, 0, {
        value: Math.round(ggb1.instance.getValue('origSegLength2') * 10) / 10,
        editable: false,
      });
      text1.updateData({
        text:
          "Now place the yellow segment somewhere on the original figure to measure the distance between two points. Try to choose something specific, but also something you don't think others will choose.\n\nWhen ready, click Try it.",
      });
      break;
    case 3:
      table1.updateCell(1, 1, {
        value:
          Math.round(ggb1.instance.getValue('enlargeSegLength2') * 10) / 10,
        editable: false,
      });
      table1.updateData({
        cell10: Math.round(ggb1.instance.getValue('origSegLength2') * 10) / 10,
      });
      table1.updateData({
        cell11:
          Math.round(ggb1.instance.getValue('enlargeSegLength2') * 10) / 10,
      });
      text1.updateData({
        text:
          'Notice the lengths of the two segments. Is there any relationship between those two lengths?\n\nTake a look, and when ready, click Try it again to test out a new segment.',
      });
      break;
    case 4:
      table1.updateCell(2, 0, {
        value: Math.round(ggb1.instance.getValue('origSegLength3') * 10) / 10,
        editable: false,
      });
      text1.updateData({
        text:
          "Now place the green segment somewhere on the original figure to measure the distance between two points. Try to choose something specific, but also something you don't think others will choose.\n\nWhen ready, click Try it.",
      });
      break;
    case 5:
      table1.updateCell(2, 1, {
        value:
          Math.round(ggb1.instance.getValue('enlargeSegLength3') * 10) / 10,
        editable: false,
      });
      table1.updateData({
        cell20: Math.round(ggb1.instance.getValue('origSegLength3') * 10) / 10,
      });
      table1.updateData({
        cell21:
          Math.round(ggb1.instance.getValue('enlargeSegLength3') * 10) / 10,
      });
      text1.updateData({
        text:
          'When ready, click Try it to look at all three pairs of segments at the same time.',
      });
      break;
    case 6:
      text1.updateData({ text: 'What do you notice?\n\nWhat do you wonder?' });
  }
});

/*
{"compTotals":{"geogebra":1,"uploaded-image":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M1 TC L15 - Scale Drawings","teacherView":false,"layout":"two col"}
*/
