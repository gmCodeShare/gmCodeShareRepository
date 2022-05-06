const { text1, text2, ggb1, feedback1, ggb2, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb1.instance.setMode(62);
button1.updateData({ visible: false });

const sketches =
  getFromSlide("slide-a086712cf51e", "ggb1.innerData.doodles", []) || [];

for (let i = 0; i < sketches.length; i++) {
  let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
  ggb1.instance.setFixed(name, false, false);
  ggb1.instance.setColor(name, 242, 106, 54);
  ggb1.instance.setLineThickness(name, 2);
  ggb1.instance.setCaption(name, "ignore");
  //console.log(name);
}

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();

function getDoodles() {
  let doodleArray = [];
  let doodleArray2 = [];
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb1.instance.getCommandString(allPenstrokes[i]));
  }
  let curvyPenstrokes = allPenstrokes.filter(
    (doodle) => ggb1.instance.getCaption(doodle) != "ignore"
  );
  for (let i = 0; i < curvyPenstrokes.length; i++) {
    doodleArray2.push(ggb1.instance.getCommandString(curvyPenstrokes[i]));
  }
  ggb1.updateInnerData({ doodles: doodleArray });
  ggb1.updateInnerData({ doodles2: doodleArray2 });
  // console.log(doodleArray);
}
slide.on("firstload", () => {
  text2.updateData({ visible: false });
  button1.updateData({ disabled: true });
});
ggb1.instance.setVisible("Point1", false);
ggb1.instance.setVisible("Point2", false);
ggb1.instance.setCoords(
  "Point3",
  ggb1.instance.getXcoord("GraphBox3"),
  ggb1.instance.getYcoord("GraphBox3")
);
ggb1.instance.setVisible("Point4", false);
ggb1.instance.setVisible("Point5", false);
ggb1.instance.setVisible("Point6", false);
ggb1.instance.setCoords(
  "Point7",
  ggb1.instance.getXcoord("GraphBox7"),
  ggb1.instance.getYcoord("GraphBox7")
);
ggb1.instance.setVisible("Point8", false);
ggb1.instance.setVisible("Point9", false);
ggb1.instance.setVisible("Point10", false);
ggb1.instance.setCoords(
  "Point11",
  ggb1.instance.getXcoord("GraphBox11"),
  ggb1.instance.getYcoord("GraphBox11")
);
ggb1.instance.setVisible("Point12", false);
ggb1.instance.setVisible("Point13", false);
ggb1.instance.setVisible("Point14", false);
ggb1.instance.setCoords(
  "Point15",
  ggb1.instance.getXcoord("GraphBox15"),
  ggb1.instance.getYcoord("GraphBox15")
);
ggb1.instance.setVisible("Point16", false);
ggb1.instance.setVisible("Point17", false);
ggb1.instance.setVisible("Point18", false);
ggb1.instance.setCoords(
  "Point19",
  ggb1.instance.getXcoord("GraphBox19"),
  ggb1.instance.getYcoord("GraphBox19")
);
ggb1.instance.setVisible("Point20", false);
ggb1.instance.setVisible("Point21", false);

/*ggb1.instance.setValue("box3Done",1);
ggb1.instance.setLabelVisible("GraphBox3",false);
ggb1.instance.setColor("GraphBox3",242,106,54);
ggb1.instance.setValue("box7Done",1);
ggb1.instance.setLabelVisible("GraphBox7",false);
ggb1.instance.setColor("GraphBox7",242,106,54);
ggb1.instance.setValue("box11Done",1);
ggb1.instance.setLabelVisible("GraphBox11",false);
ggb1.instance.setColor("GraphBox11",242,106,54);
ggb1.instance.setValue("box15Done",1);
ggb1.instance.setLabelVisible("GraphBox15",false);
ggb1.instance.setColor("GraphBox15",242,106,54);
ggb1.instance.setValue("box19Done",1);
ggb1.instance.setLabelVisible("GraphBox19",false);
ggb1.instance.setColor("GraphBox19",242,106,54);*/

ggb2.instance.setVisible("Poly3", false);
ggb2.instance.setVisible("text3", false);
ggb2.instance.setVisible("Poly2", false);
ggb2.instance.setVisible("text2", false);
ggb2.instance.setVisible("Poly4", false);
ggb2.instance.setVisible("text4", false);
ggb2.instance.setVisible("Poly7", false);
ggb2.instance.setVisible("text7", false);
ggb2.instance.setVisible("Poly6", false);
ggb2.instance.setVisible("text6", false);
ggb2.instance.setVisible("Poly8", false);
ggb2.instance.setVisible("text8", false);
ggb2.instance.setVisible("Poly11", false);
ggb2.instance.setVisible("text11", false);
ggb2.instance.setVisible("Poly10", false);
ggb2.instance.setVisible("text10", false);
ggb2.instance.setVisible("Poly12", false);
ggb2.instance.setVisible("text12", false);
ggb2.instance.setVisible("Poly15", false);
ggb2.instance.setVisible("text15", false);
ggb2.instance.setVisible("Poly14", false);
ggb2.instance.setVisible("text14", false);
ggb2.instance.setVisible("Poly16", false);
ggb2.instance.setVisible("text16", false);
ggb2.instance.setVisible("Poly19", false);
ggb2.instance.setVisible("text19", false);
ggb2.instance.setVisible("Poly18", false);
ggb2.instance.setVisible("text18", false);
ggb2.instance.setVisible("Poly20", false);
ggb2.instance.setVisible("text20", false);

ggb2.instance.registerObjectUpdateListener("box1Done", update);
ggb2.instance.registerObjectUpdateListener("box2Done", update);
ggb2.instance.registerObjectUpdateListener("box3Done", update);
ggb2.instance.registerObjectUpdateListener("box4Done", update);
ggb2.instance.registerObjectUpdateListener("box5Done", update);
ggb2.instance.registerObjectUpdateListener("box6Done", update);
ggb2.instance.registerObjectUpdateListener("box7Done", update);
ggb2.instance.registerObjectUpdateListener("box8Done", update);
ggb2.instance.registerObjectUpdateListener("box9Done", update);
ggb2.instance.registerObjectUpdateListener("box10Done", update);
ggb2.instance.registerObjectUpdateListener("box11Done", update);
ggb2.instance.registerObjectUpdateListener("box12Done", update);
ggb2.instance.registerObjectUpdateListener("box13Done", update);
ggb2.instance.registerObjectUpdateListener("box14Done", update);
ggb2.instance.registerObjectUpdateListener("box15Done", update);
ggb2.instance.registerObjectUpdateListener("box16Done", update);
ggb2.instance.registerObjectUpdateListener("box17Done", update);
ggb2.instance.registerObjectUpdateListener("box18Done", update);
ggb2.instance.registerObjectUpdateListener("box19Done", update);
ggb2.instance.registerObjectUpdateListener("box20Done", update);
ggb2.instance.registerObjectUpdateListener("box21Done", update);

function update() {
  ggb1.instance.setValue("box1Done", ggb2.instance.getValue("box1Done"));
  ggb1.instance.setValue("box2Done", ggb2.instance.getValue("box2Done"));
  ggb1.instance.setValue("box3Done", ggb2.instance.getValue("box3Done"));
  ggb1.instance.setValue("box4Done", ggb2.instance.getValue("box4Done"));
  ggb1.instance.setValue("box5Done", ggb2.instance.getValue("box5Done"));
  ggb1.instance.setValue("box6Done", ggb2.instance.getValue("box6Done"));
  ggb1.instance.setValue("box7Done", ggb2.instance.getValue("box7Done"));
  ggb1.instance.setValue("box8Done", ggb2.instance.getValue("box8Done"));
  ggb1.instance.setValue("box9Done", ggb2.instance.getValue("box9Done"));
  ggb1.instance.setValue("box10Done", ggb2.instance.getValue("box10Done"));
  ggb1.instance.setValue("box11Done", ggb2.instance.getValue("box11Done"));
  ggb1.instance.setValue("box12Done", ggb2.instance.getValue("box12Done"));
  ggb1.instance.setValue("box13Done", ggb2.instance.getValue("box13Done"));
  ggb1.instance.setValue("box14Done", ggb2.instance.getValue("box14Done"));
  ggb1.instance.setValue("box15Done", ggb2.instance.getValue("box15Done"));
  ggb1.instance.setValue("box16Done", ggb2.instance.getValue("box16Done"));
  ggb1.instance.setValue("box17Done", ggb2.instance.getValue("box17Done"));
  ggb1.instance.setValue("box18Done", ggb2.instance.getValue("box18Done"));
  ggb1.instance.setValue("box19Done", ggb2.instance.getValue("box19Done"));
  ggb1.instance.setValue("box20Done", ggb2.instance.getValue("box20Done"));
  ggb1.instance.setValue("box21Done", ggb2.instance.getValue("box21Done"));
  button1.updateData({ disabled: false });
  if (
    ggb1.instance.getValue("box1Done") == true &&
    ggb1.instance.getValue("box5Done") == true &&
    ggb1.instance.getValue("box9Done") == true &&
    ggb1.instance.getValue("box13Done") == true &&
    ggb1.instance.getValue("box17Done") == true &&
    ggb1.instance.getValue("box21Done") == true
  ) {
    text2.updateData({ visible: true });
  }
}

button1.on("click", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  ggb2.instance.evalCommand("RunClickScript(button1)");
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"textbox":3,"geogebra":2,"separator":1,"button":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - Print Alt Slide Deck for The Graph of a Function","teacherView":true,"layout":"T layout"}
*/
