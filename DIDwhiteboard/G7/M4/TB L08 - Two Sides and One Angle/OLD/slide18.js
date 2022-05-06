const { ggb1, text1, text2, text3, select1, select2 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  select2.updateData({ visible: false });
  text3.updateData({ visible: false });
  ggb1.updateInnerData({ rad1: 6, rad2: 7 });
  ggb1.instance.setCoords(
    "B",
    ggb1.instance.getXcoord("Stalker"),
    ggb1.instance.getYcoord("Stalker")
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
