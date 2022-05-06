const { ggb1, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("time", 0);
    ggb1.updateData({ init: true });
  }
}

button1.on("click", () => {
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Print Alt: Motion and Speed","teacherView":true,"layout":"one col"}
*/
