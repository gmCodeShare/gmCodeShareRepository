const { table1 } = components;

let id1 = 'slide-d391c3290a04';

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

let oldTable1 = getFromSlide(id1, 'table1', false) || false;

let oldCell01 = !oldTable1.data?.rows[0][1]?.value
  ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1.data.rows[0][1].value;

table1.updateCell(0, 1, { value: oldCell01 });

let oldCell11 = !oldTable1.data?.rows[1][1]?.value
  ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1.data.rows[1][1].value;

table1.updateCell(1, 1, { value: oldCell11 });

let oldCell12 = !oldTable1.data?.rows[1][2]?.value
  ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1.data.rows[1][2].value;

table1.updateCell(1, 2, { value: oldCell12 });

let oldCell02 = !oldTable1.data?.rows[0][2]?.value
  ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1.data.rows[0][2].value;

table1.updateCell(0, 2, { value: oldCell02 });

/*
{"compTotals":{"table":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - PA Multiple Ratio Relationships","teacherView":true,"layout":"one col"}
*/
