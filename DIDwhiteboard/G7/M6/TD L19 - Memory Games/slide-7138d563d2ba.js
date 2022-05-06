const {
  ggb1,
  feedback1,
  cc_sharewithclass_ce28ecd5cb6b_textbox1: text1,
  cc_sharewithclass_ce28ecd5cb6b_input1: input1,
  cc_sharewithclass_ce28ecd5cb6b_button1: button1,
  cc_sharewithclass_ce28ecd5cb6b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: 'right' });

if (!ggb1.data.init) {
  // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
  ggb1.instance.setValue('state', 2);
  // create/update a dummy variable to keep track of whether the screen has initialized
  ggb1.updateData({ init: true });
}

utils.RTS.on('datachange', 'slide-bbe966e158c4', (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('tenSecData={}');
  ggb1.instance.evalCommand('twentySecData={}');
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    if (data.my10Val) {
      ggb1.instance.evalCommand(
        `SetValue(tenSecData,Append(tenSecData,${data.my10Val}))`
      );
    }
    if (data.my20Val) {
      ggb1.instance.evalCommand(
        `SetValue(twentySecData,Append(twentySecData,${data.my20Val}))`
      );
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
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Memory Games","teacherView":false,"layout":"two col"}
*/
