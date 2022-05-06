const { ggb1, separator3, text1, button1, feedback1, textDisplay7 } =
  components;

slide.on('firstload', () => {
  // ggb1.instance.setValue("showTri", true);
  button1.updateData({ disabled: true });
});

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  const GGBstring = ggb1.innerData['scaleText'].replaceAll(' ', '');
  text1.updateData({
    text: `$\\color{823F98} \\text{Scale Factor: } ${GGBstring}$`,
  });
});

button1.on('click', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button1.updateData({ disabled: true });
});

function refresh() {
  button1.updateData({ disabled: false });
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
}

ggb1.instance.registerObjectUpdateListener('O', refresh);

ggb1.instance.registerObjectUpdateListener('chosen', refresh);

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":3,"button":1},"stage":"Learn","lessonInfo":"8 M3 TC L09 - Describing Dilations","teacherView":false,"layout":"two col"}
*/
