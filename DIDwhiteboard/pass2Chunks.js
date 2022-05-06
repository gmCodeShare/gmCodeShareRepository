ggb1.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

const id1 = "";
let num = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
  id1
)}\]}$`;

// (feed)+|(getFrom)+|(console)+|(columns)+|(yet)+
// (ggb)+|(setError)+

// fake data

//input
let defPrevInput1 = {
  data: { text: "" },
};

let prevInput1 = getFromSlide(id1, "input1", defPrevInput1) || defPrevInput1;

//select
let defPrevSelect1 = {
  data: { selected: [""] },
};

let prevSelect1 =
  getFromSlide(id1, "select1", defPrevSelect1) || defPrevSelect1;

//table
let defPrevTable1NumCol = 2; //your number here
let defPrevTable1NumRow = 2; //your number here
let defPrevTable1 = {
  data: { columns: [], rows: [] },
};

for (let i = 0; i < defPrevTable1NumCol; i++) {
  defPrevTable1.data.columns.push({ value: "" });
}

for (let i = 0; i < defPrevTable1NumRow; i++) {
  let newRow = [];
  for (let j = 0; j < defPrevTable1NumCol; j++) {
    newRow.push({ value: "" });
  }
  defPrevTable1.data.rows.push([...newRow]);
}

let prevTable1 = getFromSlide(id1, "table1", defPrevTable1) || defPrevTable1;

//GGB
let defPrevGGB1 = {
  innerData: { yourValuesHere: 0 },
};

let prevGGB1 = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes("innerData")
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  prevGGB1 = defPrevGGB1;
}
