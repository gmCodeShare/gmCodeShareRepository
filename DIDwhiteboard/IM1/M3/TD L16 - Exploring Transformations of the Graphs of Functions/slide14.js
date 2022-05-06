const { ggb1, ggb2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  // ggb1.instance.setValue("state", 1);
  ggb1.instance.setValue("state", 2);
  button1.updateData({ visible: false });
});

ggb2.instance.registerObjectUpdateListener("tHori", updateLeft);
ggb2.instance.registerObjectUpdateListener("tVert", updateLeft);
ggb2.instance.registerObjectUpdateListener("tScal", updateLeft);

function updateLeft() {
  ggb1.instance.setValue("tHori", ggb2.instance.getValue("tHori"));
  ggb1.instance.setValue("tVert", ggb2.instance.getValue("tVert"));
  ggb1.instance.setValue("tScal", ggb2.instance.getValue("tScal"));
  ggb1.instance.setValue("showInput", true);
}

button1.on("click", () => {
  updateLeft();
  button1.updateData({ disabled: true });
});

/**
 * things to set in the platform:
showInput on button click
showDummy1 & 2 on subsequent slides
state on each slide
tHori, tVert, tScal (+Dummy1 & 2)
 */
