const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let inequalityGroup1 = [
  "P1A",
  "P1B",
  "inequality1LessGreaterToggle",
  "inequality1EqualNotEqualToggle",
];
let inequalityGroup2 = [
  "P2A",
  "P2B",
  "inequality2LessGreaterToggle",
  "inequality2EqualNotEqualToggle",
];

slide.on("firstload", () => {
  ggb1.instance.setValue("showP1HelpPoints", true);
  ggb1.instance.setValue("showLine2", false);
  ggb1.instance.setValue("showFrog", true);
  ggb1.instance.setValue("showCheese1", true);
  ggb1.instance.setValue("showCheese2", true);
  ggb1.instance.setValue("showCheese3", true);

  ggb1.instance.setCoords("FrogPoint", -3, 4);
  ggb1.instance.setCoords("Cheese1Point", 8.5, 2);
  ggb1.instance.setCoords("Cheese2Point", -6, -5);
  ggb1.instance.setCoords("Cheese3Point", 3.5, -5);

  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);
});

ggb1.instance.registerClientListener(clientFunction);

function clientFunction(a) {
  switch (a.type) {
    case "deselect":
      ggb1.instance.setValue("inequalityGroup1Selected", false);
      ggb1.instance.setValue("inequalityGroup2Selected", false);
      break;
    case "select":
      if (inequalityGroup1.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup1Selected", true);
      } else if (inequalityGroup2.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup2Selected", true);
      }
  }
}

/*
{"compTotals":{"geogebra":1},"stage":"Launch","lessonInfo":"9 M2 TB L12 - Print Alt: Solution Sets of Systems of Linear Inequalities","teacherView":true,"layout":"one col"}
*/
