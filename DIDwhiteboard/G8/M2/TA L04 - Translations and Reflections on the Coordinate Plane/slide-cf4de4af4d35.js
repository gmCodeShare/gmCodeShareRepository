const { ggb1, feedback1, text1 } = components;
console.log("readIndex is: " + ggb1.instance.getValue("readIndex"));

const id1 = "slide-c629aced8c39";
// const id2 = "slide-c629aced8c39";

slide.on("firstload", () => {
  ggb1.instance.setVisible("classmateColor", true);
  ggb1.instance.setVisible("yourColor", true);
  ggb1.instance.setVisible("C1", true);
  ggb1.instance.setVisible("C2", true);
  ggb1.instance.setVisible("studentImage", false);
  ggb1.instance.setVisible("StudentAIG", false);
  ggb1.instance.setVisible("StudentBIG", false);
  ggb1.instance.setVisible("StudentCIG", false);
  ggb1.instance.setVisible("StudentDIG", false);
  ggb1.instance.setLabelVisible("StudentAIG", false);
  ggb1.instance.setLabelVisible("StudentBIG", false);
  ggb1.instance.setLabelVisible("StudentCIG", false);
  ggb1.instance.setLabelVisible("StudentDIG", false);
  ggb1.instance.setLabelVisible("studentImage", false);
  ggb1.instance.setFixed("StudentAIG", false, false);
  ggb1.instance.setFixed("StudentBIG", false, false);
  ggb1.instance.setFixed("StudentCIG", false, false);
  ggb1.instance.setFixed("StudentDIG", false, false);
  ggb1.instance.setLayer("StudentAIG", 3);
  ggb1.instance.setLayer("StudentBIG", 3);
  ggb1.instance.setLayer("StudentCIG", 3);
  ggb1.instance.setLayer("StudentDIG", 3);
  ggb1.instance.setLayer("studentImage", 3);
});

ggb1.instance.setErrorDialogsActive(false);

//pulls previous data that was sent from prev slide
let defPrevGGB1 = {
  innerData: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0,
    imageCorrect: false,
    MyCentroid: (0, 0),
    //this readIndex is sent over as 0 so that if students move back a slide and change their figure, they can hear all new descriptions of other figures using the new centroid
    readIndex: 0,
  },
};

let prevData = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !prevData
  ? false
  : !Object.keys(prevData).includes("innerData")
  ? false
  : !Object.keys(prevData.innerData).length
  ? false
  : true;

if (!id1HasData) {
  prevData = defPrevGGB1;
}

// let data = getFromSlide(id1, "ggb1");

if (prevData.innerData) {
  ggb1.instance.evalCommand(
    `StudentAIG=(${prevData.innerData["x1"]},${prevData.innerData["y1"]})`
  );
  ggb1.instance.setVisible("StudentAIG", true);
  ggb1.instance.evalCommand(
    `StudentBIG=(${prevData.innerData["x2"]},${prevData.innerData["y2"]})`
  );
  ggb1.instance.setVisible("StudentBIG", true);
  ggb1.instance.evalCommand(
    `StudentCIG=(${prevData.innerData["x3"]},${prevData.innerData["y3"]})`
  );
  ggb1.instance.setVisible("StudentCIG", true);
  ggb1.instance.evalCommand(
    `StudentDIG=(${prevData.innerData["x4"]},${prevData.innerData["y4"]})`
  );
  //imageCorrect is not actually needed for this lesson because we did not use how many images were correct/incorrect as a description
  ggb1.instance.evalCommand(
    `imageCorrect = (${prevData.innerData["imageCorrect"]})`
  );
  ggb1.instance.evalCommand(
    `MyCentroidIG = (${prevData.innerData["MyCentroid"]})`
  );
  ggb1.instance.evalCommand(`readIndex = (${prevData.innerData["readIndex"]})`);
  ggb1.instance.evalCommand(
    `studentImageCentroid = (${prevData.innerData["MyCentroid"]})`
  );

  ggb1.instance.setVisible("StudentDIG", true);
  ggb1.instance.setVisible("studentImage", true);
  ggb1.instance.setColor("StudentAIG", 0, 0, 0);
  ggb1.instance.setColor("StudentBIG", 0, 0, 0);
  ggb1.instance.setColor("StudentCIG", 0, 0, 0);
  ggb1.instance.setColor("StudentDIG", 0, 0, 0);
  ggb1.instance.setColor("studentImage", 0, 0, 0);
  ggb1.instance.setLineThickness("studentImage", 3);
  ggb1.instance.setVisible("MyCentroidIG", false);
}

utils.RTS.on("datachange", "slide-c629aced8c39", (register) => {
  if (!register || !register.length) {
    return;
  }
  //this block removes all points that don't have IG attached to the name. Add IG to corner2 (where AAppletStatus lives) and any other points you need (e.g., the centroid of the students image from prev slide)
  let allPoints = ggb1.instance
    .getAllObjectNames("point")
    .filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

  //setting the value for the number count of imagesCorrect and imagesIncorrect to 0 prevent double counting or slide back & forth mishaps.
  //*Note this happens outside of the forEach loop below
  ggb1.instance.setValue("imagesCorrect", 0);
  ggb1.instance.setValue("imagesIncorrect", 0);
  ggb1.instance.evalCommand("SetValue(centroidsVectorList, {})");

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    //console.log(data);
    const { isSelf } = info;
    const { x1, y1, x2, y2, x3, y3, x4, y4, imageCorrect, MyCentroidIG } = data;
    //!isSelf is refering to students images that are being pulled forward that are not the current students
    if (!isSelf) {
      newPointA = ggb1.instance.evalCommandGetLabels("(" + x1 + "," + y1 + ")");
      console.log("newPointA = " + newPointA);
      newPointB = ggb1.instance.evalCommandGetLabels("(" + x2 + "," + y2 + ")");
      newPointC = ggb1.instance.evalCommandGetLabels("(" + x3 + "," + y3 + ")");
      newPointD = ggb1.instance.evalCommandGetLabels("(" + x4 + "," + y4 + ")");
      newPoly = ggb1.instance.evalCommandGetLabels(
        "Polygon({" +
          newPointA +
          "," +
          newPointB +
          "," +
          newPointC +
          "," +
          newPointD +
          "})"
      );
      console.log("newPoly = " + newPoly);
      newCentroid = ggb1.instance.evalCommandGetLabels(
        "Centroid(" + newPoly + ")"
      );
      console.log("newCentroid is: " + newCentroid);

      //create vector from MyCentroidIG to newCentroid in order to describe relative locations
      newVector = ggb1.instance.evalCommandGetLabels(
        "Vector(MyCentroidIG," + newCentroid + ")"
      );

      //finding X and Y values is not needed - just used for console logging
      newVectorX = ggb1.instance.getXcoord(newVector);
      newVectorY = ggb1.instance.getYcoord(newVector);
      console.log("newVector: " + newVector);
      console.log("newVectorX: " + newVectorX);
      console.log("newVectorY: " + newVectorY);

      //add newVector to centroidsVectorList - which lives in GGB
      //*Note: You cannot directly append a new vector an existing list - it creates a new list with the added vector, that is why SetValue must be used here
      ggb1.instance.evalCommand(
        "SetValue(centroidsVectorList, Append(centroidsVectorList," +
          newVector +
          "))"
      );

      // ggb1.instance.setValue('showS', true);
      // ggb1.instance.setColor('text3', 148, 148, 148);
      ggb1.instance.setFixed(newPoly, false, false);
      ggb1.instance.setLayer(newPoly, 0);
      ggb1.instance.setColor(newPoly, 148, 148, 148);
      ggb1.instance.setColor(newPointA, 148, 148, 148);
      ggb1.instance.setFixed(newPointA, false, false);
      ggb1.instance.setColor(newPointB, 148, 148, 148);
      ggb1.instance.setFixed(newPointB, false, false);
      ggb1.instance.setColor(newPointC, 148, 148, 148);
      ggb1.instance.setFixed(newPointC, false, false);
      ggb1.instance.setColor(newPointD, 148, 148, 148);
      ggb1.instance.setFixed(newPointD, false, false);
      ggb1.instance.setPointSize(newPointA, 4);
      ggb1.instance.setPointSize(newPointB, 4);
      ggb1.instance.setPointSize(newPointC, 4);
      ggb1.instance.setPointSize(newPointD, 4);
      ggb1.instance.setLayer(newPointA, 0);
      ggb1.instance.setLayer(newPointB, 0);
      ggb1.instance.setLayer(newPointC, 0);
      ggb1.instance.setLayer(newPointD, 0);
      ggb1.instance.setVisible(newCentroid, false);
      ggb1.instance.setFixed(newCentroid, false, false);
      ggb1.instance.setVisible(newVector, false);
      ggb1.instance.setFixed(newVector, false, false);
    }

    //this is where the running total takes place for imagesCorrect and imagesIncorrect
    //*Note this is outside of the !isSelf if statement so that it can also account for the isSelf data that the student pulls forward from the prev slide
    //*Note is is still part of the forEach so that it increments each time a new figure is pulled forward
    //*Note: not used for this lesson, but leaving here in case we want this type of description for a future lesson
    if (imageCorrect) {
      ggb1.instance.setValue(
        "imagesCorrect",
        ggb1.instance.getValue("imagesCorrect") + 1
      );
    } else {
      ggb1.instance.setValue(
        "imagesIncorrect",
        ggb1.instance.getValue("imagesIncorrect") + 1
      );
      console.log(ggb1.instance.getValue("imagesCorrect"));
      console.log(ggb1.instance.getValue("imagesIncorrect"));
    }

    // data = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id
    ggb1.instance.evalCommand(
      `StudentAIG=(${prevData.innerData["x1"]},${prevData.innerData["y1"]})`
    );
    ggb1.instance.setVisible("StudentAIG", true);
    ggb1.instance.evalCommand(
      `StudentBIG=(${prevData.innerData["x2"]},${prevData.innerData["y2"]})`
    );
    ggb1.instance.setVisible("StudentBIG", true);
    ggb1.instance.evalCommand(
      `StudentCIG=(${prevData.innerData["x3"]},${prevData.innerData["y3"]})`
    );
    ggb1.instance.setVisible("StudentCIG", true);
    ggb1.instance.evalCommand(
      `StudentDIG=(${prevData.innerData["x4"]},${prevData.innerData["y4"]})`
    );
    ggb1.instance.setVisible("StudentDIG", true);
    ggb1.instance.setVisible("studentImage", true);
    ggb1.instance.setColor("StudentAIG", 0, 0, 0);
    ggb1.instance.setColor("StudentBIG", 0, 0, 0);
    ggb1.instance.setColor("StudentCIG", 0, 0, 0);
    ggb1.instance.setColor("StudentDIG", 0, 0, 0);
    ggb1.instance.setColor("studentImage", 0, 0, 0);
    ggb1.instance.setVisible("text1", true);
    ggb1.instance.setVisible("yourImageWhiteBox", true);
  });
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
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
