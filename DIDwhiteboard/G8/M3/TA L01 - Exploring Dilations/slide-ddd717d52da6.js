const { textDisplay1, textDisplay2, cat1, feedback1 } = components;

slide.on('firstload', () => {
  cat1.assignItem('3', 'category_1');
  cat1.assignItem('5', 'category_1');
});

/*
{"compTotals":{"textbox":3,"categorization":1},"stage":"Learn","lessonInfo":"8 M3 TA L01 - Exploring Dilations","teacherView":true,"layout":"one col"}
*/
