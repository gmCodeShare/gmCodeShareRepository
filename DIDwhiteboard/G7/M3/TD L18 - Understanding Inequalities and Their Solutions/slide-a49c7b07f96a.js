const {
  ggb2,
  feedback1,
  cc_sharewithclass_f2d4a935e7c1_textbox1,
  cc_sharewithclass_f2d4a935e7c1_input1: shareInput1,
  cc_sharewithclass_f2d4a935e7c1_button1: shareButton1,
  cc_sharewithclass_f2d4a935e7c1_studentanswers1,
} = components;

ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.setVisible('text1', false);

// Retrieving information
utils.RTS.on('datachange', 'slide-a60c06cd5664_num1', (collection) => {
  if (!collection || !collection.length) {
    return;
  }
  newCollection = discardOldResponses(collection).reverse(); // Reverse sorting from discard function
  newCollection.forEach(({ data, info }) => {
    // console.log({ ...data }, { ...info }); // for reference
    const isSelf = info.isSelf;
    for (let i = 0, L = data.pumpNumbers.length; i < L; i++) {
      if (data.pumpNumbers[i] < 5) {
        let point = ggb2.instance.evalCommandGetLabels(
          `(${data.pumpNumbers[i]},0)`
        );
        ggb2.instance.setFixed(point, true, false);
        ggb2.instance.setPointSize(point, 5);
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

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
