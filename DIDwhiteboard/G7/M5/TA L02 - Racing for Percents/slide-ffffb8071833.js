const {
  ggb1,
  feedback1,
  cc_sharewithclass_101a4b17d315_textbox1: shareText1,
  cc_sharewithclass_101a4b17d315_input1: shareInput1,
  cc_sharewithclass_101a4b17d315_button1: shareButton1,
  cc_sharewithclass_101a4b17d315_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

shareButton1.updateData({ align: 'right' });

ggb1.instance.setValue('showQuestionMark', true);
ggb1.instance.setValue('showTriangleB', false);
ggb1.instance.setValue('scaleFactor', 1.25);

autorun(() => {
  let PointA = ggb1.innerData['A'];
  let PointB = ggb1.innerData['B'];
  let PointC = ggb1.innerData['C'];
  ggb1.instance.setValue(
    'aLength',
    Math.round(ggb1.instance.getValue('lengthA') * 100) / 100
  );
  ggb1.instance.setValue(
    'bLength',
    Math.round(ggb1.instance.getValue('lengthB') * 100) / 100
  );
  ggb1.instance.setValue(
    'cLength',
    Math.round(ggb1.instance.getValue('lengthC') * 100) / 100
  );
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M5 TA L02 - Racing for Percents","teacherView":false,"layout":"two col"}
*/
