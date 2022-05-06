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
    ],
  },
};

const id = 'slide-1a0fd993032e';
let content = getFromSlide(id, 'table1', defTable) || defTable;

let num, num2;
if (content.data?.rows?.length) {
  num = content.data.rows[0][0].value;
  num2 = content.data.rows[0][2].value;
}

let total = 0;
const result = utils.math.evaluateLatex(content.data.rows[0][0].value);
const result2 = utils.math.evaluateLatex(content.data.rows[0][2].value);
total = result.value - result2.value;

let content2 = getFromSlide(id, 'table2', defTable) || defTable;

let num3,
  num4,
  num5,
  num6,
  total2 = 0,
  total3 = 0;

if (content2.data?.rows?.length) {
  num3 = content2.data.rows[0][0].value;
  num4 = content2.data.rows[0][2].value;
  num5 = content2.data.rows[1][0].value;
  num6 = content2.data.rows[1][2].value;

  const result3 = utils.math.evaluateLatex(content2.data.rows[0][0].value);
  const result4 = utils.math.evaluateLatex(content2.data.rows[0][2].value);
  total2 = result3.value - result4.value;

  const result5 = utils.math.evaluateLatex(content2.data.rows[1][0].value);
  const result6 = utils.math.evaluateLatex(content2.data.rows[1][2].value);
  total3 = result5.value - result6.value;
}

if (!num || content.data.rows[0][0].value == '') {
  num = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id)}\]}$`;
  text2.updateData({ text: `$${num}$` });
}

if (total == 6) {
  num = content.data.rows[0][0].value;
  num2 = content.data.rows[0][2].value;
  if (num2 < 0) {
    text2.updateData({ text: `$${num}-(${num2})=6$` });
  } else {
    text2.updateData({ text: `$${num}-${num2}=6$` });
  }
}

if (total != 6 && content.data.rows[0][0].value != '') {
  text2.updateData({ text: '' });
}

if (!num2 || content2.data.rows[0][0].value == '') {
  num2 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
  text3.updateData({ text: `$${num2}$` });
}

if (total2 == 6) {
  num3 = content2.data.rows[0][0].value;
  num4 = content2.data.rows[0][2].value;
  if (num4 < 0) {
    text3.updateData({ text: `$${num3}-(${num4})=6$` });
  } else {
    text3.updateData({ text: `$${num3}-${num4}=6$` });
  }
}

if (total2 != 6 && content2.data.rows[0][0].value != '') {
  text3.updateData({ text: '' });
}

if (!num3 || content2.data.rows[1][0].value == '') {
  num3 = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
  text4.updateData({ text: `$${num3}$` });
}

if (total3 == 6) {
  num5 = content2.data.rows[1][0].value;
  num6 = content2.data.rows[1][2].value;
  if (num6 < 0) {
    text4.updateData({ text: `$${num5}-(${num6})=6$` });
  } else {
    text4.updateData({ text: `$${num5}-${num6}=6$` });
  }
}

if (total3 != 6 && content2.data.rows[1][0].value != '') {
  text4.updateData({ text: '' });
}

/*
{"compTotals":{"textbox":5,"submit":1},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"one col"}
*/
