const {
  ggb2,
  cc_sharewithclass_e088dee477b4_textbox1: text1,
  cc_sharewithclass_e088dee477b4_input1: input1,
  cc_sharewithclass_e088dee477b4_button1: button1,
} = components;

ggb2.instance.setErrorDialogsActive(false);

// Retrieving information
utils.RTS.on("datachange", "slide-5ac2dc875d26_num1", (collection) => {
  if (!collection || !collection.length) {
    return;
  }

  newCollection = discardOldResponses(collection).reverse(); // Reverse sorting from discard function
  newCollection.forEach(({ data, info }) => {
    // console.log({ ...data }, { ...info }); // for reference
    const isSelf = info.isSelf;
    for (let i = 0; i < data.pumpNumbers.length; i++) {
      if (data.pumpNumbers[i] < 5) {
        let point = ggb2.instance.evalCommandGetLabels(
          `(${data.pumpNumbers[i]},0)`
        );
        ggb2.instance.setFixed(point, true, false);
        if (isSelf) {
          ggb2.instance.setColor(point, 218, 41, 28);
        }
      }
    }
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
