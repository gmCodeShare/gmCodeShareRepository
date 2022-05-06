const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_d0baed581834_textbox1,
  cc_sharewithclass_d0baed581834_input1,
  cc_sharewithclass_d0baed581834_button1,
  cc_sharewithclass_d0baed581834_studentanswers1,
} = components;

slide.on("firstload", () => {
  let allPoints2 = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints2.length; i < L; i++) {
    ggb1.instance.setFixed(allPoints2[i], false, false);
  }
});

ggb1.instance.setErrorDialogsActive(false);

utils.RTS.on("datachange", "slide-8cc4c1a27755", (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      correctNames,
      incorrectNames,
      prevCorrectNames,
      prevIncorrectNames,
    } = data;
    for (let i = 0, L = correctNames.length; i < L; i++) {
      let xCoord = ggb1.instance.getXcoord(correctNames[i]);
      let yCoord = ggb1.instance.getYcoord(correctNames[i]);
      ggb1.instance.evalCommand(
        "Translate(picCheck, Vector((0,0), (" + xCoord + "," + yCoord + ")))"
      );
      ggb1.instance.setVisible(correctNames[i], false);
    }
    for (let i = 0, L = incorrectNames.length; i < L; i++) {
      ggb1.instance.setColor(incorrectNames[i], 218, 41, 28);
      ggb1.instance.setPointStyle(incorrectNames[i], 1);
      ggb1.instance.setPointSize(incorrectNames[i], 6);
      ggb1.instance.setFixed(incorrectNames[i], false, false);
    }
    for (let i = 0, L = prevCorrectNames.length; i < L; i++) {
      let xCoord = ggb1.instance.getXcoord(prevCorrectNames[i]);
      let yCoord = ggb1.instance.getYcoord(prevCorrectNames[i]);
      ggb1.instance.evalCommand(
        "Translate(picCheck, Vector((0,0), (" + xCoord + "," + yCoord + ")))"
      );
      ggb1.instance.setVisible(prevCorrectNames[i], false);
    }
    for (let i = 0, L = prevIncorrectNames.length; i < L; i++) {
      ggb1.instance.setColor(prevIncorrectNames[i], 218, 41, 28);
      ggb1.instance.setPointStyle(prevIncorrectNames[i], 1);
      ggb1.instance.setPointSize(prevIncorrectNames[i], 6);
      ggb1.instance.setFixed(prevIncorrectNames[i], false, false);
    }
  });
  ggb1.instance.setValue("StudentResponses", true);
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
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TC L12 - Solutions to Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
