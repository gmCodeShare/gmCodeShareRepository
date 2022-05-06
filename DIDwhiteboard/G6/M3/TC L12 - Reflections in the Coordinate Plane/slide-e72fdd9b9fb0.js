const {
  ggb1,
  separator4,
  button1,
  feedback1,
  text1,
  cc_sharewithclass_4bee4d2b6f63_textbox1,
  cc_sharewithclass_4bee4d2b6f63_input1,
  cc_sharewithclass_4bee4d2b6f63_button1,
  cc_sharewithclass_4bee4d2b6f63_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-f027c84fd5cb';

const prev64 = getFromSlide(id1, 'ggb1.data.save64', false) || false;

if (prev64) {
  ggb1.instance.setBase64(prev64, configApp);
}

function configApp() {
  // this fires after the applet is done processing setBase64
  // you can do things here like set objects to be unselectable, etc.
  // if you don’t need to do anything, remove this function from setBase64
}

button1.on('click', () => {
  if (prev64) {
    ggb1.instance.setBase64(prev64, configApp);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M3 TC L12 - Reflections in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
