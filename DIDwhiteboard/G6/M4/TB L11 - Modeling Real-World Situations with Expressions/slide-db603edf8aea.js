const {
  text1,
  cc_submit_c9a42c2a3eb2_textbox1: submitText1,
  cc_submit_c9a42c2a3eb2_input1: submitInput1,
  cc_submit_c9a42c2a3eb2_button1: submitButton1,
  feedback1,
} = components;

let id1 = 'slide-9186a9169531';

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

text1.updateData({ text: `You wrote the expression $${pulledText}$.` });

/*
{"compTotals":{"textbox":2,"submit":1},"stage":"Learn","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"one col"}
*/
