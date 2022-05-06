const {
  ggb1,
  Separator4,
  ggb2,
  feedback,
  text1,
  input1,
  text4,
  button1,
  cc_sharewithclass_88d919e8aa42_textbox1: text2,
  cc_sharewithclass_88d919e8aa42_input1: input2,
  cc_sharewithclass_88d919e8aa42_button1: button2,
  cc_sharewithclass_88d919e8aa42_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    text4.updateData({ align: 'right' });
    ggb1.instance.setFixed('D', true, false);
    ggb1.updateData({ init: true });
  }
}

const id1 = `slide-b9588ab4a28f`;

let defPrevGGB1 = {
  innerData: {
    D: [4.5, 4.5],
    locked: 1,
    number: 0,
    number2: 0,
    WL5: [3, -7],
    WL4: [3, -7],
    WL3: [3, -7],
    WL2: [3, -7],
    WL1: [3, -7],
    CL5: [9, -7],
    CL4: [9, -7],
    CL3: [9, -7],
    CL2: [9, -7],
    CL1: [9, -7],
    CenterPoint: [3.5, 7.3],
    eq2: 'x = 3.5',
  },
};

let data = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes('innerData')
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

let data2 = getFromSlide(id1, 'ggb2', false) || false; // don't forget to change slide id

let id1HasData2 = !data2
  ? false
  : !Object.keys(data2).includes('innerData')
  ? false
  : !Object.keys(data2.innerData).length
  ? false
  : true;

if (!id1HasData2) {
  data2 = defPrevGGB1;
}

// let data = getFromSlide(`slide-b9588ab4a28f`, "ggb1");
// let data2 = getFromSlide(`slide-b9588ab4a28f`, "ggb2");
let num = getFromSlide(`slide-b9588ab4a28f`, `input2.data.text`, '') || '';

ggb2.instance.setTextValue('TextNumber', num);
ggb2.instance.setVisible('text7', true);

ggb1.instance.evalCommand(`D=(${data.innerData['D']})`);
ggb1.instance.evalCommand(`locked=(${data.innerData['locked']})`);
ggb2.instance.evalCommand(`locked=(${data2.innerData['locked']})`);
ggb2.instance.evalCommand(`number=(${data2.innerData['number']})`);
ggb2.instance.evalCommand(`number2=(${data2.innerData['number2']})`);
ggb2.instance.setCoords(
  'WL5',
  data2.innerData['WL5'][0],
  data2.innerData['WL5'][1]
);
ggb2.instance.setCoords(
  'WL4',
  data2.innerData['WL4'][0],
  data2.innerData['WL4'][1]
);
ggb2.instance.setCoords(
  'WL3',
  data2.innerData['WL3'][0],
  data2.innerData['WL3'][1]
);
ggb2.instance.setCoords(
  'WL2',
  data2.innerData['WL2'][0],
  data2.innerData['WL2'][1]
);
ggb2.instance.setCoords(
  'WL1',
  data2.innerData['WL1'][0],
  data2.innerData['WL1'][1]
);
ggb2.instance.setCoords(
  'CL5',
  data2.innerData['CL5'][0],
  data2.innerData['CL5'][1]
);
ggb2.instance.setCoords(
  'CL4',
  data2.innerData['CL4'][0],
  data2.innerData['CL4'][1]
);
ggb2.instance.setCoords(
  'CL3',
  data2.innerData['CL3'][0],
  data2.innerData['CL3'][1]
);
ggb2.instance.setCoords(
  'CL2',
  data2.innerData['CL2'][0],
  data2.innerData['CL2'][1]
);
ggb2.instance.setCoords(
  'CL1',
  data2.innerData['CL1'][0],
  data2.innerData['CL1'][1]
);
ggb2.instance.evalCommand(`CenterPoint=(${data2.innerData['CenterPoint']})`);
ggb2.instance.setFixed('C1', true, false);
ggb2.instance.setFixed('C2', true, false);
ggb2.instance.setFixed('C3', true, false);
ggb2.instance.setFixed('C4', true, false);
ggb2.instance.setFixed('C5', true, false);
ggb2.instance.setFixed('T1', true, false);
ggb2.instance.setFixed('T2', true, false);
ggb2.instance.setFixed('T3', true, false);
ggb2.instance.setFixed('T4', true, false);
ggb2.instance.setFixed('T5', true, false);
ggb2.instance.setFixed('W1', true, false);
ggb2.instance.setFixed('W2', true, false);
ggb2.instance.setFixed('W3', true, false);
ggb2.instance.setFixed('W4', true, false);
ggb2.instance.setFixed('W5', true, false);

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":2,"separator":1,"textbox":3,"input":1,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
