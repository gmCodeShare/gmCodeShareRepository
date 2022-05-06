const {
  ggb1,
  feedback1,
  cc_sharewithclass_a60a548a2a9f_textbox1,
  cc_sharewithclass_a60a548a2a9f_input1,
  cc_sharewithclass_a60a548a2a9f_button1: shareButton1,
  cc_sharewithclass_a60a548a2a9f_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

shareButton1.updateData({
  align: 'right',
});

ggb1.instance.registerClickListener(cycle);

function cycle(a) {
  switch (ggb1.instance.getColor(a)) {
    case '#FFFFFF':
      ggb1.instance.setColor(a, 0, 127, 175);
      ggb1.instance.setFilling(a, 0.35);
      ggb1.instance.setValue(
        'totalShadedArea',
        ggb1.instance.getValue('totalShadedArea') + 1
      );
      break;
    case '#007FAF':
      ggb1.instance.setColor(a, 255, 255, 255);
      ggb1.instance.setFilling(a, 0.001);
      ggb1.instance.setValue(
        'totalShadedArea',
        ggb1.instance.getValue('totalShadedArea') - 1
      );
      break;
  }
}

autorun(() => {
  let num = ggb1.innerData['totalShadedArea'];
  cc_sharewithclass_a60a548a2a9f_textbox1.updateData({
    text: `Click on squares to shade them in. Use this tool to estimate the area of the figure. \n\nSquare count: $${num}$`,
  });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M4 TC L11 - The Inside of a Circle","teacherView":false,"layout":"two col"}
*/
