const { ggb1, feedback1, button1, text1 } = components;

slide.on("firstload", () => {
  ggb1.updateData({ names: [] });
  button1.updateData({ disabled: true });
  text1.updateData({ visible: false });
});

ggb1.instance.registerClickListener(styleIt);

ggb1.instance.setErrorDialogsActive(false);

function styleIt(a) {
  let nums = [...ggb1.data.names];
  if (ggb1.instance.getValue("count") <= 256) {
    if (ggb1.instance.getObjectType(a) == "point") {
      if (
        ggb1.instance.getYcoord(a) ==
        ggb1.instance.getValue("answer(" + ggb1.instance.getXcoord(a) + ")")
      ) {
        ggb1.instance.evalCommand(
          "Translate(picCheck, Vector((0,0)," + a + "))"
        );
        ggb1.instance.setVisible(a, false);
      } else {
        ggb1.instance.setColor(a, 218, 41, 28);
        ggb1.instance.setPointStyle(a, 1);
        ggb1.instance.setPointSize(a, 6);
        ggb1.instance.evalCommand("SelectObjects()");
        ggb1.instance.setFixed(a, false, false);
      }
      nums.push(a);
      ggb1.updateData({ names: [...nums] });
      ggb1.instance.setValue("count", ggb1.instance.getValue("count") + 1);
    }
  }
}

ggb1.instance.registerObjectUpdateListener("count", update);

function update() {
  let num = 256 - ggb1.instance.getValue("count");
  /*text1.updateData({
    text: `#### Attempts remaining: $${num}$`,
  });*/
  if (ggb1.instance.getValue("count") == 256) {
    let allPoints = ggb1.instance.getAllObjectNames("point");
    for (let i = 0, L = allPoints.length; i < L; i++) {
      ggb1.instance.setFixed(allPoints[i], false, false);
    }
  }
  if (num == 251) {
    button1.updateData({ disabled: false });
  }
}
button1.on("click", () => {
  text1.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Print Alt: Solutions to Linear Equations in Two Variables","teacherView":true,"layout":"two col"}
*/
