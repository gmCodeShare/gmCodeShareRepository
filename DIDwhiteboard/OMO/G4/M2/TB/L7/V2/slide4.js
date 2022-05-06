//slide-d1de37d98688

const { ggb1, ggb2, buttonGroup2, media1, button1, text1, image1 } = components;

// x(Number) ≠ 0 ∧ y(Number) ≠ 0

if (!getData("initialized")) {
  // set initial states
  ggb1.instance.setVisible("button1", false);
  ggb1.instance.setVisible("button3", false);
  ggb1.instance.setVisible("button4", false);
  // let grid = true;
  saveData({ grid: true, flag: false });
  ggb1.instance.setValue("xMax", 16);
  ggb2.instance.setValue("xMax", 22);
  ggb1.instance.setValue("xMin", -2);
  ggb1.instance.evalCommand("SetConditionToShowObject(B, false)");
  ggb1.instance.evalCommand("SetConditionToShowObject(BHalo, false)");
  ggb1.updateData({ disabled: true });
  ggb2.updateData({ disabled: true });
  buttonGroup2.updateData({ visible: false });
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  image1.updateData({ visible: false });
  button1.updateData({ visible: false });
  // save status
  saveData({ initialized: true });
}

media1.on("ready", ({ data: vid }) => {
  vid.play();
  vid.bind("betweentimes", 10, 12, (withinInterval) => {
    if (withinInterval) {
      // only pause if not already complete
      if (!getData("step1Complete")) {
        vid.pause();
      }
      ggb1.updateData({ disabled: false });
      ggb2.updateData({ disabled: false });
      ggb1.instance.evalCommand("SetConditionToShowObject(Number, true)");
      ggb1.instance.evalCommand("SetConditionToShowObject(NumberHalo, true)");
      ggb1.instance.evalCommand("SetConditionToShowObject(B, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(BHalo, false)");
      ggb1.instance.setVisible("NumberCheck", false);
      ggb1.instance.setVisible("BCheck", false);
      button1.updateData({ visible: true });
    } else {
      ggb1.instance.evalCommand("SetConditionToShowObject(B, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(BHalo, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(Number, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(NumberHalo, false)");
      button1.updateData({ visible: false });
      text1.updateData({ text: "" });
    }
  });
  vid.bind("betweentimes", 53, 55, (withinInterval) => {
    if (withinInterval) {
      // only pause if not already complete
      if (!getData("step2Complete")) {
        vid.pause();
      }
      ggb1.updateData({ disabled: false });
      ggb2.updateData({ disabled: false });
      ggb1.instance.evalCommand("SetConditionToShowObject(Number, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(NumberHalo, false)");
      ggb1.instance.evalCommand(
        "SetConditionToShowObject(B, x(Number) ≠ 0 ∧ y(Number) ≠ 0)"
      );
      ggb1.instance.evalCommand(
        "SetConditionToShowObject(BHalo, x(Number) ≠ 0 ∧ y(Number) ≠ 0)"
      );
      ggb1.instance.setVisible("NumberCheck", false);
      ggb1.instance.setVisible("BCheck", false);
      button1.updateData({ visible: true });
      saveData({ step2Started: true });
    } else {
      ggb1.instance.evalCommand("SetConditionToShowObject(B, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(BHalo, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(Number, false)");
      ggb1.instance.evalCommand("SetConditionToShowObject(NumberHalo, false)");
      button1.updateData({ visible: false });
      text1.updateData({ text: "" });
    }
  });
  vid.bind("betweentimes", 62, 64, (withinInterval) => {
    if (withinInterval) {
      vid.pause();
      ggb1.updateData({ disabled: false });
      ggb2.updateData({ disabled: false });
      buttonGroup2.updateData({ visible: true });
    }
  });
  buttonGroup2.on("click:1", () => {
    if (!getData("step3Complete")) {
      vid.play();
      saveData({ step3Complete: true });
    }
    ggb1.updateData({ disabled: true });
    ggb2.updateData({ disabled: true });
  });
  vid.bind("end", controls.next);
});

// reset stuff if student selects something
ggb1.instance.registerClientListener((a) => {
  if (a.type === "select") {
    button1.updateData({ text: "Submit", disabled: false });
    text1.updateData({ text: "" });
    ggb1.instance.setVisible("NumberCheck", false);
    ggb1.instance.setVisible("BCheck", false);
  }
});

// link GGBs
autorun(() => {
  let handle = ggb1.innerData["Number"];
  let divider = ggb1.innerData["B"];
  let multiplier = ggb1.innerData["totalVertSide"];
  let multiplicand = ggb1.innerData["totalHorizSide"];
  ggb2.instance.setValue("multiplicand", multiplicand);
  ggb2.instance.setValue("multiplier", multiplier);
  ggb2.instance.setValue("greenPoints", ggb1.instance.getValue("splitLeft"));
  ggb2.instance.setValue("bluePoints", ggb1.instance.getValue("splitRight"));
  // if (
  //   handle[0] == 12 &&
  //   handle[1] == -3 &&
  //   divider[0] == 0 &&
  //   !getData("flag")
  // ) {
  //   media1.play();
  //   saveData({ flag: true });
  //   ggb1.updateData({ disabled: true });
  //   ggb2.updateData({ disabled: true });
  // } else if (divider[0] == 10 && getData("flag")) {
  //   ggb1.updateData({ disabled: true });
  //   ggb2.updateData({ disabled: true });
  //   media1.play();
  // }
  // buttonGroup2.updateSingleButton(
  //   { disabled: divider[0] == 0 || (divider[0] != 0 && !getData("grid")) },
  //   1
  // );
  // buttonGroup2.updateSingleButton(
  //   { disabled: divider[0] == 0 || (divider[0] != 0 && getData("grid")) },
  //   2
  // );
});

buttonGroup2.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(button3)");
  saveData({ grid: false });
  updateGroupDisabled(false);
});

buttonGroup2.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(button4)");
  saveData({ grid: true });
  updateGroupDisabled(true);
});

function updateGroupDisabled(disabledBool) {
  buttonGroup2.updateSingleButton({ disabled: !disabledBool }, 1);
  buttonGroup2.updateSingleButton({ disabled: disabledBool }, 2);
}

// FEEDBACK

button1.on("click", () => {
  const { getXcoord: x, getYcoord: y } = ggb1.instance;

  function checkNumber() {
    const [xVal, yVal] = [x("Number"), y("Number")];
    const correct = xVal === 12 && yVal === -3;
    const feedback = correct
      ? ""
      : `Remember, the rectangle should be $12$ units long and $3$ units wide! Your rectangle is $${xVal}$ units long and $${Math.abs(
          yVal
        )}$ units wide.`;
    ggb1.instance.setVisible("NumberCheck", correct);
    increaseAtt("attempts1");
    recordAttempt(1, { length: xVal, width: Math.abs(yVal) });
    saveData({ step1Complete: correct });
    return feedback;
  }

  function checkB() {
    const xVal = x("B");
    const rightX = x("Number");
    const correct = xVal === 10 && rightX === 12;
    const almost = xVal === 2 && rightX === 12;
    let feedback = "";
    increaseAtt("attempts2");
    recordAttempt(2, { left: xVal, right: Math.abs(rightX - xVal) });
    if (almost) {
      feedback = "You showed one way! Here is another way.";
      saveData({ step2Complete: true });
      ggb1.instance.setVisible("BCheck", true);
    } else if (!correct) {
      feedback = `You decomposed the length into $${xVal}$ units and $${rightX}$ units.`;
    } else {
      saveData({ step2Complete: true });
      ggb1.instance.setVisible("BCheck", true);
    }
    return { feedback, almost, correct };
  }

  function increaseAtt(attempt) {
    const newNum = getData(attempt) + 1 || 1;
    saveData({ [attempt]: newNum });
  }

  function afterStart() {
    const text = checkNumber();
    text1.updateData({ text });
    if (getData("step1Complete")) {
      // freshly finished step 1
      ggb1.updateData({ disabled: true });
      ggb2.updateData({ disabled: true });
      media1.play();
    }
  }

  function afterStep1() {
    if (getData("step2Started")) {
      // watched intro to step 2 video
      const attempts2 = getData("attempts2");
      let { feedback: text, almost, correct } = checkB();
      image1.updateData({ visible: false });
      if (almost) {
        ggb1.updateData({ disabled: true });
        ggb2.updateData({ disabled: true });
        setTimeout(media1.play, 2000);
        ggb1.instance.setCoords("B", 10, 0);
      } else if (correct) {
        ggb1.updateData({ disabled: true });
        ggb2.updateData({ disabled: true });
        media1.play();
      } else if (attempts2 >= 1) {
        text = "We can decompose $12$ into $10$ and $2$ because $10+2=12$.";
        ggb1.instance.setCoords("B", 10, 0);
        media1.play();
      } else {
        // first attempt, but wrong: show number bond
        image1.updateData({ visible: true });
      }
      text1.updateData({ text });
    }
  }

  switch (true) {
    case getData("step2Complete"):
      // rectangle decomposed correctly
      break;
    case getData("step1Complete"):
      // rectangle sized correctly
      afterStep1();
      break;
    default:
      // neither problem done yet
      afterStart();
      break;
  }
  button1.updateData({ text: "Submitted", disabled: true });
  ggb1.instance.evalCommand("SelectObjects()");
});

function updateSubmission(newSubmission = {}) {
  const oldSubmission = getData("submission") || {};
  saveData({ submission: { ...oldSubmission, ...newSubmission } });
}

// stock functions

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

function recordAttempt(prompt = 1, data = {}) {
  utils.RTS.sendData("slide-3d79ba9a5cf4", {
    prompt,
    slide: controls.current,
    attempt: {
      ...data,
    },
  });
}
