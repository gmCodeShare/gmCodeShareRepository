const {
  ggb1,
  feedback1,
  cc_sharewithclass_e9729b2e5e8e_textbox1,
  cc_sharewithclass_e9729b2e5e8e_input1,
  cc_sharewithclass_e9729b2e5e8e_button1,
  cc_sharewithclass_e9729b2e5e8e_studentanswers1,
} = components;

ggb1.instance.setValue('state', 2);
ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  let watch = ggb1.innerData['c'];

  for (let i = 1; i <= 16; i++) {
    ggb1.instance.evalCommand(
      'SetValue(DummyPoint, Element(bZone, ' + i + '))'
    );
    ggb1.instance.setCoords(
      'P' + i,
      ggb1.instance.getXcoord('DummyPoint'),
      ggb1.instance.getYcoord('DummyPoint')
    );
  }
  for (let i = 17; i <= 25; i++) {
    ggb1.instance.evalCommand(
      'SetValue(DummyPoint, Element(aZone, ' + (i - 16) + '))'
    );
    ggb1.instance.setCoords(
      'P' + i,
      ggb1.instance.getXcoord('DummyPoint'),
      ggb1.instance.getYcoord('DummyPoint')
    );
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
