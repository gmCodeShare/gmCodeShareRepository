const {
  ggb1,
  Separator3,
  button1,
  feedback1,
  text1,
  cc_sharewithclass_485ef955abf4_textbox1: shareText1,
  cc_sharewithclass_485ef955abf4_input1: shareInput1,
  cc_sharewithclass_485ef955abf4_button1: shareButton1,
  cc_sharewithclass_485ef955abf4_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('show', buttonWork);

let id1 = 'slide-9186a9169531';

let numOfChairs = 20;
let numOfChairPoints = 2;
let numOfTables = 5;
let numOfTablePoints = 2;

let defPrevTable1NumCol = 2; //your number here
let defPrevTable1NumRow = 6; //your number here

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
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
  }
}

function buttonWork() {
  if (ggb1.instance.getValue('show')) {
    button1.updateData({ disabled: false });
  }
}

let prevGGB1 = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes('innerData')
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (id1HasData) {
  for (let i = 0; i < numOfChairs; i++) {
    for (let j = 0; j < numOfChairPoints; j++) {
      ggb1.instance.setCoords(
        `Chair${i + 1}Point${j + 1}`,
        prevGGB1.innerData[`Chair${i + 1}Point${j + 1}`]['0'],
        prevGGB1.innerData[`Chair${i + 1}Point${j + 1}`]['1']
      );
    }
  }
  for (let i = 0; i < numOfTables; i++) {
    for (let j = 0; j < numOfChairPoints; j++) {
      ggb1.instance.setCoords(
        `table${i + 1}Point${j + 1}`,
        prevGGB1.innerData[`table${i + 1}Point${j + 1}`]['0'],
        prevGGB1.innerData[`table${i + 1}Point${j + 1}`]['1']
      );
    }
  }
}

let defPrevTable1 = {
  data: { columns: [], rows: [] },
};

for (let i = 0; i < defPrevTable1NumCol; i++) {
  defPrevTable1.data.columns.push({ value: '' });
}

for (let i = 0; i < defPrevTable1NumRow; i++) {
  let newRow = [];
  for (let j = 0; j < defPrevTable1NumCol; j++) {
    newRow.push({ value: '' });
  }
  defPrevTable1.data.rows.push([...newRow]);
}

let prevTable1 = getFromSlide(id1, 'table1', defPrevTable1) || defPrevTable1; // don't forget to change slide id

let pulledText = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
  id1
)}\]}$`;

if (prevTable1.data.rows[5][1].value) {
  pulledText = prevTable1.data.rows[5][1].value;
}

text1.updateData({
  text: `You wrote the expression $${pulledText}$ to represent the total number of seats for $t$ tables.  

Use the drawing tool to show how the expression matches the picture.`,
});

button1.on('click', () => {
  ggb1.instance.setValue('returnChairs', true);
  ggb1.instance.deleteObject('stroke1');
  ggb1.instance.deleteObject('stroke2');
  ggb1.instance.deleteObject('stroke3');
  ggb1.instance.deleteObject('stroke4');
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('show', false);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"two col"}
*/
