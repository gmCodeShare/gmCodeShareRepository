const { ggb1, feedback, text1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setCoords(
    'B',
    ggb1.instance.getXcoord('Bposition'),
    ggb1.instance.getYcoord('Bposition')
  );
  ggb1.updateInnerData({ rad1: 6, rad2: 7 });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1},"stage":"Learn","lessonInfo":"7 M4 TB L08 - Print Alternate Slide Deck for Two Sides and One Angle","teacherView":false,"layout":"two col"}
*/
