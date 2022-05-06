const {
  text1,
  radio1,
  separator1,
  text2,
  radio2,
  feedback1,
  text3,
  radio3,
  separator2,
  text4,
  radio4,
} = components;

slide.on("firstload", () => {
  radio1.updateData({ ans1: 0 });
  radio2.updateData({ ans2: 0 });
  radio3.updateData({ ans3: 0 });
  radio4.updateData({ ans4: 0 });
});

autorun(() => {
  let ans1 = radio1.data.ans1;
  let ans2 = radio2.data.ans2;
  let ans3 = radio3.data.ans3;
  let ans4 = radio4.data.ans4;
  if (radio1.data.selected === "0") {
    ans1 = 1;
  }
  if (radio1.data.selected === "1") {
    ans1 = 2;
  }
  if (radio2.data.selected === "0") {
    ans2 = 1;
  }
  if (radio2.data.selected === "1") {
    ans2 = 2;
  }
  if (radio3.data.selected === "0") {
    ans3 = 1;
  }
  if (radio3.data.selected === "1") {
    ans3 = 2;
  }
  if (radio4.data.selected === "0") {
    ans4 = 1;
  }
  if (radio4.data.selected === "1") {
    ans4 = 2;
  }
  radio1.updateData({ ans1: ans1 });
  radio2.updateData({ ans2: ans2 });
  radio3.updateData({ ans3: ans3 });
  radio4.updateData({ ans4: ans4 });
});

/*
{"compTotals":{"textbox":5,"radiogroup":4,"separator":2},"stage":"Launch","lessonInfo":"9 M2 TD L22 - Summarizing Bivariate Categorical Data with Two-Way Tables","teacherView":false,"layout":"two col"}
*/
