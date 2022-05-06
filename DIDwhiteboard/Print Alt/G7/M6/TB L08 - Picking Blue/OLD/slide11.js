const { ggb1, button1, text2 } = components;

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
    ggb1.instance.setValue('blueCountA', 0);
    ggb1.instance.setValue('blueCountB', 0);
    ggb1.instance.setValue('redCountA', 0);
    ggb1.instance.setValue('redCountB', 0);
    ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-8,-4))');
    ggb1.instance.evalCommand('SetValue(colorDictate,RandomBetween(1,10))');
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  } else {
    button1.updateData({ hasBeenClicked: true });
    ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-8,-4))');
    ggb1.instance.evalCommand('SetValue(colorDictate,RandomBetween(1,10))');
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
