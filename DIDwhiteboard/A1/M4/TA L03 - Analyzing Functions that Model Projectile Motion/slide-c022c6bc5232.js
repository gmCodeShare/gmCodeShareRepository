const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  text1,
  cc_submit_c932bde38f63_textbox1: submitText1,
  cc_submit_c932bde38f63_input1: submitInput1,
  cc_submit_c932bde38f63_button1: submitButton1,
  separator2,
  cc_sharewithclass_f4564c271875_textbox1: shareText1,
  cc_sharewithclass_f4564c271875_input1: shareInput1,
  cc_sharewithclass_f4564c271875_button1: shareButton1,
  cc_sharewithclass_f4564c271875_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let launchNum;
let storedAVals;
let storedBVals;
let storedCVals;
let storedXInts;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("launchUpBool", true);

    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareAnswers1.updateData({ visible: false });

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
  submitText1.updateData({ text: `$f(t)=-4.9t^{2}${plusMinus}${bVal}t+40$` });
}

function timeWatcher() {
  if (
    ggb1.instance.getValue("time") * ggb1.instance.getValue("xmax") >=
    ggb1.instance.getValue("interceptXAxis")
  ) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
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

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":2,"buttongroup":1,"textbox":2,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
