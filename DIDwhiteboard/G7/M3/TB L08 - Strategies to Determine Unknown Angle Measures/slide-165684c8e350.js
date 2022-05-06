const {
  ggb1,
  Separator11,
  ggb2,
  feedback,
  text1,
  button1,
  text2,
  radio1,
  cc_sharewithclass_32849cc9988a_textbox1: text3,
  cc_sharewithclass_32849cc9988a_input1: input3,
  cc_sharewithclass_32849cc9988a_button1: button3,
  cc_sharewithclass_32849cc9988a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button3.updateData({ align: 'right' });
    button1.updateData({ align: 'right' });
    button3.updateData({ visible: false });
    text3.updateData({ visible: false });
    input3.updateData({ visible: false });
    radio1.updateData({ visible: false });
    text2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

const id3 = `slide-505066b65fc3`;
let num3 =
  getFromSlide(id3, `cc_submit_40b5d45d3a84_input1.data.text`, '') || '';

const id2 = `slide-f4f9af8651df`;
let num2 =
  getFromSlide(id2, `cc_sharewithclass_32849cc9988a_input1.data.text`, '') ||
  '';

const id1 = `slide-4335e9b50ee3`;
let num = getFromSlide(id1, `input2.data.text`, '') || '';

ggb2.instance.setTextValue('TextNumber', num);
ggb2.instance.setVisible('text7', true);

if (!num3) {
  num3 = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id3)}\]}`;
}

if (!num2) {
  num2 = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id2)}\]}`;
}

text1.updateData({
  text: `You wrote that this situation is represented by the equation  $${num2}$.  

In your book, solve the equation by using if–then moves.`,
});

text2.updateData({ text: `Does $x$ have the same value of  $${num3}$?` });

const id4 = `slide-4335e9b50ee3`;

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

let data = getFromSlide(id4, 'ggb1', false) || false; // don't forget to change slide id

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

let data2 = getFromSlide(id4, 'ggb2', false) || false; // don't forget to change slide id

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
if (ggb2.instance.getValue('number2') == 0) {
  ggb2.instance.setVisible('Number2', false);
}
button1.on('click', () => {
  radio1.updateData({ visible: true });
  text2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (radio1.data.selected) {
    button3.updateData({ visible: true });
    text3.updateData({ visible: true });
    input3.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":2,"separator":1,"textbox":3,"button":1,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
