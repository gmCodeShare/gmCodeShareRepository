const { ggb1, text1, text2, buttonGroup1, buttonGroup2, fib1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateData({ startedClicks: false });
    ggb1.instance.setValue('speed', 20);
    fib1.setVisible(false);
    buttonGroup2.updateSingleButton(
      {
        disabled: true,
      },
      1
    );
    buttonGroup2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue(
    'clickCount',
    ggb1.instance.getValue('clickCount') + 1
  );
  if (ggb1.data.startedClicks == false) {
    setTimeout(disablePump, 10000);
    ggb1.updateData({ startedClicks: true });
  }
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setAnimating('timePurpBalloon', false);
  if (buttonGroup1.data.clicked) {
    ggb1.instance.setValue(
      'currentBreaths',
      ggb1.instance.getValue('nextBreaths')
    );
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setValue(
      'nextBreaths',
      ggb1.instance.getValue('nextBreaths') + 1
    );
  } else {
    buttonGroup1.updateData({ clicked: true });
  }
  text1.updateData({
    text: `Pump count: $${ggb1.instance.getValue('nextBreaths')}$`,
  });
  ggb1.instance.startAnimation();
});

buttonGroup2.on('click:1', () => {
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('timePurpBalloon', true);
  ggb1.instance.setValue('currentBreathsPurpBalloon', 0);
  ggb1.instance.setValue('timePurpBalloon', 0);
  ggb1.instance.evalCommand(
    `nextBreathsPurpBalloon=unDiameter(Diameter(${parseFloat(
      fib1.getInput(0).text
    )}))`
  );
  ggb1.instance.startAnimation();
});

fib1.on('change', ({ values }) => {
  buttonGroup2.updateSingleButton(
    {
      disabled: !values.every(({ text }) => !!text),
    },
    1
  );
  console.log(fib1.data);
});

function disablePump() {
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  text2.updateData({
    text: `Great! You did $${ggb1.instance.getValue(
      'nextBreaths'
    )}$ pumps in $10$ seconds!\n\nWhat was the total volume of air pumped during those $10$ seconds?`,
  });
  fib1.setVisible(true);
  buttonGroup2.updateData({ visible: true });
}
