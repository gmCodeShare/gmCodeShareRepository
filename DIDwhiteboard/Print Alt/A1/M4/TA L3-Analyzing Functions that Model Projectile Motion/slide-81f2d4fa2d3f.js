const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  text1,
  separator2,
  select1,
  separator3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let launchNum;
let storedAVals;
let storedBVals;
let storedCVals;
let storedXInts;

let xmaxG2Init = 7;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("launchUpBool", true);
    ggb1.instance.setValue("showPlatformDragger", true);

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

    select1.selectOption("0");

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

    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener("timeZoom", timeZoomWatcher);
ggb1.instance.registerObjectUpdateListener("time", timeWatcher);

function timeZoomWatcher() {
  if (ggb1.instance.getValue("timeZoom") == 1) {
    ggb1.instance.setValue("xmaxG2Start", ggb1.instance.getValue("xmaxG2End"));
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("timeZoom", false);
    ggb1.instance.setValue("timeZoom", 0);
    launchMakeGraph();
  }
}

function timeWatcher() {
  let currentXInts = ggb1.instance.getValue("interceptXAxis");
  let xMaxG2 = ggb1.instance.getValue("xmaxGraphics2");

  if (ggb1.instance.getValue("time") * xMaxG2 >= currentXInts) {
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
  }
}

select1.on("change", ({ selected }) => {
  ggb1.instance.setValue("earthBool", selected[0] == "0" ? true : false);
  ggb1.instance.setValue("moonBool", selected[0] == "1" ? true : false);
  ggb1.instance.setValue("marsBool", selected[0] == "2" ? true : false);
  let greyCode;
  greyCode = selected[0] == "0" || selected[0] == "2" ? 128 : 192;
  ggb1.instance.setColor("springLaunchDown", greyCode, greyCode, greyCode);
  ggb1.instance.setColor("springLaunchUp", greyCode, greyCode, greyCode);
  ggb1.instance.setColor("sprungSpringDown", greyCode, greyCode, greyCode);
  ggb1.instance.setColor("sprungSpringUp", greyCode, greyCode, greyCode);
  ggb1.instance.setColor("haloPlatformDragger", greyCode, greyCode, greyCode);
  ggbReset();
});

function saveLaunch() {
  launchNum = ggb1.instance.getValue("numStoredLaunches");
  let currentAVal = ggb1.instance.getValue("aVal");
  let currentBVal = ggb1.instance.getValue("bVal");
  let currentCVal = Math.round(ggb1.instance.getValue("cVal"));
  let currentXInts = ggb1.instance.getValue("interceptXAxis");

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

  ggb1.instance.setLabelVisible("savedGraph" + launchNum, true);

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
  //ggbReset();
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

  ggb1.instance.setValue("xmaxG2Start", xmaxG2Init);
  ggb1.instance.setValue("xmaxG2End", xmaxG2Init);
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

  ggb1.instance.setValue("xmaxG2Start", xmaxG2Init);
  ggb1.instance.setValue("xmaxG2End", xmaxG2Init);

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
};

const launchScreenSetup = () => {
  //set the launch number
  launchNum = ggb1.instance.getValue("numStoredLaunches") + 1;
  ggb1.instance.setValue("numStoredLaunches", launchNum);

  //delete previous graphs
  for (let i = 1; i < launchNum; i++) {
    ggb1.instance.deleteObject("revealGraph" + i);
  }

  let currentXInts = ggb1.instance.getValue("interceptXAxis");
  if (currentXInts > ggb1.instance.getValue("xmaxG2Start")) {
    ggb1.instance.setValue("xmaxG2End", currentXInts * 1.1);
    ggb1.instance.setAnimating("timeZoom", true);
    ggb1.instance.startAnimation();
  } else {
    ggb1.instance.setValue("timeZoom", 1);
  }
};

const launchMakeGraph = async () => {
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

  ggb1.instance.setLabelVisible("revealGraph" + launchNum, true);

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

/*
{"compTotals":{"geogebra":1,"separator":3,"buttongroup":1,"textbox":2,"select":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Print Alternate Side Deck for Analyzing Functions that Model Projectile Motion","teacherView":true,"layout":"two col"}
*/
