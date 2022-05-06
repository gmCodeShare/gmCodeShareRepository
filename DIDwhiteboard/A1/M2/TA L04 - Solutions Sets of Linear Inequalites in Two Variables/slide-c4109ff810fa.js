const {
  text1,
  text2,
  text3,
  text4,
  cc_submit_c997e1f0e31b_textbox1,
  cc_submit_c997e1f0e31b_input1: input1,
  cc_submit_c997e1f0e31b_button1,
  feedback1,
} = components;

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

const defTable = {
  data: {
    rows: [
      [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ],
      [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ],
      [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ],
    ],
  },
};

const id1 = 'slide-1a0fd993032e';
let content = getFromSlide(id1, 'table1', defTable) || defTable;
let num = content.data.rows[0][3].value;

let total = 0;
const result = utils.math.evaluateLatex(content.data.rows[0][0].value);
const result2 = utils.math.evaluateLatex(content.data.rows[0][2].value);
total = result.value - result2.value;

let content2 = getFromSlide(id1, 'table2', defTable) || defTable;
let num2 = content2.data.rows[0][3].value;
let num3 = content2.data.rows[1][3].value;

let total2 = 0;
const result3 = utils.math.evaluateLatex(content2.data.rows[0][0].value);
const result4 = utils.math.evaluateLatex(content2.data.rows[0][2].value);
total2 = result3.value - result4.value;

let total3 = 0;
const result5 = utils.math.evaluateLatex(content2.data.rows[1][0].value);
const result6 = utils.math.evaluateLatex(content2.data.rows[1][2].value);
total3 = result5.value - result6.value;

if (!num || content.data.rows[0][3].value == '') {
  num = `\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  text2.updateData({ text: `$${num}$` });
}

if (total < 6 && content.data.rows[0][3].value != '') {
  num = content.data.rows[0][3].value;
  text2.updateData({ text: `$${num}$` });
}

if (total > 6) {
  text2.updateData({ text: '' });
}

if (!num2 || content2.data.rows[0][3].value == '') {
  num2 = `\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  text3.updateData({ text: `$${num2}$` });
}

if (total2 < 6 && content2.data.rows[0][3].value != '') {
  num2 = content2.data.rows[0][3].value;
  text3.updateData({ text: `$${num2}$` });
}

if (total2 > 6) {
  text3.updateData({ text: '' });
}

if (!num3 || content2.data.rows[1][3].value == '') {
  num3 = `\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
  text4.updateData({ text: `$${num3}$` });
}

if (total3 < 6 && content2.data.rows[1][3].value != '') {
  num3 = content2.data.rows[1][3].value;
  text4.updateData({ text: `$${num3}$` });
}

if (total3 > 6) {
  text4.updateData({ text: '' });
}

if (
  total > 6 &&
  content2.data.rows[0][3].value != '' &&
  content2.data.rows[1][3].value != ''
) {
  text2.updateData({
    text: '\\text\\color{707070}{You have not chosen a pair of numbers with a difference that is less than $6$ yet.}',
  });
}

/*
{"compTotals":{"textbox":5,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Solution Sets of Linear Inequalities in Two Variables","teacherView":false,"layout":"one col"}
*/
