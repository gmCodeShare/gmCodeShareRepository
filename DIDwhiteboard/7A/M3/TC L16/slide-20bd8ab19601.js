const { ggb1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let firstYesTemp;
let firstNoTemp;
let secondYesTemp;
let secondNoTemp;
let thirdYesTemp;
let thirdNoTemp;

ggb1.instance.registerUpdateListener(updatePoints);

function updatePoints(a) {
  switch (a) {
    case "firstYes":
      let firstYes = ggb1.instance.getValue("firstYes");
      ggb1.instance.setCoords(
        "Bar0Point",
        ggb1.instance.getXcoord(
          ggb1.instance.getListValue("barZeroDragPoints", firstYes + 1)
        ),
        ggb1.instance.getYcoord(
          ggb1.instance.getListValue("barZeroDragPoints", firstYes + 1)
        )
      );
      break;
    case "firstNo":
      ggb1.instance.setCoords(
        "Bar1Point",
        ggb1.instance.getXcoord(
          `barOneDragPoints(${ggb1.instance.getValue("firstYes")}+1)`
        ),
        ggb1.instance.getYcoord(
          `barOneDragPoints(${ggb1.instance.getValue("firstYes")}+1)`
        )
      );
      break;
    case "secondYes":
      ggb1.instance.setValue(
        "Bar3Point",
        `barThreeDragPoints(${ggb1.instance.getValue("secondYes")}+1)`
      );
      break;
    case "secondNo":
      ggb1.instance.setValue(
        "Bar4Point",
        `barFourDragPoints(${ggb1.instance.getValue("secondNo")}+1)`
      );
      break;
    case "thirdYes":
      ggb1.instance.setValue(
        "Bar6Point",
        `barSixDragPoints(${ggb1.instance.getValue("thirdYes")}+1)`
      );
      break;
    case "thirdNo":
      ggb1.instance.setValue(
        "Bar7Point",
        `barSevenDragPoints(${ggb1.instance.getValue("thirdNo")}+1)`
      );
      break;
  }
}

utils.RTS.on("datachange", "slide-7914aad7f754", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  // probably have an erase & replace method near here, otherwise GGB will keep duplicates of the data you pass
  firstYesTemp = 0;
  firstNoTemp = 0;
  secondYesTemp = 0;
  secondNoTemp = 0;
  thirdYesTemp = 0;
  thirdNoTemp = 0;

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { yesNoData } = data; // destructuring assignment, like for components

    firstYesTemp = firstYesTemp + yesNoData[0];
    firstNoTemp = firstNoTemp + yesNoData[1];
    secondYesTemp = secondYesTemp + yesNoData[2];
    secondNoTemp = secondNoTemp + yesNoData[3];
    thirdYesTemp = thirdYesTemp + yesNoData[4];
    thirdNoTemp = thirdNoTemp + yesNoData[5];
  });
  ggb1.instance.setValue("firstYes", firstYesTemp);
  ggb1.instance.setValue("firstNo", firstNoTemp);
  ggb1.instance.setValue("secondYes", secondYesTemp);
  ggb1.instance.setValue("secondNo", secondNoTemp);
  ggb1.instance.setValue("thirdYes", thirdYesTemp);
  ggb1.instance.setValue("thirdNo", thirdNoTemp);
});

// use this function as is
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
{"compTotals":{"geogebra":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":true,"layout":"one col"}
*/
