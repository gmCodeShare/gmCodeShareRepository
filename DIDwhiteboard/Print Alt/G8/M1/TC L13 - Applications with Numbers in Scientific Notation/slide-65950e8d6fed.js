const { button1, separator1, ggb1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.startAnimation();
});

autorun(() => {
  const enabledTimes = [0, ggb1.innerData['maxTime']];
  button1.updateData(
    {
      disabled: !enabledTimes.includes(ggb1.innerData['time']),
    },
    1
  );
});

/*
{"compTotals":{"button":1,"separator":1,"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"8 M1 TC L13 - Print Alt: Applications with Numbers in Scientific Notation","teacherView":true,"layout":"one col"}
*/
