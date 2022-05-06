const {
  ggb1,
  feedback1,
  cc_sharewithclass_64ab9c257baf_textbox1,
  cc_sharewithclass_64ab9c257baf_input1,
  cc_sharewithclass_64ab9c257baf_button1,
  cc_sharewithclass_64ab9c257baf_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let equa =
  getFromSlide(
    `slide-65d77b0ce000`,
    `cc_sharewithclass_6cd41e2a649c_input1.data.text`,
    ''
  ) || '';

if (equa) {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${equa}`);
  ggb1.instance.setVisible('dummyObjectForThisCode', false);
  if (ggb1.instance.getObjectType('dummyObjectForThisCode') == 'line') {
    ggb1.instance.evalLaTeX(`slide6Line: ${equa}`);
    ggb1.instance.setFixed('slide6Line', false, false);
    // ggb1.instance.setColor("slide6Line", 160, 160, 160);
  }
  ggb1.instance.deleteObject('dummyObjectForThisCode');
}

let equa2 =
  getFromSlide(
    `slide-de79a7a19f06`,
    `cc_sharewithclass_5d0e2f1f14cc_input1.data.text`,
    ''
  ) || '';

if (equa2) {
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${equa2}`);
  ggb1.instance.setVisible('dummyObjectForThisCode', false);
  if (ggb1.instance.getObjectType('dummyObjectForThisCode') == 'line') {
    ggb1.instance.evalLaTeX(`slide8Line: ${equa2}`);
    ggb1.instance.setFixed('slide8Line', false, false);
    ggb1.instance.setColor('slide8Line', 0, 127, 175);
  }
  ggb1.instance.deleteObject('dummyObjectForThisCode');
}

if (equa && equa2) {
  ggb1.instance.evalCommandGetLabels(
    'Intersection=(Intersect(slide6Line, slide8Line))'
  );
  ggb1.instance.setVisible('Intersection', true);
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M5 TA L02 - Introduction to Systems of Linear Equations","teacherView":false,"layout":"two col"}
*/
