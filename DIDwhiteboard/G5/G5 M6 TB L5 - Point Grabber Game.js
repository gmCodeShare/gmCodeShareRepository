const { ggb1, buttonGroup1, buttonGroup2, fib1 } = components;
slide.on("firstload", () => {
  ggb1.instance.evalCommand("RunClickScript(button3)");
});

buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
fib1.on("change", () => {
  if (fib1.getInput("0").text == "") {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  } else if (Math.floor(fib1.getInput("0").text / 20) == 0) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
});

//make horizontal line
buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("numPointsPass", 0);
  let distance = fib1.getInput(0).text;
  ggb1.instance.setValue("Dist", distance);
  ggb1.instance.setValue("HorizClicked", true);
  ggb1.instance.setValue("VertClicked", false);
  ggb1.instance.setValue("escTextRead", false);
  ggb1.instance.evalCommand("RunClickScript(button1)");
  //if points given are vertical points, determine if/which point horizontal line goes through
  if (ggb1.instance.getValue("vertPoints")) {
    //if points are vertical but they click horizontal, test to see if the y-coordinate of each point matches distance.
    arrayOfYCoords = [ggb1.instance.getYcoord("A"), ggb1.instance.getYcoord("B"), ggb1.instance.getYcoord("C"), ggb1.instance.getYcoord("D")];
    console.log(arrayOfYCoords);
    //if yes, set coordinates of PointOnLine to the coordinates and set oneCorrectH to true
    for (let i = 0, L = arrayOfYCoords.length; i < L; i++) {
      if (arrayOfYCoords[i] == ggb1.instance.getValue("Dist")) {
        ggb1.instance.setCoords("PointOnLine", ggb1.instance.getXcoord("A"), arrayOfYCoords[i]);
        ggb1.instance.setValue("numPointsPass", 1);
      }
    }
  }
  if (ggb1.instance.getValue("lineCorrect")) {
    ggb1.instance.setValue("numPointsPass", 4);
  }
  ggb1.instance.evalCommand("ReadText(horizButtonText)");
  console.log("PointOnLine is (" + ggb1.instance.getXcoord("PointOnLine") + "," + ggb1.instance.getYcoord("PointOnLine") + ")");
});
//make vertical line
buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("numPointsPass", 0);
  let distance = fib1.getInput(0).text;
  ggb1.instance.setValue("Dist", distance);
  ggb1.instance.setValue("HorizClicked", false);
  ggb1.instance.setValue("VertClicked", true);
  ggb1.instance.setValue("escTextRead", false);
  ggb1.instance.evalCommand("RunClickScript(button2)");
  //////////////
  //if points given are horizontal points, determine if/which point vertical line goes through
  if (ggb1.instance.getValue("horizPoints")) {
    //if points are horizontal but they click vertical, test to see if the x-coordinate of each point matches distance.
    arrayOfXCoords = [ggb1.instance.getXcoord("A"), ggb1.instance.getXcoord("B"), ggb1.instance.getXcoord("C"), ggb1.instance.getXcoord("D")];
    console.log(arrayOfXCoords);
    //if yes, set coordinates of PointOnLine to the coordinates and set oneCorrectV to true
    for (let i = 0, L = arrayOfXCoords.length; i < L; i++) {
      if (arrayOfXCoords[i] == ggb1.instance.getValue("Dist")) {
        ggb1.instance.setCoords("PointOnLine", arrayOfXCoords[i], ggb1.instance.getYcoord("A"));
        ggb1.instance.setValue("numPointsPass", 1);
      }
    }
  }
  if (ggb1.instance.getValue("lineCorrect")) {
    ggb1.instance.setValue("numPointsPass", 4);
  }
  ggb1.instance.evalCommand("ReadText(vertButtonText)");
  console.log("PointOnLine is (" + ggb1.instance.getXcoord("PointOnLine") + "," + ggb1.instance.getYcoord("PointOnLine") + ")");
});
//new points
buttonGroup2.on("click:1", () => {
  ggb1.instance.setValue("numPointsPass", 0);
  ggb1.instance.evalCommand("RunClickScript(button3)");
  fib1.updateInput(0, { text: "" });
  ggb1.instance.setValue("HorizClicked", false);
  ggb1.instance.setValue("VertClicked", false);
  ggb1.instance.evalCommand("ReadText(newPointsButtonText)");
});
