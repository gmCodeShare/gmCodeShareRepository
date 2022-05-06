const {
  ggb1,
  feedback1,
  text1,
  text2,
  button1,
  Separator2,
  cc_sharewithclass_d32b4971c803_textbox1,
  cc_sharewithclass_d32b4971c803_input1,
  cc_sharewithclass_d32b4971c803_button1,
  cc_sharewithclass_d32b4971c803_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const id1 = `slide-3fedabfb7cd9`;

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

text2.updateData({ visible: false });
components.cc_sharewithclass_d32b4971c803_textbox1.updateData({
  visible: false,
});
components.cc_sharewithclass_d32b4971c803_input1.updateData({ visible: false });
components.cc_sharewithclass_d32b4971c803_button1.updateData({
  visible: false,
});
components.cc_sharewithclass_d32b4971c803_button1.updateData({
  align: 'right',
});

if (button1.data.hasBeenClicked == undefined) {
  button1.updateData({ hasBeenClicked: false });
}

button1.on('click', animate);

function animate() {
  button1.updateData({ disabled: true });
  if (button1.data.hasBeenClicked) {
    ggb1.instance.setValue('timeB', 0);
    ggb1.instance.setValue('breakB', 0);
    ggb1.instance.setValue('time2B', 0);
    ggb1.instance.setValue('endB', 0);
    //     ggb1.instance.setValue("colorDictate", 0);
    //    ggb1.instance.setValue("colorDictateB", 0);
    ggb1.instance.setValue('blueCountA', 0);
    ggb1.instance.setValue('blueCountB', 0);
    ggb1.instance.setValue('redCountA', 0);
    ggb1.instance.setValue('redCountB', 0);
    //   console.log("Reset: "+ggb1.instance.getValue("colorDictate"));
    ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-8,-4))');
    //     console.log("Step 1: "+ggb1.instance.getValue("colorDictate"));
    ggb1.instance.evalCommand('SetValue(colorDictate,RandomBetween(1,10))');
    //     console.log("Step 2: "+ggb1.instance.getValue("colorDictate"));
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    //        console.log("Step 3: "+ggb1.instance.getValue("colorDictate"));
  } else {
    button1.updateData({ hasBeenClicked: true });
    //   console.log("Else: "+ggb1.instance.getValue("colorDictate"));
    ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-8,-4))');
    //       console.log("Else 1: "+ggb1.instance.getValue("colorDictate"));
    ggb1.instance.evalCommand('SetValue(colorDictate,RandomBetween(1,10))');
    //     console.log("Else 2: "+ggb1.instance.getValue("colorDictate"));
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
}

autorun(() => {
  let endB = ggb1.innerData['endB'];
  if (ggb1.innerData['gameComplete']) {
    button1.updateData({ disabled: false, text: 'Play Again' });
    text2.updateData({ visible: true });
  }
  if (ggb1.instance.getValue('gamesPlayed') == 3) {
    components.cc_sharewithclass_d32b4971c803_textbox1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_d32b4971c803_input1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_d32b4971c803_button1.updateData({
      visible: true,
    });
  }
});

ggb1.instance.registerObjectUpdateListener('gamesPlayed', update);

function update() {
  let num = ggb1.instance.getValue('gamesPlayed');
  let num2 = ggb1.instance.getValue('AWinCount');
  let num3 = ggb1.instance.getValue('BWinCount');
  text2.updateData({
    text: `Games played: $${num}$\n\nTeam A wins: $${num2}$\n\nTeam B wins: $${num3}$`,
  });
}

let defPrevSelect1 = {
  data: { selected: [''] },
};

let choiceData = getFromSlide(id1, 'select1', defPrevSelect1) || defPrevSelect1;
let choiceNum = choiceData.data.selected;

if (!choiceNum) {
  text1.updateData({
    text: `You chose $\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}$.\n\nPlay the game at least $3$ times to see how often you win.`,
  });
}
if (choiceNum === '0') {
  text1.updateData({
    text: 'You chose bucket A.\n\nPlay the game at least $3$ times to see how often you win.',
  });
}
if (choiceNum === '1') {
  text1.updateData({
    text: 'You chose bucket B.\n\nPlay the game at least $3$ times to see how often you win.',
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"two col"}
*/
