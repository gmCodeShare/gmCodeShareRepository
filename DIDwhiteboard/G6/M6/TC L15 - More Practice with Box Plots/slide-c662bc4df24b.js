const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ del: 0 });
  feedback1.updateData({ col: 0 });
  feedback1.updateData({ ind: 0 });
  feedback1.updateData({ minn: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let delaware = feedback1.data.del;
  let colorado = feedback1.data.col;
  let indiana = feedback1.data.ind;
  let minnesota = feedback1.data.minn;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 0) {
    delaware = 1;
  } else {
    delaware = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 2) {
    colorado = 1;
  } else {
    colorado = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 3) {
    indiana = 1;
  } else {
    indiana = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 1) {
    minnesota = 1;
  } else {
    minnesota = 0;
  }
  total = delaware + colorado + indiana + minnesota;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
