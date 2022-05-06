//slide-091124be5927

const { buttonGroup1, ggb1 } = components;

//hides buttons so it can work both in GGB cloud and platform
ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button2", false);

//disable reset button
slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

//set time to zero, start time slider
buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  const description4 =
    "A hexagon is drawn which starts figure 4 with 6 line segments. Another hexagon is drawn that shares a vertical side with the first. It adds 5 new line segments to figure 4. A third hexagon is drawn. Figure 4 has 6 line segments and 2 sets of 5 line segments. A fourth hexagon is drawn to complete figure 4. It has 6 line segments and 3 sets of 5 line segments. A numeric expression for the number of line segments in Figure 4 is 6 plus 5 times 3. ";
  const description5 =
    "Then a hexagon is drawn which starts figure 5 with 6 line segments. Another hexagon is drawn that shares a vertical side with the first. It adds 5 new line segments to figure 5. A third hexagon is drawn. Figure 5 has 6 line segments and 2 sets of 5 line segments. A fourth hexagon is drawn. Figure 5 has 6 line segments and 3 sets of 5 line segments. A fifth hexagon is drawn to complete figure 5. It has 6 line segments and 4 sets of 5 line segments. A numeric expression for the number of line segments in Figure 5 is 6 plus 5 times 4.";
  const readText = description4 + description5;
  ggb1.instance.evalCommand(`ReadText("${readText}")`);
});

//stop time slider, set time to zero
buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button2)");
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});
