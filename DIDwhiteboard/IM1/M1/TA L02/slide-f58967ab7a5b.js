//slide-f58967ab7a5b

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
    "A vertical line segment is drawn to start figure 4. 5 line segments are drawn to create a hexagon. Figure 4 has 1 line segment and 1 set of 5 line segments. Another hexagon is drawn that shares a vertical side with the first. Figure 4 has 1 line segment and 2 sets of 5 line segments. A third hexagon is drawn. Figure 4 has 1 line segment and 3 sets of 5 line segments. A fourth hexagon is drawn to complete figure 4. It has 1 line segment and 4 sets of 5 line segments. A numeric expression for the number of line segments in Figure 4 is 1 plus 5 times 4. ";
  const description5 =
    "A vertical line segment is drawn to start figure 5. 5 line segments are drawn to create a hexagon. Figure 5 has 1 line segment and 1 set of 5 line segments. Another hexagon is drawn that shares a vertical side with the first. Figure 5 has 1 line segment and 2 sets of 5 line segments. A third hexagon is drawn. Figure 5 has 1 line segment and 3 sets of 5 line segments. A fourth hexagon is drawn. Figure 5 has 1 line segment and 4 sets of 5 line segments. A fifth hexagon is drawn to complete figure 5. It has 1 line segment and 5 sets of 5 line segments. A numeric expression for the number of line segments in Figure 5 is 1 plus 5 times 5.";
  const readText = description4 + description5;
  ggb1.instance.evalCommand(`ReadText("${readText}")`);
});

//stop time slider, set time to zero
buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button2)");
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});
