const { ggb1, feedback1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  let num = ggb1.innerData['totalShadedArea'];
  // console.log(num);
  text1.updateData({
    text: `#### Square count: $${num}$`,
  });
});

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Launch","lessonInfo":"7 M4 TC L11 - Print Alternate Slide Deck for The Inside of a Circle","teacherView":true,"layout":"two col"}
*/
