const { button1, separator1, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const defGGB = {
  innerData: false,
};

let data = getFromSlide(`slide-bfc4a7709efe`, "ggb1", defGGB) || defGGB;

if (data.innerData) {
  ggb1.instance.evalCommand(`D=(${data.innerData["D"]})`);
  ggb1.instance.evalCommand(`E=(${data.innerData["E"]})`);
  ggb1.instance.evalCommand(`F=(${data.innerData["F"]})`);
  ggb1.instance.evalCommand(`G=(${data.innerData["G"]})`);
}

slide.on("firstload", () => {
  ggb1.instance.setVisible("D", false);
  ggb1.instance.setVisible("E", false);
  ggb1.instance.setVisible("F", false);
  ggb1.instance.setVisible("G", false);
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("eq3", false);
  ggb1.instance.setVisible("eq4", false);
  ggb1.instance.setVisible("eq5", false);

  ggb1.instance.setValue("page1", false);
  ggb1.instance.setValue("page2", true);
  ggb1.instance.setValue("points", true);
});

button1.on("click", () => {
  ggb1.instance.evalCommand("RunClickScript(button7)");
});

/*
{"compTotals":{"button":1,"separator":1,"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - Print Alt Slide Deck for The Graph of a Function","teacherView":true,"layout":"one col"}
*/
