const {
  ggb2,
  ggb1,
  feedback,
  separator5,
  buttonHint,
  text1,
  select1,
  separator1,
  separator2,
  button1,
  separator3,
  button2,
  separator4,
  button8,
  separator6,
  buttonGroup2,
} = components;

let showHelpers = false;
ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb1.updateData({ visible: false });

slide.on("firstload", () => {
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  showHelpers = false;
  button1.updateData({ visible: !showHelpers });
  button2.updateData({ visible: !showHelpers });
  button8.updateData({ visible: !showHelpers });
  text1.updateData({ visible: showHelpers });
  buttonGroup2.updateData({ visible: !showHelpers });
  select1.setVisible(showHelpers);
});

let click = 1;
let seeA = 0;
let seeB = 0;
let seeC = 0;
let seeD = 0;

//lock it in button
buttonGroup2.on("click:1", () => {
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  click++;
  ggb2.instance.setValue("showPoints", click % 2);
  ggb2.instance.setVisible("eq1", (click % 2) * seeA);
  ggb2.instance.setVisible("eq2", (click % 2) * seeB);
  ggb2.instance.setVisible("eq3", (click % 2) * seeC);
  ggb2.instance.setVisible("eq4", (click % 2) * seeD);
  ggb2.instance.setVisible("A", (click % 2) * seeA);
  ggb2.instance.setVisible("BoatPoint", (click % 2) * seeA);
  ggb2.instance.setVisible("B", (click % 2) * seeB);
  ggb2.instance.setVisible("PalmPoint", (click % 2) * seeB);
  ggb2.instance.setVisible("C", (click % 2) * seeC);
  ggb2.instance.setVisible("FishPoint", (click % 2) * seeC);
  ggb2.instance.setVisible("D", (click % 2) * seeD);
  ggb2.instance.setVisible("BirdPoint", (click % 2) * seeD);
});

//unlock it button
buttonGroup2.on("click:2", () => {
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  click++;
  ggb2.instance.setValue("showPoints", click % 2);
  ggb2.instance.setVisible("eq1", (click % 2) * seeA);
  ggb2.instance.setVisible("eq2", (click % 2) * seeB);
  ggb2.instance.setVisible("eq3", (click % 2) * seeC);
  ggb2.instance.setVisible("eq4", (click % 2) * seeD);
  ggb2.instance.setVisible("A", (click % 2) * seeA);
  ggb2.instance.setVisible("BoatPoint", (click % 2) * seeA);
  ggb2.instance.setVisible("B", (click % 2) * seeB);
  ggb2.instance.setVisible("PalmPoint", (click % 2) * seeB);
  ggb2.instance.setVisible("C", (click % 2) * seeC);
  ggb2.instance.setVisible("FishPoint", (click % 2) * seeC);
  ggb2.instance.setVisible("D", (click % 2) * seeD);
  ggb2.instance.setVisible("BirdPoint", (click % 2) * seeD);
});

//reset button
buttonGroup2.on("click:3", () => {
  ggb2.instance.reset();
  select1.unselectAll();
  click = 1;
  buttonGroup2.updateSingleButton({ text: "Lock It In", disabled: true }, 1);
});

select1.on("change", ({ selected }) => {
  click = 1;
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("bird", selected.includes("0"));
  ggb1.instance.setVisible("eq4", selected.includes("0"));
  ggb1.instance.setVisible("D", selected.includes("0"));
  seeD = selected.includes("0");
  if (selected.includes("0")) {
    ggb2.instance.evalCommand(
      `BirdPoint=(${ggb1.innerData["D"][0]},${ggb1.innerData["D"][1]})`
    );
    halo("BirdPoint");
    ggb2.instance.evalCommand(
      `BirdLeft=If(x(BirdPoint) - 1 ≤ x ≤ x(BirdPoint), -5(x - x(BirdPoint) + 0.5)² + y(BirdPoint) + 4)`
    );
    ggb2.instance.evalCommand(
      `BirdRight=If(x(BirdPoint) ≤ x ≤ x(BirdPoint) + 1, -5(x - x(BirdPoint) - 0.5)² + y(BirdPoint) + 4)`
    );
    ggb2.instance.setColor("BirdLeft", 192, 192, 192);
    ggb2.instance.setLineThickness("BirdLeft", 3);
    ggb2.instance.setLineStyle("BirdLeft", 2);
    ggb2.instance.setColor("BirdRight", 192, 192, 192);
    ggb2.instance.setLineThickness("BirdRight", 3);
    ggb2.instance.setLineStyle("BirdRight", 2);
    ggb2.instance.setVisible("BirdPoint", true);
  }

  ggb1.instance.setValue("tree", selected.includes("1"));
  ggb1.instance.setVisible("eq2", selected.includes("1"));
  ggb1.instance.setVisible("B", selected.includes("1"));
  seeB = selected.includes("1");
  if (selected.includes("1")) {
    ggb2.instance.evalCommand(
      `PalmPoint=(${ggb1.innerData["B"][0]},${ggb1.innerData["B"][1]})`
    );
    halo("PalmPoint");
    ggb2.instance.evalCommand(
      `PalmRight=If(x(PalmPoint) ≤ x ≤ x(PalmPoint) + 3, -3(x - x(PalmPoint) - 1)² + y(PalmPoint) - 3)`
    );
    ggb2.instance.evalCommand(
      `PalmLeft=If(x(PalmPoint) - 3 ≤ x ≤ x(PalmPoint), -3(x - x(PalmPoint) + 1)² + y(PalmPoint) - 3)`
    );
    ggb2.instance.evalCommand(
      `PalmBottom=If(x(PalmPoint) - 3 ≤ x ≤ x(PalmPoint) + 3, -(x - x(PalmPoint))² + y(PalmPoint) - 6)`
    );
    ggb2.instance.evalCommand(
      `PalmTree=If(x(PalmPoint) - 0.3 ≤ x ≤ x(PalmPoint) + 0.3, -55abs(x - x(PalmPoint)) + y(PalmPoint) - 6)`
    );
    ggb2.instance.setColor("PalmRight", 192, 192, 192);
    ggb2.instance.setLineThickness("PalmRight", 3);
    ggb2.instance.setLineStyle("PalmRight", 2);
    ggb2.instance.setColor("PalmLeft", 192, 192, 192);
    ggb2.instance.setLineThickness("PalmLeft", 3);
    ggb2.instance.setLineStyle("PalmLeft", 2);
    ggb2.instance.setColor("PalmTree", 192, 192, 192);
    ggb2.instance.setLineThickness("PalmTree", 3);
    ggb2.instance.setLineStyle("PalmTree", 2);
    ggb2.instance.setColor("PalmBottom", 192, 192, 192);
    ggb2.instance.setLineThickness("PalmBottom", 3);
    ggb2.instance.setLineStyle("PalmBottom", 2);
  }

  ggb1.instance.setValue("fish", selected.includes("2"));
  ggb1.instance.setVisible("eq3", selected.includes("2"));
  ggb1.instance.setVisible("C", selected.includes("2"));
  seeC = selected.includes("2");
  if (selected.includes("2")) {
    ggb2.instance.evalCommand(
      `FishPoint=(${ggb1.innerData["C"][0]},${ggb1.innerData["C"][1]})`
    );
    halo("FishPoint");
    ggb2.instance.evalCommand(
      `FishBottom=If(x(FishPoint) - 1.4 ≤ x ≤ x(FishPoint) + 2.25, (x - x(FishPoint))² + y(FishPoint) - 8)`
    );
    ggb2.instance.evalCommand(
      `FishTop=If(x(FishPoint) - 1.4 ≤ x ≤ x(FishPoint) + 2, -(x - x(FishPoint))² + y(FishPoint) - 4)`
    );
    ggb2.instance.evalCommand(
      `FishRight=If(x(FishPoint) + 2 ≤ x ≤ x(FishPoint) + 2.25, 20 (x - x(FishPoint)) + y(FishPoint) - 48)`
    );
    ggb2.instance.setColor("FishBottom", 192, 192, 192);
    ggb2.instance.setColor("FishTop", 192, 192, 192);
    ggb2.instance.setColor("FishRight", 192, 192, 192);
    ggb2.instance.setLineThickness("FishBottom", 3);
    ggb2.instance.setLineThickness("FishTop", 3);
    ggb2.instance.setLineThickness("FishRight", 3);
    ggb2.instance.setLineStyle("FishBottom", 2);
    ggb2.instance.setLineStyle("FishTop", 2);
    ggb2.instance.setLineStyle("FishRight", 2);
  }

  ggb1.instance.setValue("boat", selected.includes("3"));
  ggb1.instance.setVisible("eq1", selected.includes("3"));
  ggb1.instance.setVisible("A", selected.includes("3"));
  seeA = selected.includes("3");
  if (selected.includes("3")) {
    ggb2.instance.evalCommand(
      `BoatPoint=(${ggb1.innerData["A"][0]},${ggb1.innerData["A"][1]})`
    );
    halo("BoatPoint");
    ggb2.instance.evalCommand(
      `BoatBottom=If(x(BoatPoint) - 3 ≤ x ≤ x(BoatPoint) + 3, 0.5(x - x(BoatPoint))² + y(BoatPoint) - 9)`
    );
    ggb2.instance.evalCommand(
      `BoatTop=If(x(BoatPoint) - 3 ≤ x ≤ x(BoatPoint) + 3, 0.2(x - x(BoatPoint))² + y(BoatPoint) - 6)`
    );
    ggb2.instance.evalCommand(
      `BoatOar=If(x(BoatPoint) - 2 ≤ x ≤ x(BoatPoint) + 0.5, 3 (x - x(BoatPoint)) + y(BoatPoint) - 6)`
    );
    ggb2.instance.setColor("BoatBottom", 192, 192, 192);
    ggb2.instance.setColor("BoatTop", 192, 192, 192);
    ggb2.instance.setColor("BoatOar", 192, 192, 192);
    ggb2.instance.setLineThickness("BoatBottom", 3);
    ggb2.instance.setLineThickness("BoatTop", 3);
    ggb2.instance.setLineThickness("BoatOar", 3);
    ggb2.instance.setLineStyle("BoatBottom", 2);
    ggb2.instance.setLineStyle("BoatTop", 2);
    ggb2.instance.setLineStyle("BoatOar", 2);
  }
});

buttonHint.on("click", () => {
  showHelpers = !showHelpers;
  if (showHelpers) {
    buttonHint.updateData({ text: "Continue Working" });
  } else {
    buttonHint.updateData({ text: "Get Help" });
  }
  button1.updateData({ visible: !showHelpers });
  button2.updateData({ visible: !showHelpers });
  button8.updateData({ visible: !showHelpers });
  text1.updateData({ visible: showHelpers });
  buttonGroup2.updateData({ visible: !showHelpers });
  select1.setVisible(showHelpers);
});

function halo(point) {
  var haloSize = 10;
  var HexyColor = '"' + ggb2.instance.getColor(point) + '"';
  ggb2.instance.setPointStyle(point, 10);
  ggb2.instance.evalCommand(
    point +
      "Halo:(x - x(" +
      point +
      "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" +
      point +
      "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" +
      haloSize +
      "^2"
  );
  ggb2.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
  ggb2.instance.setFilling(point + "Halo", 0.25);
  ggb2.instance.setLineThickness(point + "Halo", 0);
  ggb2.instance.setFixed(point + "Halo", false, false);
}

button1.on("click", () => {
  ggb2.instance.setValue("addLin", ggb2.instance.getValue("addLin"));
  // console.log(ggb2.instance.getValue("addLin"));
});
button2.on("click", () => {
  ggb2.instance.setValue("addQuad", ggb2.instance.getValue("addQuad"));
  // console.log(ggb2.instance.getValue("addQuad"));
});
button8.on("click", () => {
  ggb2.instance.setValue("addAbsVal", ggb2.instance.getValue("addAbsVal"));
  // console.log(ggb2.instance.getValue("addAbsVal"));
});

ggb2.instance.registerStoreUndoListener(() => {
  ggb2.updateData({ next64: ggb2.instance.getBase64() });
});

/*
{"compTotals":{"geogebra":2,"textbox":2,"separator":6,"button":4,"select":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M4 TC L20 - Art with Transformations","teacherView":false,"layout":"two col"}
*/
