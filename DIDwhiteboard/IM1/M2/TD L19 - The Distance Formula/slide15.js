const { ggb1, cc_submit_fc7d1eb1e465_textbox1: submitText1 } = components;

function missingNum(missingRTS = false) {
  const prevFIB = getPrevFIB("slide-798ca5e70b9b", "fib1", 1);
  if (!prevFIB.data.hasData || missingRTS) {
    submitText1.updateData({ text: prevFIB.data.goBackString });
  }
}
missingNum();

utils.RTS.on("datachange", "slide-798ca5e70b9b", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  const myResponses = lastRegister.filter(({ info: { isSelf } }) => {
    return isSelf;
  });
  // compare all results with my first result
  myResponses.forEach(
    ({ data: { chosenLength1: myChosenLength, guessRaw, guessVal } }) => {
      if (!myChosenLength) {
        missingNum(true);
        return;
      }
      // get all responses with same chosen length as mine (including mine)
      const comparableAnswers = lastRegister.filter(
        ({ data: { chosenLength1, chosenLength2 } }) => {
          const classmateLength = chosenLength1 || chosenLength2;
          return classmateLength === myChosenLength;
        }
      );
      // total up numbers of responses
      const comparableTotals = comparableAnswers.reduce(
        (acc, { data: { guessRaw } }) => {
          acc[guessRaw] = acc[guessRaw] + 1 || 1;
          return acc;
        },
        {}
      );
      const comparableArr = Object.entries(comparableTotals).sort(
        ([key1, val1], [key2, val2]) => val2 - val1
      );
      // do GGB stuff
      const yMax = Math.max(...comparableArr.map(([key, val]) => val)) + 1 || 2;
      const xMax = 2 * comparableArr.length + 1;
      ggb1.instance.setValue("xMax", xMax);
      ggb1.instance.setValue("yMax", yMax);
      comparableArr.forEach(([guess, total], index) => {
        if (index > 9) {
          return;
        }
        const i = index + 1;
        const targetText = `lengthText${i}`;
        const targetNum = `num${i}`;
        ggb1.instance.setTextValue(targetText, guess);
        ggb1.instance.setValue(targetNum, total);
      });
      const unitText = guessVal === "1" ? "unit" : "units";
      submitText1.updateData({
        text: `Do you want to change your answer of $${guessRaw}$ ${unitText}? Explain.`,
      });
    }
  );
});

// library

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ data: { chosenLength1, chosenLength2 }, info: { device } }) => {
      // check which chosenLength is contained in the passed response
      let addendum = "";
      if (chosenLength1) {
        addendum = "length1";
      } else if (chosenLength2) {
        addendum = "length2";
      }
      const record = device + addendum;
      const deviceHasPreviousAnswer = devices.has(record); // Has device appeared before?
      devices.add(record); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}

function getPrevFIB(slideID, compName = "fib1", inputs = 0) {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defFib = {
    data: { values: [] },
  };
  const prelimFib = getFromSlide(slideID, compName, defFib) || defFib;
  const numInputs = !!prelimFib.data?.values?.length
    ? prelimFib.data.values.length
    : inputs;
  for (let i = 0; i < numInputs; i++) {
    defFib.data.values.push({ text: "", inputType: "text" });
  }
  // get previous data
  let prevFib = getFromSlide(slideID, compName, defFib) || defFib;
  // check previous data, fill in useful data
  prevFib.data.hasData = prevFib.data.values.some(
    ({ text, inputType }) => !!text
  );
  prevFib.data.isComplete = prevFib.data.values.every(
    ({ text, inputType }) => !!text
  );
  prevFib.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevFib.data.slideNum = slideNum;
  prevFib.data.flagText = prevFib.data.isComplete
    ? ""
    : prevFib.data.goBackString;
  // add some useful methods
  prevFib.getInput = function (position, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    let text = this.data?.values?.[position]?.text
      ? this.data.values[position].text
      : emptyVal;
    return { ...this.data.values[position], text };
  };
  return { ...prevFib };
}
