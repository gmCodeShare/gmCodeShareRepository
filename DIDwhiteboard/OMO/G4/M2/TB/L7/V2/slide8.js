//slide-a69ca7516aa3

const { ggb1, fib2, fib3, fib4, buttonGroup1, text1, media1, text2 } =
  components;
let num1 = 4;
let num2 = 23;
let num2tens = 10 * Math.floor(num2 / 10);
let num2ones = num2 % 10;

ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);
ggb1.updateData({ count: 0 });

slide.on("firstload", () => {
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("input1FillSlider", 0);
  ggb1.instance.setValue("input2FillSlider", 0);
  ggb1.instance.setValue("input1", 0);
  ggb1.instance.setValue("input2", 0);
  ggb1.instance.setValue("input3", 0);
  ggb1.instance.setValue("input4", 0);
  fib2.setVisible(false, "hide");
  fib3.setVisible(false, "hide");
  fib4.setVisible(false, "hide");
  ggb1.instance.setVisible("NumberHalo", true);
  ggb1.instance.setVisible("BHalo", false);
  ggb1.instance.setVisible("B", false);
  ggb1.updateData({ disabled: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  saveData({ listening: true });
});

ggb1.instance.registerObjectUpdateListener("Number", clearFeedback);
ggb1.instance.registerObjectUpdateListener("B", clearFeedback);

function clearFeedback() {
  if (getData("listening")) {
    text2.updateData({ text: "" });
    ggb1.instance.setVisible("NumberCheck", false);
    ggb1.instance.setVisible("BCheck", false);
  }
}

media1.on("ready", ({ data: vid }) => {
  vid.play();
  //make rectangle that is 4x23
  vid.bind("betweentimes", 8, 9, (withinInterval) => {
    if (withinInterval) {
      vid.pause();
      ggb1.updateData({ disabled: false });
    }
  });
  //decompose by place value units
  vid.bind("betweentimes", 22.5, 24, (withinInterval) => {
    if (withinInterval) {
      vid.pause();
      ggb1.updateData({ disabled: false });
    }
  });
  //oops, that's wrong
  vid.bind("betweentimes", 35, 36, (withinInterval) => {
    if (withinInterval && ggb1.innerData[`B`][0] != 20) {
      vid.pause();
      ggb1.updateData({ disabled: false });
    }
  });
  //fib2 distribution
  vid.bind("betweentimes", 64, 65, (withinInterval) => {
    if (withinInterval) {
      vid.pause();
      fib2.setVisible(true);
      //ggb1.updateData({ disabled: false });
    }
  });
  //fib2 incorrect
  vid.bind("betweentimes", 102, 103, (withinInterval) => {
    if (
      withinInterval &&
      !(
        ggb1.instance.getValue("input1") == num2tens &&
        ggb1.instance.getValue("input2") == num2ones &&
        ggb1.instance.getValue("input3") == num1 &&
        ggb1.instance.getValue("input4") == num1
      )
    ) {
      vid.pause();
      ggb1.updateData({ disabled: false });
    }
  });
  //fib3 partial products
  vid.bind("betweentimes", 106, 107, (withinInterval) => {
    if (withinInterval) {
      vid.pause();
      fib3.setVisible(true);
      ggb1.updateData({ disabled: false });
    }
  });
  //fib4 product
  vid.bind("betweentimes", 119, 120, (withinInterval) => {
    if (withinInterval) {
      vid.pause();
      fib4.setVisible(true);
      ggb1.updateData({ disabled: false });
    }
  });
  vid.bind("end", controls.next);
});

autorun(() => {
  let number = ggb1.innerData["Number"];
  const B = ggb1.innerData["B"];
  let horiz = Math.abs(number[0]);
  let vert = Math.abs(number[1]);
  // let horizTens =
  //   Math.floor(Math.abs(ggb1.instance.getXcoord("Number")) / 10) * 10;
  // let horizOnes = Math.abs(ggb1.instance.getXcoord("Number")) % 10;
  const leftB = Math.abs(B[0]);
  const rightB = Math.abs(B[0] - number[0]);
  const exp = getData("step1Complete")
    ? `$${vert} \\times ${horiz} = ${vert} \\times \\Big(${leftB}\\thinspace+ ${rightB}\\Big)$`
    : `$${vert} \\times ${horiz}$`;
  text1.updateData({
    text: exp,
  });
  if (horiz != 4 && vert != -4 && horiz != 0 && vert != 0) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

buttonGroup1.on("click:1", () => {
  let currentCount = ggb1.data.count;
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  const { getXcoord: x, getYcoord: y } = ggb1.instance;
  // keep track of numbers of attempts
  // const attempts = [
  //   "attempts1",
  //   "attempts2",
  //   "attempts3",
  //   "attempts4",
  //   "attempts5",
  // ];
  // const currentAttempt = attempts[currentCount] || "extras";
  // const currentData = getData(currentAttempt) + 1 || 1;
  // saveData({ [currentAttempt]: currentData });
  switch (currentCount) {
    case 0: //submit rectangle
      ggb1.instance.setValue("input3", num1);
      ggb1.instance.setValue("input4", num1);
      recordAttempt(1, { length: x("Number"), width: Math.abs(y("Number")) });
      if (
        ggb1.innerData["Number"][0] == 23 &&
        ggb1.innerData["Number"][1] == -4
      ) {
        // correct
        media1.play();
        ggb1.updateData({ disabled: true });
        ggb1.updateData({ count: currentCount + 1 });
        ggb1.instance.setVisible("BHalo", true);
        ggb1.instance.setVisible("B", true);
        ggb1.instance.setVisible("NumberCheck", true);
        saveData({ step1Complete: true });
      } else {
        // incorrect
        const feedback = `Your rectangle has a length of $${x(
          "Number"
        )}$ units and width of $${Math.abs(
          y("Number")
        )}$ units. Remember, the rectangle should be $23$ units long and $4$ units wide!`;
        text2.updateData({ text: feedback });
      }
      break;
    case 1: //submit partition
      const leftB = x("B");
      const xNum = x("Number");
      recordAttempt(2, { left: leftB, right: Math.abs(xNum - leftB) });
      if (leftB === 20 && xNum === 23) {
        // correct
        media1.play();
        ggb1.updateData({ disabled: true });
        ggb1.updateData({ count: currentCount + 1 });
        ggb1.instance.setVisible("BCheck", true);
      } else if (leftB == 3 && xNum === 23) {
        // almost
        saveData({ listening: false });
        ggb1.instance.setCoords("B", 20, 0);
        ggb1.updateData({ disabled: true });
        ggb1.updateData({ count: currentCount + 1 });
        ggb1.instance.setVisible("BCheck", true);
        text2.updateData({ text: "You showed one way! Here is another way." });
        setTimeout(() => {
          media1.play();
          text2.updateData({ text: "" });
        }, 2000);
        // patch for ggb listener being a bit too slow
        setTimeout(() => {
          saveData({ listening: true });
        }, 500);
      } else {
        // incorrect
        const rightB = Math.abs(leftB - x("Number"));
        const feedback = `Your model shows $${xNum}$ decomposed into $${leftB}$ and $${rightB}$. Adjust your model to decompose $23$ into the greatest number of tens.`;
        text2.updateData({ text: feedback });
      }
      break;
    case 2: //submit distribution
      clearFeedback();
      ggb1.updateData({ disabled: false });
      ggb1.instance.setValue("showGreen", true);
      ggb1.instance.setAnimating("input1FillSlider", true);
      ggb1.instance.setAnimating("input5FillSlider", false);
      ggb1.instance.setAnimating("input6FillSlider", false);
      ggb1.instance.startAnimation(true);
      recordAttempt(3, {
        input1: ggb1.instance.getValue("input1"),
        input2: ggb1.instance.getValue("input2"),
        input3: ggb1.instance.getValue("input3"),
        input4: ggb1.instance.getValue("input4"),
      });
      if (
        ggb1.instance.getValue("input1") == num2tens &&
        ggb1.instance.getValue("input2") == num2ones &&
        ggb1.instance.getValue("input3") == num1 &&
        ggb1.instance.getValue("input4") == num1
      ) {
        ggb1.updateData({ count: currentCount + 1 });
        fib2.setDisabled(true);
      }
      break;
    case 3: //submit partial products
      // clearFeedback();
      recordAttempt(4, {
        input5: ggb1.instance.getValue("area2"),
        input6: ggb1.instance.getValue("area1"),
      });
      ggb1.instance.setValue("input5", ggb1.instance.getValue("area2"));
      ggb1.instance.setValue("input6", ggb1.instance.getValue("area1"));
      ggb1.instance.setAnimating("input5FillSlider", true);
      ggb1.instance.setAnimating("input1FillSlider", false);
      ggb1.instance.startAnimation(true);
      ggb1.updateData({ disabled: false });

      if (
        ggb1.instance.getValue("area2") == num2tens * num1 &&
        ggb1.instance.getValue("area1") == num2ones * num1
      ) {
        ggb1.updateData({ count: currentCount + 1 });
        fib3.setDisabled(true);
        media1.play();
      }
      break;
    case 4: //submit product
      let fib4Input1 = boundIt(fib4, 0, 0, 199);
      recordAttempt(5, { sum: fib4Input1 });
      ggb1.instance.setValue(
        "difference",
        fib4Input1 - ggb1.instance.getValue("area1+area2")
      );
      ggb1.instance.setValue("shiftDownSlider", 0);
      ggb1.instance.setAnimating("shiftDownSlider", true);
      ggb1.instance.startAnimation();
      break;
    default:
      break;
  }
});

autorun(() => {
  let divider = ggb1.innerData["B"];
  if (divider[0] != 0) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

autorun(() => {
  let endOfFill = ggb1.innerData[`input2FillSlider`];
  if (endOfFill == 1) {
    media1.play();
  }
});

//distributive prop fib comp (_+_)x(_+_)
fib2.on("change:0", () => {
  ggb1.instance.setValue("input1FillSlider", 0);
  ggb1.instance.setValue("input2FillSlider", 0);
  let fib2Input1 = boundIt(fib2, 0, 0, 99);
  ggb1.instance.setValue("input3", fib2Input1);
  if (
    fib2.getInput("0").text != "" &&
    fib2.getInput("1").text != "" &&
    fib2.getInput("2").text != "" &&
    fib2.getInput("3").text != ""
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});
fib2.on("change:1", () => {
  ggb1.instance.setValue("input1FillSlider", 0);
  ggb1.instance.setValue("input2FillSlider", 0);
  let fib2Input2 = boundIt(fib2, 1, 0, 99);
  ggb1.instance.setValue("input1", fib2Input2);
  if (
    fib2.getInput("0").text != "" &&
    fib2.getInput("1").text != "" &&
    fib2.getInput("2").text != "" &&
    fib2.getInput("3").text != ""
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});
fib2.on("change:2", () => {
  ggb1.instance.setValue("input1FillSlider", 0);
  ggb1.instance.setValue("input2FillSlider", 0);
  let fib2Input3 = boundIt(fib2, 2, 0, 99);
  ggb1.instance.setValue("input4", fib2Input3);
  if (
    fib2.getInput("0").text != "" &&
    fib2.getInput("1").text != "" &&
    fib2.getInput("2").text != "" &&
    fib2.getInput("3").text != ""
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});
fib2.on("change:3", () => {
  ggb1.instance.setValue("input1FillSlider", 0);
  ggb1.instance.setValue("input2FillSlider", 0);
  let fib2Input4 = boundIt(fib2, 3, 0, 99);
  ggb1.instance.setValue("input2", fib2Input4);
  if (
    fib2.getInput("0").text != "" &&
    fib2.getInput("1").text != "" &&
    fib2.getInput("2").text != "" &&
    fib2.getInput("3").text != ""
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});
//partial products fib comp _+_
fib3.on("change:0", () => {
  ggb1.instance.setValue("input5FillSlider", 0);
  ggb1.instance.setValue("input6FillSlider", 0);
  let fib3Input1 = boundIt(fib3, 0, 0, 99);
  ggb1.instance.setValue("area2", fib3Input1);
  ggb1.instance.setVisible("D6", true);
  if (fib3.getInput("0").text != "" && fib3.getInput("1").text != "") {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});
fib3.on("change:1", () => {
  ggb1.instance.setValue("input5FillSlider", 0);
  ggb1.instance.setValue("input6FillSlider", 0);
  let fib3Input2 = boundIt(fib3, 1, 0, 99);
  ggb1.instance.setValue("area1", fib3Input2);
  ggb1.instance.setVisible("D5", true);
  if (fib3.getInput("0").text != "" && fib3.getInput("1").text != "") {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});
fib4.on("change:0", () => {
  if (fib4.getInput("0").text != "") {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

//vertical fill autorun
autorun(() => {
  const time5 = ggb1.innerData["input5FillSlider"];
  if (time5 === 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating("input5FillSlider", false);
    ggb1.instance.setAnimating("input6FillSlider", true);
    ggb1.instance.startAnimation();
  }
});

//vertical fill shiftDownSlider
autorun(() => {
  const shift = ggb1.innerData["shiftDownSlider"];
  if (shift === 1) {
    media1.play();
  }
});

// helpers

function increaseAtt(attempt) {
  const newNum = getData(attempt) + 1 || 1;
  saveData({ [attempt]: newNum });
}

function boundIt(inputComp, position, min, max) {
  const result = utils.math.evaluateLatex(inputComp.getInput(position).text);
  if (result.error) {
    inputComp.updateInput(position, { text: "0" }); // what should the text do/say if students input "cabbage"?
    return 0; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    inputComp.updateInput(position, { text: `${min}` });
    return min;
  } else if (result.value > max) {
    inputComp.updateInput(position, { text: `${max}` });
    return max;
  }
  return result.value;
}

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
