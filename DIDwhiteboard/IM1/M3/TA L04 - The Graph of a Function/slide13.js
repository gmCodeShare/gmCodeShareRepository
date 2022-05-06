const {
  ggb1,
  text2,
  select1,
  cc_sharewithclass_b7a96065904b_textbox1: text1,
  cc_sharewithclass_b7a96065904b_input1: input1,
  cc_sharewithclass_b7a96065904b_button1: button1,
} = components;

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setMode(false);

ggb1.instance.setVisible("Point1", false);
ggb1.instance.setVisible("Point2", false);
ggb1.instance.setVisible("Point3", false);
ggb1.instance.setVisible("Point4", false);
ggb1.instance.setVisible("Point5", false);
ggb1.instance.setVisible("Point6", false);
ggb1.instance.setVisible("Point7", false);
ggb1.instance.setVisible("Point8", false);
ggb1.instance.setVisible("Point9", false);
ggb1.instance.setVisible("Point10", false);
ggb1.instance.setVisible("Point11", false);
ggb1.instance.setVisible("Point12", false);
ggb1.instance.setVisible("Point13", false);
ggb1.instance.setVisible("Point14", false);
ggb1.instance.setVisible("Point15", false);
ggb1.instance.setVisible("Point16", false);
ggb1.instance.setVisible("Point17", false);
ggb1.instance.setVisible("Point18", false);
ggb1.instance.setVisible("Point19", false);
ggb1.instance.setVisible("Point20", false);
ggb1.instance.setVisible("Point21", false);

const sketches3 =
  getFromSlide(`slide-c8cd8491d8d3`, `ggb1.innerData.doodles2`, []) || [];
for (let i = 0; i < sketches3.length; i++) {
  let name3 = ggb1.instance.evalCommandGetLabels(sketches3[i]);
  ggb1.instance.setFixed(name3, false, false);
  ggb1.instance.setColor(name3, 242, 106, 54);
  ggb1.instance.setLineThickness(name3, 2);
}
slide.on("firstload", () => {
  text1.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
});

select1.on("change", (selected) => {
  if (select1.data.selected.includes("0")) {
    input1.updateData({
      text: `I’m very confident this is the graph because `,
    });
  }
  if (select1.data.selected.includes("1")) {
    input1.updateData({ text: `I think it’s pretty close because ` });
  }
  if (select1.data.selected.includes("2")) {
    input1.updateData({ text: `I’m not that confident because ` });
  }
  if (select1.data.selected.includes("3")) {
    input1.updateData({
      text: `I’m very confident this is not the graph because `,
    });
  }
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
});
