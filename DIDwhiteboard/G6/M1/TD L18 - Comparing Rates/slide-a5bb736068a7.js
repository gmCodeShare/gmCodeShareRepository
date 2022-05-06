const {
  ggb1,
  feedback1,
  cc_sharewithclass_532195caf65d_textbox1,
  cc_sharewithclass_532195caf65d_input1,
  cc_sharewithclass_532195caf65d_button1,
  cc_sharewithclass_532195caf65d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-d1edeb748f96';

utils.RTS.on('datachange', id1, (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('data={}');
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    const { myVal } = data;
    if (data.myVal) {
      ggb1.instance.evalCommand(`SetValue(data,Append(data,${myVal}))`);
      ggb1.instance.setVisible('dotplot', true);
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
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
