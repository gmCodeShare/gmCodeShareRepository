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
  { time: 50.0 }
);

/*
{"compTotals":{"media":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - PA Slide Deck for Exploring Ratios by Making Batches","teacherView":true,"layout":"one col"}
*/
