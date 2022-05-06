const { text4, feedback1, text1, radio1 } = components;

text4.updateData({ align: 'center' });

let ans6Points = getFromSlide('slide-cf9b01832f76', 'radio2.data.ans2', 0) || 0;
let ans7Points = getFromSlide('slide-cf9b01832f76', 'radio3.data.ans3', 0) || 0;
let ans8Points = getFromSlide('slide-cf9b01832f76', 'radio4.data.ans4', 0) || 0;
let ans9Points = getFromSlide('slide-813f1d1e3537', 'radio1.data.ans1', 0) || 0;
let ans10Points =
  getFromSlide('slide-813f1d1e3537', 'radio2.data.ans2', 0) || 0;
let ans11Points =
  getFromSlide('slide-813f1d1e3537', 'radio3.data.ans3', 0) || 0;
let ans12Points =
  getFromSlide('slide-813f1d1e3537', 'radio4.data.ans4', 0) || 0;
let ans13Points =
  getFromSlide('slide-7b259e6cd80c', 'radio1.data.ans1', 0) || 0;
let ans14Points =
  getFromSlide('slide-7b259e6cd80c', 'radio2.data.ans2', 0) || 0;
let ans15Points =
  getFromSlide('slide-7b259e6cd80c', 'radio3.data.ans3', 0) || 0;
let ans16Points =
  getFromSlide('slide-7b259e6cd80c', 'radio4.data.ans4', 0) || 0;
let ans17Points =
  getFromSlide('slide-228ea8e8d770', 'radio1.data.ans1', 0) || 0;
let ans18Points =
  getFromSlide('slide-228ea8e8d770', 'radio2.data.ans2', 0) || 0;
let ans19Points =
  getFromSlide('slide-228ea8e8d770', 'radio3.data.ans3', 0) || 0;
let ans20Points =
  getFromSlide('slide-228ea8e8d770', 'radio4.data.ans4', 0) || 0;
let tot2 = ans6Points + ans7Points + ans8Points + ans9Points + ans10Points;
let tot3 = ans11Points + ans12Points + ans13Points + ans14Points + ans15Points;
let tot4 = ans16Points + ans17Points + ans18Points + ans19Points + ans20Points;
let planned;
let spontaneous;
let handsOn;
let theoretical;
let objective;
let subjective;
let mover = 0;
let connector = 0;
let thinker = 0;
let planner = 0;
let choiceVal;

if (tot2 < 8 && tot2 > 0) {
  planned = 1;
  spontaneous = 0;
}
if (tot2 > 7) {
  planned = 0;
  spontaneous = 1;
}
if (tot3 < 8 && tot3 > 0) {
  handsOn = 1;
  theoretical = 0;
}
if (tot3 > 7) {
  handsOn = 0;
  theoretical = 1;
}
if (tot4 < 8 && tot4 > 0) {
  objective = 1;
  subjective = 0;
}
if (tot4 > 7) {
  objective = 0;
  subjective = 1;
}

if (handsOn == 1 && spontaneous == 1) {
  text4.updateData({ text: 'Your personality type is:\n\n**Mover**' });
  mover = 1;
}
if (theoretical == 1 && subjective == 1) {
  text4.updateData({ text: 'Your personality type is:\n\n**Connector**' });
  connector = 1;
}
if (theoretical == 1 && objective == 1) {
  text4.updateData({ text: 'Your personality type is:\n\n**Thinker**' });
  thinker = 1;
}
if (handsOn == 1 && planned == 1) {
  text4.updateData({ text: 'Your personality type is:\n\n**Planner**' });
  planner = 1;
}
if (!tot2 || !tot3 || !tot4 || tot2 == 0 || tot3 == 0 || tot4 == 0) {
  let num = '\\text\\color{707070}{[please complete the survey]}';
  text4.updateData({ text: `Your personality type is:\n\n$${num}$` });
}

autorun(() => {
  if (radio1.data.selected == 0) {
    choiceVal = 1;
  }
  if (radio1.data.selected == 1) {
    choiceVal = 2;
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-0238f6cbbc1b', {
      choiceVal,
      mover,
      connector,
      thinker,
      planner,
    });
  }
});

/*
{"compTotals":{"textbox":3,"radiogroup":1},"stage":"Launch","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
