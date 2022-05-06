const {
  ggb1,
  feedback1,
  cc_submit_f91c0d7aac77_textbox1,
  cc_submit_f91c0d7aac77_input1,
  cc_submit_f91c0d7aac77_button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const prev64 = getFromSlide("slide-15596c4169b5", "ggb2.data.save64", "") || "";

if (prev64) {
  ggb1.instance.setBase64(prev64, configApp);
}

function configApp() {
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let allLines = ggb1.instance.getAllObjectNames("line");
  for (let i = 0; i < allPoints.length; i++) {
    ggb1.instance.setFixed(allPoints[i], false, false);
  }
  for (let i = 0; i < allLines.length; i++) {
    ggb1.instance.setFixed(allLines[i], false, false);
  }
  for (let i = 0; i < allPenstrokes.length; i++) {
    ggb1.instance.setFixed(allPenstrokes[i], false, false);
  }
}

ggb1.instance.showToolBar(false);

utils.RTS.on("datachange", "slide-102b2e9edb49", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { distance, remaining } = data;
    ggb1.instance.evalCommand(
      "SetValue(pointList,Append(pointList,(" +
        distance +
        "," +
        remaining +
        ")))"
    );
  });
  ggb1.instance.setVisible("pointList", true);
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
