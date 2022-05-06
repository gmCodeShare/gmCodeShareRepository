const {
  ggb1,
  feedback1,
  text1,
  table1,
  cc_sharewithclass_24d9b835e572_textbox1: shareText1,
  cc_sharewithclass_24d9b835e572_shareInput1: shareInput1,
  cc_sharewithclass_24d9b835e572_shareButton1: shareButton1,
  cc_sharewithclass_24d9b835e572_studentanswers1,
} = components;

tableVals();

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  ggb1.instance.setValue('state', 2);
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
    tableVals();
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

ggb1.instance.registerObjectUpdateListener('mean10SecData', tableVals);
ggb1.instance.registerObjectUpdateListener('mean20SecData', tableVals);
ggb1.instance.registerObjectUpdateListener('mad10SecData', tableVals);
ggb1.instance.registerObjectUpdateListener('mad20SecData', tableVals);

function tableVals() {
  let num = Math.round(ggb1.instance.getValue('mean10SecData') * 100) / 100;
  let num2 = Math.round(ggb1.instance.getValue('mean20SecData') * 100) / 100;
  let num3 = Math.round(ggb1.instance.getValue('mad10SecData') * 100) / 100;
  let num4 = Math.round(ggb1.instance.getValue('mad20SecData') * 100) / 100;

  table1.updateCell(0, 1, { value: `$${num}$` });
  table1.updateCell(1, 1, { value: `$${num2}$` });
  table1.updateCell(0, 2, { value: `$${num3}$` });
  table1.updateCell(1, 2, { value: `$${num4}$` });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Memory Games","teacherView":false,"layout":"two col"}
*/
