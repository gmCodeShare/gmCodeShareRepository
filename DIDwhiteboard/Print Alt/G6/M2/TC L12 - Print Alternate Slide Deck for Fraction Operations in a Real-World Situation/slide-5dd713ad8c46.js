const { media1, buttonGroup1 } = components;

slide.on('firstload', () => {
  // set initial states
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  media1.play();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  media1.pause();
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

media1.on(
  'crosstime',
  () => {
    media1.stop();
    media1.skipTo(0);
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  },
  { time: 139.5 }
);

/*
{"compTotals":{"media":1,"buttongroup":1},"stage":"Launch","lessonInfo":"6 M2 TC L12 - Print Alternate Slide Deck for Fraction Operations in a Real-World Situation","teacherView":false,"layout":"one col"}
*/
