const { ggb1 } = components;

utils.RTS.on("datachange", "slide-181c49f67940", (register) => {
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const { x1, y1, x2, y2, x3, y3, x4, y4 } = data;
    ggb1.instance.evalCommand(`(${x1},${y1})`);
    ggb1.instance.evalCommand(`(${x2},${y2})`);
    ggb1.instance.evalCommand(`(${x3},${y3})`);
    ggb1.instance.evalCommand(`(${x4},${y4})`);
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
