const { ggb1, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

if (ggb1.instance.getValue("showHint")) {
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let visPoints = allPoints.filter((point) => point.includes("Vis"));
  ggb1.instance.registerObjectUpdateListener("Follow", () => {
    for (let i = 0, L = visPoints.length; i < L; i++) {
      if (ggb1.instance.getVisible(visPoints[i])) {
        ggb1.instance.setValue("showHint", false);
        ggb1.instance.unregisterObjectUpdateListener("Follow");
        break;
      }
    }
  });
}

const id1 = "slide-4e84c4be9093";
const id2 = "slide-2c776e051648";

const id1PrevInput1 = getPrevInput(id1, "cc_submit_57489fd729b5_input1");
const id2PrevInput1 = getPrevInput(id2, "cc_submit_e6a119967b77_input1");

table1.updateCell(1, 1, { value: id1PrevInput1.data.text });
table1.updateCell(2, 1, { value: id2PrevInput1.data.text });

if (id1PrevInput1.data.hasData) {
  ggb1.instance.setValue(
    "classVal",
    utils.math.evaluateLatex(id1PrevInput1.data.text).value
  );
  ggb1.instance.setValue(
    "schoolVal",
    utils.math.evaluateLatex(id2PrevInput1.data.text).value
  );
  table1.updateCell(1, 2, {
    value: ggb1.instance.getValue("finalClassVal"),
  });
  table1.updateCell(2, 2, {
    value: ggb1.instance.getValue("finalSchoolVal"),
  });
}

autorun(() => {
  let entries = [
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(5, 1).value,
  ];
  const stateInput = utils.math.evaluateLatex(
    table1.getCell(3, 1).value.replaceAll(",", "")
  ).value;
  ggb1.instance.setValue("stateVal", stateInput);

  const unitedInput = utils.math.evaluateLatex(
    table1.getCell(4, 1).value.replaceAll(",", "")
  ).value;
  ggb1.instance.setValue("unitedVal", unitedInput);

  const worldInput = utils.math.evaluateLatex(
    table1.getCell(5, 1).value.replaceAll(",", "")
  ).value;
  ggb1.instance.setValue("worldVal", worldInput);

  ggb1.instance.setVisible(
    "stateSeg",
    table1.getCell(3, 1).value != "" && table1.getCell(3, 2).value == ""
  );
  ggb1.instance.setVisible(
    "unitedSeg",
    table1.getCell(4, 1).value != "" && table1.getCell(4, 2).value == ""
  );
  ggb1.instance.setVisible(
    "worldSeg",
    table1.getCell(5, 1).value != "" && table1.getCell(5, 2).value == ""
  );

  buttonGroup1.updateSingleButton(
    {
      disabled:
        table1.getCell(3, 1).value == "" ||
        (table1.getCell(3, 2).value != "" &&
          table1.getCell(3, 1).value == ggb1.instance.getValue("stateVal")),
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled:
        table1.getCell(4, 1).value == "" ||
        (table1.getCell(4, 2).value != "" &&
          table1.getCell(4, 1).value == ggb1.instance.getValue("unitedVal")),
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled:
        table1.getCell(5, 1).value == "" ||
        (table1.getCell(5, 2).value != "" &&
          table1.getCell(5, 1).value == ggb1.instance.getValue("worldVal")),
    },
    3
  );
  table1.updateCell({ last: [...entries] });
});

buttonGroup1.on("click:1", () => {
  //
  buttonGroup1.updateSingleButton(
    {
      disabled:
        table1.getCell(3, 1).value == "" ||
        (table1.getCell(3, 2).value != "" &&
          table1.getCell(3, 1).value == ggb1.instance.getValue("stateVal")),
    },
    1
  );
  table1.updateCell(3, 2, {
    value: ggb1.instance.getValue("finalStateVal"),
  });
});

buttonGroup1.on("click:2", () => {
  //
  buttonGroup1.updateSingleButton(
    {
      disabled:
        table1.getCell(4, 1).value == "" ||
        (table1.getCell(4, 2).value != "" &&
          table1.getCell(4, 1).value == ggb1.instance.getValue("unitedVal")),
    },
    2
  );
  table1.updateCell(4, 2, {
    value: ggb1.instance.getValue("finalUnitedVal"),
  });
});

buttonGroup1.on("click:3", () => {
  //
  buttonGroup1.updateSingleButton(
    {
      disabled:
        table1.getCell(5, 1).value == "" ||
        (table1.getCell(5, 2).value != "" &&
          table1.getCell(5, 1).value == ggb1.instance.getValue("worldVal")),
    },
    3
  );
  table1.updateCell(5, 2, {
    value: ggb1.instance.getValue("finalWorldVal"),
  });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function getPrevInput(slideID, compName = "input1") {
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
  let defInput = {
    data: {
      text: "",
    },
  };
  // get previous data
  let prevInput = getFromSlide(slideID, compName, defInput) || defInput;
  // fill in other useful data
  prevInput.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevInput.data.hasData = !!prevInput.data.text;
  prevInput.data.slideNum = slideNum;
  // set text values
  prevInput.data.text = prevInput.data.hasData
    ? prevInput.data.text
    : prevInput.data.goBackString;
  prevInput.data.flagText = prevInput.data.hasData
    ? ""
    : prevInput.data.goBackString;
  return { ...prevInput };
}

/*
{"compTotals":{"geogebra":1,"complextable":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Print Alt: Exponential Functions","teacherView":true,"layout":"two col"}
*/
