const { ggb1, ggb2, select1, table1, text1, button1 } = components;

if (!getData("initialized")) {
  // set initial states
  select1.selectOption("0");
  button1.updateData({ align: "right" });
  // save status
  saveData({ initialized: true });
}

select1.on("change", ({ selected }) => {
  ggb1.updateData({ visible: selected.includes("0") });
  ggb2.updateData({ visible: selected.includes("1") });
});

autorun(() => {
  // maintain expressions and fake submit button
  let entries = [
    table1.getCell(4, 1).value,
    table1.getCell(5, 1).value,
    table1.getCell(6, 1).value,
    table1.getCell(7, 1).value,
  ];
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue("time", 0);
  const corrSegs = ["s", "t", "u", "w"];
  const roundedVals = [];
  const evalEntries = entries.map((val, index) => {
    const evalVal = utils.math.evaluateLatex(val);
    const value = evalVal.error ? "" : `${round(evalVal.value, 2)}`;
    roundedVals.push(value);
    // add 4 to index to account for 3 given rows and header
    table1.updateCell(index + 4, 2, { value });
    // patch for values that need parentheses
    const returnVal = evalVal.value == val ? `(${val})` : val;
    return !!value && !evalVal.error ? returnVal : corrSegs[index];
  });
  const leftSide = `2 \\sqrt{89} + 14 \\sqrt{26} + 12 \\sqrt{13} + 2 ${evalEntries[0]} + 2 ${evalEntries[1]} + 4 ${evalEntries[2]} + 2 ${evalEntries[3]}`;
  const leftEval = utils.math.evaluateLatex(leftSide);
  const leftSideVis = `2(9.43) + 12(3.61) + 14(5.10) + 2(${roundedVals[0]}) + 2(${roundedVals[1]}) + 4(${roundedVals[2]}) + 2(${roundedVals[3]})`;
  // phantom for crude spacing patch
  const rightSide = leftEval.error
    ? "$\\phantom{1}$"
    : `$\\approx ${round(leftEval.value, 2)}$`;
  text1.updateData({
    text: `Total amount of string: \n\n $${leftSideVis}$\n\n${rightSide}`,
  });
  if (!arrayEquals(entries, getData("last"))) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    });
    saveData({ last: [...entries], leftEval });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  select1.selectOption("1");
  // const expectedAnswers = ["\\sqrt{5}", "\\sqrt{17}", "\\sqrt{10}", "5"];
  const leftEval = getData("leftEval");
  if (!leftEval.error) {
    ggb2.instance.stopAnimation();
    ggb2.instance.setValue("time", 0);
    ggb2.instance.setValue("inputLength", leftEval.value);
    ggb2.instance.setAnimating("time", true);
    ggb2.instance.startAnimation();
  }
});

utils.RTS.on("datachange", "slide-798ca5e70b9b", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  const classGuessesByLength = lastRegister.reduce(
    (acc, { data: { chosenLength1, chosenLength2, guessRaw } }) => {
      const lengthKey = chosenLength1 || chosenLength2;
      acc[lengthKey] = acc[lengthKey] || [];
      acc[lengthKey].push(guessRaw);
      return acc;
    },
    {}
  );
  // generate object with a property for each segment length
  // each property is a sorted array that contains arrays for each guess:
  // [[guess, numberOfInstances], [guess, numberOfInstances], ...]
  const classTotalsByGuess = {};
  for (const lengthKey in classGuessesByLength) {
    // the following if statement comes stock with for in loops
    if (Object.hasOwnProperty.call(classGuessesByLength, lengthKey)) {
      const guessTotals = classGuessesByLength[lengthKey].reduce(
        (acc, guessRaw) => {
          acc[guessRaw] = acc[guessRaw] + 1 || 1;
          return acc;
        },
        {}
      );
      classTotalsByGuess[lengthKey] = Object.entries(guessTotals).sort(
        ([key1, val1], [key2, val2]) => val2 - val1
      );
    }
  }
  const expectedLengths = ["2.24", "4.12", "3.16", "5"]; // [d, e, f, g]
  const corrLocations = ["TL", "TR", "BL", "BR"];
  expectedLengths.forEach((len, index) => {
    const guessArr = classTotalsByGuess[len];
    if (!guessArr) {
      return;
    }
    const loc = corrLocations[index];
    // record the top three guesses with each number of instances in GGB
    guessArr.forEach(([guess, instances], guessIndex) => {
      if (guessIndex > 2) {
        return;
      }
      const textTarget = `${loc}text${guessIndex + 1}`;
      const numTarget = `${loc}num${guessIndex + 1}`;
      ggb1.instance.setTextValue(textTarget, guess);
      ggb1.instance.setValue(numTarget, instances);
    });
  });
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

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
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

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
