// strategy for the FLETCH:
/*
  1. Capture names of GGB objects to be deleted
  2. Create new GGB objects from RTS student responses
  3. Delete old GGB objects
  
  Considerations:
    > The goal here is to avoid a visible "flash"
    > If any of your new GGB objects have the same name as an old GGB object, they will get deleted. Name objects with care!
    
  Example: https://bit.ly/3aqDmLo
*/
// some commented general code included here for context


/*
utils.RTS.on("datachange", "slide-853a90c54b71", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register).reverse();
*/
  // Step 1; you may have to filter the things you want to delete
  let oldPoints = ggb1.instance.getAllObjectNames("point");
  // here's a way to filter only the points you really want to delete:
  // let's assume you've intentionally named your non-delete points with an "IG" somewhere in the name
  // let filteredPoints = oldPoints.filter((point) => !point.includes("IG"));

  // Step 2
  lastRegister.forEach(({ data, info }) => {
    const { thePoints } = data;
    for (let i = 0, L = thePoints.length; i < L; i++) {
      let newPoint = ggb1.instance.evalCommandGetLabels(
        `(${thePoints[i][0]},${thePoints[i][1]})`
      );
      ggb1.instance.setFixed(newPoint, false, false);
    }
  });
  // Step 3
  for (let i = 0, L = oldPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(oldPoints[i]);
  }
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
