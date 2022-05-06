const { text1, text2 } = components;

utils.RTS.on("datachange", "slide-9da1dbdb3ec5", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first
  // get my response, plop it in text1
  const myExp = lastRegister.filter(({ info }) => info.isSelf);
  if (myExp.length) {
    text1.updateData({ text: `Your expression: \n\n >${myExp[0].data.exp}` });
  }
  // get others responses, pull the expression from the data structure
  const otherExp = lastRegister
    .filter(({ info }) => !info.isSelf)
    .map(({ data }) => `>${data.exp}`);
  // create a string, plop it in text2
  const otherArr = ["Classmates' expressions:", ...otherExp];
  const otherText = otherArr.join("\n\n");
  text2.updateData({ text: otherText });
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
