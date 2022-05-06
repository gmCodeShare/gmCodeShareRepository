const {
  ggb1,
  feedback1,
  text2,
  text3,
  buttonGroup1,
  cc_sharewithclass_437cb9155aaf_textbox1: text1,
  cc_sharewithclass_437cb9155aaf_input1: input1,
  cc_sharewithclass_437cb9155aaf_button1: button1,
  cc_sharewithclass_437cb9155aaf_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text1.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});
ggb1.instance.registerObjectUpdateListener("rangemin", update);
ggb1.instance.registerObjectUpdateListener("rangemax", update);
ggb1.instance.registerObjectUpdateListener("domainmin", update);
ggb1.instance.registerObjectUpdateListener("domainmax", update);

function update() {
  let rangeMin = ggb1.instance.getValue("rangemin");
  let rangeMax = ggb1.instance.getValue("rangemax");
  let domainMin = ggb1.instance.getValue("domainmin");
  let domainMax = ggb1.instance.getValue("domainmax");
  text3.updateData({
    text: `Domain: $\\lbrace x|${domainMin} \\le x \\le ${domainMax}\\rbrace$\n\n Range: $\\lbrace y|${rangeMin}\\le y \\le${rangeMax}\\rbrace$ `,
  });
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("eq3", false);
  ggb1.instance.setVisible("eq4", false);
  ggb1.instance.setVisible("eq5", false);
  ggb1.instance.setVisible("D", false);
  ggb1.instance.setVisible("E", false);
  ggb1.instance.setVisible("F", false);
  ggb1.instance.setVisible("G", false);
  //ggb1.instance.setValue("points",true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("eq2", true);
  ggb1.instance.setVisible("eq3", true);
  ggb1.instance.setVisible("eq4", true);
  ggb1.instance.setVisible("eq5", true);
  ggb1.instance.setVisible("D", true);
  ggb1.instance.setVisible("E", true);
  ggb1.instance.setVisible("F", true);
  ggb1.instance.setVisible("G", true);
  //ggb1.instance.setValue("points",true);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
