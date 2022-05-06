const { ggb1, feedback, button1, separator1, text1 } = components;

components.feedback.updateData({ visible: false });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('time', 0);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = Math.round(ggb1.innerData['time']);
  let coins = ggb1.innerData['coinCount'];
  if (time > 0) {
    text1.updateData({
      text: `

#### Time: $${time}$ seconds

#### Coins sorted: $${coins}$`,
    });
  }
});

button1.on('click', () => {
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('scrub', true);
  ggb1.instance.startAnimation('scrub');
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1,"separator":1},"stage":"Learn","lessonInfo":"7 M1 TA L01 - Print Alt Slide Deck for An Experiment with Ratios and Rates","teacherView":true,"layout":"two col"}
*/
