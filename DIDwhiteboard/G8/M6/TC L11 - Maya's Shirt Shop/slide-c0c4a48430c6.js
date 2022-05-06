const { ggb1, feedback1, text1, table1 } = components;

let pointList = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(indicator);

function indicator(a) {
  if (a[0] == 'select') {
    if (ggb1.instance.getObjectType(a[1]) == 'point') {
      ggb1.instance.setLabelVisible(a[1], true);
    }
  }
  if (a[0] == 'deselect') {
    for (let i = 0, L = pointList.length; i < L; i++) {
      ggb1.instance.setLabelVisible(pointList[i], false);
    }
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"8 M6 TC L11 - Scatter Plots","teacherView":false,"layout":"two col"}
*/
