const {
  ggb1,
  feedback,
  cc_sharewithclass_b65af030006d_textbox1,
  cc_sharewithclass_b65af030006d_input1,
  cc_sharewithclass_b65af030006d_button1,
  cc_sharewithclass_b65af030006d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const prevXML =
  getFromSlide('slide-df3f39a85ce0', 'ggb1.data.saveXML', '') || '';

if (prevXML) {
  ggb1.instance.setXML(prevXML, configApp);
}
configApp();

function configApp() {
  ggb1.updateInnerData({ editing: 0 });
  let polys = ggb1.instance.getAllObjectNames('quadrilateral');
  if (polys.length != 0) {
    ggb1.instance.setFixed(polys[polys.length - 1], false, false);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TA L05 - Constructing Quadrilaterals and Triangles","teacherView":false,"layout":"two col"}
*/
