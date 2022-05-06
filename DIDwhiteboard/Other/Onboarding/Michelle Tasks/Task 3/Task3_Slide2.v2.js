const { ggb1 } = components;

// receive data section:
utils.RTS.on("datachange", "slide-67c103ca5c7f", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();

  lastRegister.forEach(({ data, info }) => {
    const { x1, y1, x2, y2, x3, y3, x4, y4 } = data;
    const xVals = [x1, x2, x3, x4];
    const yVals = [y1, y2, y3, y4];
    for (let i = 1, l = 4; i <= l; i++) {
      ggb1.instance.evalCommand(`P${i}=(${xVals[i - 1]},${yVals[i - 1]})`);
      ggb1.instance.setFixed(`P${i}`, false, false);
    }

    // const p2 = ggb1.instance.evalCommandGetLabels(`(${x2},${y2})`);
    // const p3 = ggb1.instance.evalCommandGetLabels(`(${x3},${y3})`);
    // const p4 = ggb1.instance.evalCommandGetLabels(`(${x4},${y4})`);
    // ggb1.instance.setFixed(p1, false, false);
    // ggb1.instance.setFixed(p2, false, false);
    // ggb1.instance.setFixed(p3, false, false);
    // ggb1.instance.setFixed(p4, false, false);
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
