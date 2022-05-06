//start with this for whatever component type you are using, then copy/paste the section for your specific component need

const id1 = 'slide-123456789'; //put in your slideID

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

//Now, establish defaults for whatever component you are getting data from

//cat1
//^^^Create your own and let us know how it goes! Write a blog post!

//ggb1 //NOTE: You MUST change 'yourValuesHere' to meet your specific needs
let defPrevGGB1 = {
  innerData: { yourValuesHere: 0 },
};

let prevGGB1 = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes('innerData')
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  prevGGB1 = defPrevGGB1;
}

//^^^now use prevGGB1 to your heart's content...

//input1
let defPrevInput1 = {
  data: { text: '' },
};

let prevInput1 = getFromSlide(id1, 'input1', defPrevInput1) || defPrevInput1; // don't forget to change slide id

//^^^now use prevInput1 to your heart's content...

//select1
let defPrevSelect1 = {
  data: { selected: [''] },
};

let prevSelect1 =
  getFromSlide(id1, 'select1', defPrevSelect1) || defPrevSelect1; // don't forget to change slide id

//^^^now use prevSelect1 to your heart's content...

//table1
let defPrevTable1NumCol = 2; //your number here
let defPrevTable1NumRow = 2; //your number here
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

//^^^now use prevTable1 to your heart's content...

//Use the code below for when you need to use 'no input yet on...'

let defPrevInput1 = {
  data: { text: '' },
};

let prevInput1 = getFromSlide(id1, 'input1', defPrevInput1) || defPrevInput1; // don't forget to change slide id

let pulledText = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
  id1
)}\]}$`;

if (prevInput1.data.text) {
  pulledText = prevInput1.data.text;
}

text1.updateData({ text: `You said ${pulledText}.` });

// if your previous response is not mathematical, use the block quote style (as per the Sway guide at bit.ly/sway-style)

text1.updateData({ text: `You said the following: \n\n >${pulledText}` });

//if it is a table
for (let i = 0, L1 = prevTable1.data.rows.length; i < L1; i++) {
  for (let j = 0, L2 = prevTable1.data.columns.length; j < L2; j++) {
    table1.updateCell(i, j, {
      value:
        prevTable1.data.rows[i][j].value == ''
          ? `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
              id1
            )}\]}$`
          : prevTable1.data.rows[i][j].value,
    });
  }
}
