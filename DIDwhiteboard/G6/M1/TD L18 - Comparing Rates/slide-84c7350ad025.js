const {
  table1,
  feedback1,
  cc_sharewithclass_1ca294e13d12_textbox1,
  cc_sharewithclass_1ca294e13d12_input1,
  cc_sharewithclass_1ca294e13d12_button1,
  cc_sharewithclass_1ca294e13d12_studentanswers1,
} = components;

let numOfColumns = table1.config.originalSize.columns; //should be 4

let id1 = 'slide-71d5309cf0e6';

let nums = [];
for (let i = 0, L = numOfColumns; i < L; i++) {
  nums.push('');
}

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

let oldTable = getFromSlide(id1, 'table1', false) || false;

if (oldTable && oldTable.data && oldTable.data?.rows?.length) {
  for (let i = 0, L = numOfColumns; i < L; i++) {
    nums.splice(i, 1, oldTable.data.rows[i][3].value);
  }
}

for (let i = 0, L = nums.length; i < L; i++) {
  table1.updateCell(i, 3, {
    value: !nums[i]
      ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
      : nums[i],
  });
}

/*
{"compTotals":{"table":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
