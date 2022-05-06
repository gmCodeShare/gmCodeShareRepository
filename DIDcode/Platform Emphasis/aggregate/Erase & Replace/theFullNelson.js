// strategy for the FULL NELSON:
/*
  1. Identify student inputs that have changed since last update
  2. Delete only old values that have updated versions
  3. Create new GGB objects with updated values
  
  Considerations:
    > The thought is to minimize GGB work by targeting only objects that have updated
    > Works better for things with values that are not easy to set, like polygons
    
  Example: https://bit.ly/3aqDmLo
*/
// some commented general code included here for context

/*
utils.RTS.on("datachange", "slide-fd7c758e6ea6", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
*/
  lastRegister.forEach(({ data, info }) => {
    // remember, this forEach cycles through each student's input
    // think about this code targeting a CURRENT student, one at a time
    const { thePoints } = data;
    const { device, timestamp } = info;
    let keepErGoin = true; // boolean for later use
    // Step 1; this example uses GGB object captions to keep track of which objects belong to which students
    // the caption structure is shown later in the code; we're just using it to filter here
    /* the following code says "Get all the points and stick them in an array.
       But let's keep in the array only the points that came from the CURRENT student" */
    let matchingPoints = ggb1.instance
      .getAllObjectNames("point")
      .filter((point) => {
        let oldCaption = ggb1.instance.getCaption(point);
        // device IDs are stored first in the caption, 
        // so a substring from 0 to the length of the device ID should tell us whether the object matches the CURRENT device ID
        return oldCaption.substring(0, device.length) == device;
      });
    if (thePoints.length && matchingPoints.length) {
      let samplePoint = matchingPoints[0];
      let parts = ggb1.instance.getCaption(samplePoint).split(",");
      if (parts[1] == timestamp) {
        keepErGoin = false; // check if one of the plotted points had the same timestamp as the CURRENT one;
        // if it does, don't bother updating points from this student!
      }
    }

    // Step 2
    if (keepErGoin) {
      for (let i = 0, L = thePoints.length; i < L; i++) {
        if (matchingPoints[i]) {
          // if a given point has already been created by the CURRENT student, delete it before creating a new one
          ggb1.instance.deleteObject(matchingPoints[i]);
        }
        // Step 3
        let newPoint = ggb1.instance.evalCommandGetLabels(
          `(${thePoints[i][0]},${thePoints[i][1]})`
        );
        ggb1.instance.setCaption(newPoint, `${device},${timestamp}`); // put some info in the new point's caption
        ggb1.instance.setFixed(newPoint, false, false);
      }
    }
  });
});

/*
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
*/
