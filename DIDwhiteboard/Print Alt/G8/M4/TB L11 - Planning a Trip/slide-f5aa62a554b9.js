const { button1, separator1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setVisible("text6", false);
button1.on("click", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (ggb1.innerData["time"] > 0.749) {
    ggb1.instance.stopAnimation();
    button1.updateData({ disabled: false });
  }
});

/*
{"compTotals":{"button":1,"separator":1,"geogebra":1,"textbox":1},"stage":"Launch","lessonInfo":"8 M4 TB L11 - PA Planning a Trip","teacherView":true,"layout":"one col"}
*/
