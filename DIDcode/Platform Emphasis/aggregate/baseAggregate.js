// this example had students input ordered pairs in a table and have them graphed in GGB

const { table1, button1, ggb1 } = components;

// send data section; remember to change slide IDs!
/* note: this example is somewhat minimal;
   remember to validate student input with math.utils (or something else) before sending to RTS! */
button1.on("click", () => {
  utils.RTS.sendData("slide-numbersNumbers", {
    thePoints: [ // sending multiple points as an array of arrays (aka 2D matrix) tends to be nice and usable
      [table1.getCell(0, 0).value, table1.getCell(0, 1).value],
      [table1.getCell(1, 0).value, table1.getCell(1, 1).value],
    ],
  });
});

// receive data section:
utils.RTS.on("datachange", "slide-numbersNumbers", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  // probably have an erase & replace method near here, otherwise GGB will keep duplicates of the data you pass

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { thePoints } = data; // destructuring assignment, like for components
    // allows us to refer to the passed data directly - thePoints instead of data.thePoints
    
    // your code here!
    // in my example, a for loop was useful here
    /*
    for (let i = 0, L = data.thePoints.length; i < L; i++) {
      let newPoint = ggb1.instance.evalCommandGetLabels(
        `(${thePoints[i][0]},${thePoints[i][1]})`
      );
      ggb1.instance.setFixed(newPoint, false, false);
    }
    */
  });
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
  
