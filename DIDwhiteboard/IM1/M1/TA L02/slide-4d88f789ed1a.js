//slide-4d88f789ed1a

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
    "2 line segments are drawn to create the top of a hexagon to start figure 4. Figure 4 has 1 set of 2 line segments. Another 2 line segments are drawn to create the top of the next hexagon. Figure 4 has 2 sets of 2 line segments. Another 2 line segments are drawn. Figure 4 has 3 sets of 2 line segments. Another 2 line segments are drawn. Figure 4 has 4 sets of 2 line segments. Then 2 line segments are drawn to create the bottom of the first hexagon. Figure 4 has 1 set of 2 line segments on the bottom and 4 sets of 2 line segments on the top. Another 2 line segments are drawn to create the bottom of the next hexagon. Figure 4 has 2 sets of 2 line segments on the bottom and 4 sets of 2 line segments on the top. Another 2 line segments are drawn. Figure 4 has 3 sets of 2 line segments on the bottom and 4 sets of 2 line segments on the top. Another 2 line segments are drawn. Figure 4 has 4 sets of 2 line segments on the bottom and 4 sets of 2 line segments on the top. Then 5 vertical line segments are drawn to connect each pair of sets of 2 line segments to create 4 hexagons and complete figure 4. A numeric expression for the number of line segments in Figure 4 is 2 times 4 plus 2 times 4 plus 5. ";
  const description5 =
    "2 line segments are drawn to create the top of a hexagon to start figure 5. Figure 5 has 1 set of 2 line segments. Another 2 line segments are drawn to create the top of the next hexagon. Figure 5 has 2 sets of 2 line segments. Another 2 line segments are drawn. Figure 5 has 3 sets of 2 line segments. Another 2 line segments are drawn. Figure 5 has 4 sets of 2 line segments. Another 2 line segments are drawn. Figure 5 has 5 sets of 2 line segments. Then 2 line segments are drawn to create the bottom of the first hexagon. Figure 5 has 1 set of 2 line segments on the bottom and 5 sets of 2 line segments on the top. Another 2 line segments are drawn to create the bottom of the next hexagon. Figure 5 has 2 sets of 2 line segments on the bottom and 5 sets of 2 line segments on the top. Another 2 line segments are drawn. Figure 5 has 3 sets of 2 line segments on the bottom and 5 sets of 2 line segments on the top. Another 2 line segments are drawn. Figure 5 has 4 sets of 2 line segments on the bottom and 5 sets of 2 line segments on the top. Another 2 line segments are drawn. Figure 5 has 5 sets of 2 line segments on the bottom and 5 sets of 2 line segments on the top. Then 6 vertical line segments are drawn to connect each pair of sets of 2 line segments to create 5 hexagons and complete figure 5. A numeric expression for the number of line segments in Figure 5 is 2 times 5 plus 2 times 5 plus 6. ";
  const readText = description4 + description5;
  ggb1.instance.evalCommand(`ReadText("${readText}")`);
});

//stop time slider, set time to zero
buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  ggb1.instance.stopAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});
