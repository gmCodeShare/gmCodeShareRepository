const {
  ggb1,
  feedback1,
  image1,
  cc_sharewithclass_e9729b2e5e8e_textbox1,
  cc_sharewithclass_e9729b2e5e8e_input1,
  cc_sharewithclass_e9729b2e5e8e_button1,
  cc_sharewithclass_e9729b2e5e8e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1 && ggb1.instance.getValue('rightAngle')) {
    utils.RTS.sendData('slide-c3780ec607dc', {
      vecBl: [
        ggb1.instance.getXcoord('vecBl'),
        ggb1.instance.getYcoord('vecBl'),
      ],
      vecTop: [
        ggb1.instance.getXcoord('vecTop'),
        ggb1.instance.getYcoord('vecTop'),
      ],
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"uploaded-image":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
