const {
  ggb1,
  feedback1,
  text1,
  Separator1,
  button1,
  Separator2,
  text2,
  Separator3,
  button2,
  Separator4,
  text3,
  Separator5,
  button3,
  separator12,
  text4,
  separator1,
  button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue("showPlanes", true);
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    text4.updateData({ visible: false });
    button2.updateData({ visible: false });
    button3.updateData({ visible: false });
    button4.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

//ggb1.instance.registerObjectUpdateListener("timeCircles", advance2);
//ggb1.instance.registerObjectUpdateListener("timeLine", advance3);

button1.on("click", advance1);
//button2.on("click", advance2);

button2.on("click", () => {
  ggb1.instance.startAnimation();
  text2.updateData({ color: "gray" });
  button2.updateData({ disabled: true });
});

button3.on("click", () => {
  ggb1.instance.startAnimation();
  button3.updateData({ disabled: true });
  text4.updateData({ visible: true });
  button4.updateData({ visible: true });
});

button4.on("click", () => {
  ggb1.instance.setAnimating("timeHeight", true);
  ggb1.instance.setValue("showPlanes", true);
  ggb1.instance.startAnimation();
  button4.updateData({ disabled: true });
});

function advance1() {
  text1.updateData({ color: "grey" });
  button1.updateData({ disabled: true });
  ggb1.instance.startAnimation();
}

autorun(() => {
  if (ggb1.innerData["timeCircles"] == 1) {
    text2.updateData({ visible: true });
    button2.updateData({ visible: true });
    ggb1.instance.stopAnimation();
    ggb1.instance.setVisible("p", false);
    ggb1.instance.setVisible("p'", false);
    ggb1.instance.setValue("showCircles", true);
    ggb1.instance.setAnimating("timeCircles", false);
    ggb1.instance.setAnimating("timeLine", true);
  }
});

autorun(() => {
  if (ggb1.innerData["timeLine"] == 1) {
    text3.updateData({ visible: true });
    button3.updateData({ visible: true });
    ggb1.instance.stopAnimation();
    ggb1.instance.setVisible("fakeLine", false);
    ggb1.instance.setValue("showLine", true);
    ggb1.instance.setAnimating("timeLine", false);
    ggb1.instance.setAnimating("time1", true);
    ggb1.instance.setAnimating("time2", true);
  }
});

/*function advance2() {
    if(ggb1.instance.getValue("timeCircles") == 1) {
        text2.updateData({visible: true});
        button2.updateData({visible: true});
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("p", false);
        ggb1.instance.setVisible("p'", false);
        ggb1.instance.setValue("showCircles", true);
        ggb1.instance.setAnimating("timeCircles", false);
        ggb1.instance.setAnimating("timeLine", true);
        //ggb1.instance.setValue("showCircles", 1);
    };
}
 
 function advance3() {
     if(ggb1.instance.getValue("timeLine") == 1) {
        //text1.updateData({color: "gray"});
        text3.updateData({visible: true});
        button3.updateData({visible: true});
        ggb1.instance.stopAnimation();
        ggb1.instance.setVisible("fakeLine", false);
        ggb1.instance.setValue("showLine", true);
        ggb1.instance.setAnimating("timeLine", false);
        ggb1.instance.setAnimating("time1", true);
        ggb1.instance.setAnimating("time2", true);
        //ggb1.instance.setValue("showLine",true);
    };
} */

/*
{"compTotals":{"geogebra":1,"textbox":5,"separator":7,"button":4},"stage":"Learn","lessonInfo":"8 M6 TE L22 - Print Alt: Volume of Cylinders","teacherView":true,"layout":"two col"}
*/
