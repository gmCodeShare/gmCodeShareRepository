const {
  ggb1,
  Separator10,
  ggb2,
  feedback,
  cc_sharewithclass_32849cc9988a_textbox1,
  cc_sharewithclass_32849cc9988a_input1,
  cc_sharewithclass_32849cc9988a_button1,
  cc_sharewithclass_32849cc9988a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
cc_sharewithclass_32849cc9988a_button1.updateData({ align: 'right' });

const id1 = `slide-4335e9b50ee3`;

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

// let data = getFromSlide(`slide-4335e9b50ee3`, "ggb1");
// let data2 = getFromSlide(`slide-4335e9b50ee3`, "ggb2");
let num = getFromSlide(`slide-4335e9b50ee3`, `input2.data.text`, '') || '';

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

/*
{"compTotals":{"geogebra":2,"separator":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
