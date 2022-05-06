const {
  textDisplay2,
  text1,
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  textDisplay3,
  text2,
  ggb2,
  separator2,
  buttonGroup2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let launchNum;
let storedAVals;
let storedBVals;
let storedCVals;
let storedXInts;

ggb2.instance.setErrorDialogsActive(false);

let launchNum2;
let storedAVals2;
let storedBVals2;
let storedCVals2;
let storedXInts2;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("launchUpBool", true);
    launchNum = 0;
    storedAVals = [];
    storedBVals = [];
    storedCVals = [];
    storedXInts = [];

    ggb1.updateData({
      storedAVals: storedAVals,
      storedBVals: storedBVals,
      storedCVals: storedCVals,
      storedXInts: storedXInts,
    });

    buttonGroup1.updateSingleButton(
      {
        disabled: true,
      },
      2
    );
    // buttonGroup1.updateSingleButton(
    //   {
    //     disabled: true,
    //   },
    //   3
    // );
    // buttonGroup1.updateSingleButton(
    //   {
    //     disabled: true,
    //   },
    //   4
    // );

    setText();
  }
  if (!ggb2.data.init) {
    ggb2.instance.setValue("launchUpBool", false);
    ggb2.instance.setCoords(
      "PlatformDraggerPoint",
      ggb2.instance.getXcoord("PlatformDraggerPoint"),
      40
    );

    launchNum2 = 0;
    storedAVals2 = [];
    storedBVals2 = [];
    storedCVals2 = [];
    storedXInts2 = [];

    ggb2.updateData({
      storedAVals2: storedAVals2,
      storedBVals2: storedBVals2,
      storedCVals2: storedCVals2,
      storedXInts2: storedXInts2,
    });

    buttonGroup2.updateSingleButton(
      {
        disabled: true,
      },
      2
    );

    setText2();
  }
}

if (buttonGroup1.data.buttons[0].disabled) {
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
}

ggb1.instance.registerObjectUpdateListener("timeZoom", timeZoomWatcher);
ggb1.instance.registerObjectUpdateListener("time", timeWatcher);
ggb1.instance.registerObjectUpdateListener("SpringDraggerLaunchUp", setText);
ggb1.instance.registerObjectUpdateListener("SpringDraggerLaunchDown", setText);

function setText() {
  let bVal = ggb1.instance.getValue("bVal");
  let plusMinus = "";
  if (bVal >= 0) {
    plusMinus = "+";
  }
  text1.updateData({ text: `#### $f(t)=-4.9t^{2}${plusMinus}${bVal}t+40$` });
}

function timeWatcher() {
  if (
    ggb1.instance.getValue("time") * ggb1.instance.getValue("xmax") >=
    ggb1.instance.getValue("interceptXAxis")
  ) {
  }
}

function timeZoomWatcher() {
  if (ggb1.instance.getValue("timeZoom") == 1) {
    ggb1.instance.setValue("xmaxG2Start", ggb1.instance.getValue("xmaxG2End"));
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeZoom", false);
    ggb1.instance.setValue("timeZoom", 0);
    launchMakeGraph();
  }
}

function saveLaunch() {
  // console.log("fired saveLaunch");
  launchNum = ggb1.instance.getValue("numStoredLaunches");
  let currentAVal = ggb1.instance.getValue("aVal");
  let currentBVal = ggb1.instance.getValue("bVal");
  let currentCVal = Math.round(ggb1.instance.getValue("cVal"));
  let currentXInts = ggb1.instance.getValue("interceptXAxis");
  i;
  //delete previous graphs
  for (let i = 1; i < launchNum + 1; i++) {
    ggb1.instance.deleteObject("revealGraph" + i);
  }

  //create saved graph
  ggb1.instance.evalCommand(
    "savedGraph" +
      launchNum +
      "=If(0 ≤ x ≤ " +
      currentXInts +
      ", leadingCo*(" +
      currentAVal +
      ") x² + " +
      currentBVal +
      " x + " +
      currentCVal +
      ")"
  );

  let redNum;
  let greenNum;
  let blueNum;
  let earth = ggb1.instance.getValue("earthBool");
  let moon = ggb1.instance.getValue("moonBool");

  redNum = earth ? 128 : moon ? 128 : 248;
  greenNum = earth ? 192 : moon ? 191 : 180;
  blueNum = earth ? 156 : moon ? 215 : 154;

  ggb1.instance.setColor("savedGraph" + launchNum, redNum, greenNum, blueNum);

  ggb1.instance.evalCommand(
    "SetVisibleInView(savedGraph" + launchNum + ", 2, true)"
  );

  //create caption label
  ggb1.instance.setLabelStyle("savedGraph" + launchNum, 3);

  let bValPlusMinus;
  let cValPlusMinus;
  if (currentBVal < 0) {
    bValPlusMinus = "";
  } else {
    bValPlusMinus = "+";
  }

  if (currentCVal < 0) {
    cValPlusMinus = "";
  } else {
    cValPlusMinus = "+";
  }

  ggb1.instance.setCaption(
    "savedGraph" + launchNum,
    `$f(t)=${currentAVal}t^{2}${bValPlusMinus}${currentBVal}t${cValPlusMinus}${currentCVal}$`
  );

  ggb1.instance.setLabelVisible("savedGraph" + launchNum, false);

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
  ggbReset();
}

function ggbReset() {
  ggb1.instance.setValue("showSpringBool", true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.deleteObject("revealGraph" + launchNum);
  ggb1.instance.setValue("launchClicked", false);
  for (let i = 1; i < launchNum; i++) {
    ggb1.instance.deleteObject("revealGraph" + i);
  }
  ggb1.instance.setCoords(
    "SpringDraggerLaunchUp",
    ggb1.instance.getValue("ballPlatformMidpointXVal"),
    ggb1.instance.getListValue(
      "springPointsLaunchUpYVals(" +
        ggb1.instance.getValue("springPointsUpLength") +
        ")"
    )
  );
  ggb1.instance.setCoords(
    "SpringDraggerLaunchDown",
    ggb1.instance.getValue("ballPlatformMidpointXVal"),
    ggb1.instance.getListValue("springPointsLaunchDownYVals(1)")
  );
  ggb1.instance.setValue("launchClicked", false);

  ggb1.instance.setValue("xmax2G2Start", 7);
  ggb1.instance.setValue("xmax2GEnd", 7);
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
}

function fullReset() {
  ggb1.instance.setValue("showSpringBool", true);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.deleteObject("revealGraph" + launchNum);
  ggb1.instance.setValue("launchClicked", false);
  for (let i = 1; i < launchNum + 1; i++) {
    ggb1.instance.deleteObject("revealGraph" + i);
  }
  for (let i = 1; i < launchNum + 1; i++) {
    ggb1.instance.deleteObject("savedGraph" + i);
  }
  ggb1.instance.setCoords(
    "SpringDraggerLaunchUp",
    ggb1.instance.getValue("ballPlatformMidpointXVal"),
    ggb1.instance.getListValue(
      "springPointsLaunchUpYVals(" +
        ggb1.instance.getValue("springPointsUpLength") +
        ")"
    )
  );
  ggb1.instance.setCoords(
    "SpringDraggerLaunchDown",
    ggb1.instance.getValue("ballPlatformMidpointXVal"),
    ggb1.instance.getListValue("springPointsLaunchDownYVals(1)")
  );
  ggb1.instance.setValue("launchClicked", false);
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    4
  );
}

const launchInit = () => {
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    3
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    4
  );
};

const launchScreenSetup = () => {
  //set the launch number
  launchNum = ggb1.instance.getValue("numStoredLaunches") + 1;
  ggb1.instance.setValue("numStoredLaunches", launchNum);

  //delete previous graphs
  for (let i = 1; i < launchNum; i++) {
    ggb1.instance.deleteObject("revealGraph" + i);
  }

  //set current a, b, c, and xInt vals, and then store them appropriately
  let currentAVal = ggb1.instance.getValue("aVal");
  let currentBVal = ggb1.instance.getValue("bVal");
  let currentCVal = Math.round(ggb1.instance.getValue("cVal"));
  let currentXInts = ggb1.instance.getValue("interceptXAxis");
  // console.log("in launchScreenSetup");
  if (currentXInts > ggb1.instance.getValue("xmaxG2Start")) {
    ggb1.instance.setValue("xmaxG2End", currentXInts * 1.1);
    ggb1.instance.setAnimating("timeZoom", true);
    ggb1.instance.startAnimation();
    // console.log("launchScreen Op 1");
  } else {
    ggb1.instance.setValue("timeZoom", 1);
    // console.log("launchScreen Op 2");
  }
};

const launchMakeGraph = async () => {
  // console.log("in launchMakeGraph");

  //set current a, b, c, and xInt vals, and then store them appropriately
  let currentAVal = ggb1.instance.getValue("aVal");
  let currentBVal = ggb1.instance.getValue("bVal");
  let currentCVal = Math.round(ggb1.instance.getValue("cVal"));
  let currentXInts = ggb1.instance.getValue("interceptXAxis");

  //create graph
  ggb1.instance.evalCommand(
    "revealGraph" +
      launchNum +
      "=If(0 ≤ x ≤ time x(Corner3) ∧ x ≤ " +
      currentXInts +
      ", leadingCo*(" +
      currentAVal +
      ") x² + " +
      currentBVal +
      " x + " +
      currentCVal +
      ")"
  );

  let redNum;
  let greenNum;
  let blueNum;
  let earth = ggb1.instance.getValue("earthBool");
  let moon = ggb1.instance.getValue("moonBool");

  redNum = earth ? 0 : moon ? 0 : 242;
  greenNum = earth ? 129 : moon ? 127 : 106;
  blueNum = earth ? 57 : moon ? 175 : 54;

  ggb1.instance.setColor("revealGraph" + launchNum, redNum, greenNum, blueNum);

  ggb1.instance.evalCommand(
    "SetVisibleInView(revealGraph" + launchNum + ", 2, true)"
  );

  //create caption label
  ggb1.instance.setLabelStyle("revealGraph" + launchNum, 3);

  let bValPlusMinus;
  let cValPlusMinus;
  if (currentBVal < 0) {
    bValPlusMinus = "";
  } else {
    bValPlusMinus = "+";
  }

  if (currentCVal < 0) {
    cValPlusMinus = "";
  } else {
    cValPlusMinus = "+";
  }

  ggb1.instance.setCaption(
    "revealGraph" + launchNum,
    `$f(t)=${currentAVal}t^{2}${bValPlusMinus}${currentBVal}t${cValPlusMinus}${currentCVal}$`
  );

  ggb1.instance.setLabelVisible("revealGraph" + launchNum, false);

  //start animation
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb1.instance.setValue("launchClicked", true);
};

buttonGroup1.on("click:1", () => {
  launchInit();
  launchScreenSetup();
});

buttonGroup1.on("click:2", () => {
  ggbReset();
});

buttonGroup1.on("click:3", () => {
  saveLaunch();
});

buttonGroup1.on("click:4", () => {
  fullReset();
});

if (buttonGroup2.data.buttons[0].disabled) {
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
}

ggb2.instance.registerObjectUpdateListener("timeZoom", timeZoomWatcher2);
ggb2.instance.registerObjectUpdateListener("time", timeWatcher2);
ggb2.instance.registerObjectUpdateListener("SpringDraggerLaunchUp", setText2);
ggb2.instance.registerObjectUpdateListener("SpringDraggerLaunchDown", setText2);

function setText2() {
  let bVal2 = ggb2.instance.getValue("bVal");
  let plusMinus2 = "";
  if (bVal2 >= 0) {
    plusMinus2 = "+";
  }
  text2.updateData({ text: `#### $f(t)=-4.9t^{2}${plusMinus2}${bVal2}t+40$` });
}

function timeWatcher2() {
  if (
    ggb2.instance.getValue("time") * ggb2.instance.getValue("xmax") >=
    ggb2.instance.getValue("interceptXAxis")
  ) {
    // shareText1.updateData({ visible: true });
    // shareInput1.updateData({ visible: true });
    // shareButton1.updateData({ visible: true });
    // shareAnswers1.updateData({ visible: true });
  }
}

function timeZoomWatcher2() {
  if (ggb2.instance.getValue("timeZoom") == 1) {
    ggb2.instance.setValue("xmaxG2Start", ggb2.instance.getValue("xmaxG2End"));
    ggb2.instance.stopAnimation();
    ggb2.instance.setAnimating("timeZoom", false);
    ggb2.instance.setValue("timeZoom", 0);
    launchMakeGraph2();
  }
}

function saveLaunch2() {
  // console.log("fired saveLaunch");
  launchNum2 = ggb2.instance.getValue("numStoredLaunches");
  let currentAVal2 = ggb2.instance.getValue("aVal");
  let currentBVal2 = ggb2.instance.getValue("bVal");
  let currentCVal2 = Math.round(ggb2.instance.getValue("cVal"));
  let currentXInts2 = ggb2.instance.getValue("interceptXAxis");
  i;
  //delete previous graphs
  for (let i = 1; i < launchNum2 + 1; i++) {
    ggb2.instance.deleteObject("revealGraph" + i);
  }

  //create saved graph
  ggb2.instance.evalCommand(
    "savedGraph" +
      launchNum2 +
      "=If(0 ≤ x ≤ " +
      currentXInts2 +
      ", leadingCo*(" +
      currentAVal2 +
      ") x² + " +
      currentBVal2 +
      " x + " +
      currentCVal2 +
      ")"
  );

  let redNum2;
  let greenNum2;
  let blueNum2;
  let earth2 = ggb2.instance.getValue("earthBool");
  let moon2 = ggb2.instance.getValue("moonBool");

  redNum2 = earth2 ? 128 : moon2 ? 128 : 248;
  greenNum2 = earth2 ? 192 : moon2 ? 191 : 180;
  blueNum2 = earth2 ? 156 : moon2 ? 215 : 154;

  ggb2.instance.setColor(
    "savedGraph" + launchNum2,
    redNum2,
    greenNum2,
    blueNum2
  );

  ggb2.instance.evalCommand(
    "SetVisibleInView(savedGraph" + launchNum2 + ", 2, true)"
  );

  //create caption label
  ggb2.instance.setLabelStyle("savedGraph" + launchNum2, 3);

  let bValPlusMinus2;
  let cValPlusMinus2;
  if (currentBVal2 < 0) {
    bValPlusMinus2 = "";
  } else {
    bValPlusMinus2 = "+";
  }

  if (currentCVal2 < 0) {
    cValPlusMinus2 = "";
  } else {
    cValPlusMinus2 = "+";
  }

  ggb2.instance.setCaption(
    "savedGraph" + launchNum2,
    `$f(t)=${currentAVal2}t^{2}${bValPlusMinus2}${currentBVal2}t${cValPlusMinus2}${currentCVal2}$`
  );

  ggb2.instance.setLabelVisible("savedGraph" + launchNum2, false);

  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
  ggbReset2();
}

function ggbReset2() {
  ggb2.instance.setValue("showSpringBool", true);
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue("time", 0);
  ggb2.instance.deleteObject("revealGraph" + launchNum2);
  ggb2.instance.setValue("launchClicked", false);
  for (let i = 1; i < launchNum2; i++) {
    ggb2.instance.deleteObject("revealGraph" + i);
  }
  ggb2.instance.setCoords(
    "SpringDraggerLaunchUp",
    ggb2.instance.getValue("ballPlatformMidpointXVal"),
    ggb2.instance.getListValue(
      "springPointsLaunchUpYVals(" +
        ggb2.instance.getValue("springPointsUpLength") +
        ")"
    )
  );
  ggb2.instance.setCoords(
    "SpringDraggerLaunchDown",
    ggb2.instance.getValue("ballPlatformMidpointXVal"),
    ggb2.instance.getListValue("springPointsLaunchDownYVals(1)")
  );
  ggb2.instance.setValue("launchClicked", false);

  ggb2.instance.setValue("xmax2G2Start", 7);
  ggb2.instance.setValue("xmax2GEnd", 7);
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
}

function fullReset2() {
  ggb2.instance.setValue("showSpringBool", true);
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue("time", 0);
  ggb2.instance.deleteObject("revealGraph" + launchNum2);
  ggb2.instance.setValue("launchClicked", false);
  for (let i = 1; i < launchNum2 + 1; i++) {
    ggb2.instance.deleteObject("revealGraph" + i);
  }
  for (let i = 1; i < launchNum2 + 1; i++) {
    ggb2.instance.deleteObject("savedGraph" + i);
  }
  ggb2.instance.setCoords(
    "SpringDraggerLaunchUp",
    ggb2.instance.getValue("ballPlatformMidpointXVal"),
    ggb2.instance.getListValue(
      "springPointsLaunchUpYVals(" +
        ggb2.instance.getValue("springPointsUpLength") +
        ")"
    )
  );
  ggb2.instance.setCoords(
    "SpringDraggerLaunchDown",
    ggb2.instance.getValue("ballPlatformMidpointXVal"),
    ggb2.instance.getListValue("springPointsLaunchDownYVals(1)")
  );
  ggb2.instance.setValue("launchClicked", false);
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    4
  );
}

const launchInit2 = () => {
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    3
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    4
  );
};

const launchScreenSetup2 = () => {
  //set the launch number
  launchNum2 = ggb2.instance.getValue("numStoredLaunches") + 1;
  ggb2.instance.setValue("numStoredLaunches", launchNum2);

  //delete previous graphs
  for (let i = 1; i < launchNum2; i++) {
    ggb2.instance.deleteObject("revealGraph" + i);
  }

  //set current a, b, c, and xInt vals, and then store them appropriately
  let currentAVal2 = ggb2.instance.getValue("aVal");
  let currentBVal2 = ggb2.instance.getValue("bVal");
  let currentCVal2 = Math.round(ggb2.instance.getValue("cVal"));
  let currentXInts2 = ggb2.instance.getValue("interceptXAxis");
  // console.log("in launchScreenSetup");
  if (currentXInts2 > ggb2.instance.getValue("xmaxG2Start")) {
    ggb2.instance.setValue("xmaxG2End", currentXInts2 * 1.1);
    ggb2.instance.setAnimating("timeZoom", true);
    ggb2.instance.startAnimation();
    // console.log("launchScreen Op 1");
  } else {
    ggb2.instance.setValue("timeZoom", 1);
    // console.log("launchScreen Op 2");
  }
};

const launchMakeGraph2 = async () => {
  // console.log("in launchMakeGraph");

  //set current a, b, c, and xInt vals, and then store them appropriately
  let currentAVal2 = ggb2.instance.getValue("aVal");
  let currentBVal2 = ggb2.instance.getValue("bVal");
  let currentCVal2 = Math.round(ggb2.instance.getValue("cVal"));
  let currentXInts2 = ggb2.instance.getValue("interceptXAxis");

  //create graph
  ggb2.instance.evalCommand(
    "revealGraph" +
      launchNum2 +
      "=If(0 ≤ x ≤ time x(Corner3) ∧ x ≤ " +
      currentXInts2 +
      ", leadingCo*(" +
      currentAVal2 +
      ") x² + " +
      currentBVal2 +
      " x + " +
      currentCVal2 +
      ")"
  );

  let redNum2;
  let greenNum2;
  let blueNum2;
  let earth2 = ggb2.instance.getValue("earthBool");
  let moon2 = ggb2.instance.getValue("moonBool");

  redNum2 = earth2 ? 0 : moon2 ? 0 : 242;
  greenNum2 = earth2 ? 129 : moon2 ? 127 : 106;
  blueNum2 = earth2 ? 57 : moon2 ? 175 : 54;

  ggb2.instance.setColor(
    "revealGraph" + launchNum2,
    redNum2,
    greenNum2,
    blueNum2
  );

  ggb2.instance.evalCommand(
    "SetVisibleInView(revealGraph" + launchNum2 + ", 2, true)"
  );

  //create caption label
  ggb2.instance.setLabelStyle("revealGraph" + launchNum2, 3);

  let bValPlusMinus2;
  let cValPlusMinus2;
  if (currentBVal2 < 0) {
    bValPlusMinus2 = "";
  } else {
    bValPlusMinus2 = "+";
  }

  if (currentCVal2 < 0) {
    cValPlusMinus2 = "";
  } else {
    cValPlusMinus2 = "+";
  }

  ggb2.instance.setCaption(
    "revealGraph" + launchNum2,
    `$f(t)=${currentAVal2}t^{2}${bValPlusMinus2}${currentBVal2}t${cValPlusMinus2}${currentCVal2}$`
  );

  ggb2.instance.setLabelVisible("revealGraph" + launchNum2, false);

  //start animation
  ggb2.instance.setAnimating("time", true);
  ggb2.instance.startAnimation();
  ggb2.instance.setValue("launchClicked", true);
};

buttonGroup2.on("click:1", () => {
  launchInit2();
  launchScreenSetup2();
});

buttonGroup2.on("click:2", () => {
  ggbReset2();
});

buttonGroup2.on("click:3", () => {
  saveLaunch2();
});

buttonGroup2.on("click:4", () => {
  fullReset2();
});

/*
{"compTotals":{"textbox":5,"geogebra":2,"separator":2,"buttongroup":2},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Print Alternate Side Deck for Analyzing Functions that Model Projectile Motion","teacherView":true,"layout":"two col"}
*/
