const {
  text1,
  text2,
  ggb1,
  separator3,
  button1,
  feedback,
  text3,
  ggb2,
  separator2,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  let toBeColored = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "CHalo",
    "DHalo",
    "EHalo",
    "FHalo",
    "GHalo",
    "HHalo",
    "IHalo",
    "JHalo",
    "shade1",
    "shade2",
    "shade3",
    "shade4",
  ];
  for (let i = 0, L = toBeColored.length; i < L; i++) {
    ggb2.instance.setColor(toBeColored[i], 218, 41, 28);
  }
});

button1.on("click", () => {
  const points = ["C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0, L = points.length; i < L; i++) {
    ggb1.instance.setCoords(points[i], 0, -1);
  }
});

button2.on("click", () => {
  const points = ["C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0, L = points.length; i < L; i++) {
    ggb2.instance.setCoords(points[i], 0, -1);
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-611a56806b59-above", {
      params: [
        ggb1.instance.getValue("lowParam4"),
        ggb1.instance.getValue("highParam4"),
      ],
    });
    utils.RTS.sendData("slide-611a56806b59-below", {
      params: [
        ggb2.instance.getValue("lowParam4"),
        ggb2.instance.getValue("highParam4"),
      ],
    });
  }
});

/*
{"compTotals":{"textbox":4,"geogebra":2,"separator":2,"button":2},"stage":"Learn","lessonInfo":"9 M3 TB L07 - Exploring Key Features of a Function and Its Graph","teacherView":false,"layout":"T layout"}
*/
