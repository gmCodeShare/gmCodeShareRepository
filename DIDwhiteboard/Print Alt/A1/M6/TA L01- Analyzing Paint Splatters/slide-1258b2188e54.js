const { ggb1, separator1, buttonGroup2, feedback1, text2, buttonGroup1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
slide.on("firstload", () => {
  ggb1.instance.setVisible("text1", false);
  ggb1.instance.setVisible("text2", false);
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
});

buttonGroup1.on("click:1", () => {
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
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
});
buttonGroup1.on("click:2", () => {
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
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
});
buttonGroup1.on("click:3", () => {
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
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
});
buttonGroup1.on("click:4", () => {
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
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
});

buttonGroup1.on("click:5", () => {
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
  ggb1.instance.setValue("time2", 0.61);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("balloonDilation2", false);
  ggb1.instance.setVisible("blueBalLaunch", false);
  ggb1.instance.setVisible("redBalLaunch", false);
  ggb1.instance.setVisible("greenBalLaunch", false);
  ggb1.instance.setVisible("purpleBalLaunch", false);
  ggb1.instance.setVisible("yellowBalLaunch", false);
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
  // console.log(count);
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
  // console.log(count);
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
  }
}

buttonGroup2.on("click:2", () => {
  count = 0;
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
  ggb1.instance.setVisible("LeftRulerPoint", false);
  ggb1.instance.setVisible("RightRulerPoint", false);
  ggb1.instance.setVisible("ruler", false);
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
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 4);
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
  ggb1.instance.setValue("blue", false);
  ggb1.instance.setValue("red", false);
  ggb1.instance.setValue("green", false);
  ggb1.instance.setValue("purple", false);
  ggb1.instance.setValue("yellow", false);
  // console.log(count);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":2,"textbox":2},"stage":"Launch","lessonInfo":"9 M6 TA L01 - Print Alternate Slide Deck for Analyzing Paint Splatters","teacherView":true,"layout":"two col"}
*/
