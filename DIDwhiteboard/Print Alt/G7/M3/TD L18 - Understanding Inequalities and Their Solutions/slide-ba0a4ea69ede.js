const { buttonGroup1, ggb1 } = components;

function reset() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
}

buttonGroup1.on('click:1', () => {
  reset();
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', reset);

autorun(() => {
  let timeAtZero = ggb1.innerData['time'] === 0;
  buttonGroup1.updateSingleButton({ disabled: !timeAtZero }, 1);
  buttonGroup1.updateSingleButton({ disabled: timeAtZero }, 2);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - PA Understanding Inequalities and Their Solutions","teacherView":true,"layout":"one col"}
*/
