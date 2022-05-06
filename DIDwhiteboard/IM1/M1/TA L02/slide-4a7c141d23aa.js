//change the filename asap
//slide-4a7c141d23aa

const { ggb1, ggb2, buttonGroup1, buttonGroup2, buttonGroup3 } = components;

//hide ggb buttons so it's usable in cloud and platform
ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button2", false);
ggb1.instance.setVisible("button3", false);
ggb2.instance.setVisible("button1", false);
ggb2.instance.setVisible("button2", false);
ggb2.instance.setVisible("button3", false);

//hide all GGB
slide.on("firstload", () => {
  buttonGroup2.updateData({ visible: false });
  buttonGroup3.updateData({ visible: false });
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: false });
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 3);
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
});

//choose blossom
buttonGroup1.on("click:1", () => {
  ggb1.updateData({ visible: true });
  ggb2.updateData({ visible: false });
  buttonGroup2.updateData({ visible: true });
  buttonGroup3.updateData({ visible: false });
  // ggb1.instance.evalCommand("RunClickScript(button2)");
  // ggb2.instance.evalCommand("RunClickScript(button2)");
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

//choose unwrap
buttonGroup1.on("click:2", () => {
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  buttonGroup2.updateData({ visible: false });
  buttonGroup3.updateData({ visible: true });
  // ggb1.instance.evalCommand("RunClickScript(button2)");
  // ggb2.instance.evalCommand("RunClickScript(button2)");
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

//animate slicing and petals
buttonGroup2.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(button2)");
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 3);
  const readText =
    "3 line segments are drawn from a vertex of a hexagon to opposing vertices to split the hexagon into 4 triangles. The triangles separate.";
  ggb1.instance.evalCommand(`ReadText("${readText}")`);
});

//close petals
buttonGroup2.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button3)");
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 3);
  const readText =
    "A hexagon is split from one of its vertices into four triangles. The triangles move back together to reform the original hexagon.";
  ggb1.instance.evalCommand(`ReadText("${readText}")`);
});

//resets back to applet open
buttonGroup2.on("click:3", () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.evalCommand("RunClickScript(button2)");
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 3);
  let readText = ggb1.instance.getValueString("appletStatus") + "";
  // remove line breaks that cause GGB to freak out
  readText = readText.replace(/\n/g, " ");
  ggb1.instance.evalCommand(`ReadText("${readText}")`);
});

//animate unwrap
buttonGroup3.on("click:1", () => {
  // ggb2.instance.evalCommand("RunClickScript(button2)");
  ggb2.instance.evalCommand("RunClickScript(button1)");
  buttonGroup3.updateSingleButton({ disabled: true }, 1);
  buttonGroup3.updateSingleButton({ disabled: false }, 2);
  buttonGroup3.updateSingleButton({ disabled: false }, 3);
  const readText =
    "3 line segments are drawn through a point inside a hexagon to split the hexagon into 6 triangles. The hexagon rolls from left to right as the triangles separate.";
  ggb2.instance.evalCommand(`ReadText("${readText}")`);
});

//re-wrap
buttonGroup3.on("click:2", () => {
  ggb2.instance.evalCommand("RunClickScript(button3)");
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  buttonGroup3.updateSingleButton({ disabled: false }, 3);
  const readText =
    "A hexagon is split from a point inside the hexagon into 6 triangles. The triangles roll together from right to left to reform the original hexagon.";
  ggb2.instance.evalCommand(`ReadText("${readText}")`);
});

//resets back to applet open
buttonGroup3.on("click:3", () => {
  ggb2.instance.stopAnimation();
  ggb2.instance.evalCommand("RunClickScript(button2)");
  // patch to prevent early rolling:
  ggb2.instance.setAnimating("time", false);
  buttonGroup3.updateSingleButton({ disabled: false }, 1);
  buttonGroup3.updateSingleButton({ disabled: true }, 2);
  buttonGroup3.updateSingleButton({ disabled: true }, 3);
  let readText = ggb2.instance.getValueString("appletStatus") + "";
  // remove line breaks that cause GGB to freak out
  readText = readText.replace(/\n/g, " ");
  ggb2.instance.evalCommand(`ReadText("${readText}")`);
});
