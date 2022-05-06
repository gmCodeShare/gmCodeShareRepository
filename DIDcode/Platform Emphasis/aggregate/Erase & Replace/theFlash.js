// strategy for the FLASH:
/*
  1. Delete all old student responses from GGB
  2. Replace all student responses from RTS into GGB
  
  Considerations:
    > Depending on the complexity of the GGB objects you're dealing with, students may notice a "flash" as old objects are removed and new ones are made
    
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
  let allPoints = ggb1.instance.getAllObjectNames("point");
  // here's a way to filter only the points you really want to delete:
  // let's assume you've intentionally named your non-delete points with an "IG" somewhere in the name
  // let filteredPoints = allPoints.filter((point) => !point.includes("IG"));
  for (let i = 0, L = allPoints.length; i < L; i++) {
    ggb1.instance.deleteObject(allPoints[i]);
  }

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
