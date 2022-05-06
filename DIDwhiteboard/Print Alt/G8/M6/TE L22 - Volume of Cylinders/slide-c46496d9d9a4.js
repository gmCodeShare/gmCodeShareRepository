const { ggb1, Separator1, buttonGroup2, text1, ggb2, text2, buttonGroup1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
});

let n = ggb2.instance.getValue("n");

ggb2.instance.registerObjectUpdateListener("n", update);

function update() {
  ggb1.instance.setValue("n", ggb2.instance.getValue("n"));
  let num = ggb1.instance.getValue("n");
  // console.log(num);
  text2.updateData({ text: `Number of Smaller Cylinders: $${num}$` });
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  let toggle = ggb1.instance.getValue("toggle");
  if (toggle == 0) {
    ggb1.updateInnerData({ time: 0 });
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
    ggb2.updateData({ disabled: true });
    clickCount++;
    let toggle = clickCount % 2;
  }
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);
  let toggle = ggb1.instance.getValue("toggle");
  if (toggle == 1) {
    ggb1.updateInnerData({ time: 0 });
    ggb1.instance.setAnimating("time", false);
    ggb2.updateData({ disabled: false });
    clickCount++;
    let toggle = clickCount % 2;
  }
});

buttonGroup2.on("click:1", () => {
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
});

buttonGroup2.on("click:2", () => {
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setValue("time2", 0);
});

/*
{"compTotals":{"geogebra":2,"separator":1,"buttongroup":2,"textbox":2},"stage":"Learn","lessonInfo":"8 M6 TE L22 - Print Alt: Volume of Cylinders","teacherView":true,"layout":"two col"}
*/
