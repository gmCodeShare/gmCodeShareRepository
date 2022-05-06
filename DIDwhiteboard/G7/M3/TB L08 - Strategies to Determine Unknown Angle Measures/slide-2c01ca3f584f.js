const {
  ggb1,
  Separator18,
  ggb2,
  text1,
  cc_sharewithclass_de967d4f028c_textbox1: text2,
  cc_sharewithclass_de967d4f028c_input1: input2,
  cc_sharewithclass_de967d4f028c_button1: button2,
  cc_sharewithclass_de967d4f028c_studentanswers1,
  feedback,
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
    ggb1.updateData({ init: true });
  }
}

const id2 = `slide-4d24fd7feef4`;

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
    WL0: [3, -7],
    CL5: [9, -7],
    CL4: [9, -7],
    CL3: [9, -7],
    CL2: [9, -7],
    CL1: [9, -7],
    TL5: [15.8, 0.95],
    TL4: [15.8, 0.95],
    TL3: [15.8, 0.95],
    TL2: [15.8, 0.95],
    TL1: [15.8, 0.95],
    CenterPoint: [3.5, 7.3],
    eq2: 'x = 3.5',
    path: 0,
    CStart: [10.8, 0.95],
  },
};

let data2 = getFromSlide(id2, 'ggb2', false) || false; // don't forget to change slide id

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

// let data2 = getFromSlide(`slide-4d24fd7feef4`, "ggb2");
let num = getFromSlide(`slide-4d24fd7feef4`, `input2.data.text`, '') || '';
ggb2.instance.setTextValue('TextNumber', num);
ggb2.instance.setVisible('text13', true);

ggb2.instance.setCoords(
  'CStart',
  data2.innerData['CStart'][0],
  data2.innerData['CStart'][1]
);
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
  'WL0',
  data2.innerData['WL0'][0],
  data2.innerData['WL0'][1]
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
ggb2.instance.setCoords(
  'TL5',
  data2.innerData['TL5'][0],
  data2.innerData['TL5'][1]
);
ggb2.instance.setCoords(
  'TL4',
  data2.innerData['TL4'][0],
  data2.innerData['TL4'][1]
);
ggb2.instance.setCoords(
  'TL3',
  data2.innerData['TL3'][0],
  data2.innerData['TL3'][1]
);
ggb2.instance.setCoords(
  'TL2',
  data2.innerData['TL2'][0],
  data2.innerData['TL2'][1]
);
ggb2.instance.setCoords(
  'TL1',
  data2.innerData['TL1'][0],
  data2.innerData['TL1'][1]
);
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
ggb2.instance.evalCommand(`number=(${data2.innerData['number']})`);
ggb2.instance.evalCommand(`CenterPoint=(${data2.innerData['CenterPoint']})`);
ggb2.instance.setValue('showBracket', true);
ggb2.instance.setColor('dockingArea', 255, 255, 255);
ggb2.instance.setFilling('dockingArea', 1);
ggb2.instance.setLayer('dockingArea', 9);

ggb1.instance.registerObjectUpdateListener('Y', move);

function move() {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
}

/*
{"compTotals":{"geogebra":2,"separator":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
