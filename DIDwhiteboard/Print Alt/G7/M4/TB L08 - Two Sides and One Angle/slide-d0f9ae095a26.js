const { ggb1, text1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.updateInnerData({ rad1: 7, rad2: 6 });
  ggb1.instance.setCoords(
    'B',
    ggb1.instance.getXcoord('Stalker'),
    ggb1.instance.getYcoord('Stalker')
  );
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"radiogroup":1},"stage":"Learn","lessonInfo":"7 M4 TB L08 - Print Alternate Slide Deck for Two Sides and One Angle","teacherView":false,"layout":"two col"}
*/
