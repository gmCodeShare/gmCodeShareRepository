const {
  ggb1,
  feedback1,
  cc_sharewithclass_25ee8a919e0c_textbox1: shareText1,
  cc_sharewithclass_25ee8a919e0c_input1: shareInput1,
  cc_sharewithclass_25ee8a919e0c_button1: shareButton1,
  cc_sharewithclass_25ee8a919e0c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

shareButton1.on('click', () => {
  ggb1.instance.setValue('timeRight', 0);
  ggb1.instance.setValue('timeLeft', 0);
  const regex = /^([a-z]|[A-Z])(>|<|\\ge|\\le)-?\d/;
  let goodEnough = regex.test(shareInput1.data.text);
  let number = shareInput1.data.text.match(/[-+]?\d/);
  let symbol = shareInput1.data.text.match(/\\\D\D/);
  if (goodEnough) {
    if (symbol == '\\le' || symbol == '\\ge') {
      ggb1.instance.setValue('equalTo', true);
      ggb1.instance.setCoords('StudentPointOpen', number, 0);
      ggb1.instance.setCoords('StudentPointClosed', number, 0);
    }

    if (
      shareInput1.data.text.includes('<') ||
      shareInput1.data.text.includes('>')
    ) {
      ggb1.instance.setValue('equalTo', false);
      ggb1.instance.setCoords('StudentPointOpen', number, 0);
      ggb1.instance.setCoords('StudentPointClosed', number, 0);
    }

    if (symbol == '\\le' || shareInput1.data.text.includes('<')) {
      ggb1.instance.setVisible('v', true);
      ggb1.instance.setVisible('u', false);
      ggb1.instance.setAnimating('timeLeft', true);
      ggb1.instance.setAnimating('timeRight', false);
      ggb1.instance.startAnimation();
    }

    if (symbol == '\\ge' || shareInput1.data.text.includes('>')) {
      ggb1.instance.setVisible('v', false);
      ggb1.instance.setVisible('u', true);
      ggb1.instance.setAnimating('timeRight', true);
      ggb1.instance.setAnimating('timeLeft', false);
      ggb1.instance.startAnimation();
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
