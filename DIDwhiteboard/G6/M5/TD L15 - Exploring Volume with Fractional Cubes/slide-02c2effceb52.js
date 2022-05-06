const {
  ggb1,
  feedback1,
  cc_sharewithclass_7864e248670c_textbox1,
  cc_sharewithclass_7864e248670c_input1,
  cc_sharewithclass_7864e248670c_button1,
  cc_sharewithclass_7864e248670c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

cc_sharewithclass_7864e248670c_button1.updateData({ align: 'right' });

const defGGB = {
  innerData: false,
};

let data = getFromSlide(`slide-9fd03c3de428`, 'ggb1', defGGB) || defGGB;

if (data.innerData) {
  ggb1.instance.evalCommand(`height=(${data.innerData['height']})`);
  ggb1.instance.evalCommand(`leng=(${data.innerData['leng']})`);
  ggb1.instance.evalCommand(`width=(${data.innerData['width']})`);
  ggb1.instance.evalCommand(`scale=(${data.innerData['scale']})`);
  ggb1.instance.evalCommand(`time=(${data.innerData['time']})`);
  ggb1.instance.setCoords('B', data.innerData['B'][0], data.innerData['B'][1]);
  ggb1.instance.setCoords('D', data.innerData['D'][0], data.innerData['D'][1]);

  ggb1.instance.setValue('time', ggb1.instance.getValue('height'));
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
