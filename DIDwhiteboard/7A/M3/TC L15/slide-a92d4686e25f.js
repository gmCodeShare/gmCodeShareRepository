const { textDisplay1, ggb1, feedback1, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ disabled: true });
});

textDisplay1.updateData({ align: "center" });

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setCoords("J", -5, 0);
  ggb1.instance.setCoords("B_1", 0, 0);
  ggb1.instance.setCoords("C_1", 0, -5);
  ggb1.instance.setCoords("D_1", 5, -7);
  ggb1.instance.setCoords("E_1", 8, 0);
  ggb1.instance.setCoords("V", 12, -10);
  ggb1.instance.setCoords("W", 12, 0);
  ggb1.instance.setCoords("Z", 8, 0);
  ggb1.instance.setCoords("A_1", 5, -7);
  ggb1.instance.setCoords("S", 0, -5);
  ggb1.instance.setCoords("T", 0, -12);
  ggb1.instance.setCoords("U", 3, -12);
  ggb1.instance.setCoords("F_1", 5, -7);
  ggb1.instance.setCoords("P", 5, -7);
  ggb1.instance.setCoords("O", 3, -12);
  ggb1.instance.setCoords("N", 12, -12);
  ggb1.instance.setCoords("Q", 12, -10);
});

ggb1.instance.registerObjectUpdateListener("enableButton", buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue("enableButton")) {
    button1.updateData({ disabled: false });
  }
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"button":1},"stage":"Launch","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"one col"}
*/
