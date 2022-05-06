const {
  ggb1,
  feedback1,
  cc_sharewithclass_3ab60a0e4d8f_textbox1: text1,
  cc_sharewithclass_3ab60a0e4d8f_input1,
  cc_sharewithclass_3ab60a0e4d8f_button1,
  cc_sharewithclass_3ab60a0e4d8f_studentanswers1,
} = components;

ggb1.instance.setValue('state', 3);

ggb1.instance.setErrorDialogsActive(false);

let totalPoints =
  getFromSlide('slide-2f5efef9be15', 'feedback1.data.tot', 0) || 0;

ggb1.instance.setValue('totalScore', totalPoints);
ggb1.instance.setValue('xVal', totalPoints);
text1.updateData({
  text: `Your score is $${totalPoints}$ points. Drag the dot for your score to the correct section of the box plot.\n\nDo you think you scored better than $0\%$, $25\%$, $50\%$, or $75\%$ of your classmates? Explain.`,
});

utils.RTS.on('datachange', 'slide-2f5efef9be15', (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('data={}');
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    if (data.total) {
      ggb1.instance.evalCommand(`SetValue(data,Append(data,${data.total}))`);
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
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"two col"}
*/
