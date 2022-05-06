const { text2, ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setVisible("blueSplat'", true);
ggb1.instance.setValue("blueSplatDilation", 0.25);
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
ggb1.instance.setValue("balloonDilation", 1);
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
ggb1.instance.setVisible("text1", false);
ggb1.instance.setVisible("text2", true);
ggb1.instance.setVisible("LeftPoint", true);
ggb1.instance.setVisible("RightPoint", true);
ggb1.instance.setVisible("line", true);
ggb1.instance.setVisible("T", false);
ggb1.instance.setVisible("U", false);
ggb1.instance.setVisible("V", false);
ggb1.instance.setVisible("W", false);
ggb1.instance.setVisible("eq1", true);
ggb1.instance.setVisible("eq2", true);
ggb1.instance.setVisible("eq3", false);
ggb1.instance.setVisible("eq4", false);
ggb1.instance.setVisible("eq5", false);
ggb1.instance.setVisible("eq6", false);
ggb1.instance.setVisible("oval", false);
ggb1.instance.setVisible("faucet'", false);

const defGGB = {
  innerData: false,
};

let data = getFromSlide(`slide-3c4f252a12e8`, "ggb1", defGGB) || defGGB;

if (data.innerData) {
  let equation = data.innerData["text4"];
  let equation2 = data.innerData["text5"];
  let condition = data.innerData["quadratic"];
  if (condition == true) {
    text2.updateData({
      text: `#### An equation for your model is  

#### $y=${equation}$.`,
    });
  } else {
    text2.updateData({
      text: `#### An equation for your model is  

#### $y=${equation2}$.`,
    });
  }
}

/*
{"compTotals":{"textbox":2,"geogebra":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Print Alternate Slide Deck for Analyzing Paint Splatters","teacherView":true,"layout":"one col"}
*/
