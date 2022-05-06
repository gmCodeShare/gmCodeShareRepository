const { ggb1, feedback1, text1, button1, text3 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
  text3.updateData({ visible: false });
  ggb1.instance.evalCommand(`UpdateConstruction( )`);
  ggb1.instance.setAnimating('load', false);
  ggb1.instance.setValue('load', 0);
  ggb1.instance.setAnimating('load', true);
  ggb1.instance.startAnimation();
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb1.updateData({ init: true });
}

ggb1.instance.registerObjectUpdateListener('load', promptSet);

function promptSet() {
  if (ggb1.innerData['load'] == 0.1) {
    if (ggb1.innerData['speed'] == 1) {
      text1.updateData({
        text: `There are $20$ emojis hidden behind the squares. You have $10$ seconds to memorize their locations.\n\nWhen you’re ready, press start.`,
      });
    }
    if (ggb1.innerData['speed'] == 0.5) {
      text1.updateData({
        text: `There are $20$ emojis hidden behind the squares. You have $10$ seconds to memorize their locations.\n\nWhen you’re ready, press start.`,
      });
    }
  }
}
button1.on('click', reveal);

function reveal() {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  for (var i = 1; i < 101; i++) {
    ggb1.instance.setLineThickness('s' + i, 5);
    ggb1.instance.setFilling('s' + i, 0);
    ggb1.instance.setFixed('s' + i, true, false);
  }
}

ggb1.instance.registerObjectUpdateListener('count', updateOne);

function updateOne() {
  let num1 = ggb1.instance.getValue('emojiCount');
  let num2 = ggb1.instance.getValue('guessesRemaining');
  text3.updateData({
    text: `Uncover $20$ squares to collect as many emojis as you can.\n\n Emojis collected: $${num1}$\n\n Guesses remaining: $${num2}$`,
  });
}

ggb1.instance.registerObjectUpdateListener('finalCountTen', updateTen);

function updateTen() {
  if (ggb1.innerData['finalCountTen'] > 0 && ggb1.innerData['time'] == 1) {
    utils.RTS.sendData('slide-bbe966e158c4', {
      my10Val: ggb1.innerData['finalCountTen'],
    });
  }
}

ggb1.instance.registerObjectUpdateListener('finalCountTwenty', updateTwenty);

function updateTwenty() {
  if (ggb1.innerData['finalCountTwenty'] > 0 && ggb1.innerData['time'] == 1) {
    utils.RTS.sendData('slide-bbe966e158c4', {
      my20Val: ggb1.innerData['finalCountTwenty'],
    });
  }
}

autorun(() => {
  let time = ggb1.innerData['time'];
  if (ggb1.innerData['time'] == 1) {
    text3.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1},"stage":"Launch","lessonInfo":"7 M6 TD L19 - Print Alternate Slide Deck for Memory Games","teacherView":true,"layout":"two col"}
*/
