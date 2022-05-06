const {
  ggb1,
  separator1,
  buttonGroup2,
  feedback1,
  text2,
  buttonGroup1,
  text3,
  table1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
slide.on("firstload", () => {
  ggb1.instance.setVisible("blueSplat'", false);
  ggb1.instance.setVisible("redSplat'", false);
  ggb1.instance.setVisible("greenSplat'", false);
  ggb1.instance.setVisible("purpleSplat'", false);
  ggb1.instance.setVisible("yellowSplat'", false);
  ggb1.instance.setVisible("blueBal1", false);
  ggb1.instance.setVisible("redBal1", false);
  ggb1.instance.setVisible("greenBal1", false);
  ggb1.instance.setVisible("purpleBal1", false);
  ggb1.instance.setVisible("yellowBal1", false);
  ggb1.instance.setVisible("cataplutBase'", false);
  ggb1.instance.setVisible("arm'", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("blueBalCat'", false);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setValue("balloonDilation2", 0.77);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("redBalCat'", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("greenBalCat'", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("purpleBalCat'", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
  ggb1.instance.setVisible("yellowBalCat'", false);
  ggb1.instance.setVisible("balloonDilation", false);
  ggb1.instance.setVisible("LeftPoint", false);
  ggb1.instance.setVisible("RightPoint", false);
  ggb1.instance.setVisible("line", false);
  ggb1.instance.setVisible("T", false);
  ggb1.instance.setVisible("U", false);
  ggb1.instance.setVisible("V", false);
  ggb1.instance.setVisible("W", false);
  ggb1.instance.setVisible("eq1", false);
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("eq3", false);
  ggb1.instance.setVisible("eq4", false);
  ggb1.instance.setVisible("eq5", false);
  ggb1.instance.setVisible("eq6", false);
  ggb1.instance.setVisible("oval", false);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setVisible("text1", false);
  ggb1.instance.setVisible("text2", false);
  table1.updateHeader(0, { editable: true });
  table1.updateHeader(1, { editable: true });
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  ggb1.instance.setVisible("blueBal1", true);
  ggb1.instance.setVisible("redBal1", false);
  ggb1.instance.setVisible("greenBal1", false);
  ggb1.instance.setVisible("purpleBal1", false);
  ggb1.instance.setVisible("yellowBal1", false);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setValue("blue", true);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setVisible("blueSplat'", false);
  ggb1.instance.setVisible("redSplat'", false);
  ggb1.instance.setVisible("greenSplat'", false);
  ggb1.instance.setVisible("purpleSplat'", false);
  ggb1.instance.setVisible("yellowSplat'", false);
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  ggb1.instance.setVisible("blueBal1", false);
  ggb1.instance.setVisible("redBal1", true);
  ggb1.instance.setVisible("greenBal1", false);
  ggb1.instance.setVisible("purpleBal1", false);
  ggb1.instance.setVisible("yellowBal1", false);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", true);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("blueSplat'", false);
  ggb1.instance.setVisible("redSplat'", false);
  ggb1.instance.setVisible("greenSplat'", false);
  ggb1.instance.setVisible("purpleSplat'", false);
  ggb1.instance.setVisible("yellowSplat'", false);
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});
buttonGroup1.on("click:3", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  ggb1.instance.setVisible("blueBal1", false);
  ggb1.instance.setVisible("redBal1", false);
  ggb1.instance.setVisible("greenBal1", true);
  ggb1.instance.setVisible("purpleBal1", false);
  ggb1.instance.setVisible("yellowBal1", false);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", true);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("blueSplat'", false);
  ggb1.instance.setVisible("redSplat'", false);
  ggb1.instance.setVisible("greenSplat'", false);
  ggb1.instance.setVisible("purpleSplat'", false);
  ggb1.instance.setVisible("yellowSplat'", false);
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});
buttonGroup1.on("click:4", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  ggb1.instance.setVisible("blueBal1", false);
  ggb1.instance.setVisible("redBal1", false);
  ggb1.instance.setVisible("greenBal1", false);
  ggb1.instance.setVisible("purpleBal1", true);
  ggb1.instance.setVisible("yellowBal1", false);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", true);
  ggb1.instance.setValue("yellow", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setVisible("blueSplat'", false);
  ggb1.instance.setVisible("redSplat'", false);
  ggb1.instance.setVisible("greenSplat'", false);
  ggb1.instance.setVisible("purpleSplat'", false);
  ggb1.instance.setVisible("yellowSplat'", false);
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});
buttonGroup1.on("click:5", () => {
  ggb1.instance.setCoords(
    "T",
    ggb1.instance.getXcoord("PointTHome"),
    ggb1.instance.getYcoord("PointTHome")
  );
  ggb1.instance.setCoords(
    "RightPoint",
    ggb1.instance.getXcoord("RightPointHome"),
    ggb1.instance.getYcoord("RightPointHome")
  );
  ggb1.instance.setCoords(
    "LeftPoint",
    ggb1.instance.getXcoord("LeftPointHome"),
    ggb1.instance.getYcoord("LeftPointHome")
  );
  ggb1.instance.setVisible("blueBal1", false);
  ggb1.instance.setVisible("redBal1", false);
  ggb1.instance.setVisible("greenBal1", false);
  ggb1.instance.setVisible("purpleBal1", false);
  ggb1.instance.setVisible("yellowBal1", true);
  ggb1.instance.setValue("balloonDilation", 0.1);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
  ggb1.instance.setVisible("balloonDilation", true);
  ggb1.instance.setVisible("faucet'", true);
  ggb1.instance.setVisible("blueSplat'", false);
  ggb1.instance.setVisible("redSplat'", false);
  ggb1.instance.setVisible("greenSplat'", false);
  ggb1.instance.setVisible("purpleSplat'", false);
  ggb1.instance.setVisible("yellowSplat'", false);
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  buttonGroup1.updateSingleButton({ disabled: true }, 4);
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});

ggb1.instance.registerObjectUpdateListener("balloonDilation", updateRight);

function updateRight() {
  if (ggb1.instance.getValue("balloonDilation") > 0.1) {
    buttonGroup2.updateSingleButton({ disabled: false }, 1);
  }
}

count = 0;

buttonGroup2.on("click:1", () => {
  count += 1;
  ggb1.instance.setVisible("balloonDilation", false);
  ggb1.instance.setVisible("faucet'", false);
  ggb1.instance.setVisible("yellowBal1", false);
  ggb1.instance.setVisible("blueBal1", false);
  ggb1.instance.setVisible("redBal1", false);
  ggb1.instance.setVisible("purpleBal1", false);
  ggb1.instance.setVisible("greenBal1", false);
  ggb1.instance.setValue(
    "balloonDilation2",
    ggb1.instance.getValue("balloonDilation")
  );
  if (ggb1.instance.getValue("blue") == true) {
    ggb1.instance.setVisible("blueBalLaunch", true);
    ggb1.instance.setLayer("blueSplat'", count);
    ggb1.instance.setLayer("blueBalLaunch", count);
  }
  if (ggb1.instance.getValue("red") == true) {
    ggb1.instance.setVisible("redBalLaunch", true);
    ggb1.instance.setLayer("redSplat'", count);
    ggb1.instance.setLayer("redBalLaunch", count);
  }
  if (ggb1.instance.getValue("green") == true) {
    ggb1.instance.setVisible("greenBalLaunch", true);
    ggb1.instance.setLayer("greenSplat'", count);
    ggb1.instance.setLayer("greenBalLaunch", count);
  }
  if (ggb1.instance.getValue("purple") == true) {
    ggb1.instance.setVisible("purpleBalLaunch", true);
    ggb1.instance.setLayer("purpleSplat'", count);
    ggb1.instance.setLayer("purpleBalLaunch", count);
  }
  if (ggb1.instance.getValue("yellow") == true) {
    ggb1.instance.setVisible("yellowBalLaunch", true);
    ggb1.instance.setLayer("yellowSplat'", count);
    ggb1.instance.setLayer("yellowBalLaunch", count);
  }
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setAnimating("balloonDilation2", true);
  ggb1.instance.startAnimation();
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
});

ggb1.instance.registerObjectUpdateListener("time2", update2);
function update2() {
  if (ggb1.instance.getValue("time2") >= 0.86) {
    if (ggb1.instance.getValue("blue") == true) {
      ggb1.instance.setVisible("blueBalLaunch", false);
      ggb1.instance.setValue(
        "blueSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("blueSplat'", true);
    }
    if (ggb1.instance.getValue("red") == true) {
      ggb1.instance.setVisible("redBalLaunch", false);
      ggb1.instance.setValue(
        "redSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("redSplat'", true);
    }
    if (ggb1.instance.getValue("green") == true) {
      ggb1.instance.setVisible("greenBalLaunch", false);
      ggb1.instance.setValue(
        "greenSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("greenSplat'", true);
    }
    if (ggb1.instance.getValue("purple") == true) {
      ggb1.instance.setVisible("purpleBalLaunch", false);
      ggb1.instance.setValue(
        "purpleSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("purpleSplat'", true);
    }
    if (ggb1.instance.getValue("yellow") == true) {
      ggb1.instance.setVisible("yellowBalLaunch", false);
      ggb1.instance.setValue(
        "yellowSplatDilation",
        ggb1.instance.getValue("balloonDilation")
      );
      ggb1.instance.setVisible("yellowSplat'", true);
    }
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 3);
    buttonGroup1.updateSingleButton({ disabled: false }, 4);
    buttonGroup1.updateSingleButton({ disabled: false }, 5);
  }
}

buttonGroup2.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setVisible("line", true);
  ggb1.instance.setVisible("LeftPoint", true);
  ggb1.instance.setVisible("RightPoint", true);
  ggb1.instance.setVisible("eq1", true);
  ggb1.instance.setVisible("eq2", true);
  ggb1.instance.setVisible("eq3", true);
  ggb1.instance.setVisible("eq4", true);
  ggb1.instance.setVisible("eq5", true);
  ggb1.instance.setVisible("eq6", true);
  ggb1.instance.setVisible("T", true);
  ggb1.instance.setVisible("U", true);
  ggb1.instance.setVisible("V", true);
  ggb1.instance.setVisible("W", true);
  ggb1.instance.setVisible("oval", true);
  ggb1.instance.setVisible("text2", true);
  ggb1.instance.setVisible("text1", true);
});

buttonGroup2.on("click:3", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setVisible("line", false);
  ggb1.instance.setVisible("LeftPoint", false);
  ggb1.instance.setVisible("RightPoint", false);
  ggb1.instance.setVisible("eq1", false);
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("eq3", false);
  ggb1.instance.setVisible("eq4", false);
  ggb1.instance.setVisible("eq5", false);
  ggb1.instance.setVisible("eq6", false);
  ggb1.instance.setVisible("T", false);
  ggb1.instance.setVisible("U", false);
  ggb1.instance.setVisible("V", false);
  ggb1.instance.setVisible("W", false);
  ggb1.instance.setVisible("oval", false);
  ggb1.instance.setVisible("text2", false);
  ggb1.instance.setVisible("text1", false);
});

autorun(() => {
  let headerX = table1.data.columns[0].value;
  let headerY = table1.data.columns[1].value;
  utils.RTS.sendData("slide-62797c462e04", {
    text1x: headerX,
    text2y: headerY,
  });
});

let now = controls.current;
autorun(() => {
  if (controls.current != now) {
    let headerX = table1.data.columns[0].value;
    console.log(typeof headerX);
    let headerY = table1.data.columns[1].value;
    utils.RTS.sendData("slide-62797c462e04", {
      text1x: headerX,
      text2y: headerY,
    });
  }
});
// let num = table1.getCell(0, 1).value;
// let num2 = table1.getCell(0, 2).value;
// let num3 = table1.getCell(1, 1).value;
// let num4 = table1.getCell(1, 2).value;
// let num5 = table1.getCell(2, 1).value;
// let num6 = table1.getCell(2, 2).value;
// let num7 = table1.getCell(3, 1).value;
// let num8 = table1.getCell(3, 2).value;
// let num9 = table1.getCell(4, 1).value;
// let num10 = table1.getCell(4, 2).value;

// const min = 0;
// const max = 50;

// num = boundIt(num, 0, 1, min, max);
// num2 = boundIt(num2, 0, 2, min, max);
// num3 = boundIt(num3, 1, 1, min, max);
// num4 = boundIt(num4, 1, 2, min, max);
// num5 = boundIt(num5, 2, 1, min, max);
// num6 = boundIt(num6, 2, 2, min, max);
// num7 = boundIt(num7, 3, 1, min, max);
// num8 = boundIt(num8, 3, 2, min, max);
// num9 = boundIt(num9, 4, 1, min, max);
// num10 = boundIt(num10, 4, 2, min, max);

// utils.RTS.sendData("slide-62797c462e04", {
//   num,
//   num2,
//   num3,
//   num4,
//   num5,
//   num6,
//   num7,
//   num8,
//   num9,
//   num10,
// });

// function boundIt(inp, row, column, min, max) {
//   const result = utils.math.evaluateLatex(inp);
//   if (result.value < 0 || result.value > 70 || result.error) {
//     table1.updateCell(row, column, { value: `` });
//     return ``;
//   }
//   return result.value;
// }

/*  let num = table1.getCell(0, 0).value,
   let num2 =  table1.getCell(1, 0).value,
   let num3 =  table1.getCell(2, 0).value,
    let num4 = table1.getCell(3, 0).value,
    let num5 = table1.getCell(4, 0).value,
    let num6 = table1.getCell(5,0).value,
    let num7 = table1.getCell(6, 0).value,
    let num8 = table1.getCell(7, 0).value,
   let num9 =  table1.getCell(8, 0).value,
    let num10 = table1.getCell(9, 0).value,
   let num11 =  table1.getCell(0, 1).value,
  let num12 =   table1.getCell(1, 1).value,
    let num13 = table1.getCell(2, 1).value,
    let num14 = table1.getCell(3, 1).value,
    let num15 = table1.getCell(4, 1).value,
    let num16 = table1.getCell(5, 1).value,
    let num17 = table1.getCell(6, 1).value,
     let num18 =table1.getCell(7, 1).value,
     let num19 =table1.getCell(8, 1).value,
    let num20 = table1.getCell(9, 1).value,
  const min = 0;
  const max = 50;

  num = boundIt(num, 0, 0, min, max);
  num2 = boundIt(num2, 0, 1, min, max);
  num3 = boundIt(num3, 1, 0, min, max);
  num4 = boundIt(num4, 1, 1, min, max);
  num5 = boundIt(num5, 2, 0, min, max);
  num6 = boundIt(num6, 2, 1, min, max);
  num7 = boundIt(num7, 3, 0, min, max);
  num8 = boundIt(num8, 3, 1, min, max);
  num9 = boundIt(num9, 4, 0, min, max);
  num10 = boundIt(num10, 4, 1, min, max);
  num11 = boundIt(num11, 5, 0, min, max);
  num12 = boundIt(num12, 5, 1, min, max);
  num13 = boundIt(num13, 6, 0, min, max);
  num14 = boundIt(num14, 6, 1, min, max);
  num15 = boundIt(num15, 7, 0, min, max);
  num16 = boundIt(num16, 7, 1, min, max);
  num17 = boundIt(num17, 8, 0, min, max);
  num18 = boundIt(num18, 8, 1, min, max);
  num19 = boundIt(num19, 9, 0, min, max);
  num20 = boundIt(num20, 9, 1, min, max);

  utils.RTS.sendData('slide-62797c462e04', {
    num,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
    num10,
    num11,
    num12,
    num13,
    num14,
    num15,
    num16,
    num17,
    num18,
    num19,
    num20,
  });
});

function boundIt(inp, row, column, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.value < 0 || result.value > 70 || result.error) {
    table1.updateCell(row, column, { value: `` });
    return ``;
  }
  return result.value;
}*/

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":2,"textbox":3,"table":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Print Alternate Slide Deck for Analyzing Paint Splatters","teacherView":true,"layout":"two col"}
*/
