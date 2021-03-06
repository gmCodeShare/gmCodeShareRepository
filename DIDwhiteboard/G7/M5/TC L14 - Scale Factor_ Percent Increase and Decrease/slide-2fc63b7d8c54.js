const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_4040f51c992a_textbox1: shareText1,
  cc_sharewithclass_4040f51c992a_input1: shareInput1,
  cc_sharewithclass_4040f51c992a_button1: shareButton1,
  cc_sharewithclass_4040f51c992a_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let desiredMult = 3.2;
ggb1.instance.setValue('outlineMult', desiredMult);
ggb1.instance.setValue('origDimensionsBool', true);
ggb1.instance.setValue('outlineBool', true);

if (!text1.data.answeredCorrectly) {
  text1.updateData({ answeredCorrectly: false });
}

shareButton1.updateData({ align: 'right' });

shareText1.updateData({ visible: false });
shareInput1.updateData({ visible: false });
shareButton1.updateData({ visible: false });
shareAnswers1.updateData({ visible: false });

autorun(() => {
  let time = ggb1.innerData['time'];
  let multiplier = ggb1.innerData['multiplier'];
  ggb1.instance.setValue('imageOrigOutlineBool', false);
  if (time > 0) {
    ggb1.instance.setValue('imageOrigOutlineBool', true);
  }
  if (time < 1) {
    if (!text1.data.answeredCorrectly) {
      shareText1.updateData({ text: '' });
    }
    ggb1.instance.setValue('outlineGreenBool', false);
    ggb1.instance.setValue('outlineRedBool', false);
    ggb1.instance.setValue('outlineBool', true);
  } else if (time == 1 && multiplier == desiredMult) {
    shareText1.updateData({
      text: 'How did you determine the percent increase?',
    });
    text1.updateData({ answeredCorrectly: true });
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineGreenBool', true);
  } else if (time == 1 && multiplier != desiredMult) {
    ggb1.instance.setValue('outlineBool', false);
    ggb1.instance.setValue('outlineRedBool', true);
    if (!text1.data.answeredCorrectly) {
      shareText1.updateData({ visible: true });
      shareText1.updateData({ text: 'Keep trying!' });
      shareInput1.updateData({ visible: false });
      shareButton1.updateData({ visible: false });
      shareAnswers1.updateData({ visible: false });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TC L14 - Scale Factor???Percent Increase and Decrease","teacherView":false,"layout":"two col"}
*/
