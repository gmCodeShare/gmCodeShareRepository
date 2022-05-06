const { text1, buttonGroup1, ggb1, feedback1 } = components;

slide.on('firstload', () => {
  ggb1.instance.setVisible("AIG''", false);
  ggb1.instance.setCoords(
    'BIG',
    ggb1.instance.getXcoord('A'),
    ggb1.instance.getYcoord('A')
  );
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.setVisible("AIG''", true);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setVisible("AIG''", false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"textbox":2,"buttongroup":1,"geogebra":1},"stage":"Learn","lessonInfo":"6 M3 TC L12 - PA Reflections in the Coordinate Plane","teacherView":true,"layout":"one col"}
*/
