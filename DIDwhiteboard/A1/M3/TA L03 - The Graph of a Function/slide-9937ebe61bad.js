const {
  ggb1,
  feedback1,
  text2,
  select1,
  text3,
  buttonGroup1,
  cc_sharewithclass_2bf0a6586793_textbox1: text1,
  cc_sharewithclass_2bf0a6586793_input1: input1,
  cc_sharewithclass_2bf0a6586793_button1: button1,
  cc_sharewithclass_2bf0a6586793_studentanswers1,
} = components;

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
  text1.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  text3.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("page1", false);
  ggb1.instance.setValue("page2", true);
  ggb1.instance.setValue("points", true);
});
select1.on("change", (selected) => {
  buttonGroup1.updateData({ visible: true });
  text3.updateData({ visible: true });
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  ggb1.instance.setVisible("eq6", false);
  ggb1.instance.setVisible("eq7", false);
  ggb1.instance.setVisible("eq8", false);
  ggb1.instance.setVisible("A", false);
  ggb1.instance.setVisible("B", false);
  ggb1.instance.setVisible("C", false);
  ggb1.instance.setValue("points", false);
  //ggb1.instance.setValue("prompt1",true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("eq6", true);
  ggb1.instance.setVisible("eq7", true);
  ggb1.instance.setVisible("eq8", true);
  ggb1.instance.setVisible("A", true);
  ggb1.instance.setVisible("B", true);
  ggb1.instance.setVisible("C", true);
  ggb1.instance.setValue("points", true);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"select":1,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
