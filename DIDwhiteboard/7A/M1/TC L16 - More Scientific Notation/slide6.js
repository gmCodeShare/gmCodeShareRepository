const { ggb1, text1, text2, buttonGroup1, cc_sharewithclass_a0c6e1d8ccb9_textbox1: shareText1, cc_sharewithclass_a0c6e1d8ccb9_input1: shareInput1, cc_sharewithclass_a0c6e1d8ccb9_button1: shareButton1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateData({ startedClicks: false });
    ggb1.instance.setValue('speed', 20);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('clickCount', ggb1.instance.getValue('clickCount') + 1);
  if (ggb1.data.startedClicks == false) {
    setTimeout(disablePump, 10000);
    ggb1.updateData({ startedClicks: true });
  }
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimating('timePurpBalloon', false);
  if (buttonGroup1.data.clicked) {
    ggb1.instance.setValue('currentBreaths', ggb1.instance.getValue('nextBreaths'));
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setValue('nextBreaths', ggb1.instance.getValue('nextBreaths') + 1);
  } else {
    buttonGroup1.updateData({ clicked: true });
  }
  text1.updateData({
    text: `Pump count: $${ggb1.instance.getValue('nextBreaths')}$`,
  });
  ggb1.instance.startAnimation();
});

function disablePump() {
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  text2.updateData({ text: `You did $${ggb1.instance.getValue('nextBreaths')}$ pumps in $10$ seconds!` });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
}
