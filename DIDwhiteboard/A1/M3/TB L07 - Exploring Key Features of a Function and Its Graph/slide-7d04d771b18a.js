const {
  text1,
  ggb1,
  separator1,
  buttonGroup1,
  feedback,
  ggb2,
  separator20,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  //text1.updateData({ align: "center" });
  button1.updateData({
    last: [ggb2.innerData["lowParam"], ggb2.innerData["highParam"]],
    disabled: true,
    visible: false, // comment if we decide we need this button
  });
});

function linkGGB() {
  ggb1.instance.setValue("time", ggb2.instance.getValue("scrub"));
}

ggb2.instance.registerObjectUpdateListener("scrub", linkGGB);

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb2.instance.setAnimating("Scrubber", true);
  ggb2.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb2.instance.stopAnimation();
});

buttonGroup1.on("click:3", () => {
  ggb2.instance.stopAnimation();
  ggb2.instance.setCoords("Scrubber", 0, -4);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

autorun(() => {
  if (ggb1.innerData["time"] == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
});

autorun(() => {
  let triggers = [ggb2.innerData["lowParam"], ggb2.innerData["highParam"]];
  if (!arrayEquals(triggers, button1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: false,
      last: [...triggers],
    });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-7d04d771b18a", {
      params: [
        ggb2.instance.getValue("lowParam"),
        ggb2.instance.getValue("highParam"),
      ],
    });
  }
});

/*
{"compTotals":{"textbox":2,"geogebra":2,"separator":2,"buttongroup":1,"button":1},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"T layout"}
*/
