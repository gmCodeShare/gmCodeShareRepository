const {
  ggb1,
  text1,
  select1,
  separator2,
  text2,
  select2,
  separator1,
  text3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  text2.updateData({ visible: false });
  select2.updateData({ visible: false });
  text3.updateData({ visible: false });
  ggb1.updateInnerData({ rad1: 7, rad2: 6 });
  ggb1.instance.setCoords(
    'B',
    ggb1.instance.getXcoord('Stalker'),
    ggb1.instance.getYcoord('Stalker')
  );
});

autorun(() => {
  text2.updateData({ visible: select1.data.selected });
  select2.updateData({ visible: select1.data.selected });
});

autorun(() => {
  text3.updateData({ visible: select2.data.selected });
  ggb1.updateInnerData({ editing: !!select2.data.selected });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":2,"separator":2},"stage":"Learn","lessonInfo":"7 M4 TB L08 - Two Sides and One Angle","teacherView":false,"layout":"two col"}
*/
