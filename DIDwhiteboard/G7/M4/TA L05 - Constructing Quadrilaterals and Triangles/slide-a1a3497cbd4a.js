const {
  ggb1,
  feedback,
  cc_sharewithclass_b65af030006d_textbox1,
  cc_sharewithclass_b65af030006d_input1,
  cc_sharewithclass_b65af030006d_button1,
  cc_sharewithclass_b65af030006d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const prevPoints1 =
  getFromSlide('slide-45d08cfa98f8', 'ggb1.data.storedPoints', []) || [];
const prevPoints2 =
  getFromSlide('slide-179f3f38deed', 'ggb1.data.storedPoints', []) || [];

let allPolys = ggb1.instance.getAllObjectNames('quadrilateral');
if (allPolys.length) {
  for (let i = 0, L = allPolys.length; i < L; i++) {
    ggb1.instance.deleteObject(allPolys[i]);
  }
}

if (prevPoints1.length) {
  let names = ggb1.instance.evalCommandGetLabels(`Polygon(${prevPoints1})`);
  let objects = names.split(',');
  let poly = objects[0];
  ggb1.instance.setVisible(poly, false);
  let centroid = ggb1.instance.evalCommandGetLabels(
    poly + 'Cen = Centroid(' + poly + ')'
  ); // use for translation on aggregate screen
  ggb1.instance.setVisible(centroid, false);
}

if (prevPoints2.length) {
  let names = ggb1.instance.evalCommandGetLabels(`Polygon(${prevPoints2})`);
  let objects = names.split(',');
  let poly = objects[0];
  ggb1.instance.setVisible(poly, false);
  let centroid = ggb1.instance.evalCommandGetLabels(
    poly + 'Cen = Centroid(' + poly + ')'
  ); // use for translation on aggregate screen
  ggb1.instance.setVisible(centroid, false);
}

let polys = ggb1.instance.getAllObjectNames('quadrilateral');

if (polys.length > 0) {
  for (let i = 0, L = polys.length; i < L; i++) {
    let translation = ggb1.instance.evalCommandGetLabels(
      `Translate(${polys[i]}, Vector(${polys[i]}Cen, Element(targets, ${i +
        1})))`
    );
    ggb1.instance.setFixed(translation, false, false);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M4 TA L05 - Constructing Quadrilaterals and Triangles","teacherView":false,"layout":"two col"}
*/
